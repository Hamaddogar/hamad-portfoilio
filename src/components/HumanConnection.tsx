import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, Volume2, VolumeX, Eye, BookOpen, BrainCircuit, PenTool, 
  Flame, Compass, Heart, Code2, Pause, Maximize2, Settings, 
  Subtitles, Sparkles, Youtube, FileVideo, Video, Info
} from "lucide-react";
// @ts-ignore
import portraitUrl from "../assets/images/muhammad_portrait_real_1784306942499.jpg";

export default function HumanConnection() {
  const [activeTab, setActiveTab] = useState<"philosophy" | "values" | "story">("story");
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const values = [
    { title: "Empirical Precision", desc: "No model response is taken on faith. Every prompt structure undergoes rate-limit analysis and continuous automated evaluation.", icon: <BrainCircuit className="w-4 h-4 text-copper" /> },
    { title: "Architectural Honesty", desc: "Avoid fake AI wrappers. We construct real, stateful LangGraph agents paired with AST SQL sandbox sanitizers.", icon: <Code2 className="w-4 h-4 text-copper" /> },
    { title: "Practitioner Pedagogy", desc: "We teach what we actively ship to production. Demystifying complex vector matrices and saving corporate token budgets.", icon: <BookOpen className="w-4 h-4 text-copper" /> }
  ];

  const behindTheScenes = [
    { title: "The Systems Lab", desc: "Dual monitor setup showcasing direct token streams, vector indices, and dark luxury IDE grids.", role: "CORE WORKSPACE" },
    { title: "Mentorship Classroom", desc: "Instructing a cohort of 40+ engineering professionals in advanced retrieval-augmented models.", role: "PRACTITIONER ACADEMY" },
    { title: "Whiteboard Blueprint", desc: "Drafting stateful agent loops, reciprocal rank fusion, and semantic cost boundaries.", role: "SYSTEM ARCHITECTURE" }
  ];

  const handleNextPhoto = () => {
    setActivePhoto(prev => (prev === behindTheScenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-16 pt-16 border-t border-[#1E1E24]/60" id="meet-hamad">
      
      {/* Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <span className="font-mono text-[9px] text-copper tracking-widest uppercase">// HUMAN IDENTITY & EXECUTIVE SUMMARY</span>
        <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
          Meet Muhammad Hamad
        </h2>
        <p className="font-sans text-xs text-slate-gray max-w-xl">
          An immersive inspection into the cognitive developer, professional educator, and software architect behind the platform.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Photo Frame & Video Greeting Controller (L: 5/12) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Glass Card Portrait with Copper Glow */}
          <div className="relative rounded-2xl overflow-hidden border border-[#1E1E24] bg-onyx/20 p-2 shadow-[0_0_50px_rgba(194,120,3,0.06)] group">
            
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-copper/10 via-[#1E1E24] to-copper/15 animate-pulse pointer-events-none" />

            {/* Main Portrait Wrapper */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#0A0A0C]">
              <img
                src={portraitUrl}
                alt="Muhammad Hamad Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-[1.03]"
              />

              {/* Autoplay preview mock overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="font-mono text-[8.5px] text-alabaster uppercase tracking-widest bg-red-500/20 border border-red-500/30 px-1.5 py-0.5 rounded">AUTO-PREVIEW: MUTED</span>
                  </div>
                  <button
                    onClick={() => setVideoMuted(!videoMuted)}
                    className="p-1.5 rounded-lg bg-onyx/80 hover:bg-onyx border border-[#1E1E24] text-alabaster transition-colors"
                  >
                    {videoMuted ? <VolumeX className="w-3.5 h-3.5 text-copper" /> : <Volume2 className="w-3.5 h-3.5 text-copper animate-bounce" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Animated Signature Overlay */}
            <div className="p-4 flex justify-between items-center bg-onyx/40 mt-1 rounded-xl border border-[#1E1E24]/50">
              <div>
                <span className="font-mono text-[8px] text-slate-gray tracking-wider uppercase">Signature Node</span>
                <p className="font-serif italic text-lg text-alabaster tracking-wide mt-1 select-none font-semibold">Muhammad Hamad</p>
              </div>
              <button
                onClick={() => setVideoOpen(true)}
                className="px-3 h-8 rounded-lg bg-copper/10 border border-copper/30 text-copper text-[10px] font-mono tracking-wider hover:bg-copper hover:text-alabaster transition-all flex items-center gap-1"
              >
                <Play className="w-3 h-3 fill-current" />
                PLAY VIDEO
              </button>
            </div>
          </div>

          {/* Interactive Workspace Slideshow / Behind the Scenes */}
          <div className="p-5 bg-onyx/20 border border-[#1E1E24] rounded-2xl flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9px] text-copper uppercase tracking-widest">// BEHIND THE SCENES</span>
              <button
                onClick={handleNextPhoto}
                className="font-mono text-[9px] text-slate-gray hover:text-alabaster uppercase transition-colors"
              >
                Next Node &gt;
              </button>
            </div>
            
            <div className="aspect-video bg-[#0B0B0E] rounded-xl border border-[#1E1E24] relative overflow-hidden flex flex-col justify-end p-4">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(194,120,3,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(194,120,3,0.02)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
              
              <div className="z-10">
                <span className="font-mono text-[8px] text-copper tracking-wider uppercase bg-copper/10 border border-copper/20 px-1.5 py-0.5 rounded">{behindTheScenes[activePhoto].role}</span>
                <h4 className="font-display font-bold text-xs text-alabaster mt-2">{behindTheScenes[activePhoto].title}</h4>
                <p className="font-sans text-[10.5px] text-slate-gray leading-relaxed mt-1">{behindTheScenes[activePhoto].desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Narrative Story & Philosophy Tabs (R: 7/12) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Executive Overview Profile Board */}
          <div className="p-6 bg-onyx/25 border border-[#1E1E24] rounded-2xl relative overflow-hidden">
            <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-copper/15 border border-copper/30 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
              <span className="font-mono text-[8px] text-copper tracking-wider font-bold uppercase">VERIFIED AI ENGINEER NODE</span>
            </div>

            <div className="mb-4">
              <h3 className="font-display font-light text-2xl text-alabaster tracking-tight">Muhammad Hamad</h3>
              <p className="font-sans text-xs text-copper/90 mt-0.5 font-semibold">
                AI Engineer • AI Architect • AI Educator • Full Stack Developer • Startup Consultant
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-slate-gray mb-4 border-t border-b border-[#1E1E24] py-4">
              <div>
                <span className="font-mono text-[8px] text-slate-gray/75 uppercase tracking-wider block">Years of Experience</span>
                <span className="text-alabaster font-semibold text-xs mt-0.5 block">6+ Years Professional Practice</span>
              </div>
              <div>
                <span className="font-mono text-[8px] text-slate-gray/75 uppercase tracking-wider block">Current Focus</span>
                <span className="text-alabaster font-semibold text-xs mt-0.5 block">Stateful AI Agents (LangGraph) & RAG</span>
              </div>
              <div>
                <span className="font-mono text-[8px] text-slate-gray/75 uppercase tracking-wider block">Location / Scope</span>
                <span className="text-alabaster font-semibold text-xs mt-0.5 block">Islamabad, Pakistan / Global Remote</span>
              </div>
              <div>
                <span className="font-mono text-[8px] text-slate-gray/75 uppercase tracking-wider block">Operational Availability</span>
                <span className="text-emerald-400 font-semibold text-xs mt-0.5 block">Immediate for High-Impact Advisory</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-mono text-[8px] text-slate-gray/75 uppercase tracking-wider block">Primary Technologies</span>
                <span className="text-alabaster/90 text-xs mt-0.5 block font-mono">
                  LangGraph, Python, FastAPI, TypeScript, Next.js, PostgreSQL, Docker, Pinecone
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 bg-[#0B0B0E]/60 p-4 rounded-xl border border-[#1E1E24]/60">
              <div>
                <span className="font-mono text-[8px] text-copper uppercase tracking-wider font-bold block">// PROFESSIONAL MISSION</span>
                <p className="font-sans text-[11px] text-slate-gray leading-relaxed mt-0.5">
                  Bridging the gap between absolute relational determinism and generative reasoning models, converting flimsy AI wrappers into scalable, secure, fully autonomous agentic frameworks.
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-[#1E1E24]/40">
                <span className="font-mono text-[8px] text-copper uppercase tracking-wider font-bold block">// PROFESSIONAL PHILOSOPHY</span>
                <p className="font-sans text-[11px] text-slate-gray italic leading-relaxed mt-0.5">
                  "Never build or deploy a shallow API wrapper; treat any model response as dynamic, untrusted user input that requires runtime schema and safety checks."
                </p>
              </div>
            </div>
          </div>

          {/* Narrative tabs */}
          <div className="flex gap-2 p-1 bg-onyx/20 border border-[#1E1E24]/60 rounded-xl max-w-sm">
            {["story", "philosophy", "values"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 h-9 font-sans text-xs font-semibold rounded-lg transition-all capitalize ${
                  activeTab === tab ? "bg-copper text-alabaster shadow-md" : "text-slate-gray hover:text-alabaster"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-onyx/20 border border-[#1E1E24] rounded-2xl p-6 min-h-[360px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-copper/5 to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {activeTab === "story" && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col gap-5 font-sans text-xs sm:text-sm text-slate-gray leading-relaxed"
                >
                  <div className="flex items-center gap-2 border-b border-[#1E1E24] pb-3 shrink-0">
                    <Flame className="w-4 h-4 text-copper" />
                    <h3 className="font-display font-medium text-alabaster text-base">The Cinematic Journey</h3>
                  </div>
                  <p>
                    I didn’t start my career in artificial intelligence. I began as a classical **Full-Stack Software Engineer**, designing highly deterministic relational systems, refactoring schema migrations, and delivering React user interfaces. I treated programming as an act of absolute order.
                  </p>
                  <p>
                    When generative reasoning models erupted, I realized that traditional software developers were treating LLMs as magical black boxes, packing loose prompts inside flimsy API wrappers that failed immediately under concurrent loads. 
                  </p>
                  <p>
                    I found my calling at the intersection of **absolute determinism and cognitive intelligence**. I treat artificial models not as magic, but as powerful dynamic nodes inside structured systems. By binding LLMs with LangGraph, strict schema validation, AST validators, and dense/sparse hybrid search pipelines, we make intelligence production-ready.
                  </p>
                  <p>
                    My vision for the next decade is simple: helping startups and enterprises transition from primitive chatbots to **fully autonomous agentic frameworks** that handle core business logic with high throughput, transparent cost metrics, and zero downtime.
                  </p>
                </motion.div>
              )}

              {activeTab === "philosophy" && (
                <motion.div
                  key="philosophy"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col gap-5 font-sans text-xs sm:text-sm text-slate-gray leading-relaxed"
                >
                  <div className="flex items-center gap-2 border-b border-[#1E1E24] pb-3 shrink-0">
                    <Compass className="w-4 h-4 text-copper" />
                    <h3 className="font-display font-medium text-alabaster text-base">Engineering & Pedagogy Philosophy</h3>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-alabaster uppercase mb-1">1. How I Approach AI Systems Engineering</h4>
                    <p>
                      I build using a **Zero-Trust AI Posture**. We treat any model response as dirty input. All model outputs must be run through validation syntax tests before touching a database or being served to a client, protecting against injection and hallucination.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-alabaster uppercase mb-1">2. How I Approach Modern Pedagogy</h4>
                    <p>
                      I teach what I actively build in client production. By guiding developers to write actual code—parsing SQL abstract syntax trees, optimizing Redis caches, and routing agent state variables—we replace abstract theory with durable practitioner skillsets.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-alabaster uppercase mb-1">3. The Daily Operational Workflow</h4>
                    <p>
                      Every system starts with a whiteboard. We isolate edge cases, trace spans using observability layers like LangSmith, benchmark token cost distributions, and execute Docker containers under strict non-root hardening guidelines.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "values" && (
                <motion.div
                  key="values"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center gap-2 border-b border-[#1E1E24] pb-3 shrink-0">
                    <Heart className="w-4 h-4 text-copper" />
                    <h3 className="font-display font-medium text-alabaster text-base">Core Value Architecture</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3 mt-1">
                    {values.map((v, i) => (
                      <div key={i} className="p-4 bg-obsidian/30 border border-[#1E1E24]/60 rounded-xl flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-onyx border border-[#1E1E24] flex items-center justify-center shrink-0">
                          {v.icon}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-xs text-alabaster">{v.title}</h4>
                          <p className="font-sans text-xs text-slate-gray mt-1 leading-relaxed">{v.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Video Modal Player (Feature 1) */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />

    </div>
  );
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type VideoSource = "loom" | "youtube" | "vimeo" | "mp4";

function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [source, setSource] = useState<VideoSource>("loom");
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(12);
  const [volume, setVolume] = useState(80);
  const [resolution, setResolution] = useState<"1080p" | "4K">("1080p");
  const [subtitles, setSubtitles] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  // Auto playback simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  // Custom metadata for each video source format
  const sourceDetails = {
    loom: {
      title: "Loom Executive Overview",
      tag: "LOOM WORKSPACE RECORDER",
      duration: "04:12",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      description: "A comprehensive Loom-style screen and camera record introducing the AI portfolio platform, codebases, and production integrations.",
      transcripts: [
        { time: "0:02", text: "Hey there! I am Muhammad Hamad, lead AI Architect and Senior Engineer." },
        { time: "0:15", text: "In this walkthrough, I am showing the internal mechanics of my multi-agent systems." },
        { time: "0:35", text: "Notice how the cyclic state machine handles automatic retries and reduces token cost..." }
      ]
    },
    youtube: {
      title: "AI Academy: Production-Ready Agents",
      tag: "YOUTUBE BROADCAST LAYER",
      duration: "18:45",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
      description: "An educational deep dive on designing resilient state machines with LangGraph, protecting schemas against hallucinated LLM data.",
      transcripts: [
        { time: "0:05", text: "Welcome back to the AI Academy! Today we are looking at LangGraph in production." },
        { time: "0:45", text: "We treat any model output as dirty user input. Let's trace it using LangSmith." },
        { time: "2:10", text: "By enforcing structured JSON schemas, we achieve 98.7% execution safety." }
      ]
    },
    vimeo: {
      title: "Cinematic Portfolio & Design Vision",
      tag: "VIMEO HIGH-BITRATE PORTFOLIO",
      duration: "03:15",
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      description: "A premium, high-bitrate visual showcase of my design principles, software architecture, and the intersection of order and intelligence.",
      transcripts: [
        { time: "0:01", text: "[Ambient Electronic Soundscape begins] Software is an act of absolute order." },
        { time: "0:20", text: "I treat artificial models not as magic, but as powerful dynamic nodes." },
        { time: "1:05", text: "This is my commitment: pure, high-throughput, transparently measured intelligence." }
      ]
    },
    mp4: {
      title: "Direct Native Welcome Video",
      tag: "LOCAL RAW MP4 BROADCAST",
      duration: "01:30",
      badgeColor: "bg-copper/10 text-copper border-copper/20",
      description: "A direct, low-latency, raw MP4 welcome greeting rendered cleanly in our custom media engine pipeline.",
      transcripts: [
        { time: "0:01", text: "Hello! Thank you for inspecting my system headquarters." },
        { time: "0:10", text: "This platform is fully responsive, complete with interactive pipelines." },
        { time: "0:25", text: "Please use the Command Palette or the Recruiter Dashboard to run diagnostics." }
      ]
    }
  };

  const currentDetails = sourceDetails[source];

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

      {/* Video Player Modal Panel */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="relative w-full max-w-4xl bg-onyx border border-[#1E1E24] rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col lg:flex-row gap-6 z-10"
      >
        {/* Main Video Screen & Controller Column (L: 7/12) */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-[#1E1E24] pb-4">
            <div className="flex items-center gap-2">
              <span className={`font-mono text-[9px] uppercase tracking-wider border px-2 py-0.5 rounded ${currentDetails.badgeColor}`}>
                {currentDetails.tag}
              </span>
              <h3 className="font-display font-bold text-sm text-alabaster truncate max-w-[200px] sm:max-w-xs">
                {currentDetails.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="font-mono text-[9px] text-slate-gray hover:text-alabaster uppercase border border-[#1E1E24] hover:border-copper/40 px-2.5 py-1 rounded transition-all"
            >
              [ Close ]
            </button>
          </div>

          {/* Interactive Source Switcher */}
          <div className="grid grid-cols-4 gap-2 bg-[#0C0C0F] p-1 border border-[#1E1E24] rounded-xl">
            {(["loom", "youtube", "vimeo", "mp4"] as VideoSource[]).map((src) => (
              <button
                key={src}
                onClick={() => {
                  setSource(src);
                  setProgress(src === "loom" ? 12 : src === "youtube" ? 5 : src === "vimeo" ? 22 : 0);
                  setIsPlaying(true);
                }}
                className={`py-2 px-1 rounded-lg font-mono text-[9px] uppercase tracking-wider transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                  source === src
                    ? "bg-copper text-alabaster font-bold"
                    : "text-slate-gray hover:text-alabaster hover:bg-onyx/40"
                }`}
              >
                {src === "loom" && <Video className="w-3 h-3" />}
                {src === "youtube" && <Youtube className="w-3 h-3" />}
                {src === "vimeo" && <Video className="w-3 h-3 text-sky-400" />}
                {src === "mp4" && <FileVideo className="w-3 h-3" />}
                <span className="hidden sm:inline">{src}</span>
              </button>
            ))}
          </div>

          {/* Immersive Video Screen Block */}
          <div className="aspect-video rounded-xl bg-[#060608] border border-[#1E1E24] relative overflow-hidden group flex flex-col justify-between p-4 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
            
            {/* Ambient Animated Audio Waves Visualizer (Simulating motion) */}
            <div className="absolute inset-x-6 top-1/4 bottom-1/4 opacity-10 flex items-center justify-center gap-1 pointer-events-none">
              {[...Array(32)].map((_, i) => {
                const randomHeight = isPlaying ? "80%" : "20%";
                return (
                  <span
                    key={i}
                    className="w-1.5 bg-copper rounded transition-all duration-500"
                    style={{
                      height: isPlaying ? `${20 + Math.sin(progress + i) * 60}%` : "15%",
                      animation: isPlaying ? `pulse 1.2s ease-in-out infinite alternate` : "none",
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                );
              })}
            </div>

            {/* Video Header Overlay */}
            <div className="z-10 flex justify-between items-start pointer-events-none">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[8px] text-copper tracking-widest uppercase bg-copper/15 border border-copper/30 px-1.5 py-0.5 rounded self-start">
                  {isPlaying ? "STREAM FEED ACTIVE" : "STREAM PAUSED"}
                </span>
                <span className="font-mono text-[8px] text-slate-gray mt-1">Resolution: {resolution} • FPS: 60</span>
              </div>
              <span className="font-mono text-[9px] text-alabaster bg-obsidian/80 border border-[#1E1E24] px-2 py-0.5 rounded backdrop-blur">
                {currentDetails.duration}
              </span>
            </div>

            {/* Simulated Live Action Subtitles */}
            <div className="z-10 flex flex-col items-center gap-2 self-center text-center max-w-md w-full">
              {subtitles && isPlaying && (
                <div className="bg-obsidian/85 border border-[#1E1E24] rounded-lg px-3 py-1.5 backdrop-blur shadow-xl">
                  <p className="font-sans text-[11px] text-alabaster leading-snug">
                    {progress < 30 
                      ? currentDetails.transcripts[0].text 
                      : progress < 70 
                      ? currentDetails.transcripts[1].text 
                      : currentDetails.transcripts[2].text}
                  </p>
                </div>
              )}
            </div>

            {/* Premium Video Controller Rail */}
            <div className="z-10 bg-obsidian/90 border border-[#1E1E24] rounded-xl p-2.5 flex flex-col gap-2 backdrop-blur shadow-2xl">
              
              {/* Scrub timeline */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[8px] text-slate-gray">00:{progress < 10 ? `0${progress}` : progress}</span>
                <div className="flex-1 h-1 bg-[#16161B] rounded-full relative overflow-hidden cursor-pointer" onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const percent = Math.round((clickX / rect.width) * 100);
                  setProgress(percent);
                }}>
                  <div className="absolute top-0 left-0 h-full bg-copper" style={{ width: `${progress}%` }} />
                </div>
                <span className="font-mono text-[8px] text-slate-gray">{currentDetails.duration}</span>
              </div>

              {/* Bottom control buttons */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="text-alabaster hover:text-copper transition-colors">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  
                  {/* Volume slider */}
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setVolume(volume === 0 ? 80 : 0)} className="text-slate-gray hover:text-alabaster transition-colors">
                      {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={volume} 
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-12 h-1 bg-onyx accent-copper cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Subtitles Button */}
                  <button 
                    onClick={() => setSubtitles(!subtitles)} 
                    className={`p-1 rounded transition-colors ${subtitles ? "text-copper" : "text-slate-gray hover:text-alabaster"}`}
                    title="Toggle Subtitles"
                  >
                    <Subtitles className="w-4 h-4" />
                  </button>

                  {/* Resolution Selector Toggle */}
                  <button 
                    onClick={() => setResolution(resolution === "1080p" ? "4K" : "1080p")}
                    className="font-mono text-[9px] font-bold text-slate-gray hover:text-alabaster px-1.5 py-0.5 rounded border border-[#1E1E24]"
                    title="Change Stream Quality"
                  >
                    {resolution}
                  </button>

                  <button className="text-slate-gray hover:text-alabaster transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Video Side Panel: Media Information & Live Transcripts (R: 5/12) */}
        <div className="w-full lg:w-80 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-[#1E1E24] pt-4 lg:pt-0 lg:pl-6 shrink-0">
          <div>
            <h4 className="font-display font-bold text-xs text-copper uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Media Engine Intel</span>
            </h4>
            <p className="font-sans text-[11px] text-slate-gray leading-relaxed">
              {currentDetails.description}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 mt-2 flex-1">
            <h4 className="font-mono text-[9px] text-slate-gray uppercase tracking-widest border-b border-[#1E1E24] pb-2">
              // LIVE TIME-CODED TRANSCRIPT
            </h4>
            <div className="flex flex-col gap-3 overflow-y-auto max-h-48 lg:max-h-60 pr-1 text-xs">
              {currentDetails.transcripts.map((t, index) => {
                const isCurrent = progress >= (index === 0 ? 0 : index === 1 ? 30 : 70) && progress < (index === 0 ? 30 : index === 1 ? 70 : 100);
                return (
                  <div 
                    key={index} 
                    className={`p-2.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                      isCurrent 
                        ? "bg-copper/10 border-copper/30 text-alabaster shadow-md" 
                        : "bg-obsidian/30 border-transparent text-slate-gray hover:border-[#1E1E24]"
                    }`}
                    onClick={() => {
                      setProgress(index === 0 ? 12 : index === 1 ? 45 : 85);
                      setIsPlaying(true);
                    }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-[8px] text-copper font-bold">{t.time} MARKER</span>
                      {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-copper animate-ping" />}
                    </div>
                    <p className="font-sans text-[11px] leading-relaxed">
                      "{t.text}"
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#0C0C0F] border border-[#1E1E24] rounded-lg p-3 text-[10px] font-mono text-slate-gray flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-copper shrink-0" />
            <span>Click any transcript block to scrub the player head to that time marker.</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
