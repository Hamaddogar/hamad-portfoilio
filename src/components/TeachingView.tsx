import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, BookOpen, Clock, Layers, Milestone, Compass, Search, ChevronRight, CheckCircle2, ChevronDown, Sliders, Sparkles, Send } from "lucide-react";
import { coursesData } from "../data";
import { Course } from "../types";

export default function TeachingView() {
  const [activeCourseId, setActiveCourseId] = useState<string>(coursesData[0].id);
  const [expandedSyllabusIdx, setExpandedSyllabusIdx] = useState<number | null>(0);

  // Pathfinder state
  const [currentRole, setCurrentRole] = useState("backend");
  const [targetGoal, setTargetGoal] = useState("architect");
  const [pathfinderResult, setPathfinderResult] = useState<any>(null);
  const [calculatingPath, setCalculatingPath] = useState(false);

  const activeCourse = coursesData.find(c => c.id === activeCourseId) || coursesData[0];

  interface SyllabusItemDetail {
    level: "Beginner" | "Intermediate" | "Advanced";
    objectives: string[];
    subtopics: string[];
    recipe?: string;
  }

  // Comprehensive masterclass syllabus mapping to satisfy Section 4 requirements
  const syllabusDetails: Record<string, SyllabusItemDetail> = {
    "State machines vs. basic chains in LangChain": {
      level: "Advanced",
      objectives: [
        "Contrast linear sequential chains with cycle-tolerant, stateful graph topologies",
        "Understand state-backtracking and recursive prompt-injection safety patterns",
        "Identify when to shift from standard chains to complete StateGraph nodes"
      ],
      subtopics: [
        "Sequential and branching pipeline graphs with conditional routers",
        "State preservation strategies across thread execution checkpoints",
        "Compensating transactions and graceful recovery handlers in stateful loops"
      ],
      recipe: "langgraph.graph.StateGraph(StateSchema) -> add_node() -> add_conditional_edges()"
    },
    "LangGraph core concepts: nodes, edges, state updates": {
      level: "Advanced",
      objectives: [
        "Configure custom state models with thread-safe list append operations (reducers)",
        "Differentiate between normal edges, entry points, and conditional execution paths",
        "Implement thread savers for memory persistence and state time-traveling"
      ],
      subtopics: [
        "StateGraph schema validation with custom pydantic / TypedDict models",
        "State management and reduction handlers using operator.add / append",
        "Designing entry/exit nodes and thread configuration memory loops"
      ],
      recipe: "def state_reducer(current: list, update: list): return current + update"
    },
    "Designing cyclic agent routing and feedback loops": {
      level: "Advanced",
      objectives: [
        "Construct cyclic worker-supervisor teams with recursive refinement loops",
        "Apply output validators to intercept and correct structural JSON hallucination failures",
        "Scale complex graph configurations while preserving state history"
      ],
      subtopics: [
        "Orchestrating multi-agent teams with supervisor decision engines",
        "Conditional edge evaluation using mathematical and semantic scores",
        "Designing AST code checkers inside sandboxed loop layers"
      ],
      recipe: "if validation_score < 0.95: return 'code_refiner' else: return 'deployer'"
    },
    "Integrating Human-in-the-Loop approval workflows": {
      level: "Advanced",
      objectives: [
        "Design breakpoints to halt state execution for human validation inputs",
        "Verify state inspection and modification capability on active thread saves",
        "Configure webhook handlers for distributed slack / email approval signals"
      ],
      subtopics: [
        "Configuring compile breakpoints on specific node execution paths",
        "State modification during pause states and resuming thread processes",
        "Implementing secure manual gatekeeping pipelines in enterprise SaaS"
      ],
      recipe: "graph.compile(checkpointer=memory, interrupt_before=['api_execution_node'])"
    },
    "Observability & Tracing with LangSmith and custom spans": {
      level: "Advanced",
      objectives: [
        "Trace nested LLM execution chains, tool invocations, and token consumptions",
        "Configure custom span labels to track proprietary business logic metrics",
        "Monitor latency pipelines and evaluate prompt optimization graphs"
      ],
      subtopics: [
        "Integrating LangSmith telemetry env variables securely inside FastAPI",
        "Tracking raw metadata inputs, temperature logs, and prompt sizes",
        "Constructing custom datasets for automated synthetic testing"
      ],
      recipe: "os.environ['LANGCHAIN_TRACING_V2'] = 'true'; @traceable(name='agent_loop')"
    },
    "Cost-containment, semantic caching, and token budgeting": {
      level: "Advanced",
      objectives: [
        "Build vector-based semantic caches to bypass redundant LLM computation cost",
        "Configure hard token budgets to prevent infinite cycle runaway pricing loops",
        "Compare pricing-latency ratios across multiple proprietary and open-source models"
      ],
      subtopics: [
        "Implementing GPTCache / Redis vector stores for query caching",
        "Setting loop counters to abort graphs exceeding defined token limits",
        "Dynamic prompt compression techniques utilizing semantic summarizers"
      ],
      recipe: "if total_tokens > BUDGET_LIMIT: raise TokenBudgetExceededException()"
    },
    "Developing high-throughput FastAPI async routers": {
      level: "Intermediate",
      objectives: [
        "Leverage asyncio event loops for high-concurrency, non-blocking I/O routes",
        "Configure streaming HTTP responses for token-by-token generation latency drops",
        "Integrate dependency-injection systems for secure database session caching"
      ],
      subtopics: [
        "Asynchronous route controller definitions and coroutine worker pools",
        "Managing pooled async engines (asyncpg / SQL Alchemy async sessions)",
        "Configuring uvicorn event loop parameters for real-time production traffic"
      ],
      recipe: "async def stream_agent_events(): await async_client.post('/api/agent')"
    },
    "Next.js App Router streaming endpoints with Server-Sent Events (SSE)": {
      level: "Intermediate",
      objectives: [
        "Develop serverless edge paths for real-time chunked transfer streaming",
        "Process stream chunk sequences directly into progressive React UI state hooks",
        "Coordinate connection resets and network interruption fallback events"
      ],
      subtopics: [
        "Configuring HTTP response content-type to text/event-stream headers",
        "Handling client connection drops on Vercel Edge functions",
        "Decoding binary stream payloads on-the-fly in browser canvas state"
      ],
      recipe: "export const dynamic = 'force-dynamic'; return new Response(sseStream)"
    },
    "Dense vs. Sparse Vector Databases (Pinecone, Chroma, pgvector)": {
      level: "Intermediate",
      objectives: [
        "Compare mathematical cosine distances with text-lexical frequency scores",
        "Manage local embedded storage frameworks alongside managed cloud vector hubs",
        "Deploy database-native vectors inside standard relational schemas"
      ],
      subtopics: [
        "Index parameters configurations (HNSW and IVF-Flat) for fast recall",
        "Constructing embeddings via OpenAI and Cohere text embedding models",
        "Integrating pgvector extensions inside custom PostgreSQL schemas"
      ],
      recipe: "vector_index = VectorStoreIndex(nodes); sparse_index = BM25Retriever(nodes)"
    },
    "Implementing hybrid RAG pipelines with dense-sparse reciprocal rank fusion": {
      level: "Intermediate",
      objectives: [
        "Combine semantic embeddings search with keyword search queries dynamically",
        "Calculate Reciprocal Rank Fusion (RRF) scores to sort merged document lists",
        "Integrate Cross-Encoder re-ranker models to verify precise document citation"
      ],
      subtopics: [
        "Configuring dual sparse BM25 and dense cosine index retrieval pipelines",
        "Executing RRF algorithms to resolve document ranking conflicts",
        "Re-ranking retrieved results using Cohere / BGE cross-encoders"
      ],
      recipe: "rrf_score = sum(1.0 / (rank_i + k) for rank_i in document_ranks)"
    },
    "Prompt engineering at scale: structured JSON outputs & schema validation": {
      level: "Intermediate",
      objectives: [
        "Force model responses into strict JSON structures matching predefined schemas",
        "Configure automated self-correction loops to repair malformed LLM outputs",
        "Minimize prompt size bloat while maximizing parsing consistency"
      ],
      subtopics: [
        "Leveraging Instructor / Pydantic models for structured output generation",
        "Writing robust few-shot system rules using schema definition markdown",
        "Intercepting parsing errors and feeding exceptions back to model repair nodes"
      ],
      recipe: "class ExtractionSchema(BaseModel): name: str; role: str; rating: float"
    },
    "Authentication and rate-limiting secure AI route proxies": {
      level: "Intermediate",
      objectives: [
        "Implement JWT token validation layers to shield costly API routes",
        "Configure Redis-based rate limiting to prevent DDOS token exhaustion",
        "Sanitize incoming text parameters to deflect malicious prompt injection"
      ],
      subtopics: [
        "Integrating JWT header decoders and FastAPI authentication dependencies",
        "Setting up leaky-bucket rate limiting scripts inside Redis clusters",
        "Defending routers against adversarial override and jailbreak vectors"
      ],
      recipe: "limiter = FastAPILimiter(redis); await limiter.check_rate_limit(request)"
    },
    "Scientific python computing (NumPy, Pandas, Scikit-learn)": {
      level: "Beginner",
      objectives: [
        "Manipulate multidimensional numerical data blocks utilizing vector arrays",
        "Execute high-speed data cleaning, filtering, and analysis processes",
        "Train simple statistical regression models for target data prediction"
      ],
      subtopics: [
        "NumPy array broadcasting and matrix manipulation benchmarks",
        "Pandas DataFrame processing, grouping, and CSV cleaning pipelines",
        "Standardizing feature datasets using Scikit-Learn scaling operations"
      ],
      recipe: "import numpy as np; import pandas as pd; df = pd.DataFrame(data)"
    },
    "Mathematical foundations of embeddings, cosine similarity, and dimensions": {
      level: "Beginner",
      objectives: [
        "Conceptualize text words mapped to coordinate numbers inside a spatial field",
        "Calculate distance values (dot product) to score semantic text match",
        "Identify dimensions issues and select appropriate compression approaches"
      ],
      subtopics: [
        "Deconstructing multi-dimensional vector space models (1536d / 3072d)",
        "Computing cosine similarity formulas: (A • B) / (||A|| * ||B||)",
        "Understanding text-splitting tokens strategies and chunk sizes"
      ],
      recipe: "similarity_score = np.dot(vec_a, vec_b) / (np.linalg.norm(vec_a) * np.linalg.norm(vec_b))"
    },
    "Fine-tuning models vs. few-shot context injection": {
      level: "Beginner",
      objectives: [
        "Differentiate between writing clear context hints and updating model weights",
        "Calculate pricing-accuracy trade-offs across fine-tuned smaller models",
        "Organize diverse raw training datasets to compile JSONL tuning archives"
      ],
      subtopics: [
        "Few-shot contextual prompt injection layouts and chat examples",
        "Tuning open-source SLM weights using HuggingFace adapters (QLoRA)",
        "Auditing performance benchmarks across fine-tuned parameters"
      ],
      recipe: '{"messages": [{"role": "system", "content": "..."}, {"role": "user", "content": "..."}]}'
    },
    "Deploying models with FastAPI and containerizing with Docker": {
      level: "Beginner",
      objectives: [
        "Wrap local Python inference functions inside standard web API endpoints",
        "Create Docker environments to guarantee absolute execution consistency",
        "Expose secure documentation interfaces using Swagger and OpenAPI"
      ],
      subtopics: [
        "Writing requirements.txt files and building lean multi-stage Dockerfiles",
        "Configuring environment secret variables safely inside containers",
        "Exposing port bindings and serving inference servers on Cloud systems"
      ],
      recipe: "FROM python:3.11-slim; COPY . /app; RUN pip install -r requirements.txt"
    }
  };

  const generatePathfinder = () => {
    setCalculatingPath(true);
    setPathfinderResult(null);

    setTimeout(() => {
      let duration = "";
      let difficulty = "";
      let phases: { title: string; desc: string; readingTime: string; milestone: string }[] = [];

      if (currentRole === "frontend" && targetGoal === "architect") {
        duration = "14 Weeks";
        difficulty = "Medium-High";
        phases = [
          {
            title: "Phase 1: Deep Python & Async Server Basics",
            desc: "Learn scientific computing in Python, asynchronous concurrency patterns, and FastAPI router setups.",
            readingTime: "40 hours",
            milestone: "Construct a fully validated async REST controller in Python."
          },
          {
            title: "Phase 2: Full-Stack RAG & Vectors Integration",
            desc: "Understand dense vector space embedding generation and dual sparse-dense indexes.",
            readingTime: "50 hours",
            milestone: "Build and containerize a Next.js + FastAPI vector storage scraper."
          },
          {
            title: "Phase 3: Stateful Multi-Agent Masterclass",
            desc: "Master LangGraph state reduction schemas, cyclic loop constraints, and AST validation layers.",
            readingTime: "60 hours",
            milestone: "Launch a live multi-agent code debugger with SSE streaming."
          }
        ];
      } else if (currentRole === "backend" && targetGoal === "architect") {
        duration = "10 Weeks";
        difficulty = "Advanced";
        phases = [
          {
            title: "Phase 1: Advanced Cognitive Graph Mechanics",
            desc: "Deep dive into LangGraph nodes, conditional edge routing, and SqliteSaver session caches.",
            readingTime: "30 hours",
            milestone: "Design an autonomous state graph that recovers from custom exception loops."
          },
          {
            title: "Phase 2: Elite Retrieval & Semantic Re-ranking",
            desc: "Integrate Reciprocal Rank Fusion and Cross-Encoder re-ranking models inside FastAPI gateways.",
            readingTime: "40 hours",
            milestone: "Build a zero-hallucination RAG auditing engine for nested financial tables."
          },
          {
            title: "Phase 3: Sandbox Runtimes & Zero-Trust Posture",
            desc: "Secure LLM execution spaces. Implement AST validation filters and read-only DB connections.",
            readingTime: "40 hours",
            milestone: "Deploy a natural language to SQL translation portal in an isolated sandbox."
          }
        ];
      } else {
        duration = "12 Weeks";
        difficulty = "Balanced";
        phases = [
          {
            title: "Phase 1: Python ML & Vector Foundations",
            desc: "Establish core scientific computing, understanding embeddings, cosine distances, and structured outputs.",
            readingTime: "35 hours",
            milestone: "Create an embeddings scraper and query router pipeline."
          },
          {
            title: "Phase 2: Hybrid Search & Index Merges",
            desc: "Learn sparse (BM25) and dense retrieval, Reciprocal Rank Fusion, and Next.js layout setups.",
            readingTime: "45 hours",
            milestone: "Deploy a hybrid search RAG widget displaying context citation logs."
          },
          {
            title: "Phase 3: Practical Agents Orchestration",
            desc: "Master LangChain and basic LangGraph circular flows with human-in-the-loop approvals.",
            readingTime: "45 hours",
            milestone: "Construct a customer support agent routing portal with admin approval hooks."
          }
        ];
      }

      setPathfinderResult({
        duration,
        difficulty,
        phases,
        matchedCourseId: targetGoal === "architect" ? "advanced-ai-agents" : "fullstack-genai"
      });
      setCalculatingPath(false);
    }, 750);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="py-24 max-w-5xl mx-auto px-4 selection:bg-copper selection:text-alabaster"
    >
      
      {/* Page Header */}
      <div className="flex flex-col items-start gap-4 mb-16">
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
          <span>[ FILE: ACADEMY_CORE.ts ]</span>
          <span>•</span>
          <span>PEDAGOGY & CURRICULA</span>
        </div>
        <h1 className="font-display font-light text-4xl sm:text-5xl text-alabaster tracking-tight leading-none">
          Practitioner-Led Instruction, <br />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster via-copper to-amber-500">
            Zero-Bullshit Syllabus.
          </span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-2xl mt-2 leading-relaxed">
          I teach exactly what I deploy inside active client production systems. No basic toy scripts, no marketing hype—just raw, system-level design patterns and production-grade code bases.
        </p>
      </div>

      {/* Grid: Academy Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
        
        {/* Course Selectors Tab Menu */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase tracking-widest mb-2 block">Active Masterclasses</span>
          {coursesData.map((course) => {
            const isActive = activeCourseId === course.id;
            return (
              <button
                key={course.id}
                onClick={() => {
                  setActiveCourseId(course.id);
                  setExpandedSyllabusIdx(0);
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col gap-2 relative overflow-hidden ${
                  isActive 
                    ? "bg-copper/10 border-copper/40 text-alabaster shadow-md" 
                    : "bg-onyx/30 border-[#1E1E24]/50 text-slate-gray hover:text-alabaster hover:border-[#1E1E24]"
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="font-mono text-[9px] text-copper tracking-wider uppercase font-semibold">{course.badge}</span>
                  <span className="font-mono text-[9px] text-slate-gray uppercase">{course.duration}</span>
                </div>
                <h3 className="font-display font-bold text-xs sm:text-sm">{course.title}</h3>
              </button>
            );
          })}
        </div>

        {/* Detailed Syllabus Module Node Explorer */}
        <div className="lg:col-span-8 bg-onyx/30 border border-[#1E1E24] rounded-2xl p-6 relative overflow-hidden min-h-[380px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-copper/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-copper tracking-widest uppercase">
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>ACTIVE SYLLABUS DIRECTIVE</span>
              </div>
              <h2 className="font-display text-xl font-bold text-alabaster mt-2">{activeCourse.title}</h2>
              <p className="font-sans text-xs sm:text-sm text-slate-gray mt-1 leading-relaxed">{activeCourse.description}</p>
            </div>

            <div className="h-[1px] w-full bg-[#1E1E24]" />

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-slate-gray uppercase tracking-wider block mb-1">Interactive Syllabus Map</span>
              {activeCourse.syllabus.map((item, idx) => {
                const isExpanded = expandedSyllabusIdx === idx;
                const richDetails = syllabusDetails[item];

                return (
                  <div 
                    key={idx}
                    className="border border-[#1E1E24] rounded-xl overflow-hidden bg-obsidian/25"
                  >
                    <button
                      onClick={() => setExpandedSyllabusIdx(isExpanded ? null : idx)}
                      className="w-full text-left p-3 flex justify-between items-center hover:bg-onyx/40 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="font-mono text-xs text-copper mt-0.5">// 0{idx + 1}</span>
                        <span className="font-sans text-xs font-semibold text-alabaster leading-snug">{item}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-gray shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 border-t border-[#1E1E24]/50 bg-[#0C0C0F] flex flex-col gap-4 font-sans text-xs text-slate-gray">
                            
                            {/* Course Level Indicator */}
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[8.5px] text-slate-gray uppercase">Course Level:</span>
                              <span className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded border font-bold ${
                                richDetails?.level === "Advanced" 
                                  ? "bg-red-500/10 border-red-500/30 text-red-400" 
                                  : richDetails?.level === "Intermediate" 
                                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                                    : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                              }`}>
                                {richDetails?.level || "Advanced"}
                              </span>
                            </div>

                            {/* Core Learning Objectives */}
                            <div>
                              <span className="text-copper font-mono text-[9px] uppercase tracking-widest block mb-1.5">// Core Learning Objectives</span>
                              <ul className="list-none pl-0 flex flex-col gap-1.5">
                                {(richDetails?.objectives || [
                                  "Analyze architectural trade-offs between model classes",
                                  "Execute high-throughput pipeline benchmarks securely"
                                ]).map((obj, i) => (
                                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                                    <span className="text-copper font-bold font-mono">✓</span>
                                    <span>{obj}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Detailed Syllabus List */}
                            <div>
                              <span className="text-copper font-mono text-[9px] uppercase tracking-widest block mb-1.5">// Detailed Sub-Syllabus Modules</span>
                              <ul className="list-none pl-0 flex flex-col gap-1.5 bg-onyx/20 p-3 rounded-lg border border-[#1E1E24]/60">
                                {(richDetails?.subtopics || [
                                  "State schema definitions and recursive parameters optimization models",
                                  "Validating AST codes inside sandboxed runtimes"
                                ]).map((sub, i) => (
                                  <li key={i} className="flex items-start gap-2 text-[11px] leading-relaxed">
                                    <span className="text-slate-gray/40 font-mono mt-0.5">• Module 0{i + 1}:</span>
                                    <span>{sub}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Code Recipe / Architectural Draft */}
                            {richDetails?.recipe && (
                              <div>
                                <span className="text-copper font-mono text-[9px] uppercase tracking-widest block mb-1.5">// Practical Implementation Snippet</span>
                                <code className="block p-3 bg-[#070709] border border-[#1E1E24] rounded-lg text-alabaster font-mono text-[10px] leading-relaxed select-all overflow-x-auto">
                                  {richDetails.recipe}
                                </code>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Career Pathfinder Roadmap Builder */}
      <div className="mb-12 pt-16 border-t border-[#1E1E24]">
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-mono text-[9px] text-copper tracking-widest uppercase">Pathfinder Engine</span>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
            Personal Career Pathfinder
          </h2>
          <p className="font-sans text-xs text-slate-gray mt-1">
            Input your current engineering context and targets to dynamically calculate your personalized training roadmap and skill benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Capsule */}
          <div className="lg:col-span-5 bg-onyx/30 border border-[#1E1E24] p-6 rounded-2xl flex flex-col gap-6">
            
            {/* Input 1: Current role */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] text-slate-gray uppercase">Current Engineering Profile</label>
              <select
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                className="w-full h-10 bg-[#0B0B0E] border border-[#1E1E24] text-alabaster text-xs rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-copper font-sans"
              >
                <option value="frontend">Traditional Frontend/React Developer</option>
                <option value="backend">Standard Backend Software Engineer</option>
                <option value="junior">Junior Developer / Self-Taught Practitioner</option>
                <option value="analyst">Data Analyst or Product Manager</option>
              </select>
            </div>

            {/* Input 2: Goal */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] text-slate-gray uppercase">Core Target Objective</label>
              <select
                value={targetGoal}
                onChange={(e) => setTargetGoal(e.target.value)}
                className="w-full h-10 bg-[#0B0B0E] border border-[#1E1E24] text-alabaster text-xs rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-copper font-sans"
              >
                <option value="architect">Autonomous Agent Architect</option>
                <option value="integrator">Enterprise AI Systems Integrator</option>
                <option value="retriever">Advanced Information Retrieval (RAG) Expert</option>
              </select>
            </div>

            <button
              onClick={generatePathfinder}
              disabled={calculatingPath}
              className="w-full h-11 bg-alabaster hover:bg-white text-obsidian rounded-xl font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-95 disabled:opacity-55 shadow-md"
            >
              {calculatingPath ? (
                <>
                  <Clock className="w-4 h-4 animate-spin text-obsidian" />
                  Calculating Learning Matrix...
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4 text-obsidian" />
                  Generate Personalized Learning Pipeline
                </>
              )}
            </button>

          </div>

          {/* Pathfinder Roadmap timeline Output */}
          <div className="lg:col-span-7 bg-[#0B0B0E] border border-[#1E1E24] p-6 rounded-2xl min-h-[380px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-copper/10 to-transparent pointer-events-none" />

            {!pathfinderResult && !calculatingPath && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-slate-gray">
                <Compass className="w-10 h-10 text-copper/35 mb-4 animate-spin" style={{ animationDuration: '8s' }} />
                <h4 className="font-display font-medium text-sm text-alabaster mb-1">Pathfinder Idle</h4>
                <p className="font-sans text-xs max-w-sm leading-relaxed">Map your engineering transitions. Click generate to construct a custom step-by-step syllabus pathway designed to build production competence.</p>
              </div>
            )}

            {calculatingPath && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-slate-gray">
                <Clock className="w-8 h-8 text-copper animate-spin mb-4" />
                <h4 className="font-display font-medium text-sm text-alabaster mb-1">Synthesizing Pathways</h4>
                <p className="font-sans text-xs">Balancing study durations, skill prerequisite tokens, and selecting appropriate course projects...</p>
              </div>
            )}

            {pathfinderResult && !calculatingPath && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                {/* Meta details */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-[9px] text-copper tracking-widest uppercase">COMPILED PATHWAY</span>
                    <h3 className="font-display text-lg font-bold text-alabaster mt-1">Recommended Commitment: {pathfinderResult.duration}</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-copper/10 border border-copper/20 text-copper font-mono text-[9px] rounded uppercase">
                    Level: {pathfinderResult.difficulty}
                  </span>
                </div>

                <div className="h-[1px] w-full bg-[#1E1E24]" />

                {/* Timeline Axis */}
                <div className="flex flex-col gap-4 pl-4 border-l border-[#1E1E24] relative">
                  {pathfinderResult.phases.map((phase: any, idx: number) => (
                    <div key={idx} className="relative">
                      {/* Left timeline dot */}
                      <span className="absolute -left-[21.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-copper border-2 border-[#0B0B0E]" />
                      
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] text-slate-gray uppercase font-semibold">{phase.title} • {phase.readingTime} Est.</span>
                        <h4 className="font-display text-xs font-bold text-alabaster">{phase.desc}</h4>
                        <div className="mt-1.5 p-2 bg-onyx/25 border border-[#1E1E24] rounded-lg flex items-start gap-1.5 font-sans text-[11px] text-slate-gray">
                          <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span><strong>Capstone Goal:</strong> {phase.milestone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-onyx/40 border border-copper/10 rounded-xl flex items-center justify-between gap-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[8.5px] text-copper uppercase">Recommended Academy Match</span>
                    <span className="font-display text-xs font-bold text-alabaster">
                      {coursesData.find(c => c.id === pathfinderResult.matchedCourseId)?.title}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setActiveCourseId(pathfinderResult.matchedCourseId);
                      setExpandedSyllabusIdx(0);
                    }}
                    className="px-3.5 h-8 bg-alabaster hover:bg-white text-obsidian rounded font-sans text-[11px] font-semibold transition-all"
                  >
                    Load Syllabus
                  </button>
                </div>

              </motion.div>
            )}
          </div>

        </div>
      </div>

    </motion.div>
  );
}
