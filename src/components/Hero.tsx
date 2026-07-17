import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, Terminal, ArrowRight, ShieldCheck, Download, Calendar, 
  Sparkles, Briefcase, Award, GraduationCap, ChevronDown, CheckCircle,
  Mail, MessageCircle
} from "lucide-react";
// @ts-ignore
import portraitUrl from "../assets/images/muhammad_portrait_real_1784306942499.jpg";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const roles = [
    "AI Engineer",
    "AI Architect",
    "Full Stack Developer",
    "AI Educator",
    "Technical Mentor"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const floatingBadges = [
    { text: "LangGraph", icon: "🧠", delay: 0 },
    { text: "FastAPI", icon: "⚡", delay: 1 },
    { text: "React/Next.js", icon: "⚛️", delay: 2 },
    { text: "LLMs / RAG", icon: "🤖", delay: 3 }
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-obsidian bg-grid-pattern"
      id="hero"
    >
      {/* Premium Ambient Lighting effects */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-copper/5 blur-[140px] pointer-events-none transition-transform duration-500 ease-out z-0"
        style={{
          transform: `translate(${(mousePos.x - 300) * 0.12}px, ${(mousePos.y - 300) * 0.12}px)`
        }}
      />
      
      {/* Side-glow nodes reminiscent of AI model neurons */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-copper/10 blur-[120px] pointer-events-none z-0" />

      <div className="w-[92%] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Narrative and Content Frame */}
        <div className="md:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Subtle tag indicator */}
          <div className="flex items-center gap-2 px-3 py-1 bg-onyx/50 border border-[#1E1E24] rounded-full backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-copper animate-pulse" />
            <span className="font-mono text-[8.5px] text-[#F8FAFC]/90 tracking-widest uppercase">
              // PRODUCTION-GRADE COGNITIVE SYSTEM ARCHITECT
            </span>
          </div>

          {/* Large Headline with Animated Roles */}
          <div className="flex flex-col gap-1.5">
            <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight text-alabaster leading-[1.1]">
              Muhammad Hamad
            </h1>
            
            <div className="h-10 sm:h-12 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-display font-medium text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-copper via-[#D48F18] to-alabaster flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-copper inline" />
                  {roles[activeRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Powerful Narrative Statement */}
          <p className="font-sans text-sm sm:text-base text-slate-gray max-w-lg leading-relaxed">
            I build production-grade AI applications, enterprise web platforms, and intelligent automation systems that solve real business problems. I bridge the gap between abstract research models and hardened, scalable infrastructure.
          </p>

          {/* Trust Badges Checkbox Matrix */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 py-5 border-y border-[#1E1E24] w-full max-w-lg">
            {[
              "6+ Years Experience",
              "Production AI Solutions",
              "Full Stack Development",
              "Available for Consulting"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 font-mono text-[10px] text-[#F8FAFC]/90 tracking-wide uppercase">
                <CheckCircle className="w-4 h-4 text-copper shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Luxury Action CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 w-full">
            <a 
              href="#consultation" 
              className="h-11 px-5 rounded-lg bg-alabaster hover:bg-white text-obsidian font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.08)] group w-full sm:w-auto"
            >
              Book AI Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            
            <a 
              href="https://wa.me/923060647571" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15 text-emerald-400 font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              WhatsApp
            </a>

            <a 
              href="mailto:hamad@hamadshafiq.com" 
              className="h-11 px-5 rounded-lg border border-[#1E1E24] bg-onyx/30 hover:bg-onyx/60 text-slate-gray hover:text-alabaster font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 text-copper shrink-0" />
              hamad@hamadshafiq.com
            </a>

            <a 
              href="#projects" 
              className="h-11 px-5 rounded-lg border border-[#1E1E24] bg-onyx/30 hover:bg-onyx/60 text-slate-gray hover:text-alabaster font-sans font-medium text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 w-full sm:w-auto"
            >
              View Projects
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: Luxury Framed Portrait with Floating Badges */}
        <div className="md:col-span-5 flex justify-center relative py-12 md:py-0">
          
          <div className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-2xl">
            
            {/* Soft backdrop glow panel */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-copper/40 to-indigo-500/20 rounded-2xl blur-md opacity-70 animate-pulse pointer-events-none" />
            
            {/* Animated copper frame border */}
            <div className="absolute -inset-[1px] bg-gradient-to-tr from-copper via-copper/20 to-alabaster/40 rounded-2xl pointer-events-none z-10" />

            {/* Main Picture Frame container with Glassmorphic feel */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#1E1E24]/60 bg-obsidian/40 backdrop-blur-xl z-10 shadow-2xl flex items-center justify-center p-3">
              <img 
                src={portraitUrl} 
                alt="Muhammad Hamad" 
                className="w-full h-full object-cover rounded-xl filter contrast-[1.03] saturate-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay shadow mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 rounded-xl" />
            </div>

            {/* Floating technology badges around portrait */}
            {floatingBadges.map((badge, idx) => {
              const positions = [
                "top-4 -left-6 sm:-left-10",
                "top-1/3 -right-6 sm:-right-10",
                "bottom-1/4 -left-8 sm:-left-12",
                "bottom-6 -right-4"
              ];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + badge.delay * 0.15, duration: 0.4 }}
                  className={`absolute ${positions[idx]} z-20 px-3 py-1.5 bg-onyx/90 backdrop-blur-md border border-[#1E1E24] hover:border-copper/40 rounded-full flex items-center gap-1.5 shadow-lg pointer-events-none transition-colors`}
                >
                  <span className="text-[11px]">{badge.icon}</span>
                  <span className="font-mono text-[9px] text-alabaster uppercase tracking-wider">{badge.text}</span>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

      {/* Down Chevron elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce opacity-50 hover:opacity-100 transition-opacity pointer-events-none z-10">
        <span className="font-mono text-[8px] text-slate-gray tracking-widest uppercase">Scroll to Blueprint</span>
        <ChevronDown className="w-4 h-4 text-copper" />
      </div>

    </section>
  );
}
