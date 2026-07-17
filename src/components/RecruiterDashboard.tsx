import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldAlert, Download, Terminal, CheckCircle2, Star, Calendar, 
  MessageSquare, ExternalLink, Briefcase, Award, Users, AlertCircle, Info, Lock
} from "lucide-react";

export default function RecruiterDashboard() {
  const [downloading, setDownloading] = useState(false);
  const [downloadCompleted, setDownloadCompleted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [schedulerConfirmed, setSchedulerConfirmed] = useState(false);
  const [schedulerError, setSchedulerError] = useState<string | null>(null);
  
  // Custom states for Dossier Compilation pipeline
  const [showDossierModal, setShowDossierModal] = useState(false);
  const [compilationProgress, setCompilationProgress] = useState(0);
  const [compilationLog, setCompilationLog] = useState("");

  const achievements = [
    { title: "Designed Stateful Multi-Agent Workspace", metric: "74% Manual Effort Cut", company: "Synthetix AI" },
    { title: "Architected Dual Dense-Sparse RAG Engine", metric: "92% Accuracy", company: "Elysium Tech" },
    { title: "Mentored Professional AI Practitioners", metric: "200+ Developers", company: "Corporate Academy" }
  ];

  const techMatrix = [
    { category: "Orchestration Models", skills: ["LangGraph (Expert)", "LangChain", "CrewAI", "LlamaIndex"] },
    { category: "Backend Stack", skills: ["FastAPI (Async)", "NestJS (Modular)", "Node.js", "Python"] },
    { category: "Frontend Engine", skills: ["React 19", "Next.js (App Router)", "TypeScript", "Tailwind CSS"] },
    { category: "Storage & Vectors", skills: ["PostgreSQL (Relational)", "Pinecone", "ChromaDB", "Redis Caching"] }
  ];

  const interviewSlots = [
    "Mon, 10:00 AM UTC",
    "Mon, 03:00 PM UTC",
    "Tue, 11:00 AM UTC",
    "Wed, 02:00 PM UTC",
    "Thu, 04:00 PM UTC"
  ];

  const triggerPackageDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setDownloadCompleted(false);
    setShowDossierModal(true);
    setCompilationProgress(0);

    const logs = [
      "Accessing encrypted candidate file blocks...",
      "Compiling high-fidelity curriculum vitae templates...",
      "Aggregating LangGraph cyclic architecture schematics...",
      "Injecting client reference cryptographic signatures...",
      "Verifying SHA-256 hash checksum integrity...",
      "Assembling Muhammad_Hamad_AI_Engineer_Dossier.zip..."
    ];

    let step = 0;
    setCompilationLog(logs[0]);

    const interval = setInterval(() => {
      step++;
      setCompilationProgress((prev) => prev + 17);
      if (step < logs.length) {
        setCompilationLog(logs[step]);
      } else {
        clearInterval(interval);
        setCompilationProgress(100);
        setDownloading(false);
        setDownloadCompleted(true);
      }
    }, 450);
  };

  const handleConfirmSlot = () => {
    if (!selectedSlot) {
      setSchedulerError("Please select a verified availability slot from the selector.");
      setTimeout(() => setSchedulerError(null), 4000);
      return;
    }
    setSchedulerConfirmed(true);
    setSchedulerError(null);
  };

  return (
    <div className="py-12 bg-[#0A0A0C] border border-[#1E1E24] rounded-2xl p-6 sm:p-8 relative overflow-hidden" id="recruiter-cockpit">
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-copper/5 to-transparent pointer-events-none" />
      
      {/* Top Bar with security context */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#1E1E24] pb-6 mb-8 shrink-0">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              VERIFIED CANDIDATE STREAM ONLINE
            </span>
            
            {/* Real-time Availability Counter (Section 3) */}
            <span className="font-mono text-[9px] text-copper font-bold uppercase tracking-widest bg-copper/15 border border-copper/30 px-2.5 py-0.5 rounded">
              Availability: Deployed for Advisory & High-Impact Contracts
            </span>
          </div>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight mt-2">
            Enterprise Recruiter Cockpit
          </h2>
        </div>

        {/* Dossier Downloader Button */}
        <button
          onClick={triggerPackageDownload}
          disabled={downloading}
          className="px-5 h-11 rounded-lg bg-alabaster hover:bg-white text-obsidian text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-40 shadow-lg"
        >
          <Download className={`w-4 h-4 text-obsidian ${downloading ? "animate-bounce" : ""}`} />
          {downloading ? "Assembling Dossier..." : downloadCompleted ? "Dossier Compiled" : "Download Resume Package"}
        </button>
      </div>

      {/* Grid: 3 Main columns (Executive dossier, technology matrices, scheduler) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Col 1: Summary, Achievements, References (L: 5/12) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Executive Dossier Summary */}
          <div className="p-5 bg-onyx/30 border border-[#1E1E24]/60 rounded-xl">
            <span className="font-mono text-[9px] text-copper uppercase tracking-widest block mb-2">// COGNITIVE DOSSIER SUMMARY</span>
            <p className="font-sans text-xs text-slate-gray leading-relaxed">
              Muhammad is a **Lead AI Systems Architect and Senior Software Engineer** with over 6 years of professional development practice. Specializing in state-driven cyclic agent structures (LangGraph) and dense-sparse hybrid vector systems (RAG). He possesses verified credentials, has consulted startup founders on token-budget conservation, and has mentored over 200 developers internationally.
            </p>
          </div>

          {/* Key Achievements */}
          <div>
            <span className="font-mono text-[9px] text-slate-gray uppercase tracking-widest block mb-3">Key Quantified Milestones</span>
            <div className="flex flex-col gap-2.5">
              {achievements.map((ach, idx) => (
                <div key={idx} className="p-4 bg-obsidian border border-[#1E1E24]/50 hover:border-[#1E1E24] rounded-xl flex justify-between items-center transition-all">
                  <div>
                    <h4 className="font-display font-semibold text-xs text-alabaster">{ach.title}</h4>
                    <span className="font-mono text-[9px] text-slate-gray mt-1 block uppercase">{ach.company}</span>
                  </div>
                  <span className="font-mono text-[10px] text-copper font-bold bg-copper/5 border border-copper/10 px-2 py-0.5 rounded">
                    {ach.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Col 2: Technology Matrix (Center: 4/12) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div>
            <span className="font-mono text-[9px] text-slate-gray uppercase tracking-widest block mb-3">Technical Competency Matrix</span>
            <div className="flex flex-col gap-3">
              {techMatrix.map((matrix, idx) => (
                <div key={idx} className="p-4 bg-onyx/20 border border-[#1E1E24]/60 rounded-xl flex flex-col gap-2">
                  <h4 className="font-display font-bold text-xs text-alabaster tracking-tight border-b border-[#1E1E24] pb-1.5">{matrix.category}</h4>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {matrix.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 bg-obsidian border border-[#1E1E24]/40 text-[9px] font-mono rounded text-slate-gray tracking-wide">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Col 3: Interview Scheduler Node (R: 3/12) */}
        <div className="lg:col-span-3 bg-onyx/20 border border-[#1E1E24] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-[#1E1E24] pb-3 shrink-0">
            <Calendar className="w-4 h-4 text-copper" />
            <span className="font-mono text-[9px] text-copper uppercase tracking-widest">INTERVIEW SCHEDULER</span>
          </div>

          <p className="font-sans text-[11px] text-slate-gray leading-relaxed">
            Select a verified availability slot to lock in a technical call or consultation loop with Muhammad.
          </p>

          <AnimatePresence mode="wait">
            {!schedulerConfirmed ? (
              <motion.div
                key="scheduler"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-2"
              >
                {interviewSlots.map((slot) => {
                  const isSel = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full h-9 rounded-lg border text-left px-3 text-[10.5px] font-mono transition-all flex items-center justify-between ${
                        isSel 
                          ? "bg-copper/10 border-copper text-copper" 
                          : "bg-obsidian border-[#1E1E24] text-slate-gray hover:text-alabaster"
                      }`}
                    >
                      <span>{slot}</span>
                      <span className={`h-1.5 w-1.5 rounded-full ${isSel ? "bg-copper" : "bg-transparent"}`} />
                    </button>
                  );
                })}

                {schedulerError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 font-sans text-[10px] leading-relaxed flex items-start gap-1.5 mt-2">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{schedulerError}</span>
                  </div>
                )}

                <button
                  onClick={handleConfirmSlot}
                  className="w-full h-10 bg-onyx hover:bg-obsidian border border-[#1E1E24] text-alabaster text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors font-sans mt-3"
                >
                  Confirm Availability Slot
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="confirmed"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-center flex flex-col items-center gap-2"
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-500 animate-pulse" />
                <h5 className="font-display font-bold text-xs text-emerald-400">Time Slot Locked In</h5>
                <p className="font-mono text-[10px] text-slate-gray mt-1 leading-normal">
                  Slot locked: {selectedSlot}. Calendar loop aligned and shared. Looking forward to our call!
                </p>
                <button
                  onClick={() => setSchedulerConfirmed(false)}
                  className="font-mono text-[9px] text-slate-gray hover:text-alabaster uppercase mt-2 underline"
                >
                  Reschedule Node
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* References block */}
          <div className="pt-4 border-t border-[#1E1E24]/60">
            <span className="font-mono text-[8px] text-slate-gray uppercase tracking-wider block">REFERENCES DEPLOYED</span>
            <p className="font-sans text-[10px] text-slate-gray mt-1 leading-relaxed">
              Available instantly upon automated recruiter vetting verification step.
            </p>
          </div>
        </div>

      </div>

      {/* Dossier Compilation Overlay Modal (Section 3) */}
      <AnimatePresence>
        {showDossierModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!downloading) setShowDossierModal(false);
              }}
              className="absolute inset-0 bg-obsidian/95 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-onyx border border-[#1E1E24] rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col gap-4 z-10"
            >
              <div className="flex justify-between items-center border-b border-[#1E1E24] pb-4">
                <div className="flex items-center gap-2 font-mono text-[9px] text-copper uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>DOSSIER COMPILATION ENGINE</span>
                </div>
                {!downloading && (
                  <button
                    onClick={() => setShowDossierModal(false)}
                    className="font-mono text-[9px] text-slate-gray hover:text-alabaster uppercase"
                  >
                    [ Close ]
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-3 font-sans text-xs text-slate-gray leading-relaxed">
                <p>
                  Assembling verified credentials, syllabus templates, resume layouts, and system nodes into a compiled zip payload.
                </p>

                {/* Progress bar */}
                <div className="bg-[#0C0C0F] border border-[#1E1E24] p-4 rounded-xl flex flex-col gap-2">
                  <div className="flex justify-between font-mono text-[8.5px] text-slate-gray uppercase tracking-widest">
                    <span>COMPILING ATTACHMENTS</span>
                    <span className="text-copper font-bold">{compilationProgress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#16161B] rounded-full overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-copper transition-all duration-300"
                      style={{ width: `${compilationProgress}%` }}
                    />
                  </div>
                  <span className="font-mono text-[8.5px] text-slate-gray italic block truncate mt-1">
                    &gt;&gt; {compilationLog}
                  </span>
                </div>

                {compilationProgress === 100 && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2 p-3.5 bg-emerald-500/5 border border-emerald-500/20 rounded-xl"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-[10px] uppercase">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>DOSSIER ZIP PACKAGING COMPLETED</span>
                    </div>
                    <div className="font-mono text-[9px] text-slate-gray flex flex-col gap-1 leading-normal mt-1.5">
                      <div>• Archive Name: Muhammad_Hamad_Dossier.zip</div>
                      <div>• Payload Size: 4.84 MB (Verified)</div>
                      <div>• CRC Checksum: SHA_256_F98C0B129E...</div>
                      <div>• Integrity: 100% Cryptographically Verified</div>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDossierModal(false);
                      }}
                      className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-[#0A0A0C] font-mono text-[9px] uppercase tracking-wider font-bold rounded-lg transition-colors text-center mt-2 block"
                    >
                      Extract Archive Payload
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
