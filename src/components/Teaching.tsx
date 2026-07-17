import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { coursesData } from "../data";
import { BookOpen, Calendar, Clock, ChevronRight, GraduationCap, CheckCircle2, Milestone, ArrowRight } from "lucide-react";

type PathType = "frontend" | "backend" | "student";

export default function Teaching() {
  const [selectedCourseId, setSelectedCourseId] = useState<string>("advanced-ai-agents");
  const [roadmapPath, setRoadmapPath] = useState<PathType>("frontend");

  const selectedCourse = coursesData.find(c => c.id === selectedCourseId) || coursesData[0];

  const roadmaps: Record<PathType, {
    title: string;
    desc: string;
    steps: { name: string; focus: string; duration: string }[];
  }> = {
    frontend: {
      title: "The Frontend to AI Architect Path",
      desc: "For engineers who understand React/TypeScript and want to transition into building robust backend cognitive engines.",
      steps: [
        { name: "Python & FastAPI Gateway Services", focus: "Async API design, CORS proxies, schema validation with Pydantic", duration: "Weeks 1-2" },
        { name: "Model Embeddings & Vector Search", focus: "Cosine calculations, Pinecone queries, hybrid dense-sparse indices", duration: "Weeks 3-4" },
        { name: "State Graph Orchestration", focus: "Building recursive state machines and conditional routes with LangGraph", duration: "Weeks 5-6" },
        { name: "Streaming Delivery & SSE", focus: "Connecting Server-Sent Events (SSE) to Next.js Client loaders", duration: "Weeks 7-8" }
      ]
    },
    backend: {
      title: "The Backend to Cognitive Systems Path",
      desc: "For engineers who understand relational schemas/microservices and want to master stateful multi-agent pipelines.",
      steps: [
        { name: "Hierarchical Document Parsing", focus: "LlamaIndex loaders, markdown split patterns, parent-child metadata filters", duration: "Weeks 1-2" },
        { name: "Dense-Sparse RRF Integration", focus: "Reciprocal Rank Fusion indexes, cross-encoder semantic re-ranking models", duration: "Weeks 3-4" },
        { name: "Complex Multi-Agent Supervisor Workflows", focus: "Cyclic routing, system error recovery loops, token budgeting limits", duration: "Weeks 5-6" },
        { name: "System Observability", focus: "LangSmith tracer spans, semantic cache pgvector triggers, latency logging", duration: "Weeks 7-8" }
      ]
    },
    student: {
      title: "The Foundation Scholar to AI Practitioner Path",
      desc: "For computer science scholars or junior developers looking to build a secure foundational engineering baseline.",
      steps: [
        { name: "Python Core & Mathematical Foundations", focus: "NumPy, Pandas, matrices, linear vector dimensions, token systems", duration: "Weeks 1-2" },
        { name: "Vector Indexing & Simple Dense RAG", focus: "Creating simple query loaders, chunk strategies, OpenAI prompt assembly", duration: "Weeks 3-4" },
        { name: "Tool Invocation & Structured Outputs", focus: "Few-shot instructions, schema enforcement, validating JSON schemas", duration: "Weeks 5-6" },
        { name: "Turnkey Project Deployment", focus: "Containerizing services with Docker, deploying to Cloud Run, CI/CD pipelines", duration: "Weeks 7-8" }
      ]
    }
  };

  const activeRoadmap = roadmaps[roadmapPath];

  return (
    <section className="py-24 bg-obsidian relative border-b border-[#1E1E24]/60" id="teaching">
      <div className="w-[92%] max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
            <span>[ SECTION.05 ]</span>
            <span>•</span>
            <span>Academy & Mentorship</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight">
            Practitioner-Led <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">Pedagogy.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-gray max-w-2xl leading-relaxed mt-2">
            I don't teach abstract theories. I teach the precise software designs, token cost controls, and debugging practices that I deploy for active client projects today.
          </p>
        </div>

        {/* Course Syllabus Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left: Course Selection & Overview */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-mono text-[10px] text-slate-gray uppercase tracking-widest border-b border-[#1E1E24] pb-2 w-full">Available Curricula</span>
            <div className="flex flex-col gap-3">
              {coursesData.map((course) => {
                const isSelected = selectedCourseId === course.id;
                return (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourseId(course.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected 
                        ? "bg-onyx border-copper/40 shadow-[0_4px_16px_rgba(0,0,0,0.4)]" 
                        : "bg-[#121216]/20 border-[#1E1E24]/40 hover:border-[#1E1E24] hover:bg-onyx/40"
                    }`}
                  >
                    <div className="flex flex-col gap-1.5">
                      <span className="font-mono text-[8px] text-copper tracking-wider uppercase">
                        {course.badge}
                      </span>
                      <h4 className={`font-display font-medium text-sm transition-colors ${
                        isSelected ? "text-alabaster" : "text-slate-gray hover:text-alabaster"
                      }`}>
                        {course.title}
                      </h4>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-copper translate-x-1" : "text-slate-gray"
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Syllabus Expansion Sheet */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-onyx/40 border border-[#1E1E24] rounded-2xl relative overflow-hidden backdrop-blur-sm flex flex-col justify-between min-h-[400px]">
              
              <div>
                <div className="flex items-center justify-between border-b border-[#1E1E24] pb-4 mb-6">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-gray uppercase">
                    <GraduationCap className="w-4 h-4 text-copper" />
                    <span>Syllabus breakdown</span>
                  </div>
                  <div className="flex gap-4 font-mono text-[8px] text-slate-gray">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-copper" /> {selectedCourse.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-copper" /> {selectedCourse.modulesCount} Modules</span>
                  </div>
                </div>

                <h3 className="font-display font-medium text-base text-alabaster tracking-tight mb-2">
                  {selectedCourse.title}
                </h3>
                <p className="font-sans text-xs text-slate-gray leading-relaxed mb-6">
                  {selectedCourse.description}
                </p>

                {/* Modules Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCourse.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 bg-obsidian/45 border border-[#1E1E24]/60 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                      <span className="font-sans text-[11px] text-slate-gray leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#1E1E24] pt-4 mt-6 flex items-center justify-between font-mono text-[8px] text-slate-gray">
                <span>ACADEMY CERTIFICATION VERIFIED</span>
                <span className="text-copper font-medium uppercase tracking-wider">{selectedCourse.level} focus</span>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Wow Factor: Roadmap Builder */}
        <div className="pt-16 border-t border-[#1E1E24]/60 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-onyx/30 border border-[#1E1E24] p-6 sm:p-8 rounded-2xl">
            
            {/* Roadmap copy and triggers */}
            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <span className="font-mono text-[9px] text-copper tracking-widest uppercase">[ TOOL.01 ] • Personalized Pathfinder</span>
              <h3 className="font-display font-light text-xl text-alabaster tracking-tight leading-snug">
                Configure Your <br />
                <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">AI Transition Roadmap.</span>
              </h3>
              <p className="font-sans text-xs text-slate-gray leading-relaxed">
                Select your current baseline background to dynamically build a personalized structural curriculum designed to fast-track your modern AI Engineering transition.
              </p>

              {/* Selector Tabs */}
              <div className="flex flex-col gap-2 w-full mt-2">
                {([
                  { id: "frontend", label: "Frontend Coder" },
                  { id: "backend", label: "Backend Architect" },
                  { id: "student", label: "CS Scholar" }
                ] as const).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setRoadmapPath(tab.id)}
                    className={`h-9 px-4 rounded-lg font-mono text-[9px] text-left uppercase tracking-wider border transition-all duration-200 ${
                      roadmapPath === tab.id
                        ? "bg-copper border-copper text-alabaster font-semibold"
                        : "bg-obsidian border-[#1E1E24] text-slate-gray hover:text-alabaster"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rendered Roadmap Timeline output */}
            <div className="md:col-span-7">
              <div className="bg-obsidian/60 border border-[#1E1E24] p-6 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col border-b border-[#1E1E24]/60 pb-3">
                  <h4 className="font-display font-medium text-xs text-alabaster">{activeRoadmap.title}</h4>
                  <p className="font-sans text-[11px] text-slate-gray mt-0.5 leading-relaxed">{activeRoadmap.desc}</p>
                </div>

                {/* Timeline flow */}
                <div className="grid grid-cols-1 gap-4">
                  {activeRoadmap.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start relative pl-2">
                      <div className="font-mono text-[9px] text-copper font-semibold mt-1 shrink-0 w-12">
                        {step.duration}
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <Milestone className="w-3 h-3 text-copper shrink-0" />
                          <h5 className="font-display font-medium text-xs text-alabaster">{step.name}</h5>
                        </div>
                        <p className="font-sans text-[10px] text-slate-gray mt-0.5 leading-relaxed">{step.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#1E1E24]/60 pt-3 mt-1 flex justify-end">
                  <a href="#consultation" className="font-mono text-[8px] text-copper hover:text-alabaster flex items-center gap-1.5 transition-colors uppercase tracking-wider">
                    Apply for Core Mentorship
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
