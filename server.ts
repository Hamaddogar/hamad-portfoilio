import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Fix for ESM __dirname in CJS/ESM mixed builds if needed, otherwise use process.cwd()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry headers
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
  console.log("Gemini client successfully initialized from server-side credentials.");
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not set. Playground and Q&A will run in high-fidelity simulation mode.");
}

// ----------------------------------------------------
// PORTFOLIO TRAINING CORPUS FOR THE AI ASSISTANT
// ----------------------------------------------------
const HAMAD_KNOWLEDGE_BASE = {
  about: `
Muhammad Hamad is a premier AI Systems Architect and Professional Educator with over 6 years of industry experience. He specializes in building production-grade multi-agent orchestrations, advanced Retrieval-Augmented Generation (RAG) systems, and robust full-stack software architectures (FastAPI, Next.js, PostgreSQL). He is an industry practitioner who bridges the gap between raw machine learning research and enterprise software craft. He has mentored over 200 developers, helping them successfully transition into AI engineering roles.
  `,
  skills: `
- AI & Orchestration: LangGraph (cyclic state machines, supervisors), LangChain (chains, tools, vector mergers), LlamaIndex, Python, FastAPI (async routers), Prompt Engineering (structured output schemas, few-shot prompting).
- Full Stack Tech: Next.js, React, TypeScript, Node.js, NestJS (modular architectures), Express, PostgreSQL, Redis (caching, state buffers).
- Infrastructure & Vectors: Pinecone, ChromaDB, Docker, Google Cloud Platform (GCP / Cloud Run), Git, CI/CD pipelines.
  `,
  experience: `
1. Lead AI Architect & Senior Engineer (2022 - Present) @ International AI Consultancy & Startups:
   - Architect and deploy production-grade multi-agent autonomous workspaces using LangGraph, CrewAI, and custom FastAPI backends for international clients.
   - Design advanced RAG systems achieving over 92% retrieval precision by integrating hybrid search (BM25 sparse + dense vectors), semantic caching, and cross-encoder re-ranking.
   - Consult founders on model trade-offs, token-spend reduction, prompt caching, and cost containment.

2. Senior Full Stack Engineer & Educator (2020 - 2022) @ Technical Academy & Software Labs:
   - Built and scaled SaaS applications using Next.js, React, Node.js, and high-concurrency PostgreSQL relational schemas.
   - Mentored 200+ developers to transition into AI and Software Engineering roles.
   - Led teams implementing real-time systems with WebSockets, Redis pub-sub, and background job queues.

3. Full Stack Software Developer (2018 - 2020) @ Creative Tech & Startup Hubs:
   - Developed interactive web applications, engineered secure RESTful APIs with Express, and optimized Core Web Vitals by 35%.
  `,
  projects: `
- Cognitive Agent Workspace: Enterprise-grade multi-agent orchestration platform built with LangGraph to execute cyclic business workflows with state-aware recovery, Supervisor routing, and recursive agent evaluation. achieved 74% manual workflow reduction and 40% token cost optimization.
- Enterprise Hybrid RAG Platform: Retrieval-Augmented Generation system handling millions of documents using dense vector search and sparse lexical keyword search (BM25), merged via Reciprocal Rank Fusion (RRF) and optimized using BGE Reranker. achieved 92% retrieval accuracy.
- Intelligent SQL Analytics Engine: Natural language to secure SQL analytics engine with AST parsing (protecting against injection), few-shot prompt reflection, and auto-rendered dynamic Recharts charts. achieved 98.7% safety rate and 3x decision acceleration.
  `,
  courses: `
- Production AI Agents & LangGraph: A 6-week elite masterclass covering state machines, cyclic agent loops, Human-in-the-Loop approval workflows, observability, and cost-containment.
- Full-Stack Generative AI Engineering: An 8-week intermediate program covering FastAPI async routers, Next.js streaming endpoints (SSE), vector indexing, hybrid RAG, and prompt schemas.
- Python & Machine Learning Foundations: A 4-week introductory course covering NumPy, Pandas, Scikit-learn, embeddings, and API containerization.
  `,
  faqs: `
- Can I hire Muhammad Hamad? Yes, he is available for senior consulting roles, high-end AI product architecture, turnkey full-stack AI platform building, and private team training. You can contact him via the Consultation Terminal.
- What industries has he worked in? High-tech AI startups, retail dashboards, document analysis audits, legal tech, finance, and educational academies.
- Does he work with FastAPI? Yes, he is an expert with FastAPI, designing high-concurrency async routers, rate limiters, and secure API gateways.
- What experience does he have with LangGraph? He is a core expert in LangGraph, implementing state-driven cyclic agentic graphs, supervisor agents, and Human-in-the-Loop gates.
- Can he build React and Next.js apps? Yes, he builds extremely polished, responsive, and secure frontend delivery vehicles for his cognitive brains.
  `
};

// ----------------------------------------------------
// API ENDPOINTS
// ----------------------------------------------------

// 1. Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 2. Personal AI Assistant Q&A
app.post("/api/assistant", async (req, res) => {
  const { query, history } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  // Define fallback simulated response generator in case API key is missing
  const getSimulatedResponse = (q: string) => {
    const qLower = q.toLowerCase();
    let text = "";
    let citations: string[] = [];

    if (qLower.includes("langgraph") || qLower.includes("agent") || qLower.includes("supervisor")) {
      text = "Muhammad Hamad is a core expert in **LangGraph**, using it to design complex stateful multi-agent systems. Unlike simple linear chains, his architectures support cyclic agent routing, state-aware recovery, and recursive validation. In his **Cognitive Agent Workspace** project, he implemented a Supervisor node that coordinates specialized coder, researcher, and validator agents, reducing manual workflow time by 74% and cutting token expenses by 40%. He also teaches this in his 6-week masterclass: *Production AI Agents & LangGraph*.";
      citations = ["[Project: Cognitive Agent Workspace]", "[Course: Production AI Agents & LangGraph]"];
    } else if (qLower.includes("fastapi") || qLower.includes("python") || qLower.includes("api")) {
      text = "Muhammad is highly proficient with **FastAPI** and **Python**. He builds high-performance async API routers, rates-limiting proxies, and secure schema validators. He uses FastAPI as the backend for his projects (e.g., the *Cognitive Agent Workspace* and *Enterprise Hybrid RAG Platform*) to handle concurrent async agent executions and server-sent streaming responses. He has over 6 years of experience building secure, type-safe APIs.";
      citations = ["[Skills: Python & FastAPI]", "[Project: Cognitive Agent Workspace]", "[Experience: Lead AI Architect]"];
    } else if (qLower.includes("rag") || qLower.includes("vector") || qLower.includes("search") || qLower.includes("pinecone")) {
      text = "Muhammad has architected the **Enterprise Hybrid RAG Platform**, achieving 92% context retrieval accuracy. This platform resolves typical naive vector search issues (like missing tables or code serials) by merging dense vector embeddings (Pinecone/Chroma) with sparse lexical indexes (BM25) via Reciprocal Rank Fusion (RRF), then filtering the top candidates through a BGE Cross-Encoder re-ranking model. This guarantees precise provenance citations and eliminates hallucinations on proprietary data.";
      citations = ["[Project: Enterprise Hybrid RAG Platform]", "[Skills: Vector Databases]"];
    } else if (qLower.includes("course") || qLower.includes("teach") || qLower.includes("academy") || qLower.includes("mentor")) {
      text = "Muhammad is an Elite Professional Educator who has trained over 200 developers to pivot into AI roles. He runs three major masterclasses: \n1. **Production AI Agents & LangGraph** (6 Weeks, Advanced state machines)\n2. **Full-Stack Generative AI Engineering** (8 Weeks, Next.js, FastAPI, SSE, Vector indices)\n3. **Python & Machine Learning Foundations** (4 Weeks, NumPy, Pandas, Scikit-learn, Embeddings).\nHe teaches strictly what he builds in his daily consultancy work, bringing professional production-grade engineering patterns to his students.";
      citations = ["[Courses: Academy Curriculum]", "[Experience: Technical Academy Educator]"];
    } else if (qLower.includes("hire") || qLower.includes("contact") || qLower.includes("consult")) {
      text = "Yes, you can absolutely hire Muhammad! He is available for architectural advisory, high-impact AI prototype design, turnkey product development, and customized private corporate workshops. You can initiate contact, submit your specifications, and upload project documents directly using the **Client Portal** or the **Consultation Terminal** at the bottom of the platform. He typically responds to inquiries within 1 business day.";
      citations = ["[Consulting: Service Blueprint]", "[Portal: Client Discovery Workspace]"];
    } else if (qLower.includes("experience") || qLower.includes("work") || qLower.includes("industry")) {
      text = "Muhammad has over **6 years of experience** spanning Lead AI Architecture, senior full-stack development, and professional technical education. He has consulted for multiple international startups and enterprises, delivering over 15 high-impact AI systems. His core expertise is building secure, scalable cognitive software stacks that deliver model intelligence with low latency, rate-limiting, and cost budgeting.";
      citations = ["[Resume: Experience Timeline]", "[Skills: Technology Matrix]"];
    } else {
      text = "Muhammad Hamad is an AI Systems Architect & Professional Educator who builds production-grade cognitive systems. He specializes in stateful multi-agent workflows (LangGraph), hybrid retrieval-augmented generation (RAG) pipelines, and robust full-stack applications using FastAPI, NestJS, and Next.js. He also teaches professional academy courses and runs a Client Portal where stakeholders can track custom projects and submit requirements securely.";
      citations = ["[About: Professional Profile]"];
    }

    return { text, citations, simulated: true };
  };

  if (!ai) {
    // Return simulated response if Gemini API key is missing
    const sim = getSimulatedResponse(query);
    return res.json(sim);
  }

  try {
    const formattedHistory = (history || []).map((h: any) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.content }],
    }));

    const systemInstruction = `
You are the personal AI Portfolio Assistant of Muhammad Hamad (AI Systems Architect & Educator). Your mission is to answer recruiters, founders, startups, and students with deep, authoritative, and precise information.
You must speak in a highly professional, confident, yet humble tone—reflecting Muhammad's brand values: "Systemic Integrity, Pedagogical Clarity, and Product Pragmatism".
Do NOT make up facts. Answer queries based on the provided Knowledge Base below.

Muhammad's Knowledge Base:
===
About:
${HAMAD_KNOWLEDGE_BASE.about}

Skills:
${HAMAD_KNOWLEDGE_BASE.skills}

Experience:
${HAMAD_KNOWLEDGE_BASE.experience}

Projects:
${HAMAD_KNOWLEDGE_BASE.projects}

Courses:
${HAMAD_KNOWLEDGE_BASE.courses}

FAQs & Hiring Info:
${HAMAD_KNOWLEDGE_BASE.faqs}
===

CRITICAL GUIDELINES:
1. Always frame Muhammad as an elite systems architect, not a code-commodity.
2. In your response, include natural provenance citations using square brackets like:
   - [Project: Cognitive Agent Workspace]
   - [Course: Production AI Agents & LangGraph]
   - [Resume: Experience Timeline]
   - [Skills: Python & FastAPI]
   - [About: Professional Profile]
3. Keep answers concise, highly structured, and readable (use markdown, bullet points, and bold keys).
4. If a user asks something completely unrelated to Muhammad, his work, AI engineering, or hiring him, politely redirect them back to learning about his work.
5. If they ask about hiring him, guide them to use the Client Portal or Consultation Terminal.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        ...formattedHistory,
        { role: "user", parts: [{ text: query }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.3,
        topP: 0.9,
      },
    });

    const reply = response.text || "No response generated.";
    
    // Automatically extract citations or build them
    const citations: string[] = [];
    const keywords = [
      { key: "agent", citation: "[Project: Cognitive Agent Workspace]" },
      { key: "langgraph", citation: "[Course: Production AI Agents & LangGraph]" },
      { key: "rag", citation: "[Project: Enterprise Hybrid RAG Platform]" },
      { key: "fastapi", citation: "[Skills: Python & FastAPI]" },
      { key: "experience", citation: "[Resume: Experience Timeline]" },
      { key: "hire", citation: "[Consulting: Service Blueprint]" }
    ];
    keywords.forEach(kw => {
      if (reply.toLowerCase().includes(kw.key) && !reply.includes(kw.citation)) {
        citations.push(kw.citation);
      }
    });
    if (citations.length === 0) {
      citations.push("[About: Professional Profile]");
    }

    return res.json({ text: reply, citations });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    const sim = getSimulatedResponse(query);
    return res.json({ ...sim, error: error.message });
  }
});

// 3. AI Playground - Real-time Prompt Lab & Comparison
app.post("/api/playground/generate", async (req, res) => {
  const { prompt, systemInstruction, temperature, model } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const selectedModel = model || "gemini-3.5-flash";

  if (!ai) {
    // Simulation fallback if no key
    setTimeout(() => {
      const responseText = `[SIMULATION RESPONSE - TEMPERATURE: ${temperature || 0.7}]\n\nProcessed query: "${prompt}"\n\nUnder system instruction: "${systemInstruction || "None"}"\n\nPerformance metrics:\n- Latency: 320ms\n- Input tokens: 42\n- Output tokens: 124\n- Total cost: $0.000083 USD\n\nExecution complete inside local workspace container. This response shows high-fidelity simulation of model behavior with customized temperature parameter variations.`;
      res.json({ text: responseText, simulated: true, durationMs: 320, tokens: 166 });
    }, 600);
    return;
  }

  try {
    const startTime = Date.now();
    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction || undefined,
        temperature: temperature !== undefined ? parseFloat(temperature) : 0.7,
      },
    });

    const durationMs = Date.now() - startTime;
    const wordCount = (response.text || "").split(/\s+/).length;
    const approxTokens = Math.ceil(wordCount * 1.35) + 30; // Close approximation

    res.json({
      text: response.text,
      durationMs,
      tokens: approxTokens,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 4. AI Playground - Embedding Visualizer API
app.post("/api/playground/embeddings", async (req, res) => {
  const { words } = req.body;

  if (!words || !Array.isArray(words)) {
    return res.status(400).json({ error: "An array of words is required" });
  }

  // Pre-calculated vector projections mapping semantic relationships to 2D coordinates
  // representing clustering for a stunning embedding scatter plot
  const simulatedCoordinates: Record<string, { x: number; y: number; group: string }> = {
    // AI & ML
    "agent": { x: 0.85, y: 0.75, group: "Agentic Systems" },
    "langgraph": { x: 0.90, y: 0.82, group: "Agentic Systems" },
    "orchestrator": { x: 0.78, y: 0.70, group: "Agentic Systems" },
    "supervisor": { x: 0.82, y: 0.65, group: "Agentic Systems" },
    // Search & Data
    "rag": { x: -0.65, y: 0.55, group: "Information Retrieval" },
    "pinecone": { x: -0.72, y: 0.48, group: "Information Retrieval" },
    "embeddings": { x: -0.58, y: 0.62, group: "Information Retrieval" },
    "vector": { x: -0.60, y: 0.50, group: "Information Retrieval" },
    // Engineering
    "fastapi": { x: 0.15, y: -0.68, group: "Backend Engineering" },
    "python": { x: 0.05, y: -0.60, group: "Backend Engineering" },
    "nestjs": { x: 0.22, y: -0.74, group: "Backend Engineering" },
    "postgresql": { x: -0.10, y: -0.78, group: "Backend Engineering" },
    // Frontend
    "nextjs": { x: -0.45, y: -0.32, group: "Frontend Experience" },
    "react": { x: -0.50, y: -0.25, group: "Frontend Experience" },
    "typescript": { x: -0.35, y: -0.40, group: "Frontend Experience" },
  };

  const results = words.map(word => {
    const cleanWord = word.toLowerCase().trim();
    if (simulatedCoordinates[cleanWord]) {
      return { word, ...simulatedCoordinates[cleanWord] };
    } else {
      // Dynamic mapping for user input words (pseudo PCA projection)
      // Hash code based mapping to make it stable but scattered
      let hash = 0;
      for (let i = 0; i < cleanWord.length; i++) {
        hash = cleanWord.charCodeAt(i) + ((hash << 5) - hash);
      }
      const x = ((hash % 100) / 100) * 1.6 - 0.8; // range -0.8 to 0.8
      const y = (((hash >> 4) % 100) / 100) * 1.6 - 0.8;
      
      // Classify based on simple keyword triggers
      let group = "General Semantics";
      if (cleanWord.includes("ai") || cleanWord.includes("model") || cleanWord.includes("llm") || cleanWord.includes("gpt")) {
        group = "Agentic Systems";
      } else if (cleanWord.includes("db") || cleanWord.includes("search") || cleanWord.includes("index") || cleanWord.includes("data")) {
        group = "Information Retrieval";
      } else if (cleanWord.includes("api") || cleanWord.includes("server") || cleanWord.includes("code") || cleanWord.includes("backend")) {
        group = "Backend Engineering";
      } else if (cleanWord.includes("web") || cleanWord.includes("css") || cleanWord.includes("ui") || cleanWord.includes("js")) {
        group = "Frontend Experience";
      }
      return { word, x, y, group };
    }
  });

  return res.json({ success: true, coordinates: results });
});

// ----------------------------------------------------
// VITE MIDDLEWARE SETUP
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Development environment: Vite HMR / Middleware mounted successfully.");
  } else {
    // Serve production static assets
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Production environment: Static files mounted from /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AI Platform server successfully running on port http://localhost:${PORT}`);
  });
}

startServer();
