import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Award, Shield, Milestone, Download, ChevronRight, CheckCircle2, RefreshCw, Terminal, Eye } from "lucide-react";
import { experiencesData } from "../data";
import HumanConnection from "./HumanConnection";
import CertificatesSection from "./CertificatesSection";

export default function AboutView() {
  const [activeJobId, setActiveJobId] = useState(experiencesData[0].id);
  const [compilingResume, setCompilingResume] = useState(false);
  const [resumeCompiled, setResumeCompiled] = useState(false);
  const [compiledLines, setCompiledLines] = useState<string[]>([]);

  const activeJob = experiencesData.find(job => job.id === activeJobId) || experiencesData[0];

  const operatingPrinciples = [
    {
      num: "01",
      title: "Rigor Over Convenience",
      desc: "Every agent workflow and retrieval system must undergo strict evaluation pipelines. We do not trust model promises; we test rate limits, input noise susceptibility, and extreme recursive edge-cases before shipping."
    },
    {
      num: "02",
      title: "AI as a System, Not Magic",
      desc: "We treat models as dynamic probabilistic components inside deterministic architectures. Security rules, schema sanitizers, semantic guardrails, and AST validators must sandwich every model integration."
    },
    {
      num: "03",
      title: "Authentic Pedagogy",
      desc: "True instruction stems from building. By teaching developers and teams real-world implementation architectures, we foster the next generation of engineers who understand token conservation, memory persistence, and scalability."
    }
  ];

  const triggerResumeCompile = () => {
    if (compilingResume) return;
    setCompilingResume(true);
    setResumeCompiled(false);
    setCompiledLines([]);

    const lines = [
      "INITIALIZING RESUME PARSER COMPILER...",
      "FETCHING SOURCE DATA FROM SECURE TRUSTED NODES...",
      "FORMATTING G-WORKSPACE & RESUME METADATA ARCHIVES...",
      "COMPILING MUHAMMAD HAMAD'S CREDENTIAL MATRIX...",
      "VERIFYING 6+ YEARS SOFTWARE ENGINEERING CERTIFICATION...",
      "GENERATING STANDALONE RAW DISPLAY GRID...",
      "SYSTEM ALIGNED: PREVIEW COMPILATION COMPLETED SUCCESSFULY."
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < lines.length) {
        setCompiledLines(prev => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);
        setCompilingResume(false);
        setResumeCompiled(true);
      }
    }, 200);
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
          <span>[ FILE: ABOUT_HAMAD.md ]</span>
          <span>•</span>
          <span>BIOGRAPHY</span>
        </div>
        <h1 className="font-display font-light text-4xl sm:text-5xl text-alabaster tracking-tight leading-none">
          Human Identity, <br />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster via-copper to-amber-500">
            Systemic Principles.
          </span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-2xl mt-2 leading-relaxed">
          The trajectory of my engineering path is driven by a simple goal: building highly robust bridges between cutting-edge LLM reasoning models and scalable, enterprise-grade full-stack systems.
        </p>
      </div>

      {/* Grid: Narrative Bio & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        <div className="lg:col-span-7 font-sans text-sm sm:text-base text-slate-gray leading-relaxed flex flex-col gap-6">
          <p>
            I began my journey as a traditional Full Stack Engineer, building robust web structures, designing scalable SQL schema migrations, and delivering highly performant React and Node.js user interfaces. I treated programming as an art of absolute determinism.
          </p>
          <p>
            When generative models took the industry by storm, I saw two major disconnects. First, developers treated complex LLMs as simple black boxes, wrapping API keys in flimsy prompts that collapsed in high-throughput production. Second, academic researchers engineered genius cognitive pipelines that remained locked inside isolated experimental Python scripts.
          </p>
          <p>
            My mission became clear: merging **systemic full-stack engineering with cognitive AI design**. I started designing cyclic multi-agent orchestrations with LangGraph and FastAPI, integrating strict semantic guardrails and memory persistence, and delivering these services safely inside beautiful, lightning-fast interfaces.
          </p>
          <p>
            Beyond architecting solutions for international startups, I am dedicated to **practitioner-led pedagogy**. Having mentored over 200 software developers internationally, I believe in demystifying AI engineering, ensuring developers can confidently write clean code that saves token costs, secures database connections, and scales flawlessly.
          </p>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="p-5 bg-onyx border border-[#1E1E24] rounded-xl flex flex-col justify-between h-[155px]">
            <Cpu className="w-5 h-5 text-copper" />
            <div>
              <div className="font-display text-2xl font-bold text-alabaster">6+ Years</div>
              <div className="font-mono text-[9px] text-slate-gray uppercase tracking-wider mt-1">Professional Practice</div>
            </div>
          </div>
          
          <div className="p-5 bg-onyx border border-[#1E1E24] rounded-xl flex flex-col justify-between h-[155px]">
            <Award className="w-5 h-5 text-copper" />
            <div>
              <div className="font-display text-2xl font-bold text-alabaster">200+</div>
              <div className="font-mono text-[9px] text-slate-gray uppercase tracking-wider mt-1">Alumni Mentored</div>
            </div>
          </div>

          <div className="p-5 bg-onyx border border-[#1E1E24] rounded-xl flex flex-col justify-between h-[155px] col-span-2">
            <Shield className="w-5 h-5 text-copper" />
            <div>
              <div className="font-display text-sm font-semibold text-alabaster">Enterprise Safety Focus</div>
              <p className="font-sans text-[11px] text-slate-gray mt-1.5 leading-relaxed">
                Specializing in AST SQL validations, sandboxed API runtimes, secure Google Workspace OAuth loops, and high-concurrency rate limit controllers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Human Connection Component */}
      <HumanConnection />

      {/* Core Operating Principles */}
      <div className="mb-24 pt-16 border-t border-[#1E1E24]">
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="font-mono text-[9px] text-copper tracking-widest uppercase">Operating Philosophies</span>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
            How I Think & Build
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operatingPrinciples.map((princ, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-onyx/45 border border-[#1E1E24]/60 rounded-xl hover:border-[#1E1E24] hover:bg-onyx/85 transition-all duration-300 flex flex-col gap-4 relative group"
            >
              <div className="font-mono text-xs text-copper font-medium">
                // {princ.num}
              </div>
              <h3 className="font-display font-medium text-base text-alabaster tracking-tight group-hover:text-copper transition-colors duration-200">
                {princ.title}
              </h3>
              <p className="font-sans text-xs text-slate-gray leading-relaxed">
                {princ.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Interactive Journey Milestone Timeline */}
      <div className="mb-24 pt-16 border-t border-[#1E1E24]">
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="font-mono text-[9px] text-copper tracking-widest uppercase">Career Timeline</span>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
            Professional Experience Axis
          </h2>
          <p className="font-sans text-xs text-slate-gray mt-1">
            Click on a milestone tab to unpack granular roles, architectural challenges, and technology blueprints.
          </p>
        </div>

        {/* Tab System for Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Job Selectors */}
          <div className="md:col-span-4 flex flex-col gap-2">
            {experiencesData.map((job) => {
              const isActive = activeJobId === job.id;
              return (
                <button
                  key={job.id}
                  onClick={() => setActiveJobId(job.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isActive 
                      ? "bg-copper/10 border-copper/40 text-alabaster shadow-md" 
                      : "bg-onyx/30 border-[#1E1E24]/50 text-slate-gray hover:text-alabaster hover:border-[#1E1E24]"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-xs font-semibold">{job.company}</span>
                    <span className="font-mono text-[9px] uppercase text-copper/85">{job.period}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? "text-copper rotate-90" : "text-slate-gray/40"}`} />
                </button>
              );
            })}
          </div>

          {/* Job Content Panel */}
          <div className="md:col-span-8 bg-onyx/30 border border-[#1E1E24] p-6 rounded-2xl relative overflow-hidden min-h-[300px]">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-copper/5 to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob.id}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col gap-4"
              >
                <div>
                  <h3 className="font-display font-medium text-lg text-alabaster">{activeJob.role}</h3>
                  <span className="font-mono text-xs text-copper">{activeJob.company} • {activeJob.period}</span>
                </div>

                <div className="h-[1px] w-full bg-[#1E1E24]" />

                <ul className="flex flex-col gap-3">
                  {activeJob.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-slate-gray leading-relaxed">
                      <span className="text-copper shrink-0 mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {activeJob.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-obsidian border border-[#1E1E24] text-[9px] font-mono rounded-md text-alabaster tracking-wider uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Compiled Credentials Terminal */}
      <div className="mb-12 pt-16 border-t border-[#1E1E24]">
        <div className="flex flex-col items-start gap-2 mb-8">
          <span className="font-mono text-[9px] text-copper tracking-widest uppercase">Credentials Engine</span>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
            Interactive Resume Compiler
          </h2>
        </div>

        <div className="bg-[#0B0B0E] border border-[#1E1E24] rounded-2xl overflow-hidden shadow-2xl">
          {/* Terminal Bar */}
          <div className="px-5 py-3 border-b border-[#1E1E24] flex items-center justify-between bg-onyx/20">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-copper" />
              <span className="font-mono text-[10px] text-slate-gray tracking-wider">compiler@mhamad-core ~ resume_generator.sh</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
          </div>

          <div className="p-6 font-mono text-[11px] text-slate-gray flex flex-col gap-4">
            <div>
              <p className="text-alabaster">$ ./compile_credentials_matrix.sh --format=raw</p>
              <p className="mt-1">Initializing secure credentials export channel...</p>
            </div>

            {/* Compiled Terminal Lines */}
            {compiledLines.length > 0 && (
              <div className="flex flex-col gap-1 border-l border-copper/30 pl-4 py-1 text-slate-gray">
                {compiledLines.map((line, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="text-copper font-bold">⚡</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions Panel */}
            <div className="mt-2 pt-4 border-t border-[#1E1E24]/60 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                {!resumeCompiled ? (
                  <p className="text-[10px] text-slate-gray/70 uppercase">Compile credentials stack to download or print credentials.</p>
                ) : (
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1.5 uppercase font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Credentials matrix successfully aligned
                  </p>
                )}
              </div>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={triggerResumeCompile}
                  disabled={compilingResume}
                  className="px-4 h-9 bg-onyx hover:bg-obsidian border border-[#1E1E24] text-alabaster text-xs rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-55"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-copper ${compilingResume ? "animate-spin" : ""}`} />
                  {compilingResume ? "Compiling..." : "Run Compiler"}
                </button>
                <button
                  onClick={() => {
                    alert("Generating secure resume snapshot: Muhammad Hamad - AI Engineer Resume.pdf has been compiled. You can use this portfolio layout or print directly (Cmd+P) to get a clean visual representation of this site.");
                  }}
                  disabled={!resumeCompiled}
                  className="px-4 h-9 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-35"
                >
                  <Download className="w-3.5 h-3.5 text-obsidian" />
                  Download Credentials
                </button>
              </div>
            </div>

            {/* Render Resume Preview if Compiled */}
            {resumeCompiled && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 bg-obsidian border border-[#1E1E24] rounded-xl text-alabaster flex flex-col gap-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">MUHAMMAD HAMAD</h3>
                    <p className="text-copper text-xs uppercase font-mono mt-0.5">Lead AI Architect & Senior Full Stack Software Engineer</p>
                  </div>
                  <div className="font-mono text-[10px] text-slate-gray text-right">
                    <p>EM: hamad@hamadshafiq.com</p>
                    <p>WA: +92 306 0647571</p>
                    <p>LI: linkedin.com/in/mhamad</p>
                    <p>LOC: Dallas, TX / Remote</p>
                  </div>
                </div>

                <div className="h-[1.5px] w-full bg-gradient-to-r from-copper/50 via-[#1E1E24] to-transparent" />

                <div>
                  <h4 className="text-[10px] text-copper uppercase font-mono tracking-widest mb-2">// PROFESSIONAL SUMMARY</h4>
                  <p className="font-sans text-xs text-slate-gray leading-relaxed">
                    Lead AI Architect and Senior Software Engineer with over 6 years of professional software engineering practice. Highly specialized in building cyclic, multi-agent frameworks using LangGraph and FastAPI, stateful retrieval systems (RAG) with reciprocal rank fusion, and modular, high-concurrency Node/TypeScript web platforms. Mentored 200+ developers internationally in production AI engineering.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[10px] text-copper uppercase font-mono tracking-widest mb-2">// TECHNICAL BLUEPRINT</h4>
                    <ul className="flex flex-col gap-1.5 font-sans text-xs text-slate-gray">
                      <li><strong>AI Orchestration:</strong> LangGraph, LangChain, LlamaIndex, OpenAI Structured Outputs</li>
                      <li><strong>Backends:</strong> Python, FastAPI, Node.js, NestJS, Express, REST/GraphQL</li>
                      <li><strong>Frontends:</strong> React, Next.js, TypeScript, Tailwind CSS, Recharts</li>
                      <li><strong>Infrastructure:</strong> PostgreSQL, Pinecone, Chroma, Docker, Redis, GCP Cloud Run</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] text-copper uppercase font-mono tracking-widest mb-2">// VERIFIED MILESTONES</h4>
                    <ul className="flex flex-col gap-1.5 font-sans text-xs text-slate-gray">
                      <li>Lead AI Architect & Senior Engineer (2022 - Present)</li>
                      <li>Senior Full Stack Engineer & Educator (2020 - 2022)</li>
                      <li>Full Stack Software Developer (2018 - 2020)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Certificates and Media Kit section */}
      <CertificatesSection />

    </motion.div>
  );
}
