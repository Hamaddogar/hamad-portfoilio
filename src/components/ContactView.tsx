import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal as TerminalIcon, ShieldCheck, Mail, ArrowRight, Check, Loader, Calendar, Clock, Sparkles } from "lucide-react";

type InquiryType = "consulting" | "hire" | "mentorship";

export default function ContactView() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("consulting");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [schedulerError, setSchedulerError] = useState<string | null>(null);
  
  // Form values state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$10k - $25k",
    timeline: "Immediate (< 1 month)",
    roleLevel: "Senior AI Engineer",
    techStack: "React + Python/FastAPI",
    skillsBaseline: "Mid-level Engineer",
    description: ""
  });

  // Calendar slot picker state
  const [consultationType, setConsultationType] = useState("Custom AI Build Evaluation");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [slotConfirmed, setSlotConfirmed] = useState(false);

  // CLI Terminal state
  const [cliInput, setCliInput] = useState("");
  const [cliLogs, setCliLogs] = useState<string[]>([
    "MUHAMMAD HAMAD - AUTONOMOUS PROXY V1.2",
    "Type 'help' to see available operational command routines.",
    ""
  ]);
  const cliScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cliScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cliLogs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (formError) {
      setFormError(null);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setFormError("All fields marked with an asterisk (*) are strictly required.");
      return;
    }
    setFormError(null);
    setIsSubmitting(true);
    
    // Simulate high-performance API container processing
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Log submission inside the CLI Terminal as well!
      setCliLogs(prev => [
        ...prev,
        `⚡ [SYSTEM REPORT]: Incoming inquiry packet from ${formData.name} (<${formData.email}>) compiled and routed to active channels.`
      ]);
    }, 1500);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormError(null);
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "$10k - $25k",
      timeline: "Immediate (< 1 month)",
      roleLevel: "Senior AI Engineer",
      techStack: "React + Python/FastAPI",
      skillsBaseline: "Mid-level Engineer",
      description: ""
    });
  };

  const executeCliCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    setCliLogs(prev => [...prev, `guest@mhamad-core:~$ ${cliInput}`]);

    switch (cmd) {
      case "help":
        response = `AVAILABLE OPERATIONAL ROUTINES:
  help      - Displays this diagnostic command index.
  about     - Outputs Muhammad's concise technical summary.
  skills    - Traces core AI orchestration & full-stack matrix.
  projects  - Summarizes primary enterprise case studies.
  hire      - Unpacks direct scheduling & email contact details.
  clear     - Recycles terminal stdout buffer.`;
        break;
      case "about":
        response = `MUHAMMAD HAMAD - PROFILE ABSTRACT:
  Lead AI Architect & Senior Software Engineer with over 6 years of professional practice. 
  Specializes in state-driven cyclic architectures using LangGraph, high-density 
  information retrieval (RAG) indices, and async high-concurrency Python/TypeScript backends.`;
        break;
      case "skills":
        response = `COGNITIVE TECH STACK BLUEPRINT:
  AI & Graph Logic: LangGraph, LangChain, LlamaIndex, OpenAI Outputs, Prompt Reflection.
  Core Backend:     Python (FastAPI), TypeScript, Node.js (NestJS, Express), Docker, Redis.
  Databases:        PostgreSQL (pgvector), Pinecone, Chroma, MongoDB.`;
        break;
      case "projects":
        response = `PRIMARY ACTIVE REPORT RECORDS:
  1. COGNITIVE AGENT WORKSPACE     - LangGraph state-aware supervisor loop. (74% work reduction)
  2. ENTERPRISE HYBRID RAG PLATFORM - Dense/Sparse Reciprocal Rank Fusion indexing. (92% recall)
  3. INTELLIGENT SQL ANALYTICS      - AST syntax validated NL-to-SQL translator engine.`;
        break;
      case "hire":
        response = `INSTRUCTIONS FOR RETENTION & COLLABORATION:
  - To schedule a custom discovery build consultation, use the active scheduler panel.
  - For hiring audits: EM: hamad@hamadshafiq.com | WA: +92 306 0647571 | LOC: Remote / Dallas, TX.`;
        break;
      case "clear":
        setCliLogs([]);
        setCliInput("");
        return;
      default:
        response = `Error: CLI Command '${cmd}' unrecognized. Type 'help' to audit available commands.`;
        break;
    }

    setCliLogs(prev => [...prev, response, ""]);
    setCliInput("");
  };

  const handleSlotConfirm = () => {
    if (!selectedDate || !selectedTime) {
      setSchedulerError("Please select both a valid date and time slot to allocate resources.");
      return;
    }
    setSchedulerError(null);
    setSlotConfirmed(true);
    // Push slot information to CLI
    setCliLogs(prev => [
      ...prev,
      `⏰ [CALENDAR SUCCESS]: Booked slot for ${consultationType} on 2026-07-${selectedDate} at ${selectedTime}. Session token logged.`
    ]);
  };

  const dates = ["20", "21", "22", "23", "24"];
  const times = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

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
          <span>[ FILE: DISCOVERY_PORTAL.ts ]</span>
          <span>•</span>
          <span>CONSULTATION & INTAKE</span>
        </div>
        <h1 className="font-display font-light text-4xl sm:text-5xl text-alabaster tracking-tight leading-none">
          Initiate Collaboration, <br />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster via-copper to-amber-500">
            Build Modern Infrastructure.
          </span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-2xl mt-2 leading-relaxed">
          Establish a high-intent communication link. Pick an inquiry category, explore scheduling calendar slots, or query my autonomous command terminal proxy directly.
        </p>
      </div>

      {/* Grid: Form & Scheduler */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Multi-Step Intake Form */}
        <div className="lg:col-span-7 bg-onyx/30 border border-[#1E1E24] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[460px]">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-5 w-full"
              >
                {/* Inquiry Category Selector Tabs */}
                <div className="grid grid-cols-3 gap-2 border-b border-[#1E1E24] pb-4">
                  {([
                    { id: "consulting", label: "Consulting" },
                    { id: "hire", label: "Hiring Manager" },
                    { id: "mentorship", label: "Mentorship" }
                  ] as const).map((tab) => {
                    const isActive = inquiryType === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setInquiryType(tab.id)}
                        className={`h-9 rounded-lg font-mono text-[8px] sm:text-[9px] uppercase tracking-wider border transition-all duration-200 ${
                          isActive
                            ? "bg-copper border-copper text-alabaster font-semibold"
                            : "bg-obsidian border-[#1E1E24]/60 text-slate-gray hover:text-alabaster"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Shared Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-mono text-[9px] text-slate-gray uppercase">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-mono text-[9px] text-slate-gray uppercase">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@firm.com"
                      className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors"
                    />
                  </div>
                </div>

                {/* Adaptive Inputs Based on Tab */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={inquiryType}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {inquiryType === "consulting" && (
                      <>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="company" className="font-mono text-[9px] text-slate-gray uppercase">Company Name</label>
                          <input
                            id="company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Quantum Labs"
                            className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="budget" className="font-mono text-[9px] text-slate-gray uppercase">Budget Scope</label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none"
                          >
                            <option>$5k - $10k</option>
                            <option>$10k - $25k</option>
                            <option>$25k - $50k</option>
                            <option>$50k+</option>
                          </select>
                        </div>
                      </>
                    )}

                    {inquiryType === "hire" && (
                      <>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="company-hire" className="font-mono text-[9px] text-slate-gray uppercase">Organization</label>
                          <input
                            id="company-hire"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Stripe, Vercel"
                            className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="roleLevel" className="font-mono text-[9px] text-slate-gray uppercase">Target Role Level</label>
                          <select
                            id="roleLevel"
                            name="roleLevel"
                            value={formData.roleLevel}
                            onChange={handleInputChange}
                            className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none"
                          >
                            <option>Senior AI Engineer</option>
                            <option>AI Systems Architect</option>
                            <option>Director of Generative AI</option>
                          </select>
                        </div>
                      </>
                    )}

                    {inquiryType === "mentorship" && (
                      <>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="skillsBaseline" className="font-mono text-[9px] text-slate-gray uppercase">Current Skill Level</label>
                          <select
                            id="skillsBaseline"
                            name="skillsBaseline"
                            value={formData.skillsBaseline}
                            onChange={handleInputChange}
                            className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none"
                          >
                            <option>Junior Software Developer</option>
                            <option>Mid-level Engineer</option>
                            <option>Senior Engineer (Non-AI)</option>
                            <option>CS Academic Student</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="timeline" className="font-mono text-[9px] text-slate-gray uppercase">Desired Cohort</label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none"
                          >
                            <option>Immediate (Q3 2026)</option>
                            <option>Next Cohort (Q4 2026)</option>
                          </select>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Project details area */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="description" className="font-mono text-[9px] text-slate-gray uppercase">Inquiry Outline Details *</label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your goals, tech stack, and key constraints."
                    className="p-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors resize-none"
                  />
                </div>

                {formError && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-xs text-red-400 font-mono flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                    <span>{formError}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 w-full bg-alabaster hover:bg-white text-obsidian rounded-lg font-sans font-medium text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin text-obsidian" />
                      Encrypting & Transmitting Payload...
                    </>
                  ) : (
                    <>
                      Transmit Discovery Request
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-grow flex flex-col items-center justify-center text-center p-8 gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-onyx border border-copper/30 flex items-center justify-center text-copper shadow-[0_0_16px_rgba(194,120,3,0.15)]">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-copper tracking-widest uppercase">TRANSMISSION ESTABLISHED</span>
                  <h3 className="font-display font-medium text-lg text-alabaster mt-1">Discovery Packet Handshake Complete</h3>
                  <p className="font-sans text-xs text-slate-gray max-w-sm leading-relaxed mt-2">
                    Inquiry submitted successfully. Muhammad Hamad will follow up in less than 12 hours via direct channels.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-4 h-9 rounded-lg border border-[#1E1E24] hover:bg-onyx/40 text-slate-gray hover:text-alabaster font-mono text-[9px] uppercase tracking-wider transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Live Slot Calendar Picker */}
        <div className="lg:col-span-5 bg-onyx/30 border border-[#1E1E24] rounded-2xl p-6 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-copper/5 to-transparent pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {!slotConfirmed ? (
              <motion.div
                key="picker"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5 h-full justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase mb-1">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>SECURE SCHEDULER WIDGET</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-alabaster">Book Advisory Consultation</h3>
                  
                  {/* Selector type */}
                  <div className="mt-4 flex flex-col gap-1.5">
                    <label className="font-mono text-[8px] text-slate-gray uppercase">Consultation Blueprint Type</label>
                    <select
                      value={consultationType}
                      onChange={(e) => setConsultationType(e.target.value)}
                      className="w-full h-9 bg-obsidian border border-[#1E1E24] text-alabaster text-xs rounded-lg px-2.5 focus:outline-none"
                    >
                      <option>Custom AI Build Evaluation</option>
                      <option>Startup Technical Advisory Auditing</option>
                      <option>1-on-1 Mentorship Pathfinder Session</option>
                    </select>
                  </div>

                  {/* Dates Picker */}
                  <div className="mt-5">
                    <span className="font-mono text-[8px] text-slate-gray uppercase tracking-wider block mb-2">Select Date (July 2026)</span>
                    <div className="grid grid-cols-5 gap-2">
                      {dates.map(date => {
                        const isSel = selectedDate === date;
                        return (
                          <button
                            key={date}
                            onClick={() => {
                              setSelectedDate(date);
                              if (schedulerError) setSchedulerError(null);
                            }}
                            className={`h-9 rounded-lg border text-xs font-semibold font-mono transition-all ${
                              isSel ? "bg-copper border-copper text-alabaster" : "bg-obsidian border-[#1E1E24] text-slate-gray hover:text-alabaster"
                            }`}
                          >
                            {date}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Times Picker */}
                  <div className="mt-5">
                    <span className="font-mono text-[8px] text-slate-gray uppercase tracking-wider block mb-2">Select Time Slot (EST)</span>
                    <div className="grid grid-cols-2 gap-2">
                      {times.map(time => {
                        const isSel = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              if (schedulerError) setSchedulerError(null);
                            }}
                            className={`h-9 rounded-lg border text-xs font-semibold font-mono transition-all ${
                              isSel ? "bg-copper border-copper text-alabaster" : "bg-obsidian border-[#1E1E24] text-slate-gray hover:text-alabaster"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {schedulerError && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-xs text-red-400 font-mono flex items-center gap-2 mt-4"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                    <span>{schedulerError}</span>
                  </motion.div>
                )}

                <button
                  onClick={handleSlotConfirm}
                  className="w-full h-10 bg-onyx hover:bg-obsidian border border-[#1E1E24] text-alabaster text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors font-sans mt-4"
                >
                  <Clock className="w-4 h-4 text-copper" />
                  Request Booking Slot
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-grow flex flex-col justify-center items-center text-center p-6 gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-onyx border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-emerald-400 tracking-widest uppercase font-semibold">RESERVATION REQUESTED</span>
                  <h4 className="font-display font-bold text-sm text-alabaster mt-1">Slot Buffered Successfully</h4>
                  <p className="font-sans text-xs text-slate-gray max-w-xs mt-2 leading-relaxed">
                    Requested <strong>{consultationType}</strong> on July {selectedDate} at {selectedTime} EST. The confirmation link has been injected into your browser instance and stdout terminal reports.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSlotConfirmed(false);
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className="px-3.5 h-8 bg-onyx border border-[#1E1E24] text-slate-gray hover:text-alabaster rounded font-mono text-[8.5px] uppercase"
                >
                  Modify Reservation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Autonomous CLI Command Console Terminal Proxy */}
      <div className="pt-16 border-t border-[#1E1E24]">
        <div className="flex flex-col items-start gap-2 mb-8">
          <span className="font-mono text-[9px] text-copper tracking-widest uppercase">System Terminal Console</span>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
            Hamad Autonomous CLI Agent
          </h2>
          <p className="font-sans text-xs text-slate-gray mt-1">
            Type diagnostic commands to search portfolios, query credentials pipelines, and check system specifications directly.
          </p>
        </div>

        <div className="bg-[#0B0B0E] border border-[#1E1E24] rounded-2xl overflow-hidden shadow-2xl">
          {/* Top terminal bar */}
          <div className="px-5 py-3 border-b border-[#1E1E24] flex items-center justify-between bg-onyx/20">
            <div className="flex items-center gap-1.5">
              <TerminalIcon className="w-4 h-4 text-copper" />
              <span className="font-mono text-[10px] text-slate-gray tracking-wider">guest@mhamad-core ~ command_terminal.sh</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
          </div>

          {/* Logs terminal box */}
          <div className="p-6 font-mono text-[11px] text-slate-gray h-72 overflow-y-auto flex flex-col gap-2 bg-[#0B0B0E]">
            {cliLogs.map((log, idx) => (
              <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                {log}
              </div>
            ))}
            <div ref={cliScrollRef} />
          </div>

          {/* CLI input row */}
          <form 
            onSubmit={executeCliCommand}
            className="flex items-center gap-2 border-t border-[#1E1E24] px-5 py-3 bg-[#070709]"
          >
            <span className="font-mono text-xs text-copper shrink-0">guest@mhamad-core:~$</span>
            <input
              type="text"
              value={cliInput}
              onChange={(e) => setCliInput(e.target.value)}
              placeholder="Type 'help' to diagnostic index..."
              className="w-full bg-transparent border-none text-alabaster font-mono text-xs focus:outline-none focus:ring-0 placeholder-slate-gray/45"
            />
          </form>
        </div>
      </div>

    </motion.div>
  );
}
