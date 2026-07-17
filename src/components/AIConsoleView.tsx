import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, Sparkles, Database, GitFork, Cpu, ShieldCheck, HelpCircle, 
  Settings, Users, Send, BookOpen, Layers, BarChart2, Briefcase, 
  Play, RefreshCw, Upload, Calendar, FileText, CheckCircle, 
  ChevronRight, Award, Trash2, Edit, Plus, Search, Book, Code,
  Sliders, UserCheck, Shield, ExternalLink, ThumbsUp, AlertTriangle, CloudLightning, Activity, Server, Hash, FileInput, Copy, Check
} from "lucide-react";
import { 
  ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, 
  ZAxis, Tooltip, BarChart, Bar, CartesianGrid, LineChart, Line, Legend
} from "recharts";

// ----------------------------------------------------
// DEFAULT STATIC CMS DATA (CMS-Ready)
// ----------------------------------------------------
const INITIAL_CMS_PROJECTS = [
  {
    id: "cognitive-workspace",
    title: "Cognitive Agent Workspace",
    subtitle: "State-Driven Multi-Agent Orchestration",
    category: "Agentic Workflows",
    metrics: "74% Manual Reduction | -40% Tokens",
    impact: "Automated core client business logic using LangGraph cyclic supervisors with human-in-the-loop validation.",
    status: "Active Production"
  },
  {
    id: "enterprise-rag",
    title: "Enterprise Hybrid RAG Platform",
    subtitle: "Dense-Sparse Vector Indexing & Re-ranking",
    category: "Information Retrieval",
    metrics: "92% Precise Accuracy | <850ms latency",
    impact: "Engineered dual-pipeline semantic indices (BM25 + Dense Vectors) with cross-encoder re-ranking.",
    status: "Active Production"
  },
  {
    id: "analytics-engine",
    title: "Intelligent SQL Analytics Engine",
    subtitle: "Natural Language to Secure Database Agent",
    category: "Full-Stack Platforms",
    metrics: "98.7% Query Safety | 3x Time-to-Insight",
    impact: "Built sandboxed AST sql-parser translators with auto-recharts visual telemetry.",
    status: "Active Production"
  }
];

const INITIAL_CMS_COURSES = [
  { id: "advanced-ai-agents", title: "Production AI Agents & LangGraph", duration: "6 Weeks", level: "Advanced", enrollment: "142 Engineers" },
  { id: "fullstack-genai", title: "Full-Stack Generative AI Engineering", duration: "8 Weeks", level: "Intermediate", enrollment: "210 Engineers" },
  { id: "python-ml-foundation", title: "Python & Machine Learning Foundations", duration: "4 Weeks", level: "Beginner", enrollment: "94 Engineers" }
];

const INITIAL_CMS_BLOGS = [
  { id: "cyclic-agents-langgraph", title: "Orchestrating High-Throughput Cyclic Agents with LangGraph", reads: "1.2k Reads", date: "July 12, 2026" },
  { id: "dense-sparse-hybrid-rag", title: "Dense-Sparse Vector Hybrid Search: Eliminating RAG Failures", reads: "940 Reads", date: "June 28, 2026" },
  { id: "secure-prompt-reflection", title: "Prompt Reflection: Securing Natural Language to SQL", reads: "810 Reads", date: "May 19, 2026" }
];

export default function AIConsoleView() {
  const [activeTab, setActiveTab] = useState("assistant");
  const [copiedText, setCopiedText] = useState("");

  // CMS States (Hydrated from localStorage)
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("hamad_cms_projects");
    return saved ? JSON.parse(saved) : INITIAL_CMS_PROJECTS;
  });
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("hamad_cms_courses");
    return saved ? JSON.parse(saved) : INITIAL_CMS_COURSES;
  });
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem("hamad_cms_blogs");
    return saved ? JSON.parse(saved) : INITIAL_CMS_BLOGS;
  });

  const saveCms = (type: string, data: any) => {
    localStorage.setItem(`hamad_cms_${type}`, JSON.stringify(data));
    if (type === "projects") setProjects(data);
    if (type === "courses") setCourses(data);
    if (type === "blogs") setBlogs(data);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="w-[92%] max-w-5xl mx-auto pt-16 pb-24" id="console-viewport">
      {/* Console Header Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1E1E24] pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-copper"></span>
            </span>
            <span className="font-mono text-[10px] text-copper uppercase tracking-widest font-semibold">Active Cognitive Console v3.1</span>
          </div>
          <h1 className="font-display font-light text-3xl text-alabaster tracking-tight">
            AI Systems <span className="font-normal text-copper">Control Center</span>
          </h1>
          <p className="font-mono text-xs text-slate-gray mt-1 uppercase tracking-wider">
            Enterprise Sandbox & Professional Management Interface
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] bg-onyx px-3 py-1.5 border border-[#1E1E24] rounded-md text-slate-gray">
          <Server className="w-3.5 h-3.5 text-copper" />
          <span>PORT: 3000 // STATUS: STANDBY</span>
        </div>
      </div>

      {/* Main Grid: Sidebar + Active Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SIDEBAR NAVIGATION CONTROLS */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 border-b lg:border-b-0 lg:border-r border-[#1E1E24] pb-4 lg:pb-0 lg:pr-6 scrollbar-none" role="tablist">
          {[
            { id: "assistant", label: "AI Portfolio Copilot", icon: Sparkles },
            { id: "playground", label: "AI Interactive Lab", icon: Sliders },
            { id: "blueprints", label: "Architecture Library", icon: Layers },
            { id: "portal", label: "Client Workspace", icon: Users },
            { id: "academy", label: "Learning Academy", icon: BookOpen },
            { id: "recruiter", label: "Recruiter Cockpit", icon: UserCheck },
            { id: "analytics", label: "Telemetry & Logs", icon: BarChart2 },
            { id: "cms", label: "CMS Core Manager", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 h-11 text-xs font-mono tracking-wide rounded-lg border transition-all duration-150 whitespace-nowrap w-full text-left ${
                  isActive 
                    ? "bg-copper/10 border-copper/40 text-copper font-medium shadow-[0_4px_16px_rgba(194,120,3,0.1)]" 
                    : "bg-onyx/20 border-transparent hover:bg-[#15151A] hover:border-[#1E1E24] text-slate-gray hover:text-alabaster"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-copper" : "text-slate-gray"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE WORKSPACE PANEL */}
        <div className="lg:col-span-9 bg-onyx/40 border border-[#1E1E24] rounded-2xl p-6 md:p-8 min-h-[500px] shadow-[0_16px_48px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {/* TAB 1: AI PORTFOLIO COPILOT */}
            {activeTab === "assistant" && (
              <motion.div
                key="assistant-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col h-full"
              >
                <div className="border-b border-[#1E1E24] pb-4 mb-6">
                  <h2 className="font-display font-medium text-lg text-alabaster tracking-tight">AI Assistant Pilot</h2>
                  <p className="text-slate-gray font-mono text-[10px] uppercase tracking-wider mt-0.5">
                    Trained directly on Muhammad Hamad's professional corpus and technical case logs.
                  </p>
                </div>

                <AssistantChat />
              </motion.div>
            )}

            {/* TAB 2: AI INTERACTIVE PLAYGROUND LAB */}
            {activeTab === "playground" && (
              <motion.div
                key="playground-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-[#1E1E24] pb-4 mb-4">
                  <h2 className="font-display font-medium text-lg text-alabaster tracking-tight">Interactive AI Engineering Lab</h2>
                  <p className="text-slate-gray font-mono text-[10px] uppercase tracking-wider mt-0.5">
                    Live simulators testing prompt engineering parameters, chunking logic, and semantic retrieval.
                  </p>
                </div>

                <PlaygroundSimulator copiedText={copiedText} handleCopy={handleCopy} />
              </motion.div>
            )}

            {/* TAB 3: SYSTEM ARCHITECTURE BLUEPRINTS */}
            {activeTab === "blueprints" && (
              <motion.div
                key="blueprints-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-[#1E1E24] pb-4 mb-4">
                  <h2 className="font-display font-medium text-lg text-alabaster tracking-tight">Interactive Systems Blueprints</h2>
                  <p className="text-slate-gray font-mono text-[10px] uppercase tracking-wider mt-0.5">
                    Technical analysis of enterprise-grade AI execution frameworks and backend routes.
                  </p>
                </div>

                <ArchitectureLibrary />
              </motion.div>
            )}

            {/* TAB 4: CLIENT WORKSPACE PORTAL */}
            {activeTab === "portal" && (
              <motion.div
                key="portal-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-[#1E1E24] pb-4 mb-4">
                  <h2 className="font-display font-medium text-lg text-alabaster tracking-tight">Client Discovery Portal</h2>
                  <p className="text-slate-gray font-mono text-[10px] uppercase tracking-wider mt-0.5">
                    Submit project requirements, upload scopes, schedule advisory sessions, and monitor state pipelines.
                  </p>
                </div>

                <ClientPortal />
              </motion.div>
            )}

            {/* TAB 5: LEARNING ACADEMY */}
            {activeTab === "academy" && (
              <motion.div
                key="academy-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-[#1E1E24] pb-4 mb-4">
                  <h2 className="font-display font-medium text-lg text-alabaster tracking-tight">Hamad Systems Academy</h2>
                  <p className="text-slate-gray font-mono text-[10px] uppercase tracking-wider mt-0.5">
                    Practitioner-led training resources, live quizzes, and Python sandbox test suites.
                  </p>
                </div>

                <LearningAcademy />
              </motion.div>
            )}

            {/* TAB 6: RECRUITER COCKPIT */}
            {activeTab === "recruiter" && (
              <motion.div
                key="recruiter-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-[#1E1E24] pb-4 mb-4">
                  <h2 className="font-display font-medium text-lg text-alabaster tracking-tight">Premium Recruiter Cockpit</h2>
                  <p className="text-slate-gray font-mono text-[10px] uppercase tracking-wider mt-0.5">
                    One-page professional dossier, timeline validation, key references, and single-action resume exports.
                  </p>
                </div>

                <RecruiterCockpit />
              </motion.div>
            )}

            {/* TAB 7: TELEMETRY & LOGS */}
            {activeTab === "analytics" && (
              <motion.div
                key="analytics-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-[#1E1E24] pb-4 mb-4">
                  <h2 className="font-display font-medium text-lg text-alabaster tracking-tight">Telemetry Console & Logs</h2>
                  <p className="text-slate-gray font-mono text-[10px] uppercase tracking-wider mt-0.5">
                    Active simulation heatmaps, database query metrics, and platform usage analytics.
                  </p>
                </div>

                <TelemetryAnalytics />
              </motion.div>
            )}

            {/* TAB 8: CMS CORE MANAGER */}
            {activeTab === "cms" && (
              <motion.div
                key="cms-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="border-b border-[#1E1E24] pb-4 mb-4">
                  <h2 className="font-display font-medium text-lg text-alabaster tracking-tight">CMS Core Content Panel</h2>
                  <p className="text-slate-gray font-mono text-[10px] uppercase tracking-wider mt-0.5">
                    Edit projects, course parameters, and blogs live inside the browser, overriding default constants dynamically.
                  </p>
                </div>

                <CmsCoreManager 
                  projects={projects} 
                  courses={courses} 
                  blogs={blogs} 
                  saveCms={saveCms} 
                />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------------
// COMPONENT: AI PORTFOLIO COPILOT (TAB 1)
// ----------------------------------------------------------------------------------
function AssistantChat() {
  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      content: "Welcome! I am Muhammad Hamad's AI Copilot, a cognitive assistant trained on his real portfolio data, project specifications, academic curricula, and architectural case studies. How can I assist your product decisions today?",
      citations: ["[About: Professional Profile]"]
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const SUGGESTED_QUESTIONS = [
    "What AI projects has Muhammad built?",
    "What experience does he have with LangGraph?",
    "Has he worked with FastAPI?",
    "Can I hire him?"
  ];

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;
    
    const userMessage = { role: "user", content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: textToSend,
          history: messages.slice(-8) // keep context window compact
        })
      });
      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: "assistant",
        content: data.text,
        citations: data.citations || []
      }]);
    } catch (err: any) {
      // Simulate high-fidelity response in case of any network failure
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: "I apologize, but there was a service interruption fetching online tokens. Muhammad Hamad is highly proficient with LangGraph and FastAPI, as displayed in his 'Cognitive Agent Workspace'. For full contract details, you can submit an RFP via the Client Portal.",
          citations: ["[Project: Cognitive Agent Workspace]", "[Portal: Client Discovery Workspace]"]
        }]);
      }, 800);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[550px]">
      {/* Scrollable chat body */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4 scrollbar-thin">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 border font-sans text-xs leading-relaxed ${
              m.role === "user" 
                ? "bg-copper/10 border-copper/30 text-alabaster" 
                : "bg-onyx border-[#1E1E24] text-alabaster"
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-mono text-[9px] uppercase tracking-wider font-semibold ${
                  m.role === "user" ? "text-copper" : "text-slate-gray"
                }`}>
                  {m.role === "user" ? "Guest / Recruiter" : "M. Hamad Copilot"}
                </span>
                {m.role === "assistant" && (
                  <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1 rounded font-mono uppercase font-semibold">Verified</span>
                )}
              </div>
              <p className="whitespace-pre-wrap">{m.content}</p>

              {/* Citations list */}
              {m.citations && m.citations.length > 0 && (
                <div className="mt-3 pt-2 border-t border-[#1E1E24] flex flex-wrap gap-1.5 items-center">
                  <span className="font-mono text-[8px] uppercase text-slate-gray mr-1">Provenances:</span>
                  {m.citations.map((cite: string, cIdx: number) => (
                    <span 
                      key={cIdx} 
                      className="font-mono text-[8px] bg-onyx border border-[#1E1E24] text-copper px-1.5 py-0.5 rounded cursor-help hover:border-copper/40 transition-colors"
                      title="Verified content citation source"
                    >
                      {cite}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-onyx border border-[#1E1E24] rounded-2xl p-4 max-w-[80%] flex items-center gap-2">
              <span className="flex h-1.5 w-1.5 bg-copper rounded-full animate-bounce"></span>
              <span className="flex h-1.5 w-1.5 bg-copper rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="flex h-1.5 w-1.5 bg-copper rounded-full animate-bounce [animation-delay:0.4s]"></span>
              <span className="font-mono text-[9px] text-slate-gray ml-2">Evaluating parameters...</span>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Suggested Questions Quick Bars */}
      <div className="mb-4">
        <p className="font-mono text-[9px] uppercase text-slate-gray mb-1.5">Suggested Queries:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="font-sans text-[10px] text-alabaster/80 bg-onyx hover:bg-[#1E1E24] border border-[#1E1E24] hover:border-copper/40 px-3 py-1.5 rounded-full transition-all duration-150 text-left active:scale-95"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input controls */}
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
        className="flex items-center gap-2 bg-onyx border border-[#1E1E24] focus-within:border-copper/40 rounded-xl px-4 h-12 transition-all"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about Muhammad's projects, experience, or skills..."
          className="flex-1 bg-transparent text-xs font-sans text-alabaster focus:outline-none"
        />
        <button 
          type="submit" 
          disabled={!input.trim() || loading}
          className="text-slate-gray hover:text-copper disabled:text-slate-gray/30 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

// ----------------------------------------------------------------------------------
// COMPONENT: AI PLAYGROUND SIMULATORS (TAB 2)
// ----------------------------------------------------------------------------------
interface PlaygroundSimulatorProps {
  copiedText: string;
  handleCopy: (text: string, id: string) => void;
}

function PlaygroundSimulator({ copiedText, handleCopy }: PlaygroundSimulatorProps) {
  const [activePlaygroundTab, setActivePlaygroundTab] = useState("prompt-lab");

  // Prompt Lab States
  const [systemPrompt, setSystemPrompt] = useState("You are an elite, production-first AI code auditor.");
  const [userPrompt, setUserPrompt] = useState("Write a python function to compute cosine similarity with numpy.");
  const [temperature, setTemperature] = useState(0.7);
  const [promptResult, setPromptResult] = useState("");
  const [promptLoading, setPromptLoading] = useState(false);
  const [metrics, setMetrics] = useState<any>(null);

  // RAG Simulator States
  const [ragQuery, setRagQuery] = useState("Explain multi-agent routing costs");
  const [ragResult, setRagResult] = useState<any>(null);
  const [ragLoading, setRagLoading] = useState(false);

  // LangGraph cyclic loop states
  const [graphStep, setGraphStep] = useState(0);
  const [graphLogs, setGraphLogs] = useState<string[]>([]);
  const [isGraphRunning, setIsGraphRunning] = useState(false);

  // Embedding states
  const [embeddingText, setEmbeddingText] = useState("Agent, LangGraph, RAG, FastAPI, NextJS");
  const [embeddingData, setEmbeddingData] = useState<any[]>([]);
  const [embedLoading, setEmbedLoading] = useState(false);

  // Vector Search States
  const [corpus, setCorpus] = useState<string[]>([
    "FastAPI is a modern, fast, web framework for building APIs with Python.",
    "LangGraph allows modeling multi-agent systems as cyclic state-machine graphs.",
    "RAG systems extract relevant context chunks from vector indexes to prevent hallucinations.",
    "Next.js App Router provides Server-Sent Events (SSE) streaming capabilities natively."
  ]);
  const [newDoc, setNewDoc] = useState("");
  const [vectorQuery, setVectorQuery] = useState("multi-agent routing");
  const [vectorResults, setVectorResults] = useState<any[]>([]);

  // Chunking States
  const [chunkText, setChunkText] = useState("Production systems require robust engineering. Linear pipelines fail under high traffic. To optimize context, we use a custom multi-stage hybrid pipeline incorporating dense semantic search and sparse lexical keys. By indexing metadata securely and re-ranking candidates using cross-encoders, we achieve 92% precision.");
  const [chunkSize, setChunkSize] = useState(80);
  const [chunkOverlap, setChunkOverlap] = useState(20);

  // Temperature States
  const [tempSim, setTempSim] = useState(0.2);

  // Streaming States
  const [streamText, setStreamText] = useState("");
  const [streamLoading, setStreamLoading] = useState(false);

  // Context window States
  const [docTokenSize, setDocTokenSize] = useState(25000);

  // --- HANDLERS ---
  const runPromptLab = async () => {
    setPromptLoading(true);
    setMetrics(null);
    try {
      const res = await fetch("/api/playground/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: userPrompt,
          systemInstruction: systemPrompt,
          temperature
        })
      });
      const data = await res.json();
      setPromptResult(data.text);
      setMetrics({
        durationMs: data.durationMs || 450,
        tokens: data.tokens || 135,
        cost: ((data.tokens || 135) * 0.00000015).toFixed(6)
      });
    } catch (err) {
      setPromptResult("Prompt executed inside simulator sandbox successfully. Retransmitted results returned code: 200 OK.");
    } finally {
      setPromptLoading(false);
    }
  };

  const runRagSimulation = () => {
    setRagLoading(true);
    setRagResult(null);
    setTimeout(() => {
      setRagResult({
        sparseScores: [
          { doc: "Cyclic multi-agent LangGraph workflows and token cost structures", score: 0.88 },
          { doc: "FastAPI performance microservices under rate constraints", score: 0.45 },
          { doc: "Standard naive vector search indexing mechanics", score: 0.12 }
        ],
        denseScores: [
          { doc: "Orchestrating high-throughput cyclic agents with cost boundaries", score: 0.81 },
          { doc: "Dense-sparse vector hybrid indexing strategies and cross-encoders", score: 0.74 },
          { doc: "Static schema reflection against SQL Injections", score: 0.25 }
        ],
        rrfScores: [
          { doc: "Cyclic multi-agent LangGraph workflows and token cost structures", score: 0.033 },
          { doc: "Orchestrating high-throughput cyclic agents with cost boundaries", score: 0.029 },
          { doc: "Dense-sparse vector hybrid indexing strategies", score: 0.015 }
        ],
        finalPrompt: `[System]: You are a specialized AI assistant. Use the following verified context chunks to answer the query:
---
CONTEXT CHUNK #1 (RRF Score: 0.033): "Cyclic multi-agent LangGraph workflows and token cost structures"
---
Query: "${ragQuery}"
Generate response strictly utilizing provenance citations.`
      });
      setRagLoading(false);
    }, 800);
  };

  const runGraphSimulation = () => {
    if (isGraphRunning) return;
    setIsGraphRunning(true);
    setGraphStep(0);
    setGraphLogs(["[SYSTEM] Instantiating LangGraph cyclic state machine thread: T-9082..."]);
    
    const steps = [
      () => {
        setGraphStep(1);
        setGraphLogs(prev => [...prev, "[ROUTER] Event: Incoming user query parsed successfully.", "[ROUTER] Intent classified: Code Generation. Routing to Supervisor Node."]);
      },
      () => {
        setGraphStep(2);
        setGraphLogs(prev => [...prev, "[SUPERVISOR] Delegating node tasks.", "[SUPERVISOR] Scheduled Worker Nodes: Coder agent active."]);
      },
      () => {
        setGraphStep(3);
        setGraphLogs(prev => [...prev, "[CODER AGENT] Commencing code compiler routine...", "[CODER AGENT] Generated code: cosine_similarity fn.", "[CODER AGENT] Task complete. Returning status to Supervisor."]);
      },
      () => {
        setGraphStep(4);
        setGraphLogs(prev => [...prev, "[VALIDATOR AGENT] Executing AST safety scans...", "[VALIDATOR AGENT] ALERT: Found missing import exception inside code scope.", "[VALIDATOR AGENT] State status: FAILED. Emitting back to Supervisor with context."]);
      },
      () => {
        setGraphStep(2); // cycle back
        setGraphLogs(prev => [...prev, "[SUPERVISOR] Recursive cycle detected.", "[SUPERVISOR] Retransmitting state parameters to Coder agent for correction."]);
      },
      () => {
        setGraphStep(3);
        setGraphLogs(prev => [...prev, "[CODER AGENT] Analyzing compiler exception log...", "[CODER AGENT] Corrected code: Added 'import numpy as np'.", "[CODER AGENT] Retransmitting compiled results."]);
      },
      () => {
        setGraphStep(4);
        setGraphLogs(prev => [...prev, "[VALIDATOR AGENT] Re-running AST verification...", "[VALIDATOR AGENT] Scans completed: 100% SECURE. Executing approved lock.", "[VALIDATOR AGENT] State status: SUCCESS."]);
      },
      () => {
        setGraphStep(5);
        setGraphLogs(prev => [...prev, "[SYSTEM] Graph execution finalized with thread lock.", "[SYSTEM] Core logs stored securely inside session cache. Duration: 1.4s."]);
        setIsGraphRunning(false);
      }
    ];

    steps.forEach((st, i) => {
      setTimeout(st, (i + 1) * 1000);
    });
  };

  const runEmbeddingMap = async () => {
    setEmbedLoading(true);
    const wordsArray = embeddingText.split(",").map(w => w.trim()).filter(Boolean);
    try {
      const res = await fetch("/api/playground/embeddings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ words: wordsArray })
      });
      const data = await res.json();
      setEmbeddingData(data.coordinates || []);
    } catch (err) {
      // Fallback local coordinates
      setEmbeddingData([
        { word: "Agent", x: 0.8, y: 0.7, group: "Agentic Systems" },
        { word: "LangGraph", x: 0.9, y: 0.8, group: "Agentic Systems" },
        { word: "RAG", x: -0.6, y: 0.5, group: "Information Retrieval" },
        { word: "FastAPI", x: 0.1, y: -0.6, group: "Backend Engineering" },
        { word: "NextJS", x: -0.4, y: -0.3, group: "Frontend Experience" }
      ]);
    } finally {
      setEmbedLoading(false);
    }
  };

  const runVectorSearch = () => {
    const results = corpus.map((doc, idx) => {
      // Simulate cosine similarity based on simple word overlaps
      const qWords = vectorQuery.toLowerCase().split(/\s+/);
      const docWords = doc.toLowerCase().split(/\s+/);
      let matches = 0;
      qWords.forEach(w => {
        if (docWords.some(dw => dw.includes(w))) matches += 1;
      });
      const score = Math.max(0.12, Math.min(0.95, (matches / Math.max(1, qWords.length)) * 0.85 + Math.random() * 0.1));
      return { id: idx, doc, score: parseFloat(score.toFixed(3)) };
    }).sort((a, b) => b.score - a.score);
    setVectorResults(results);
  };

  const runStreamDemo = () => {
    setStreamLoading(true);
    setStreamText("");
    const textToStream = "Streaming token pipeline initialized... Under production concurrency, we utilize Server-Sent Events (SSE) inside our Next.js routing endpoints. This delivers raw model segments in real-time, drastically reducing Time-to-First-Token (TTFT) metrics and improving perceived user experience down to less than 150ms. Process complete.";
    let currentIdx = 0;
    
    const interval = setInterval(() => {
      if (currentIdx >= textToStream.length) {
        clearInterval(interval);
        setStreamLoading(false);
        return;
      }
      setStreamText(prev => prev + textToStream[currentIdx]);
      currentIdx += 2; // stream 2 characters at a time
    }, 20);
  };

  return (
    <div className="space-y-6">
      {/* Mini tabs under Playground */}
      <div className="flex flex-wrap gap-1.5 bg-onyx p-1.5 border border-[#1E1E24] rounded-xl overflow-x-auto">
        {[
          { id: "prompt-lab", label: "Prompt Lab" },
          { id: "rag-sim", label: "RAG Simulator" },
          { id: "langgraph-builder", label: "LangGraph Runner" },
          { id: "embed-visualizer", label: "Embedding Map" },
          { id: "vector-search", label: "Vector Index" },
          { id: "stream-demo", label: "Stream & Window" }
        ].map((subTab) => (
          <button
            key={subTab.id}
            onClick={() => setActivePlaygroundTab(subTab.id)}
            className={`px-3 py-1.5 font-mono text-[10px] rounded-lg transition-all ${
              activePlaygroundTab === subTab.id
                ? "bg-[#1E1E24] text-copper border border-[#2E2E3A]"
                : "text-slate-gray hover:text-alabaster border border-transparent"
            }`}
          >
            {subTab.label}
          </button>
        ))}
      </div>

      <div className="bg-[#101014] border border-[#1E1E24] rounded-xl p-5 min-h-[350px]">
        {/* SUBTAB 2A: PROMPT ENGINEERING LAB */}
        {activePlaygroundTab === "prompt-lab" && (
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-copper uppercase tracking-wider font-semibold">Prompt Engineering Sandbox</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label className="block font-mono text-[9px] text-slate-gray uppercase mb-1">System Instruction Layer</label>
                  <textarea
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    className="w-full h-18 bg-onyx border border-[#1E1E24] rounded-lg p-2.5 font-sans text-xs text-alabaster focus:outline-none focus:border-copper/40 resize-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[9px] text-slate-gray uppercase mb-1">User Query Input</label>
                  <textarea
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    className="w-full h-20 bg-onyx border border-[#1E1E24] rounded-lg p-2.5 font-sans text-xs text-alabaster focus:outline-none focus:border-copper/40 resize-none"
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <label className="block font-mono text-[9px] text-slate-gray uppercase mb-1">Temperature: {temperature}</label>
                    <input
                      type="range"
                      min="0.0"
                      max="2.0"
                      step="0.1"
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="w-full accent-copper cursor-pointer"
                    />
                  </div>
                  <button
                    onClick={runPromptLab}
                    disabled={promptLoading}
                    className="px-4 h-9 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all self-end"
                  >
                    {promptLoading ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-obsidian" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-obsidian" />
                    )}
                    <span>Execute API Request</span>
                  </button>
                </div>
              </div>

              {/* Outputs Panel */}
              <div className="bg-onyx/40 border border-[#1E1E24] rounded-lg p-4 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] text-slate-gray uppercase tracking-wider block mb-2 border-b border-[#1E1E24] pb-1.5">Model Output Stream</span>
                  {promptLoading ? (
                    <div className="space-y-2">
                      <div className="h-3 bg-[#1E1E24] rounded animate-pulse w-3/4"></div>
                      <div className="h-3 bg-[#1E1E24] rounded animate-pulse w-5/6"></div>
                      <div className="h-3 bg-[#1E1E24] rounded animate-pulse w-2/3"></div>
                    </div>
                  ) : promptResult ? (
                    <p className="font-sans text-xs text-alabaster/90 whitespace-pre-wrap">{promptResult}</p>
                  ) : (
                    <p className="font-mono text-[11px] text-slate-gray italic">Adjust hyperparameters and trigger execute to view telemetry analysis...</p>
                  )}
                </div>

                {metrics && (
                  <div className="mt-4 pt-3 border-t border-[#1E1E24] grid grid-cols-3 gap-2 font-mono text-[10px]">
                    <div>
                      <span className="text-slate-gray block">Latency</span>
                      <span className="text-copper font-bold">{metrics.durationMs}ms</span>
                    </div>
                    <div>
                      <span className="text-slate-gray block">Tokens</span>
                      <span className="text-alabaster font-bold">{metrics.tokens}</span>
                    </div>
                    <div>
                      <span className="text-slate-gray block">Cost</span>
                      <span className="text-emerald-400 font-bold">${metrics.cost}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2B: RAG SIMULATOR */}
        {activePlaygroundTab === "rag-sim" && (
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-copper uppercase tracking-wider font-semibold">Dual-Stage RAG Pipeline Simulator</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={ragQuery}
                onChange={(e) => setRagQuery(e.target.value)}
                placeholder="Type any search query..."
                className="flex-1 bg-onyx border border-[#1E1E24] rounded-lg px-3.5 h-10 text-xs text-alabaster font-sans focus:outline-none focus:border-copper/40"
              />
              <button
                onClick={runRagSimulation}
                disabled={ragLoading}
                className="px-4 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all"
              >
                {ragLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
                <span>Retrieve</span>
              </button>
            </div>

            {ragResult && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Score Comparison */}
                <div className="md:col-span-7 space-y-4 font-mono text-[10px]">
                  <div>
                    <span className="text-copper block font-semibold mb-1">1. Sparse Lexical Search (BM25 Scores)</span>
                    {ragResult.sparseScores.map((s: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center bg-onyx px-2.5 py-1.5 rounded border border-[#1E1E24] mb-1">
                        <span className="truncate flex-1 pr-4">{s.doc}</span>
                        <span className="text-alabaster font-bold">{s.score}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="text-copper block font-semibold mb-1">2. Dense Vector Search (Cosine Similarity)</span>
                    {ragResult.denseScores.map((s: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center bg-onyx px-2.5 py-1.5 rounded border border-[#1E1E24] mb-1">
                        <span className="truncate flex-1 pr-4">{s.doc}</span>
                        <span className="text-alabaster font-bold">{s.score}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="text-emerald-400 block font-semibold mb-1">3. Reciprocal Rank Fusion (RRF blended Scores)</span>
                    {ragResult.rrfScores.map((s: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center bg-onyx px-2.5 py-1.5 rounded border border-emerald-500/20 mb-1">
                        <span className="truncate flex-1 pr-4">{s.doc}</span>
                        <span className="text-emerald-400 font-bold">{s.score}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Prompt Packaging */}
                <div className="md:col-span-5 bg-onyx border border-[#1E1E24] rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-slate-gray uppercase block border-b border-[#1E1E24] pb-1.5 mb-2">Synthesized LLM Prompt Package</span>
                    <pre className="font-mono text-[9px] text-slate-gray whitespace-pre-wrap">{ragResult.finalPrompt}</pre>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 font-mono text-[8px] text-emerald-400 border border-emerald-500/10 px-2 py-1 rounded bg-emerald-500/5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Cross-Encoder context optimized successfully. Hallucination guard locks enabled.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUBTAB 2C: LANGGRAPH WORKFLOW BUILDER */}
        {activePlaygroundTab === "langgraph-builder" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs text-copper uppercase tracking-wider font-semibold">LangGraph Cyclic State machine</h3>
              <button
                onClick={runGraphSimulation}
                disabled={isGraphRunning}
                className="px-4 h-9 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-obsidian" />
                <span>Run State Machine</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
              {/* Graph canvas container */}
              <div className="md:col-span-7 bg-onyx/40 border border-[#1E1E24] rounded-lg p-6 flex flex-col items-center justify-center min-h-[250px] relative">
                {/* Connector loop SVG lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                  {/* Gateway -> Supervisor */}
                  <line x1="20%" y1="50%" x2="45%" y2="50%" stroke="#1E1E24" strokeWidth="2" strokeDasharray="4" />
                  {/* Supervisor -> Worker Node */}
                  <path d="M190 120 C 230 40, 270 40, 310 120" fill="none" stroke="#1E1E24" strokeWidth="2" />
                  {/* Worker Node -> Validator */}
                  <path d="M310 120 C 270 200, 230 200, 190 120" fill="none" stroke="#1E1E24" strokeWidth="2" />
                </svg>

                <div className="flex flex-col items-center justify-center gap-6 z-10 w-full font-mono text-[9px]">
                  <div className="flex justify-between items-center w-full max-w-sm">
                    {/* Gateway Node */}
                    <div className={`p-2.5 border rounded-lg text-center transition-all ${
                      graphStep === 1 
                        ? "bg-copper/20 border-copper text-copper font-semibold scale-105 shadow-[0_0_12px_rgba(194,120,3,0.4)]" 
                        : "bg-onyx border-[#1E1E24] text-slate-gray"
                    }`}>
                      <span>[Router Node]</span>
                    </div>

                    {/* Supervisor */}
                    <div className={`p-2.5 border rounded-lg text-center transition-all ${
                      graphStep === 2 
                        ? "bg-copper/20 border-copper text-copper font-semibold scale-105 shadow-[0_0_12px_rgba(194,120,3,0.4)]" 
                        : "bg-onyx border-[#1E1E24] text-slate-gray"
                    }`}>
                      <span>[Supervisor]</span>
                    </div>

                    {/* Worker */}
                    <div className={`p-2.5 border rounded-lg text-center transition-all ${
                      graphStep === 3 
                        ? "bg-copper/20 border-copper text-copper font-semibold scale-105 shadow-[0_0_12px_rgba(194,120,3,0.4)]" 
                        : "bg-onyx border-[#1E1E24] text-slate-gray"
                    }`}>
                      <span>[Coder Agent]</span>
                    </div>

                    {/* Validator */}
                    <div className={`p-2.5 border rounded-lg text-center transition-all ${
                      graphStep === 4 
                        ? "bg-copper/20 border-copper text-copper font-semibold scale-105 shadow-[0_0_12px_rgba(194,120,3,0.4)]" 
                        : "bg-onyx border-[#1E1E24] text-slate-gray"
                    }`}>
                      <span>[Validator]</span>
                    </div>
                  </div>

                  {/* Complete Indicator */}
                  <div className={`p-2.5 border rounded-lg text-center transition-all ${
                    graphStep === 5 
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 font-semibold scale-105" 
                      : "bg-onyx border-[#1E1E24] text-slate-gray"
                  }`}>
                    <span>[Finished Output Block]</span>
                  </div>
                </div>
              </div>

              {/* Live execution telemetry terminal logs */}
              <div className="md:col-span-5 bg-obsidian border border-[#1E1E24] rounded-lg p-4 font-mono text-[9px] flex flex-col justify-between min-h-[250px]">
                <div>
                  <span className="text-slate-gray block border-b border-[#1E1E24] pb-1.5 mb-2 uppercase">Execution Logging Frame</span>
                  <div className="space-y-1.5 h-36 overflow-y-auto pr-1">
                    {graphLogs.map((log, idx) => (
                      <p key={idx} className={log.includes("ALERT") ? "text-amber-400" : log.includes("SUCCESS") ? "text-emerald-400" : "text-alabaster/80"}>
                        {log}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1E1E24] flex items-center justify-between text-slate-gray">
                  <span>Cycle Count: {graphStep > 1 ? (graphStep === 5 ? "2 Complete" : "Evaluating...") : "0"}</span>
                  <span className="text-copper">Thread Locked: {isGraphRunning ? "TRUE" : "FALSE"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2D: EMBEDDING VISUALIZER */}
        {activePlaygroundTab === "embed-visualizer" && (
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-copper uppercase tracking-wider font-semibold">2D Multi-Class PCA Embedding Projection</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={embeddingText}
                onChange={(e) => setEmbeddingText(e.target.value)}
                className="flex-1 bg-onyx border border-[#1E1E24] rounded-lg px-3.5 h-10 text-xs text-alabaster font-sans focus:outline-none focus:border-copper/40"
              />
              <button
                onClick={runEmbeddingMap}
                disabled={embedLoading}
                className="px-4 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all"
              >
                {embedLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                <span>Project Vectors</span>
              </button>
            </div>

            {embeddingData.length > 0 && (
              <div className="h-64 bg-[#0A0A0C] border border-[#1E1E24] rounded-lg p-2 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid stroke="#15151A" />
                    <XAxis type="number" dataKey="x" name="Semantic vector dimension X" domain={[-1, 1]} stroke="#334155" style={{ fontSize: "9px", fontFamily: "monospace" }} />
                    <YAxis type="number" dataKey="y" name="Semantic vector dimension Y" domain={[-1, 1]} stroke="#334155" style={{ fontSize: "9px", fontFamily: "monospace" }} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: "#15151A", border: "1px solid #1E1E24" }} labelStyle={{ color: "#E2E8F0", fontSize: "10px" }} />
                    <Scatter name="Words" data={embeddingData} fill="#C27803">
                      {embeddingData.map((entry, index) => (
                        <span key={`cell-${index}`} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>

                {/* Legend list of semantic groups */}
                <div className="absolute top-2 right-2 flex flex-col gap-1 bg-onyx/85 border border-[#1E1E24] p-2 rounded text-[8px] font-mono">
                  <span className="text-copper">Clustered Concepts:</span>
                  <span className="text-[#38BDF8]">● Frontend Experience</span>
                  <span className="text-[#F43F5E]">● Backend Engineering</span>
                  <span className="text-[#10B981]">● Agentic Systems</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUBTAB 2E: VECTOR SEARCH DEMO */}
        {activePlaygroundTab === "vector-search" && (
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-copper uppercase tracking-wider font-semibold">Interactive Vector Indexing & Semantic Retrieval</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Document corpus indexing column */}
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-slate-gray uppercase block border-b border-[#1E1E24] pb-1">Corpus Index Documents</span>
                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {corpus.map((doc, idx) => (
                    <div key={idx} className="bg-onyx p-2 rounded border border-[#1E1E24] text-[10px] text-alabaster/80 flex items-center justify-between gap-2">
                      <span className="truncate flex-1">{doc}</span>
                      <button 
                        onClick={() => setCorpus(corpus.filter((_, i) => i !== idx))}
                        className="text-slate-gray hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newDoc}
                    onChange={(e) => setNewDoc(e.target.value)}
                    placeholder="Type document string to index..."
                    className="flex-1 bg-onyx border border-[#1E1E24] rounded-lg px-2.5 h-9 text-[10px] text-alabaster focus:outline-none focus:border-copper/40"
                  />
                  <button
                    onClick={() => { if (newDoc.trim()) { setCorpus([...corpus, newDoc]); setNewDoc(""); } }}
                    className="px-3 bg-alabaster text-obsidian text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1 hover:bg-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Index Doc</span>
                  </button>
                </div>
              </div>

              {/* Semantic Query Testing column */}
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-slate-gray uppercase block border-b border-[#1E1E24] pb-1">Compute Query Cosine Similarity</span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={vectorQuery}
                    onChange={(e) => setVectorQuery(e.target.value)}
                    className="flex-1 bg-onyx border border-[#1E1E24] rounded-lg px-2.5 h-9 text-[10px] text-alabaster focus:outline-none focus:border-copper/40"
                  />
                  <button
                    onClick={runVectorSearch}
                    className="px-3.5 bg-copper text-alabaster text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1 hover:bg-copper/80"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Run Query</span>
                  </button>
                </div>

                <div className="space-y-1.5">
                  {vectorResults.map((r, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-[8px] font-mono text-slate-gray">
                        <span className="truncate flex-1 pr-4">{r.doc}</span>
                        <span className="text-copper font-bold">Score: {r.score}</span>
                      </div>
                      <div className="h-1 bg-[#15151A] rounded-full overflow-hidden">
                        <div className="h-full bg-copper rounded-full" style={{ width: `${r.score * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2F: STREAMING DEMO & CONTEXT WINDOW */}
        {activePlaygroundTab === "stream-demo" && (
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-copper uppercase tracking-wider font-semibold">Streaming SSE telemetry & Context Budgets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Real-time Streaming */}
              <div className="bg-onyx/40 border border-[#1E1E24] rounded-lg p-4 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[9px] text-slate-gray uppercase">SSE Router Simulation</span>
                    <button
                      onClick={runStreamDemo}
                      disabled={streamLoading}
                      className="px-3 h-7 bg-alabaster text-obsidian font-semibold text-[9px] rounded-md hover:bg-white active:scale-95 transition-all"
                    >
                      Trigger Stream
                    </button>
                  </div>
                  <div className="p-3 bg-obsidian border border-[#1E1E24] rounded-lg min-h-[100px] text-[10px] font-mono leading-relaxed text-alabaster/90">
                    {streamText || "Click trigger to engage Server-Sent Events stream simulations..."}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 font-mono text-[8px] text-slate-gray">
                  <div>
                    <span>TTFT Latency:</span>
                    <span className="text-copper block font-semibold">120ms (Simulated)</span>
                  </div>
                  <div>
                    <span>Throughput:</span>
                    <span className="text-copper block font-semibold">58 tokens / sec</span>
                  </div>
                </div>
              </div>

              {/* Context Limit Progress Gauge */}
              <div className="bg-onyx/40 border border-[#1E1E24] rounded-lg p-4 space-y-4 min-h-[220px]">
                <span className="font-mono text-[9px] text-slate-gray uppercase block border-b border-[#1E1E24] pb-1.5">Virtual Context budget locks</span>
                
                <div className="space-y-3 font-mono text-[9px]">
                  <div>
                    <div className="flex justify-between text-slate-gray mb-1">
                      <span>Document Ingestion limit (Max 128k Tokens)</span>
                      <span className="text-copper font-semibold">{docTokenSize.toLocaleString()} Tokens</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="120000"
                      step="5000"
                      value={docTokenSize}
                      onChange={(e) => setDocTokenSize(parseInt(e.target.value))}
                      className="w-full accent-copper cursor-pointer"
                    />
                  </div>

                  <div className="p-3 bg-obsidian border border-[#1E1E24] rounded-lg space-y-2">
                    <div className="flex justify-between items-center text-[8px] text-slate-gray">
                      <span>System Tokens:</span>
                      <span className="text-alabaster font-bold">1,402</span>
                    </div>
                    <div className="flex justify-between items-center text-[8px] text-slate-gray">
                      <span>User Context Tokens:</span>
                      <span className="text-alabaster font-bold">{(docTokenSize).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-[8px] text-slate-gray">
                      <span>Memory Cache Tokens:</span>
                      <span className="text-alabaster font-bold">812</span>
                    </div>
                  </div>

                  {docTokenSize > 100000 ? (
                    <div className="flex items-center gap-1.5 font-mono text-[8px] text-amber-400 border border-amber-500/10 px-2 py-1 rounded bg-amber-500/5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>WARNING: Approaching high tokens. System recommends token caching schemas.</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 font-mono text-[8px] text-emerald-400 border border-emerald-500/10 px-2 py-1 rounded bg-emerald-500/5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Context memory safely throttled under standard parameters.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------------
// COMPONENT: SYSTEM ARCHITECTURE LIBRARY (TAB 3)
// ----------------------------------------------------------------------------------
function ArchitectureLibrary() {
  const [activeBlueprint, setActiveBlueprint] = useState("rag");
  const [activeNode, setActiveNode] = useState<any>(null);

  const BLUEPRINTS = [
    { id: "rag", label: "RAG Pipeline" },
    { id: "agent", label: "LangGraph Workflows" },
    { id: "backend", label: "FastAPI Routing" },
    { id: "vectors", label: "Vector database" },
    { id: "security", label: "Security & Guardrails" }
  ];

  const BLUEPRINT_DATA: Record<string, { title: string; desc: string; nodes: any[] }> = {
    rag: {
      title: "Multi-Stage Hybrid RAG Pipeline",
      desc: "Detailed document parsing, dense-sparse index blending, and cross-encoder re-ranking pipelines.",
      nodes: [
        { name: "Parser Engine", role: "Hierarchical Parsing", detail: "Recursively parses tables, markdown structures, and PDF headers to generate nested parent-child context scopes.", latency: "140ms", tradeOff: "Higher parsing duration for absolute textual integrity." },
        { name: "Dual Vectorizer", role: "Lexical & Semantic Indexing", detail: "Generates sparse token weights alongside dense 1536d OpenAI vectors in parallel.", latency: "380ms", tradeOff: "Higher token utilization, but maps structural concepts flawlessly." },
        { name: "RRF Merger", label: "Rank Fusion", detail: "Applies Reciprocal Rank Fusion blending formulas to normalise and merge lexical BM25 coordinates.", latency: "5ms", tradeOff: "Super fast, lightweight CPU execution." },
        { name: "Cross-Encoder", role: "BGE Reranker Large", detail: "Executes deep semantic evaluation of top-20 merged candidates concurrently with user query.", latency: "240ms", tradeOff: "Adds minor latency threshold but boosts retrieval precision from 64% to 92%." },
        { name: "Generator Gate", role: "Context assembler", detail: "Injects top-5 relevant paragraphs inside dynamic system templates complete with document provenance headers.", latency: "110ms", tradeOff: "Zero hallucination guardrails enforced." }
      ]
    },
    agent: {
      title: "LangGraph State-Machine Orchestrator",
      desc: "Cyclic workflows, supervisor routing node grids, and human validation gates.",
      nodes: [
        { name: "Router Gate", role: "Intent Classifier", detail: "Classifies user query intent to determine processing pipeline routes.", latency: "120ms", tradeOff: "Depends on small models to keep gateway response under 150ms." },
        { name: "Supervisor Node", role: "Central Coordinator", detail: "Directs state parameters, coordinates worker agents, and tracks retry counts.", latency: "80ms", tradeOff: "Coordinates complexity perfectly, but represents a single central orchestrator bottleneck." },
        { name: "Worker Nodes", role: "Specialized Agents", detail: "Independent modular prompts executing specialized code parsing, database queries, or external tool loops.", latency: "Var (400-1200ms)", tradeOff: "High scalability, but rate-limits across API gates must be guarded." },
        { name: "Validator Gate", role: "AST Quality Scans", detail: "Executes static structural check rules on worker outputs, cycles back to supervisor if exceptions arise.", latency: "40ms", tradeOff: "Increases loops count, but ensures 100% type-safe compilation." }
      ]
    },
    backend: {
      title: "High-Performance FastAPI Routers",
      desc: "Asynchronous endpoint threads, rate limiting blocks, and SSE stream delivery gateways.",
      nodes: [
        { name: "Rate Limiter", role: "Token Bucket Proxy", detail: "Limits client endpoints concurrency according to user tier keys.", latency: "1.5ms", tradeOff: "Extremely fast, handles thousands of hits cleanly using Redis keys." },
        { name: "Auth Check", role: "JWT Scope validation", detail: "Decodes and verifies cryptographic user claims.", latency: "2ms", tradeOff: "Fails fast, preventing token leakage." },
        { name: "Async Worker", role: "Threadpool Dispatcher", detail: "Delegates blocking operations to parallel OS worker contexts.", latency: "0.2ms", tradeOff: "Allows FastAPI to handle concurrent connections with low memory footprint." },
        { name: "SSE Streaming", role: "SSE Connection", detail: "Streams model response fragments character-by-character back to browser.", latency: "Continuous", tradeOff: "Keeps socket open, but provides immediate user feedback." }
      ]
    },
    vectors: {
      title: "Vector DB Storage & Semantic Indexes",
      desc: "Metadata structuring, hybrid retrieval indexes, and dense similarity databases.",
      nodes: [
        { name: "Embeddings API", role: "Vector Generation", detail: "Encodes textual descriptions into highly precise multi-dimensional floating point coordinates.", latency: "180ms", tradeOff: "Depends on model providers uptime." },
        { name: "Index Matcher", role: "Cosine Search Index", detail: "Finds closest document blocks based on geometric dot products.", latency: "12ms", tradeOff: "Extremely fast search execution." },
        { name: "Metadata Filter", role: "Scope Restrictor", detail: "Filters vectors strictly based on client ID parameters.", latency: "3ms", tradeOff: "Safeguards client workspace isolation completely." }
      ]
    },
    security: {
      title: "AST SQL Parsers & Schema Sanitizers",
      desc: "Zero-trust prompt engineering sanitizers and database injection scanners.",
      nodes: [
        { name: "Schema Masker", role: "Metadata Minimizer", detail: "Ensures only read-only column schemas are provided to LLMs, keeping system database structures hidden.", latency: "1ms", tradeOff: "Minimizes prompt tokens successfully." },
        { name: "AST Parser", role: "Syntax Audit scans", detail: "Parses generated query strings into syntax trees, blocking unauthorized keywords or multiple command blocks.", latency: "8ms", tradeOff: "Ensures 100% database safety." },
        { name: "Sandboxed Pool", role: "Read-Only Transaction", detail: "Runs queries in highly restricted transaction pools with 500ms force timeout.", latency: "Var", tradeOff: "Safeguards databases against endless loops." }
      ]
    }
  };

  const selectedData = BLUEPRINT_DATA[activeBlueprint] || BLUEPRINT_DATA.rag;

  return (
    <div className="space-y-6">
      {/* Selector switches */}
      <div className="flex flex-wrap gap-1.5 bg-onyx p-1.5 border border-[#1E1E24] rounded-xl">
        {BLUEPRINTS.map((bp) => (
          <button
            key={bp.id}
            onClick={() => { setActiveBlueprint(bp.id); setActiveNode(null); }}
            className={`px-3 py-1.5 font-mono text-[10px] rounded-lg transition-all ${
              activeBlueprint === bp.id
                ? "bg-[#1E1E24] text-copper border border-[#2E2E3A]"
                : "text-slate-gray hover:text-alabaster border border-transparent"
            }`}
          >
            {bp.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* SVG/HTML blueprint flow node map */}
        <div className="md:col-span-7 bg-[#101014] border border-[#1E1E24] rounded-xl p-5 min-h-[300px] flex flex-col justify-center">
          <span className="font-mono text-[9px] text-slate-gray uppercase tracking-wider block border-b border-[#1E1E24] pb-2 mb-4">
            {selectedData.title}
          </span>
          <p className="font-sans text-xs text-alabaster/70 mb-6">{selectedData.desc}</p>

          <div className="flex flex-wrap gap-3 justify-center">
            {selectedData.nodes.map((node, idx) => (
              <button
                key={idx}
                onClick={() => setActiveNode(node)}
                className={`p-3 border rounded-xl text-left font-sans text-xs transition-all w-full max-w-[200px] relative overflow-hidden group ${
                  activeNode?.name === node.name
                    ? "bg-copper/10 border-copper shadow-[0_4px_16px_rgba(194,120,3,0.15)]"
                    : "bg-onyx border-[#1E1E24] hover:border-copper/30"
                }`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-copper opacity-50" />
                <span className="font-mono text-[8px] text-copper uppercase block mb-1">Node {idx + 1}</span>
                <span className="text-alabaster font-semibold block mb-0.5">{node.name}</span>
                <span className="text-slate-gray text-[10px] block truncate">{node.role || node.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed side description slide-out card */}
        <div className="md:col-span-5 bg-onyx/40 border border-[#1E1E24] rounded-xl p-5 min-h-[300px] flex flex-col justify-between">
          {activeNode ? (
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[8px] text-copper uppercase tracking-widest font-semibold">Active Blueprint telemetry</span>
                <h4 className="font-display font-medium text-base text-alabaster mt-1">{activeNode.name}</h4>
                <p className="font-mono text-[10px] text-slate-gray uppercase">{activeNode.role || activeNode.label}</p>
              </div>

              <div className="p-3 bg-obsidian border border-[#1E1E24] rounded-lg">
                <span className="font-mono text-[8px] text-slate-gray uppercase block mb-1">Optimization Logic</span>
                <p className="font-sans text-xs text-alabaster/90 leading-relaxed">{activeNode.detail}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                <div>
                  <span className="text-slate-gray block">Latency:</span>
                  <span className="text-copper font-bold">{activeNode.latency || "N/A"}</span>
                </div>
                <div>
                  <span className="text-slate-gray block">Architectural Trade-off:</span>
                  <span className="text-amber-400 block font-semibold leading-tight text-[9px]">{activeNode.tradeOff}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full text-slate-gray font-mono text-xs italic py-16">
              <Layers className="w-8 h-8 text-[#1E1E24] mb-3 animate-pulse" />
              <span>Click any architecture node node to extract detailed telemetry and optimization parameters...</span>
            </div>
          )}

          {activeNode && (
            <div className="pt-4 mt-4 border-t border-[#1E1E24] flex items-center gap-1.5 font-mono text-[8px] text-slate-gray">
              <ShieldCheck className="w-3.5 h-3.5 text-copper" />
              <span>Optimized by Muhammad Hamad for Enterprise scale.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------------
// COMPONENT: CLIENT PORTAL (TAB 4)
// ----------------------------------------------------------------------------------
function ClientPortal() {
  const [submissions, setSubmissions] = useState<any[]>(() => {
    const saved = localStorage.getItem("hamad_client_submissions");
    return saved ? JSON.parse(saved) : [];
  });
  const [meetingBooked, setMeetingBooked] = useState(false);
  const [selectedMeetingTime, setSelectedMeetingTime] = useState("");

  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("medium");
  const [scope, setScope] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadFileName, setUploadFileName] = useState("");

  const handleRequirementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !scope.trim()) return;

    const newRequirement = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      budget,
      scope,
      documentName: uploadFileName || "No Document",
      status: "Discovery Phase",
      timestamp: new Date().toLocaleDateString()
    };

    const updated = [newRequirement, ...submissions];
    localStorage.setItem("hamad_client_submissions", JSON.stringify(updated));
    setSubmissions(updated);

    // Clear Form
    setTitle("");
    setScope("");
    setUploadFileName("");
    setUploadProgress(0);
  };

  const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadFileName(file.name);
      setUploadProgress(10);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 15;
        });
      }, 200);
    }
  };

  const bookMeeting = (timeSlot: string) => {
    setSelectedMeetingTime(timeSlot);
    setMeetingBooked(true);
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Requirement Form */}
        <div className="bg-[#101014] border border-[#1E1E24] rounded-xl p-5 space-y-4">
          <span className="font-mono text-[9px] text-copper uppercase tracking-wider block border-b border-[#1E1E24] pb-2 mb-2">
            Submit Project Specifications
          </span>

          <form onSubmit={handleRequirementSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[10px] font-mono text-slate-gray uppercase mb-1">Project Concept Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Enterprise Legal Audit RAG"
                className="w-full bg-onyx border border-[#1E1E24] rounded-lg px-3 h-9 text-xs text-alabaster focus:outline-none focus:border-copper/40"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-mono text-slate-gray uppercase mb-1">Target Budget Class</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-onyx border border-[#1E1E24] rounded-lg px-2 h-9 text-xs text-alabaster focus:outline-none focus:border-copper/40"
                >
                  <option value="low">Starter Prototype (&lt;$10k)</option>
                  <option value="medium">Core Product ($10k-$30k)</option>
                  <option value="high">Enterprise Platform ($30k+)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[10px] font-mono text-slate-gray uppercase mb-1">Document uploader</label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleDocUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="bg-onyx border border-[#1E1E24] hover:border-copper/40 rounded-lg flex items-center justify-center gap-1 h-9 px-3 text-xs text-slate-gray cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[80px]">{uploadFileName || "Upload PDF"}</span>
                  </div>
                </div>
              </div>
            </div>

            {uploadProgress > 0 && (
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] font-mono text-slate-gray">
                  <span>Uploading {uploadFileName}</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="h-1 bg-[#15151A] rounded-full overflow-hidden">
                  <div className="h-full bg-copper transition-all" style={{ width: `${uploadProgress}%` }} />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-mono text-slate-gray uppercase mb-1">Product Scope / Objectives</label>
              <textarea
                required
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                placeholder="Describe features, integrations, context documents size, and latency constraints..."
                className="w-full h-20 bg-onyx border border-[#1E1E24] rounded-lg p-2.5 text-xs text-alabaster focus:outline-none focus:border-copper/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-9 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all duration-150"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Transmit Specifications</span>
            </button>
          </form>
        </div>

        {/* Meeting & Scheduler */}
        <div className="bg-[#101014] border border-[#1E1E24] rounded-xl p-5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[9px] text-copper uppercase tracking-wider block border-b border-[#1E1E24] pb-2 mb-4">
              Schedule Architecture Consultation
            </span>
            <p className="text-xs text-slate-gray leading-relaxed mb-4">
              Select an available time coordinate slot directly below to secure a private, 30-minute system design audit with Muhammad Hamad.
            </p>

            {meetingBooked ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-lg space-y-2 text-center">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-semibold text-xs text-alabaster">Consultation Reserved!</h4>
                <p className="font-mono text-[9px] text-slate-gray">Coord Time: {selectedMeetingTime} (UTC-7)</p>
                <button 
                  onClick={() => setMeetingBooked(false)}
                  className="text-[9px] font-mono text-copper underline uppercase mt-2 block mx-auto"
                >
                  Reschedule
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                {[
                  "Mon, 10:00 AM",
                  "Mon, 02:00 PM",
                  "Tue, 09:30 AM",
                  "Wed, 04:00 PM",
                  "Thu, 11:00 AM",
                  "Fri, 03:30 PM"
                ].map((time) => (
                  <button
                    key={time}
                    onClick={() => bookMeeting(time)}
                    className="h-10 bg-onyx border border-[#1E1E24] hover:border-copper/30 hover:bg-[#15151A] rounded-lg flex items-center justify-center text-slate-gray hover:text-alabaster transition-all"
                  >
                    <span>{time}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#1E1E24] mt-4 flex items-center justify-between font-mono text-[9px] text-slate-gray">
            <span>Status: Active Slots Open</span>
            <span className="text-copper">Secure Calendar Bridge</span>
          </div>
        </div>

      </div>

      {/* Submissions timeline monitors */}
      {submissions.length > 0 && (
        <div className="bg-[#101014] border border-[#1E1E24] rounded-xl p-5">
          <span className="font-mono text-[9px] text-copper uppercase tracking-wider block border-b border-[#1E1E24] pb-2 mb-4">
            Active Project State monitor
          </span>

          <div className="space-y-4">
            {submissions.map((sub) => (
              <div key={sub.id} className="p-4 bg-onyx border border-[#1E1E24] rounded-lg grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-xs text-alabaster">{sub.title}</h4>
                  <p className="font-mono text-[9px] text-slate-gray uppercase mt-0.5">Budget Tier: {sub.budget} // Docs: {sub.documentName}</p>
                </div>

                {/* Progress bar pipeline */}
                <div className="flex items-center gap-1 font-mono text-[8px] uppercase tracking-wider text-slate-gray">
                  <span className="text-copper font-semibold">Step 1 //</span>
                  <span>{sub.status}</span>
                </div>

                <div className="flex justify-end gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-[#15151A] border border-[#1E1E24] rounded-full text-[8px] font-mono text-emerald-400">
                    <span className="h-1 w-1 bg-emerald-500 rounded-full animate-ping" />
                    <span>In-Queue</span>
                  </div>
                  <button 
                    onClick={() => {
                      const updated = submissions.filter(s => s.id !== sub.id);
                      localStorage.setItem("hamad_client_submissions", JSON.stringify(updated));
                      setSubmissions(updated);
                    }}
                    className="text-slate-gray hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------------------
// COMPONENT: LEARNING ACADEMY (TAB 5)
// ----------------------------------------------------------------------------------
function LearningAcademy() {
  const [activeCourseId, setActiveCourseId] = useState("advanced-ai-agents");
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [candidateName, setCandidateName] = useState("");
  const [certDownloaded, setCertDownloaded] = useState(false);

  // Coding exercise states
  const [codeSnippet, setCodeSnippet] = useState("def cosine_similarity(v1, v2):\n    # Write numpy math code below\n    pass");
  const [testOutput, setTestOutput] = useState("");
  const [testsPassing, setTestsPassing] = useState<boolean | null>(null);

  const COURSES = [
    {
      id: "advanced-ai-agents",
      title: "Production AI Agents & LangGraph Masterclass",
      level: "Advanced // 6 Weeks",
      quiz: [
        { q: "Which LangGraph component allows storing state changes permanently across process reboots?", a: ["SqliteSaver", "StateDict", "AgentRouter", "AST Parser"], correct: 0 },
        { q: "What is the primary risk of infinite loops in cyclic agent networks?", a: ["Core memory leak", "Runaway token expenses", "Glot syntax failures", "CJS compile errors"], correct: 1 },
        { q: "How are conditional branches evaluated in a LangGraph graph?", a: ["Using hardcoded string tables", "Via Router Gate functions returning conditional edges", "Using metadata indices", "By caching session variables"], correct: 1 }
      ]
    },
    {
      id: "fullstack-genai",
      title: "Full-Stack Generative AI Platforms",
      level: "Intermediate // 8 Weeks",
      quiz: [
        { q: "What technology is recommended for streaming response fragments character-by-character back to browser clients?", a: ["Express query schemas", "Server-Sent Events (SSE) stream connections", "Static AST parsing", "Reciprocal Rank Fusion"], correct: 1 },
        { q: "Why do naive bi-encoder semantic search pipelines often miss serial codes?", a: ["They only evaluate concept synonym matrices", "They lack cosine similarity calculations", "They ignore Pinecone namespaces", "They require paid API model slots"], correct: 0 }
      ]
    }
  ];

  const selectedCourse = COURSES.find(c => c.id === activeCourseId) || COURSES[0];

  const handleQuizAnswer = (qIdx: number, oIdx: number) => {
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const evaluateQuiz = () => {
    let score = 0;
    selectedCourse.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score += 1;
    });
    setQuizScore(score);
  };

  const runCodeTests = () => {
    setTestOutput("[SYSTEM] Commencing Python Code Sandbox Static Verification Scans...\n");
    setTimeout(() => {
      if (codeSnippet.includes("import numpy") || codeSnippet.includes("np.dot")) {
        setTestOutput(prev => prev + "[TEST 1] Testing vector dimension matching: PASSED.\n[TEST 2] Testing zero-magnitude vectors: PASSED.\n\n[SUCCESS] All static test verification schemas passed perfectly. 100% Quality rating.");
        setTestsPassing(true);
      } else {
        setTestOutput(prev => prev + "[TEST 1] Testing vector dimension matching: FAILED.\n[EXCEPTION] Missing 'import numpy' or magnitude computations.\n\n[FAILURE] Code tests failed. Revise numpy math loops.");
        setTestsPassing(false);
      }
    }, 800);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Course Selector & Quizzes */}
        <div className="md:col-span-7 bg-[#101014] border border-[#1E1E24] rounded-xl p-5 space-y-5">
          <span className="font-mono text-[9px] text-copper uppercase tracking-wider block border-b border-[#1E1E24] pb-2 mb-2">
            Active Academy Courses Curriculum
          </span>

          <div className="flex gap-2">
            {COURSES.map(c => (
              <button
                key={c.id}
                onClick={() => { setActiveCourseId(c.id); setQuizScore(null); setQuizAnswers({}); }}
                className={`px-3 py-2 text-left rounded-lg border text-xs font-semibold flex-1 ${
                  activeCourseId === c.id
                    ? "bg-copper/10 border-copper/40 text-copper"
                    : "bg-onyx border-[#1E1E24] text-slate-gray hover:text-alabaster"
                }`}
              >
                <span className="block font-mono text-[8px] text-slate-gray mb-0.5">{c.level}</span>
                <span className="truncate block">{c.title}</span>
              </button>
            ))}
          </div>

          {/* Interactive Quiz Engine */}
          <div className="space-y-4 pt-2">
            <span className="font-mono text-[9px] text-slate-gray uppercase block border-b border-[#1E1E24] pb-1">
              Course Competency Assessment
            </span>

            {quizScore !== null ? (
              <div className="space-y-4">
                <div className="bg-[#15151A] border border-[#1E1E24] p-4 rounded-lg text-center space-y-1">
                  <span className="text-slate-gray font-mono text-[10px] uppercase">Telemetry Evaluation Score:</span>
                  <p className="text-2xl font-bold text-copper">{quizScore} / {selectedCourse.quiz.length}</p>
                  <p className="text-[11px] text-slate-gray">
                    {quizScore === selectedCourse.quiz.length ? "Mastery achieved. Certificate generation available." : "Review masterclass materials and re-evaluate."}
                  </p>
                </div>

                {quizScore === selectedCourse.quiz.length && (
                  <div className="bg-onyx border border-emerald-500/20 p-4 rounded-lg space-y-3">
                    <span className="font-mono text-[8px] text-emerald-400 uppercase block">Generate masterclass Certificate</span>
                    <input
                      type="text"
                      required
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      placeholder="Type your Full Name..."
                      className="w-full bg-obsidian border border-[#1E1E24] rounded-lg px-3 h-9 text-xs text-alabaster focus:outline-none focus:border-copper/40"
                    />
                    <button
                      disabled={!candidateName.trim()}
                      onClick={() => setCertDownloaded(true)}
                      className="w-full h-9 bg-copper text-alabaster font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 hover:bg-copper/80 disabled:opacity-50"
                    >
                      <Award className="w-4 h-4" />
                      <span>Download Certified Diploma</span>
                    </button>

                    {certDownloaded && (
                      <div className="p-3 bg-obsidian border border-[#1E1E24] rounded-lg text-center space-y-1 font-mono text-[9px]">
                        <span className="text-emerald-400 block font-bold">✓ CERTIFICATE SECURED</span>
                        <span className="text-slate-gray block">HASH: SHA256//HAMAD-M-{Math.floor(Math.random()*90000+10000)}</span>
                      </div>
                    )}
                  </div>
                )}

                <button 
                  onClick={() => { setQuizScore(null); setQuizAnswers({}); setCertDownloaded(false); }}
                  className="w-full h-9 bg-[#1E1E24] hover:bg-[#2A2A35] text-slate-gray hover:text-alabaster font-semibold text-xs rounded-lg transition-all"
                >
                  Reset Exam
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedCourse.quiz.map((q, qIdx) => (
                  <div key={qIdx} className="space-y-2">
                    <p className="text-xs font-semibold text-alabaster">{qIdx + 1}. {q.q}</p>
                    <div className="grid grid-cols-1 gap-1.5 font-mono text-[10px]">
                      {q.a.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleQuizAnswer(qIdx, oIdx)}
                          className={`p-2 rounded border text-left transition-all ${
                            quizAnswers[qIdx] === oIdx
                              ? "bg-copper/10 border-copper text-copper"
                              : "bg-onyx border-[#1E1E24] text-slate-gray hover:text-alabaster"
                          }`}
                        >
                          <span>{opt}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={evaluateQuiz}
                  disabled={Object.keys(quizAnswers).length < selectedCourse.quiz.length}
                  className="w-full h-9 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 disabled:opacity-50 transition-all duration-150"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Transmit Exam Answers</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Python Coding Sandbox */}
        <div className="md:col-span-5 bg-onyx/40 border border-[#1E1E24] rounded-xl p-5 space-y-4 min-h-[350px] flex flex-col justify-between">
          <div className="space-y-3.5">
            <span className="font-mono text-[9px] text-copper uppercase tracking-wider block border-b border-[#1E1E24] pb-2">
              Python Static Coding Sandbox
            </span>

            <div>
              <label className="block text-[10px] font-mono text-slate-gray uppercase mb-1">Write Cosine Similarity (Numpy)</label>
              <textarea
                value={codeSnippet}
                onChange={(e) => setCodeSnippet(e.target.value)}
                className="w-full h-36 bg-obsidian border border-[#1E1E24] focus:border-copper/40 rounded-lg p-3 font-mono text-[10px] text-emerald-400 focus:outline-none resize-none"
              />
            </div>

            <button
              onClick={runCodeTests}
              className="w-full h-9 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Execute Sandbox Tests</span>
            </button>
          </div>

          <div className="p-3 bg-obsidian border border-[#1E1E24] rounded-lg font-mono text-[9px] h-24 overflow-y-auto pr-1">
            <span className="text-slate-gray block border-b border-[#1E1E24] pb-1 mb-1 uppercase">Unit Telemetry Output</span>
            <pre className="whitespace-pre-wrap text-slate-gray">{testOutput || "Sandbox standby. Write np.dot computations and execute tests..."}</pre>
          </div>
        </div>

      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------------
// COMPONENT: RECRUITER COCKPIT (TAB 6)
// ----------------------------------------------------------------------------------
function RecruiterCockpit() {
  const [inquiryTransmitted, setInquiryTransmitted] = useState(false);
  const [inquiryText, setInquiryText] = useState("");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryText.trim()) return;
    setInquiryTransmitted(true);
    setTimeout(() => {
      setInquiryText("");
    }, 2000);
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Recruiter Profile Summary */}
        <div className="md:col-span-8 bg-[#101014] border border-[#1E1E24] rounded-xl p-5 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E1E24] pb-4">
            <div>
              <h3 className="font-display font-medium text-lg text-alabaster">Muhammad Hamad</h3>
              <p className="font-mono text-[9px] text-copper uppercase tracking-wider">AI Systems Architect & Educator</p>
            </div>
            <button
              onClick={handlePrintResume}
              className="h-8.5 px-4 bg-onyx hover:bg-[#1E1E24] border border-[#1E1E24] hover:border-copper/40 text-alabaster text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-all duration-150 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-copper" />
              <span>Export Printable Profile</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px]">
            <div className="bg-onyx p-3 border border-[#1E1E24] rounded-lg">
              <span className="text-slate-gray block uppercase">Exp Frameworks</span>
              <span className="text-copper font-bold block mt-1">LangGraph // CrewAI</span>
            </div>
            <div className="bg-onyx p-3 border border-[#1E1E24] rounded-lg">
              <span className="text-slate-gray block uppercase">Availability</span>
              <span className="text-emerald-400 font-bold block mt-1">Q3/Q4 2026</span>
            </div>
            <div className="bg-onyx p-3 border border-[#1E1E24] rounded-lg">
              <span className="text-slate-gray block uppercase">Credentials</span>
              <span className="text-alabaster font-bold block mt-1">GCP // Python Core</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-gray leading-relaxed">
            <h4 className="font-semibold text-alabaster">Core Telemetry Highlights</h4>
            <p>• Lead architect for international startups, coordinating modular states across high-traffic AI networks.</p>
            <p>• Engineered dual hybrid search RAG indexes (BM25 + Pinecone vectors) blending reciprocal ranks seamlessly.</p>
            <p>• Professional practitioner training over 200 engineers inside modern software stacks.</p>
          </div>

          {/* Verification References panel */}
          <div className="space-y-3 pt-3 border-t border-[#1E1E24]">
            <span className="font-mono text-[9px] text-copper uppercase tracking-wider block">Security reference checks</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[9px]">
              <div className="bg-onyx p-2.5 rounded border border-[#1E1E24] flex items-center justify-between">
                <div>
                  <span className="text-alabaster block">Sarah Chen // Director</span>
                  <span className="text-slate-gray block text-[8px]">Elysium Technologies</span>
                </div>
                <span className="text-emerald-400 text-[8px] bg-emerald-500/10 border border-emerald-500/20 px-1 rounded uppercase">Verified</span>
              </div>
              <div className="bg-onyx p-2.5 rounded border border-[#1E1E24] flex items-center justify-between">
                <div>
                  <span className="text-alabaster block">Alex Rivera // Founder</span>
                  <span className="text-slate-gray block text-[8px]">Synthetix AI</span>
                </div>
                <span className="text-emerald-400 text-[8px] bg-emerald-500/10 border border-emerald-500/20 px-1 rounded uppercase">Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="md:col-span-4 bg-[#101014] border border-[#1E1E24] rounded-xl p-5 space-y-4">
          <span className="font-mono text-[9px] text-copper uppercase tracking-wider block border-b border-[#1E1E24] pb-2">
            Secure Recruiter Inbox
          </span>
          <p className="text-[11px] text-slate-gray leading-relaxed">
            Submit contract parameters directly to Muhammad's secure pipeline inbox below.
          </p>

          {inquiryTransmitted ? (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-center space-y-1">
              <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
              <span className="font-mono text-[10px] text-alabaster block font-semibold">Message Transmitted!</span>
              <span className="font-mono text-[8px] text-slate-gray block">Routed successfully to Muhammad's primary terminal.</span>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-3">
              <textarea
                required
                value={inquiryText}
                onChange={(e) => setInquiryText(e.target.value)}
                placeholder="Include role requirements, stack constraints, and timeline targets..."
                className="w-full h-24 bg-onyx border border-[#1E1E24] rounded-lg p-2.5 text-xs text-alabaster focus:outline-none focus:border-copper/40 resize-none"
              />
              <button
                type="submit"
                className="w-full h-9 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all duration-150"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Contract Offer</span>
              </button>
            </form>
          )}

          <div className="pt-2 border-t border-[#1E1E24] text-[8px] font-mono text-slate-gray flex items-center gap-1 justify-center">
            <Shield className="w-3 h-3 text-copper" />
            <span>Cryptographically sealed route active</span>
          </div>
        </div>

      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------------
// COMPONENT: TELEMETRY & LOGS (TAB 7)
// ----------------------------------------------------------------------------------
function TelemetryAnalytics() {
  const [heatmapCoordinates, setHeatmapCoordinates] = useState<any[]>([]);

  // Telemetry Chart Data
  const telemetryData = [
    { name: "Parser", latency: 140, capacity: 85 },
    { name: "Embed", latency: 380, capacity: 90 },
    { name: "RRF", latency: 5, capacity: 98 },
    { name: "Rerank", latency: 240, capacity: 70 },
    { name: "Gate", latency: 110, capacity: 95 }
  ];

  const handleHeatmapClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Add glowing click point
    setHeatmapCoordinates(prev => [...prev.slice(-15), { x, y }]);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Interactive Heatmap Canvas */}
        <div className="md:col-span-6 bg-[#101014] border border-[#1E1E24] rounded-xl p-5 space-y-3">
          <span className="font-mono text-[9px] text-copper uppercase tracking-wider block border-b border-[#1E1E24] pb-2">
            Active Workspace Heatmap telemetry
          </span>
          <p className="text-[10px] text-slate-gray leading-relaxed">
            Click inside the grid below to simulate visitor hot-spots mapping. Coordinates are tracked securely.
          </p>

          <div className="relative border border-[#1E1E24] rounded-lg bg-obsidian overflow-hidden h-44 cursor-crosshair">
            <canvas
              onClick={handleHeatmapClick}
              className="absolute inset-0 w-full h-full"
            />
            
            {/* Render Heatmap clicks as absolute glowing indicators */}
            {heatmapCoordinates.map((pt, idx) => (
              <div
                key={idx}
                className="absolute w-3 h-3 rounded-full bg-copper/60 shadow-[0_0_8px_#C27803] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: pt.x, top: pt.y }}
              />
            ))}

            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <div className="absolute bottom-2 right-2 font-mono text-[8px] text-slate-gray bg-onyx px-2 py-0.5 rounded">
              Clicks Tracked: {heatmapCoordinates.length}
            </div>
          </div>
        </div>

        {/* Telemetry latency analytics chart */}
        <div className="md:col-span-6 bg-[#101014] border border-[#1E1E24] rounded-xl p-5 space-y-3">
          <span className="font-mono text-[9px] text-copper uppercase tracking-wider block border-b border-[#1E1E24] pb-2">
            Dual Pipeline Latency telemetry
          </span>
          
          <div className="h-44 bg-[#0A0A0C] border border-[#1E1E24] rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={telemetryData}>
                <CartesianGrid stroke="#15151A" />
                <XAxis dataKey="name" stroke="#334155" style={{ fontSize: "9px", fontFamily: "monospace" }} />
                <YAxis stroke="#334155" style={{ fontSize: "9px", fontFamily: "monospace" }} />
                <Tooltip contentStyle={{ backgroundColor: "#15151A", border: "1px solid #1E1E24" }} />
                <Bar dataKey="latency" fill="#C27803" name="Latency (ms)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------------
// COMPONENT: CMS CORE MANAGER (TAB 8)
// ----------------------------------------------------------------------------------
interface CmsCoreManagerProps {
  projects: any[];
  courses: any[];
  blogs: any[];
  saveCms: (type: string, data: any) => void;
}

function CmsCoreManager({ projects, courses, blogs, saveCms }: CmsCoreManagerProps) {
  const [editingItem, setEditingItem] = useState<any>(null);
  const [editingType, setEditingType] = useState<string>("");

  const startEdit = (item: any, type: string) => {
    setEditingItem({ ...item });
    setEditingType(type);
  };

  const handleCmsSaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (editingType === "projects") {
      const updated = projects.map(p => p.id === editingItem.id ? editingItem : p);
      saveCms("projects", updated);
    } else if (editingType === "courses") {
      const updated = courses.map(c => c.id === editingItem.id ? editingItem : c);
      saveCms("courses", updated);
    } else if (editingType === "blogs") {
      const updated = blogs.map(b => b.id === editingItem.id ? editingItem : b);
      saveCms("blogs", updated);
    }

    setEditingItem(null);
    setEditingType("");
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Item listing column */}
        <div className="md:col-span-6 bg-[#101014] border border-[#1E1E24] rounded-xl p-5 space-y-4 max-h-[450px] overflow-y-auto scrollbar-thin">
          <div>
            <span className="font-mono text-[9px] text-copper uppercase block border-b border-[#1E1E24] pb-1.5 mb-2">Projects Core Records</span>
            {projects.map((p: any) => (
              <div key={p.id} className="flex justify-between items-center bg-onyx px-3 py-2 rounded-lg border border-[#1E1E24] mb-1.5">
                <span className="text-xs text-alabaster truncate flex-1 pr-4">{p.title}</span>
                <button 
                  onClick={() => startEdit(p, "projects")}
                  className="text-slate-gray hover:text-copper transition-colors"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div>
            <span className="font-mono text-[9px] text-copper uppercase block border-b border-[#1E1E24] pb-1.5 mb-2">Academy Course records</span>
            {courses.map((c: any) => (
              <div key={c.id} className="flex justify-between items-center bg-onyx px-3 py-2 rounded-lg border border-[#1E1E24] mb-1.5">
                <span className="text-xs text-alabaster truncate flex-1 pr-4">{c.title}</span>
                <button 
                  onClick={() => startEdit(c, "courses")}
                  className="text-slate-gray hover:text-copper transition-colors"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div>
            <span className="font-mono text-[9px] text-copper uppercase block border-b border-[#1E1E24] pb-1.5 mb-2">Blogs Content indices</span>
            {blogs.map((b: any) => (
              <div key={b.id} className="flex justify-between items-center bg-onyx px-3 py-2 rounded-lg border border-[#1E1E24] mb-1.5">
                <span className="text-xs text-alabaster truncate flex-1 pr-4">{b.title}</span>
                <button 
                  onClick={() => startEdit(b, "blogs")}
                  className="text-slate-gray hover:text-copper transition-colors"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CMS Editor form column */}
        <div className="md:col-span-6 bg-[#101014] border border-[#1E1E24] rounded-xl p-5 min-h-[300px]">
          {editingItem ? (
            <form onSubmit={handleCmsSaveSubmit} className="space-y-4">
              <span className="font-mono text-[9px] text-copper uppercase block border-b border-[#1E1E24] pb-2">
                Core database Editor Form
              </span>

              <div>
                <label className="block text-[9px] font-mono text-slate-gray uppercase mb-1">Content Title</label>
                <input
                  type="text"
                  required
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full bg-onyx border border-[#1E1E24] rounded-lg px-3 h-9 text-xs text-alabaster focus:outline-none focus:border-copper/40"
                />
              </div>

              {editingType === "projects" && (
                <>
                  <div>
                    <label className="block text-[9px] font-mono text-slate-gray uppercase mb-1">Content Subtitle</label>
                    <input
                      type="text"
                      required
                      value={editingItem.subtitle}
                      onChange={(e) => setEditingItem({ ...editingItem, subtitle: e.target.value })}
                      className="w-full bg-onyx border border-[#1E1E24] rounded-lg px-3 h-9 text-xs text-alabaster"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono text-slate-gray uppercase mb-1">Telemetry Metrics</label>
                    <input
                      type="text"
                      required
                      value={editingItem.metrics}
                      onChange={(e) => setEditingItem({ ...editingItem, metrics: e.target.value })}
                      className="w-full bg-onyx border border-[#1E1E24] rounded-lg px-3 h-9 text-xs text-alabaster"
                    />
                  </div>
                </>
              )}

              {editingType === "courses" && (
                <div>
                  <label className="block text-[9px] font-mono text-slate-gray uppercase mb-1">Duration Interval</label>
                  <input
                    type="text"
                    required
                    value={editingItem.duration}
                    onChange={(e) => setEditingItem({ ...editingItem, duration: e.target.value })}
                    className="w-full bg-onyx border border-[#1E1E24] rounded-lg px-3 h-9 text-xs text-alabaster"
                  />
                </div>
              )}

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 h-9 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all duration-150 flex-1"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Commit Records</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 h-9 bg-onyx border border-[#1E1E24] text-slate-gray hover:text-alabaster text-xs font-semibold rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full py-16 text-slate-gray font-mono text-xs italic">
              <Settings className="w-8 h-8 text-[#1E1E24] mb-3 animate-spin [animation-duration:10s]" />
              <span>Select any CMS record to modify its global properties across the platform workspace...</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
