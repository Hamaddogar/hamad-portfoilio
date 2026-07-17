import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Zap, Shield, Database, Sparkles, Sliders, Play, Server, Layers, CheckCircle2, RefreshCw, BarChart2 } from "lucide-react";

export default function ExpertiseView() {
  // Sandbox state
  const [latencyWeight, setLatencyWeight] = useState(50); // 1-100: low vs. high
  const [budgetWeight, setBudgetWeight] = useState(50); // 1-100: low cost vs. high reasoning
  const [accuracyWeight, setAccuracyWeight] = useState(70); // 1-100: creative vs. zero-hallucination
  const [useCase, setUseCase] = useState("agentic"); // agentic, rag, translation, sql
  const [recommending, setRecommending] = useState(false);
  const [recommendationResult, setRecommendationResult] = useState<any>(null);

  // Agent flow simulation state
  const [simActiveNode, setSimActiveNode] = useState<string>("router");
  const [simConsole, setSimConsole] = useState<string[]>([
    "ENGINE: Initializing Sandbox Agent Container... Ready.",
    "USER_QUERY: 'Refactor inventory sync REST endpoint and validate safety AST.'"
  ]);
  const [simStepCount, setSimStepCount] = useState(0);
  const [simTokenCost, setSimTokenCost] = useState(0.00);

  const triggerAgentStep = () => {
    setSimStepCount(prev => prev + 1);
    
    if (simActiveNode === "router") {
      setSimActiveNode("supervisor");
      setSimTokenCost(prev => prev + 0.0004);
      setSimConsole(prev => [
        ...prev,
        `⚡ [STEP ${simStepCount + 1}] ROUTER -> Classified query intent: CODING_COMPILATION_REQUEST. Forwarding to Supervisor Node.`
      ]);
    } else if (simActiveNode === "supervisor") {
      setSimActiveNode("worker-coder");
      setSimTokenCost(prev => prev + 0.0018);
      setSimConsole(prev => [
        ...prev,
        `⚡ [STEP ${simStepCount + 1}] SUPERVISOR -> State read OK. Spawning 'Coder' Worker Node. Message queue populated.`
      ]);
    } else if (simActiveNode === "worker-coder") {
      setSimActiveNode("worker-validator");
      setSimTokenCost(prev => prev + 0.0025);
      setSimConsole(prev => [
        ...prev,
        `⚡ [STEP ${simStepCount + 1}] CODER WORKER -> Python AST compiled. Generating 128 lines of code. Submitting output to Validator Node.`
      ]);
    } else if (simActiveNode === "worker-validator") {
      // Loop or Guardrail depending on step count
      if (simStepCount < 6) {
        setSimActiveNode("supervisor");
        setSimTokenCost(prev => prev + 0.0012);
        setSimConsole(prev => [
          ...prev,
          `⚠️ [STEP ${simStepCount + 1}] VALIDATOR -> Static syntax audit found missing import in line 42. Recursing state back to Supervisor.`
        ]);
      } else {
        setSimActiveNode("guardrail");
        setSimTokenCost(prev => prev + 0.0008);
        setSimConsole(prev => [
          ...prev,
          `✅ [STEP ${simStepCount + 1}] VALIDATOR -> Refactoring pass completed. Syntax & security AST checks 100% GREEN. Advancing to Guardrail Node.`
        ]);
      }
    } else if (simActiveNode === "guardrail") {
      setSimActiveNode("delivery");
      setSimTokenCost(prev => prev + 0.0002);
      setSimConsole(prev => [
        ...prev,
        `🔒 [STEP ${simStepCount + 1}] SEMANTIC GUARDRAIL -> Sanitization checks OK. Zero-Trust posture validated. Compiling final JSON packet.`
      ]);
    } else if (simActiveNode === "delivery") {
      setSimActiveNode("router");
      setSimStepCount(0);
      setSimTokenCost(0);
      setSimConsole([
        "ENGINE: Workstation context recycled. System Ready.",
        "USER_QUERY: 'Refactor inventory sync REST endpoint and validate safety AST.'"
      ]);
    }
  };

  const getRecommendation = () => {
    setRecommending(true);
    setRecommendationResult(null);

    setTimeout(() => {
      let model = "";
      let speed = 0;
      let cost = "";
      let desc = "";
      let blueprint = "";

      // Evaluation rules based on weights
      if (latencyWeight < 35 && budgetWeight < 40) {
        // Fast and cheap
        model = "Gemini 2.5 Flash";
        speed = 280;
        cost = "$0.075 / 1M Input, $0.30 / 1M Output";
        desc = "Maximum throughput speeds with hyper-optimized cost metrics. Ideal for real-time customer support routing, standard chunk summaries, and high-frequency stream filtering.";
        blueprint = "Async FastAPI controller feeding direct SSE streaming pipelines, bypassed LangGraph recursion.";
      } else if (accuracyWeight > 75 && budgetWeight > 60) {
        // High accuracy, high reasoning
        model = "Gemini 2.5 Pro";
        speed = 85;
        cost = "$1.25 / 1M Input, $5.00 / 1M Output";
        desc = "Elite mathematical reasoning and complex coding instruction adherence. Features 2M context window. Perfect for deep AST schema structures, code compilation pipelines, and multi-document hybrid RAG audits.";
        blueprint = "LangGraph cyclic state machine with few-shot reflection, cross-encoder semantic re-ranking, and strict AST verification.";
      } else if (latencyWeight > 70) {
        // High-reasoning and deep latency is accepted
        model = "Claude 3.5 Sonnet";
        speed = 75;
        cost = "$3.00 / 1M Input, $15.00 / 1M Output";
        desc = "Industry standard for structural TypeScript refactoring, abstract syntax compilation, and highly complex agent autonomy workflows.";
        blueprint = "Supervised Multi-Agent system with specialized worker containers, Redis session synchronization.";
      } else {
        // Well balanced standard
        model = "GPT-4o";
        speed = 110;
        cost = "$2.50 / 1M Input, $10.00 / 1M Output";
        desc = "Balanced multi-modal engine offering fast response bounds with exceptional general structural JSON outputs. Perfect for general fullstack APIs and standard RAG orchestration.";
        blueprint = "Dual index (BM25 sparse + dense vector) mapped via Pinecone RRF, compiled inside Node.js controller.";
      }

      setRecommendationResult({
        model,
        speed,
        cost,
        desc,
        blueprint,
        suitability: Math.floor(Math.random() * 8) + 91
      });
      setRecommending(false);
    }, 850);
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
          <span>[ FILE: EXPERTISE_HUB.tsx ]</span>
          <span>•</span>
          <span>COGNITIVE SCIENCE</span>
        </div>
        <h1 className="font-display font-light text-4xl sm:text-5xl text-alabaster tracking-tight leading-none">
          Stateful Architecture, <br />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster via-copper to-amber-500">
            Deterministic Systems.
          </span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-2xl mt-2 leading-relaxed">
          I do not view AI as a simple black-box model. I treat it as a structural runtime component governed by semantic rules, memory buffers, and cyclic state machines.
        </p>
      </div>

      {/* Main Core Capabilities Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        
        {/* Core pillar 1 */}
        <div className="p-6 bg-onyx/30 border border-[#1E1E24] rounded-2xl flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-onyx border border-[#1E1E24] flex items-center justify-center">
            <Cpu className="w-5 h-5 text-copper" />
          </div>
          <div>
            <h3 className="font-display font-medium text-base text-alabaster">LangGraph Multi-Agent Workspaces</h3>
            <p className="font-sans text-xs sm:text-sm text-slate-gray mt-2 leading-relaxed">
              Moving past linear chaining. I build complex, circular agent workflows with memory persistence, thread serialization, and multi-specialist supervisor nodes that reduce human administrative overhead by up to 74%.
            </p>
          </div>
        </div>

        {/* Core pillar 2 */}
        <div className="p-6 bg-onyx/30 border border-[#1E1E24] rounded-2xl flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-onyx border border-[#1E1E24] flex items-center justify-center">
            <Database className="w-5 h-5 text-copper" />
          </div>
          <div>
            <h3 className="font-display font-medium text-base text-alabaster">Enterprise Hybrid RAG Pipelines</h3>
            <p className="font-sans text-xs sm:text-sm text-slate-gray mt-2 leading-relaxed">
              Eliminating vector search blindspots. I engineer multi-stage indexing systems that merge sparse lexical search (BM25) with dense embedding vectors (Cosine) using Reciprocal Rank Fusion (RRF) and Cross-Encoder re-ranking.
            </p>
          </div>
        </div>

        {/* Core pillar 3 */}
        <div className="p-6 bg-onyx/30 border border-[#1E1E24] rounded-2xl flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-onyx border border-[#1E1E24] flex items-center justify-center">
            <Shield className="w-5 h-5 text-copper" />
          </div>
          <div>
            <h3 className="font-display font-medium text-base text-alabaster">Zero-Trust Semantic Guardrails</h3>
            <p className="font-sans text-xs sm:text-sm text-slate-gray mt-2 leading-relaxed">
              Preventing severe injection and model hallucinations. I implement strict Abstract Syntax Tree (AST) validation schemes for natural-language to SQL translators, isolated docker transaction sandboxes, and structured JSON validators.
            </p>
          </div>
        </div>

        {/* Core pillar 4 */}
        <div className="p-6 bg-onyx/30 border border-[#1E1E24] rounded-2xl flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-onyx border border-[#1E1E24] flex items-center justify-center">
            <Layers className="w-5 h-5 text-copper" />
          </div>
          <div>
            <h3 className="font-display font-medium text-base text-alabaster">Safe Concurrency Backend Channels</h3>
            <p className="font-sans text-xs sm:text-sm text-slate-gray mt-2 leading-relaxed">
              Serving model operations fast. Expert in async Python frameworks (FastAPI), type-safe Node frameworks (NestJS, Express), and schema-optimized PostgreSQL architectures designed to scale up to millions of request transactions.
            </p>
          </div>
        </div>

      </div>

      {/* Interactive Agent Loop Visualizer */}
      <div className="mb-24 pt-16 border-t border-[#1E1E24]">
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-mono text-[9px] text-copper tracking-widest uppercase">Visual Topology Sandbox</span>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
            LangGraph Cyclic Multi-Agent Simulation
          </h2>
          <p className="font-sans text-xs text-slate-gray mt-1">
            Click \"Execute Next Step\" to trace thread-safe variables, route message states, and track token expense.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Topology Diagram */}
          <div className="lg:col-span-6 bg-[#0B0B0E] border border-[#1E1E24] rounded-2xl p-6 relative flex flex-col items-center justify-center min-h-[350px] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]" />
            
            {/* Visual Nodes */}
            <div className="relative w-full h-full flex flex-col items-center gap-12 z-10">
              
              {/* Row 1: Router */}
              <div className={`px-4 py-2 bg-onyx border rounded-lg font-mono text-[10px] uppercase transition-all duration-300 ${
                simActiveNode === "router" ? "border-copper bg-copper/10 text-alabaster shadow-[0_0_15px_rgba(194,120,3,0.25)]" : "border-[#1E1E24] text-slate-gray"
              }`}>
                [ Node.1 ] Gateway Router
              </div>

              {/* Row 2: Supervisor */}
              <div className={`px-4 py-2.5 bg-onyx border rounded-lg font-mono text-[10px] uppercase transition-all duration-300 ${
                simActiveNode === "supervisor" ? "border-copper bg-copper/10 text-alabaster shadow-[0_0_15px_rgba(194,120,3,0.25)]" : "border-[#1E1E24] text-slate-gray"
              }`}>
                👑 Graph Supervisor Node
              </div>

              {/* Row 3: Parallel Workers */}
              <div className="flex justify-between w-full gap-4 px-4">
                <div className={`flex-1 text-center py-2 bg-onyx border rounded-lg font-mono text-[9px] uppercase transition-all duration-300 ${
                  simActiveNode === "worker-coder" ? "border-copper bg-copper/10 text-alabaster shadow-[0_0_15px_rgba(194,120,3,0.25)]" : "border-[#1E1E24] text-slate-gray"
                }`}>
                  ⚙️ Coder Agent
                </div>
                <div className={`flex-1 text-center py-2 bg-onyx border rounded-lg font-mono text-[9px] uppercase transition-all duration-300 ${
                  simActiveNode === "worker-validator" ? "border-copper bg-copper/10 text-alabaster shadow-[0_0_15px_rgba(194,120,3,0.25)]" : "border-[#1E1E24] text-slate-gray"
                }`}>
                  🛡️ AST Validator
                </div>
              </div>

              {/* Row 4: Guardrail & Delivery */}
              <div className="flex gap-4 w-full justify-center">
                <div className={`px-3 py-1.5 bg-onyx border rounded-lg font-mono text-[9px] uppercase transition-all duration-300 ${
                  simActiveNode === "guardrail" ? "border-copper bg-copper/10 text-alabaster shadow-[0_0_15px_rgba(194,120,3,0.25)]" : "border-[#1E1E24] text-slate-gray"
                }`}>
                  Semantic Guardrail
                </div>
                <div className={`px-3 py-1.5 bg-onyx border rounded-lg font-mono text-[9px] uppercase transition-all duration-300 ${
                  simActiveNode === "delivery" ? "border-copper bg-copper/10 text-alabaster shadow-[0_0_15px_rgba(194,120,3,0.25)]" : "border-[#1E1E24] text-slate-gray"
                }`}>
                  📦 Client SSE Delivery
                </div>
              </div>
              
            </div>
          </div>

          {/* Controller Console Logs */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-[#0B0B0E] border border-[#1E1E24] rounded-2xl p-5 font-mono text-[10.5px] text-[#A1A1AA] h-[270px] overflow-y-auto flex flex-col justify-end gap-2 shadow-inner">
              {simConsole.map((log, idx) => (
                <div key={idx} className="leading-relaxed">
                  {log}
                </div>
              ))}
            </div>

            {/* Metrics Panel */}
            <div className="p-4 bg-onyx/40 border border-[#1E1E24] rounded-xl flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex gap-6">
                <div>
                  <span className="font-mono text-[9px] text-slate-gray uppercase">Sim Step</span>
                  <span className="block font-display text-base text-alabaster font-semibold">{simStepCount}</span>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-slate-gray uppercase">Est. Cost</span>
                  <span className="block font-display text-base text-copper font-semibold">${simTokenCost.toFixed(5)}</span>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-slate-gray uppercase">Thread State</span>
                  <span className="block font-display text-xs text-emerald-400 font-semibold uppercase">ACTIVE_LOCK</span>
                </div>
              </div>

              <button
                onClick={triggerAgentStep}
                className="w-full sm:w-auto px-4 h-9 bg-alabaster hover:bg-white text-obsidian rounded-lg font-sans text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-150 active:scale-95 shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Execute Next Step
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Model Selection Sandbox */}
      <div className="mb-12 pt-16 border-t border-[#1E1E24]">
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-mono text-[9px] text-copper tracking-widest uppercase">Decision Optimizer Sandbox</span>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
            LLM Selection Sandbox
          </h2>
          <p className="font-sans text-xs text-slate-gray mt-1">
            Input active constraints to recommend the perfect enterprise neural model and extract its custom integration blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Slider Panel Controls */}
          <div className="lg:col-span-5 bg-onyx/30 border border-[#1E1E24] p-6 rounded-2xl flex flex-col gap-6">
            
            {/* Input Selection */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] text-slate-gray uppercase">Active Scenario Use-Case</label>
              <select
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                className="w-full h-10 bg-[#0B0B0E] border border-[#1E1E24] text-alabaster text-xs rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-copper font-sans"
              >
                <option value="agentic">Recursive LangGraph State-Machine</option>
                <option value="rag">High-Density Multi-Doc Hybrid RAG</option>
                <option value="sql">Safe Natural Language to SQL Database</option>
                <option value="translation">High-Frequency REST Data Summarization</option>
              </select>
            </div>

            {/* Slider 1: Latency */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-mono text-[9px] text-slate-gray uppercase">
                <span>Latency Threshold</span>
                <span className="text-copper">{latencyWeight < 50 ? "Real-Time stream" : "Deep reasoning"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={latencyWeight}
                onChange={(e) => setLatencyWeight(Number(e.target.value))}
                className="w-full accent-copper"
              />
            </div>

            {/* Slider 2: Budget */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-mono text-[9px] text-slate-gray uppercase">
                <span>Budget & Resource Limit</span>
                <span className="text-copper">{budgetWeight < 50 ? "Strict cost quota" : "Unbounded logic"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={budgetWeight}
                onChange={(e) => setBudgetWeight(Number(e.target.value))}
                className="w-full accent-copper"
              />
            </div>

            {/* Slider 3: Accuracy */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-mono text-[9px] text-slate-gray uppercase">
                <span>Accuracy & Hallucination Guard</span>
                <span className="text-copper">{accuracyWeight > 60 ? "Absolute zero-tolerance" : "Creative latitude"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={accuracyWeight}
                onChange={(e) => setAccuracyWeight(Number(e.target.value))}
                className="w-full accent-copper"
              />
            </div>

            <button
              onClick={getRecommendation}
              disabled={recommending}
              className="w-full h-11 bg-alabaster hover:bg-white text-obsidian rounded-xl font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-95 disabled:opacity-55 shadow-md"
            >
              {recommending ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-obsidian" />
                  Running Neural Audits...
                </>
              ) : (
                <>
                  <Sliders className="w-4 h-4 text-obsidian" />
                  Recommend AI Engine Model
                </>
              )}
            </button>

          </div>

          {/* Recommendation Output Panel */}
          <div className="lg:col-span-7 bg-[#0B0B0E] border border-[#1E1E24] p-6 rounded-2xl min-h-[380px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-copper/10 to-transparent pointer-events-none" />
            
            {!recommendationResult && !recommending && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-slate-gray">
                <Sparkles className="w-10 h-10 text-copper/35 mb-4 animate-bounce" />
                <h4 className="font-display font-medium text-sm text-alabaster mb-1">Optimizer Standby</h4>
                <p className="font-sans text-xs max-w-sm leading-relaxed">Adjust the structural weight sliders and click Recommend to output deep mathematical model scoring and custom integration templates.</p>
              </div>
            )}

            {recommending && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-slate-gray">
                <RefreshCw className="w-8 h-8 text-copper animate-spin mb-4" />
                <h4 className="font-display font-medium text-sm text-alabaster mb-1">Scoring Neural Capabilities</h4>
                <p className="font-sans text-xs">Cross-referencing token pricing, context latency benchmarks, and parameter reasoning capacities...</p>
              </div>
            )}

            {recommendationResult && !recommending && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col gap-5 justify-between"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-copper tracking-widest uppercase">RECOMMENDED ENGINE</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] uppercase tracking-wider rounded-md">
                      {recommendationResult.suitability}% Match Accuracy
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-alabaster mt-2">{recommendationResult.model}</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-gray mt-2 leading-relaxed">{recommendationResult.desc}</p>
                </div>

                <div className="h-[1px] w-full bg-[#1E1E24]" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 bg-onyx/30 border border-[#1E1E24] rounded-xl">
                    <span className="font-mono text-[9px] text-slate-gray uppercase">Benchmarked Throughput</span>
                    <span className="block font-display text-sm font-semibold text-alabaster mt-1">{recommendationResult.speed} tokens/sec</span>
                  </div>
                  <div className="p-3.5 bg-onyx/30 border border-[#1E1E24] rounded-xl">
                    <span className="font-mono text-[9px] text-slate-gray uppercase">Estimated Operational Cost</span>
                    <span className="block font-sans text-[10px] font-semibold text-copper mt-1 break-all">{recommendationResult.cost}</span>
                  </div>
                </div>

                <div className="p-4 bg-onyx/50 border border-copper/10 rounded-xl">
                  <span className="font-mono text-[9px] text-copper uppercase tracking-wider block mb-1">Architecture Blueprint</span>
                  <p className="font-mono text-[10px] text-slate-gray leading-relaxed">{recommendationResult.blueprint}</p>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>

    </motion.div>
  );
}
