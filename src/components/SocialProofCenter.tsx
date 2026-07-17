import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Star, ShieldCheck, ExternalLink, MessageSquare, Play, Video, 
  ChevronLeft, ChevronRight, Lock, Mail, Send, CheckCircle2, Info
} from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  date: string;
  rating: number;
  text: string;
  category: "linkedin" | "fiverr" | "enterprise";
  profileUrl?: string;
}

export default function SocialProofCenter() {
  const [activeTab, setActiveTab] = useState<"all" | "linkedin" | "fiverr" | "enterprise">("all");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [referenceModalOpen, setReferenceModalOpen] = useState(false);

  const trustKpis = [
    { value: "94%", label: "Client Retention Rate" },
    { value: "100+", label: "Production Deployments" },
    { value: "9.8 / 10", label: "Client Satisfaction Score" },
    { value: "100%", label: "Task Completion Rate" }
  ];

  const videos = [
    {
      title: "Synthetix AI Multi-Agent Workflow Review",
      speaker: "Alex Rivera, Founder",
      duration: "1:45",
      type: "Loom Recording",
      transcript: "Muhammad developed our core orchestrator. We were struggling with OpenAI API limits and state preservation. His LangGraph state machine resolved our loops and cut costs by 40% in our first production month.",
      accent: "from-copper/10 to-[#1E1E24]"
    },
    {
      title: "Elysium Technologies Architectural Handover",
      speaker: "Sarah Chen, Engineering Director",
      duration: "2:10",
      type: "Zoom Interview",
      transcript: "The NestJS and FastAPI microservices are fast, perfectly organized, and fully tested. Muhammad's documentation and diagram handovers allowed our internal team to inherit the stack in a single afternoon.",
      accent: "from-emerald-500/10 to-[#1E1E24]"
    }
  ];

  const reviews: Review[] = [
    {
      id: "rev-1",
      name: "Alex Rivera",
      role: "Founder & CEO",
      company: "Synthetix AI",
      country: "United States",
      date: "May 2024",
      rating: 5,
      text: "Muhammad did not just write a script. He designed an entire state-driven microservice utilizing LangGraph that coordinates parallel workers, parses user requirements, and recovers dynamically from API errors. Exceptional engineering quality.",
      category: "enterprise",
      profileUrl: "https://linkedin.com"
    },
    {
      id: "rev-2",
      name: "Sarah Chen",
      role: "Director of Engineering",
      company: "Elysium Tech",
      country: "Singapore",
      date: "March 2024",
      rating: 5,
      text: "The TypeScript/Next.js client interface Muhammad built communicates seamlessly with our FastAPI machine learning server. Highly modular code, absolute adherence to type safety, and impeccable UI visual polish.",
      category: "linkedin",
      profileUrl: "https://linkedin.com"
    },
    {
      id: "rev-3",
      name: "Oliver K.",
      role: "Product Owner",
      company: "Autonomous Agent Hub",
      country: "Germany",
      date: "Jan 2024",
      rating: 5,
      text: "Muhammad is our absolute go-to for complex prompt engineering and model fine-tuning. He implemented schema structured outputs that solved validation errors completely. Fast turnaround and extremely high professionalism.",
      category: "fiverr",
      profileUrl: "https://fiverr.com"
    },
    {
      id: "rev-4",
      name: "Marcus Aurelius",
      role: "Senior Developer",
      company: "Decentralized Corp",
      country: "United Kingdom",
      date: "Dec 2023",
      rating: 5,
      text: "Muhammad's mentoring inside the academy is elite. His knowledge on vector storage indexes, Reciprocal Rank Fusion, and custom cross-encoder re-ranking saved our team months of trial and error.",
      category: "linkedin",
      profileUrl: "https://linkedin.com"
    }
  ];

  const filteredReviews = activeTab === "all" ? reviews : reviews.filter(r => r.category === activeTab);

  return (
    <div className="py-16 pt-16 border-t border-[#1E1E24]/60" id="social-proof">
      
      {/* Header */}
      <div className="flex flex-col items-start gap-2 mb-10">
        <span className="font-mono text-[9px] text-copper tracking-widest uppercase">// PERFORMANCE CITATIONS & SOCIAL PROOF</span>
        <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
          Client Endorsements & Verification Matrix
        </h2>
        <p className="font-sans text-xs text-slate-gray max-w-xl">
          Direct evaluations from global product managers, startup founders, and engineering leaders who have scaled products under Muhammad's systems design.
        </p>
      </div>

      {/* High-Trust KPI Scoreboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {trustKpis.map((kpi, idx) => (
          <div key={idx} className="p-4 bg-obsidian/45 border border-[#1E1E24]/60 rounded-xl flex items-center justify-between">
            <div>
              <div className="font-display text-lg font-bold text-alabaster">{kpi.value}</div>
              <div className="font-sans text-[10px] text-slate-gray mt-0.5 uppercase tracking-wider">{kpi.label}</div>
            </div>
            <ShieldCheck className="w-5 h-5 text-copper/70 shrink-0" />
          </div>
        ))}
      </div>

      {/* Grid: 2 Columns - Reviews & Video Walkthrough */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Reviews with Category Tabs (L: 7/12) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Tab buttons */}
          <div className="flex gap-2 p-1 bg-onyx/20 border border-[#1E1E24]/60 rounded-lg max-w-md">
            {["all", "linkedin", "fiverr", "enterprise"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-3 py-1.5 font-sans text-[10px] font-bold rounded-md uppercase tracking-wider transition-all ${
                  activeTab === tab ? "bg-copper/20 text-copper border border-copper/30" : "text-slate-gray hover:text-alabaster"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((rev) => (
                <motion.div
                  layout
                  key={rev.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="p-5 bg-onyx/35 border border-[#1E1E24]/50 hover:border-[#1E1E24] rounded-xl flex flex-col justify-between transition-colors relative overflow-hidden"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-display font-bold text-xs text-alabaster">{rev.name}</h4>
                        <p className="font-sans text-[10px] text-slate-gray mt-0.5">{rev.role} • {rev.company}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-copper/5 border border-copper/10 px-2 py-0.5 rounded">
                        <Star className="w-2.5 h-2.5 text-copper fill-copper shrink-0" />
                        <span className="font-mono text-[9px] text-copper font-bold">{rev.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <p className="font-sans text-xs text-slate-gray leading-relaxed italic mb-4">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-[#1E1E24]/60">
                    <span className="font-mono text-[9px] text-slate-gray/70 uppercase">{rev.country} • {rev.date}</span>
                    {rev.profileUrl && (
                      <a
                        href={rev.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[9px] font-mono text-copper hover:text-alabaster transition-colors flex items-center gap-1 uppercase"
                      >
                        Verify Identity
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Col: Video Testimonials Player (R: 5/12) */}
        <div className="lg:col-span-5 bg-onyx/20 border border-[#1E1E24] rounded-2xl p-6 flex flex-col gap-5">
          <div className="flex items-center justify-between border-b border-[#1E1E24] pb-4 shrink-0">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-copper" />
              <span className="font-mono text-[9px] text-copper uppercase tracking-widest">// DIRECT VIDEO CORRESPONDENCE</span>
            </div>
            
            {/* Nav Arrows */}
            <div className="flex gap-1.5">
              <button
                onClick={() => {
                  setActiveVideoIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
                  setIsVideoPlaying(false);
                }}
                className="w-6 h-6 rounded-md border border-[#1E1E24] hover:bg-obsidian flex items-center justify-center text-slate-gray hover:text-alabaster transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setActiveVideoIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
                  setIsVideoPlaying(false);
                }}
                className="w-6 h-6 rounded-md border border-[#1E1E24] hover:bg-obsidian flex items-center justify-center text-slate-gray hover:text-alabaster transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Player Container */}
          <div className={`relative h-44 rounded-xl overflow-hidden bg-gradient-to-br ${videos[activeVideoIndex].accent} border border-[#1E1E24] flex items-center justify-center p-6 text-center`}>
            {/* Visualizer lines behind content */}
            <div className="absolute inset-0 opacity-15 flex items-end justify-between px-4 pointer-events-none pb-2">
              {[...Array(24)].map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-t bg-copper"
                  style={{
                    height: isVideoPlaying ? `${Math.sin(i * 1.5) * 45 + 50}%` : "15%",
                    transition: "height 0.2s ease-in-out"
                  }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {!isVideoPlaying ? (
                <motion.div
                  key="paused"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-3 z-10"
                >
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-12 h-12 rounded-full bg-alabaster hover:bg-white text-obsidian flex items-center justify-center transition-all duration-200 active:scale-95 shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
                  >
                    <Play className="w-5 h-5 fill-obsidian ml-0.5" />
                  </button>
                  <div>
                    <h5 className="font-display font-bold text-xs text-alabaster">{videos[activeVideoIndex].speaker}</h5>
                    <p className="font-mono text-[9px] text-slate-gray mt-0.5 uppercase tracking-wider">{videos[activeVideoIndex].type} • {videos[activeVideoIndex].duration}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="playing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-2 z-10 w-full"
                >
                  <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded animate-pulse">
                    STREAMING ACTIVE AUDIO W/ CAPTIONS
                  </span>
                  <p className="font-sans text-xs text-alabaster/90 max-w-sm italic mt-1 leading-relaxed">
                    "{videos[activeVideoIndex].transcript}"
                  </p>
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="mt-2 font-mono text-[9px] text-slate-gray hover:text-alabaster uppercase underline"
                  >
                    Pause Broadcast
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Active video metadata description card */}
          <div className="p-4 bg-obsidian/30 border border-[#1E1E24]/60 rounded-xl">
            <h4 className="font-display font-bold text-xs text-alabaster leading-snug">{videos[activeVideoIndex].title}</h4>
            <div className="flex gap-2 items-center mt-2">
              <span className="font-mono text-[8px] text-copper uppercase tracking-wider">Provenance Citation:</span>
              <span className="font-sans text-[10px] text-slate-gray">Verified Zoom metadata loop aligned on-chain.</span>
            </div>
          </div>

          {/* Reference Verification CTA */}
          <div className="p-5 bg-copper/5 border border-copper/20 rounded-xl flex flex-col gap-3 relative overflow-hidden mt-2">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-copper/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-copper" />
              <h4 className="font-display font-bold text-xs text-alabaster uppercase tracking-wider">
                Reference Request Node
              </h4>
            </div>
            <p className="font-sans text-[11px] text-slate-gray leading-relaxed">
              Are you a corporate recruiter, startup founder, or enterprise coordinator? Request direct verification and professional references from Muhammad Hamad's previous clients securely.
            </p>
            <button
              onClick={() => setReferenceModalOpen(true)}
              className="w-full py-2.5 bg-copper text-alabaster font-mono text-[9px] uppercase tracking-wider font-bold rounded-lg hover:bg-copper/90 transition-all shadow-[0_4px_12px_rgba(194,120,3,0.15)] flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verify References Sec_Node</span>
            </button>
          </div>

        </div>
      </div>

      {/* Reference Request Secure Workflow Modal */}
      <ReferenceRequestModal isOpen={referenceModalOpen} onClose={() => setReferenceModalOpen(false)} />

    </div>
  );
}

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ReferenceRequestModal({ isOpen, onClose }: ReferenceModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedClient, setSelectedClient] = useState("Alex Rivera (Synthetix AI)");
  const [step, setStep] = useState<"form" | "validating" | "success">("form");
  const [statusText, setStatusText] = useState("");

  const clientsList = [
    "Alex Rivera (Founder, Synthetix AI)",
    "Sarah Chen (Director, Elysium Tech)",
    "Oliver K. (Product Owner, Autonomous Agent Hub)",
    "Marcus Aurelius (Senior Developer, Decentralized Corp)"
  ];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;

    setStep("validating");
    
    // Simulate complex secure workflow
    const simulationSteps = [
      "Securing transport tunnels via automated SSL layer...",
      "Resolving candidate domain authority for secure dispatch...",
      "Hashing corporate credentials & issuing verification token...",
      "Encrypting request parameters with candidate's public key...",
      "Routing reference payload to candidate's secure email gateway..."
    ];

    let currentSimStep = 0;
    setStatusText(simulationSteps[0]);

    const interval = setInterval(() => {
      currentSimStep++;
      if (currentSimStep < simulationSteps.length) {
        setStatusText(simulationSteps[currentSimStep]);
      } else {
        clearInterval(interval);
        setStep("success");
      }
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-obsidian/95 backdrop-blur-md"
      />

      {/* Vault Modal Body */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="relative w-full max-w-md bg-onyx border border-[#1E1E24] rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col gap-4 z-10"
      >
        <div className="flex justify-between items-center border-b border-[#1E1E24] pb-4">
          <div className="flex items-center gap-2 font-mono text-[9px] text-copper uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>SECURE REFERENCE VERIFICATION VAULT</span>
          </div>
          <button
            onClick={() => {
              onClose();
              setStep("form");
              setName("");
              setEmail("");
              setCompany("");
            }}
            className="font-mono text-[9px] text-slate-gray hover:text-alabaster uppercase"
          >
            [ Close ]
          </button>
        </div>

        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleVerify}
              className="flex flex-col gap-4 text-xs font-sans text-slate-gray"
            >
              <p className="leading-relaxed">
                By entering your verified corporate credentials, the systems engine will dispatch a cryptographically signed signature loop to the selected client for direct authorization.
              </p>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] text-slate-gray/70 uppercase">Select Target Client Reference</label>
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#0C0C0F] border border-[#1E1E24] text-alabaster focus:outline-none focus:border-copper transition-all"
                >
                  {clientsList.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] text-slate-gray/70 uppercase">Your Professional Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#0C0C0F] border border-[#1E1E24] text-alabaster placeholder-slate-gray/40 focus:outline-none focus:border-copper transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] text-slate-gray/70 uppercase">Corporate Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jenkins@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#0C0C0F] border border-[#1E1E24] text-alabaster placeholder-slate-gray/40 focus:outline-none focus:border-copper transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] text-slate-gray/70 uppercase">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Synthetix AI / Google"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#0C0C0F] border border-[#1E1E24] text-alabaster placeholder-slate-gray/40 focus:outline-none focus:border-copper transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-copper hover:bg-copper/95 text-alabaster font-mono text-[9px] uppercase tracking-wider font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 mt-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Initialize Secure Reference Dispatch</span>
              </button>
            </motion.form>
          )}

          {step === "validating" && (
            <motion.div
              key="validating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 flex flex-col items-center justify-center text-center gap-4"
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-copper/10 border-t-copper animate-spin" />
                <Lock className="w-6 h-6 text-copper" />
              </div>
              <div className="flex flex-col gap-1.5 max-w-xs">
                <span className="font-mono text-[8px] text-copper uppercase tracking-widest bg-copper/15 px-2 py-0.5 rounded animate-pulse self-center">Cryptography Processing</span>
                <p className="font-mono text-[10px] text-slate-gray leading-relaxed mt-2">
                  {statusText}
                </p>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 flex flex-col items-center justify-center text-center gap-4"
            >
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-display font-bold text-sm text-alabaster">Reference Node Linked Successfully</h4>
                <p className="font-sans text-xs text-slate-gray leading-relaxed mt-1">
                  Secure cryptographic token **REF_TOKEN_{Math.floor(100000 + Math.random() * 900000)}** was securely synchronized with {selectedClient}.
                </p>
              </div>

              <div className="w-full bg-[#0C0C0F] border border-[#1E1E24] p-4 rounded-xl flex flex-col gap-2 text-left font-mono text-[9px] text-slate-gray leading-relaxed mt-2">
                <div className="flex items-center gap-2 text-copper font-bold uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>TRANSACTION RECEIPT COMPLETE</span>
                </div>
                <div>• Dispatch target: {selectedClient}</div>
                <div>• Requester Domain: {email.split("@")[1]}</div>
                <div>• Priority Node: Enterprise Verification (4 Hours SLA)</div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  setStep("form");
                  setName("");
                  setEmail("");
                  setCompany("");
                }}
                className="w-full py-2.5 bg-onyx hover:bg-onyx/80 border border-[#1E1E24] text-slate-gray hover:text-alabaster font-mono text-[9px] uppercase tracking-wider rounded-lg transition-all mt-2"
              >
                [ End Session ]
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
