import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Play, RotateCcw, Cpu, CpuIcon, CheckCircle2, ShieldAlert, Sparkles, Activity, FileCode } from "lucide-react";

interface NodeSpec {
  id: string;
  name: string;
  desc: string;
  status: "idle" | "running" | "success" | "warning";
  telemetry: string;
  code: string;
}

export default function Expertise() {
  const [activeNodeId, setActiveNodeId] = useState<string>("router");
  const [simulationState, setSimulationState] = useState<"idle" | "running" | "complete">("idle");
  const [activeStepIdx, setActiveStepIdx] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>(["[SYSTEM] Sandbox initialized. Click 'Run Simulation' to start trace."]);

  const nodes: NodeSpec[] = [
    {
      id: "query",
      name: "User Intent Parser",
      desc: "FastAPI router parsing natural language query into validated schema.",
      status: "idle",
      telemetry: "Latency: 12ms | Input Tokens: 48",
      code: `from fastapi import FastAPI, Depends
from pydantic import BaseModel, Field

app = FastAPI()

class UserIntent(BaseModel):
    query: str = Field(..., max_length=500)
    session_id: str
    
@app.post("/api/v1/intent")
async def parse_intent(payload: UserIntent):
    # Static type security and injection validation
    validated_query = sanitize_input(payload.query)
    return {"status": "parsed", "query": validated_query}`
    },
    {
      id: "cache",
      name: "Semantic Cache",
      desc: "Checks Redis and pgvector for mathematically similar historic queries to avoid model invocation costs.",
      status: "idle",
      telemetry: "Vector Threshold: >=0.96 | Savings: $0.004",
      code: `import { Redis } from 'ioredis';
import { Pinecone } from '@pinecone-database/pinecone';

export async function checkSemanticCache(vector: number[]) {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.Index('semantic-cache');
  
  const queryResult = await index.query({
    vector,
    topK: 1,
    includeMetadata: true
  });
  
  if (queryResult.matches[0]?.score >= 0.96) {
    return JSON.parse(queryResult.matches[0].metadata.response);
  }
  return null; // Cache Miss
}`
    },
    {
      id: "router",
      name: "LangGraph State Router",
      desc: "Orchestrates complex multi-agent flow, routing recursively through cyclic graphs until state conditions are met.",
      status: "idle",
      telemetry: "Orchestration Loops: 3 | Mode: Multi-Agent Cyclic",
      code: `import { StateGraph, END } from "@langchain/langgraph";

// Define strict state schema
interface AgentState {
  messages: string[];
  nextStep: string;
  verificationPass: boolean;
}

const workflow = new StateGraph<AgentState>()
  .addNode("supervisor", supervisorNode)
  .addNode("researcher", researcherNode)
  .addNode("validator", validatorNode)
  .addEdge("researcher", "validator")
  .addConditionalEdges("validator", (state) => {
    return state.verificationPass ? END : "researcher";
  });`
    },
    {
      id: "index",
      name: "Hybrid Vector Index",
      desc: "Dense (vector embedding) and sparse (keyword BM25) retrieval merged with Reciprocal Rank Fusion (RRF).",
      status: "idle",
      telemetry: "Merged Rows: 1,200 | Dense Weight: 0.7 | Sparse Weight: 0.3",
      code: `# Hierarchical RAG parsing and merging
from llama_index.core import VectorStoreIndex, QueryBundle

def hybrid_retrieve(query_str: str):
    query_bundle = QueryBundle(query_str)
    
    # Dense semantic search retrieval
    dense_results = dense_retriever.retrieve(query_bundle)
    # Sparse keyword retrieval
    sparse_results = sparse_retriever.retrieve(query_bundle)
    
    # Merge using Reciprocal Rank Fusion (RRF)
    final_nodes = rrf_merge(dense_results, sparse_results)
    return final_nodes`
    },
    {
      id: "guardrail",
      name: "Cognitive Guardrail",
      desc: "Validates final response for alignment, hallucinations, and injection attacks.",
      status: "idle",
      telemetry: "Safety Index: 1.00 | Cost Throttled: TRUE",
      code: `import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function evaluateGuardrails(output: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: \`Analyze output for safe semantic behavior: "\${output}"\`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          isSafe: { type: Type.BOOLEAN },
          score: { type: Type.NUMBER },
          reason: { type: Type.STRING }
        }
      }
    }
  });
  return JSON.parse(response.text);
}`
    }
  ];

  const simulationSteps = ["query", "cache", "router", "index", "guardrail"];

  const runSimulation = () => {
    if (simulationState === "running") return;
    
    setSimulationState("running");
    setActiveStepIdx(0);
    setActiveNodeId("query");
    setLogs(["[SYSTEM] Initiating cognitive trace run..."]);
    
    let step = 0;
    const interval = setInterval(() => {
      if (step >= simulationSteps.length - 1) {
        clearInterval(interval);
        setSimulationState("complete");
        setLogs(prev => [...prev, "[SYSTEM] Trace complete. Output state sanitized and validated. Latency: 980ms."]);
      } else {
        step++;
        setActiveStepIdx(step);
        const currentId = simulationSteps[step];
        setActiveNodeId(currentId);
        
        // Log generation based on step
        const stepLogs: Record<string, string[]> = {
          cache: [
            "[CACHE] Fetching Redis keys for session semantic embedding...",
            "[CACHE] Cosine similarity: 0.81 (Cache Miss). Invoking next router node."
          ],
          router: [
            "[ROUTER] LangGraph initialized with memory context.",
            "[ROUTER] Supervisor node spawning worker tasks...",
            "[ROUTER] Active agents: ResearchBot, DocumentExtractor."
          ],
          index: [
            "[INDEX] Querying Pinecone dense vector index (1536-dim)...",
            "[INDEX] Performing BM25 sparse lexical merge.",
            "[INDEX] Merged retrieval results via Reciprocal Rank Fusion."
          ],
          guardrail: [
            "[GUARD] Evaluating output against prompt injection guardrails...",
            "[GUARD] Self-correction checked. Quality: Approved. Toxicity: 0.00."
          ]
        };
        
        if (stepLogs[currentId]) {
          setLogs(prev => [...prev, ...stepLogs[currentId]]);
        }
      }
    }, 1500);
  };

  const resetSimulation = () => {
    setSimulationState("idle");
    setActiveStepIdx(-1);
    setActiveNodeId("router");
    setLogs(["[SYSTEM] Sandbox reset. Click 'Run Simulation' to start trace."]);
  };

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[2];

  return (
    <section className="py-24 bg-obsidian relative" id="expertise">
      <div className="w-[92%] max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
            <span>[ SECTION.03 ]</span>
            <span>•</span>
            <span>Cognitive Architectures</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight">
            Interactive <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">Agent Sandbox.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-gray max-w-2xl leading-relaxed mt-2">
            Click on active blueprint nodes below to explore their specific runtime code and telemetry outputs, or trigger the live simulator loop to watch a sample client request flow dynamically.
          </p>
        </div>

        {/* Sandbox Simulator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: The Visual Node Map Canvas */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-onyx/40 border border-[#1E1E24] rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm h-[420px] flex flex-col justify-between">
              
              {/* Controls */}
              <div className="flex items-center justify-between border-b border-[#1E1E24] pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-copper"></span>
                  </span>
                  <span className="font-mono text-[10px] text-alabaster tracking-wider uppercase">Active Live Sandbox</span>
                </div>
                
                <div className="flex gap-2">
                  {simulationState !== "running" ? (
                    <button 
                      onClick={runSimulation}
                      className="h-8 px-3 rounded-lg bg-alabaster hover:bg-white text-obsidian font-mono text-[10px] font-medium flex items-center gap-1.5 transition-all duration-200"
                    >
                      <Play className="w-3 h-3 fill-obsidian" />
                      Run Simulation
                    </button>
                  ) : (
                    <div className="h-8 px-3 rounded-lg bg-onyx border border-copper/40 text-copper font-mono text-[10px] flex items-center gap-1.5">
                      <Activity className="w-3 h-3 animate-spin" />
                      Running Trace
                    </div>
                  )}
                  
                  <button 
                    onClick={resetSimulation}
                    disabled={simulationState === "running"}
                    className="h-8 px-3 rounded-lg border border-[#1E1E24] hover:bg-onyx/40 text-slate-gray hover:text-alabaster font-mono text-[10px] flex items-center gap-1.5 transition-all duration-200 disabled:opacity-30"
                    aria-label="Reset simulation"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                </div>
              </div>

              {/* Node Layout Blueprint Grid */}
              <div className="relative flex-grow flex items-center justify-center py-6">
                <div className="w-full max-w-lg grid grid-cols-5 gap-3 items-center relative z-10">
                  {nodes.map((node, idx) => {
                    const isNodeActiveInSimulation = simulationSteps[activeStepIdx] === node.id;
                    const isSelected = activeNodeId === node.id;
                    
                    return (
                      <div key={node.id} className="flex flex-col items-center gap-2 relative">
                        {/* Connecting Line Vector Indicator */}
                        {idx < nodes.length - 1 && (
                          <div className="absolute top-1/2 left-[calc(100%-8px)] w-[calc(100%-8px)] h-[1px] bg-[#1E1E24] z-0 hidden sm:block">
                            <div className={`h-full bg-copper transition-all duration-1000 ${
                              activeStepIdx >= idx ? "w-full" : "w-0"
                            }`} />
                          </div>
                        )}

                        <button
                          onClick={() => simulationState !== "running" && setActiveNodeId(node.id)}
                          disabled={simulationState === "running"}
                          className={`w-12 h-12 rounded-xl flex items-center justify-center z-10 transition-all duration-300 relative border ${
                            isNodeActiveInSimulation 
                              ? "bg-copper border-copper shadow-[0_0_16px_rgba(194,120,3,0.4)] scale-110" 
                              : isSelected
                                ? "bg-onyx border-copper text-copper"
                                : "bg-obsidian border-[#1E1E24] text-slate-gray hover:text-alabaster hover:border-[#2E2E38]"
                          }`}
                        >
                          <span className="font-mono text-xs font-semibold">{idx + 1}</span>
                          
                          {/* Pulsing indicator if currently selected manually */}
                          {isSelected && simulationState === "idle" && (
                            <span className="absolute -top-1 -right-1 flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper/60 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-copper"></span>
                            </span>
                          )}
                        </button>
                        
                        <span className={`font-mono text-[8px] text-center max-w-[80px] leading-tight ${
                          isSelected ? "text-alabaster font-medium" : "text-slate-gray"
                        }`}>
                          {node.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Console logs output */}
              <div className="bg-obsidian border border-[#1E1E24] rounded-lg p-3 h-[110px] overflow-y-auto font-mono text-[9px] text-[#A3E635] flex flex-col gap-1 select-none">
                {logs.map((log, index) => (
                  <div key={index} className="leading-relaxed">
                    <span className="text-slate-gray mr-1">&gt;</span>
                    {log}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right: Telemetry & Active Code Snippet Block */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-onyx/40 border border-[#1E1E24] rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm flex flex-col justify-between min-h-[420px]">
              
              <div>
                {/* Node details */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-onyx border border-[#1E1E24] rounded-lg">
                    <FileCode className="w-4 h-4 text-copper" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-sm text-alabaster leading-none">{activeNode.name}</h4>
                    <span className="font-mono text-[8px] text-slate-gray uppercase tracking-wider">{activeNode.telemetry}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-slate-gray leading-relaxed mb-4">
                  {activeNode.desc}
                </p>

                {/* Simulated Editor Code Block */}
                <div className="relative border border-[#1E1E24] rounded-lg bg-obsidian overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-onyx border-b border-[#1E1E24] font-mono text-[8px] text-slate-gray">
                    <span>Active Script Implementation</span>
                    <span className="text-copper">muhammad_hamad.ts</span>
                  </div>
                  <pre className="p-4 text-[9px] font-mono text-slate-gray leading-normal overflow-x-auto max-h-[220px]">
                    <code>{activeNode.code}</code>
                  </pre>
                </div>
              </div>

              <div className="border-t border-[#1E1E24] pt-4 mt-4 flex items-center justify-between font-mono text-[8px] text-slate-gray">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-copper" />
                  PROD QUALITY SECURED
                </span>
                <span>STATE SAFE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Section 6 AI Technology Matrix */}
        <div className="pt-16 mt-16 border-t border-[#1E1E24]/60">
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col">
              <span className="font-mono text-[8px] text-copper uppercase tracking-wider">// SKILLSET CATALOG</span>
              <h3 className="font-display font-light text-xl text-alabaster tracking-tight mt-0.5">Core AI Technology Matrix</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "LLMs Integration", desc: "Fine-tuning & prompting" },
              { name: "LangChain", desc: "Modular agent chains" },
              { name: "LangGraph", desc: "State-driven cyclic machines" },
              { name: "Hybrid RAG", desc: "Dense-sparse vector search" },
              { name: "AI Agents", desc: "Autonomous self-correcting units" },
              { name: "FastAPI", desc: "Asynchronous API gateways" },
              { name: "Python Core", desc: "Model orchestrations" },
              { name: "OpenAI Models", desc: "GPT-4o structured outputs" },
              { name: "Claude API", desc: "Sonnet analytical reasoning" },
              { name: "Gemini SDK", desc: "Multimodal & Live API nodes" },
              { name: "Vector Databases", desc: "Pinecone, Chroma, pgvector" },
              { name: "Prompt Engineering", desc: "Few-shot structured templates" }
            ].map((skill, i) => (
              <div 
                key={i} 
                className="p-4 bg-onyx/25 border border-[#1E1E24]/60 hover:border-copper/40 rounded-xl transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="font-display font-medium text-xs text-alabaster group-hover:text-copper transition-colors">
                  {skill.name}
                </div>
                <div className="font-mono text-[8.5px] text-slate-gray mt-1 uppercase tracking-tight">
                  {skill.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
