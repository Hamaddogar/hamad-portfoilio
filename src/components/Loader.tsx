import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Shield, Cpu } from "lucide-react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const initialLogs = [
    "COGNITIVE KERNEL CORE INIT: v1.8.4_LGR_REVOLUTION",
    "ESTABLISHING HOST ENVIRONMENT BINDINGS... [0.0.0.0:3000] OK",
    "RESOLVING ACTIVE PIPELINES & LANGGRAPH TOPOLOGIES... OK",
    "MOUNTING PARENT-CHILD VECTOR RETRIEVAL TREES... SECURE",
    "HYBRID SEARCH RETRIEVER: SPARSE_BM25 & DENSE_EMBEDDINGS MOUNTED",
    "INITIALIZING SEMANTIC CHUNKING GUARDRAILS... DETECTED",
    "MAPPING EDUCATION SYLLABI & ADVISORY ROADMAP MATRIX... ONLINE",
    "CHECKING BACKEND COMPILATION COMPATIBILITY (ESMODULES)... OK",
    "INITIALIZING SECURE PORTFOLIO CONTAINER SHIELDING... ACTIVE",
    "QUANTUM NEURAL VECTORS ALIGNED SUCCESSFULLY",
    "COGNITIVE WORKSPACE LAUNCH SEQUENCE STARTED."
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    
    // Stagger adding logs
    const logInterval = setInterval(() => {
      if (currentLogIndex < initialLogs.length) {
        setLogs(prev => [...prev, initialLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 150);

    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[999] bg-obsidian flex flex-col items-center justify-center p-6 selection:bg-copper selection:text-alabaster">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
      
      <div className="w-full max-w-lg flex flex-col gap-6">
        
        {/* Animated Brand Core Mark */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 bg-onyx border border-[#1E1E24] rounded-xl flex items-center justify-center overflow-hidden shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
              <path d="M4 4V20" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M4 12C9 6 15 18 20 12" stroke="#C27803" strokeWidth="2" strokeLinecap="round" />
              <path d="M20 4V20" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 to-transparent" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-base text-alabaster tracking-tight">M. Hamad</span>
            <span className="font-mono text-[10px] text-copper tracking-widest uppercase">Autonomous Platform v1.0</span>
          </div>
        </div>

        {/* Console Box */}
        <div className="bg-[#0B0B0E] border border-[#1E1E24] rounded-xl p-5 font-mono text-[11px] text-[#A1A1AA] h-60 flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.8)] relative">
          
          {/* Scroll Logs */}
          <div className="flex-1 flex flex-col justify-end gap-1.5 overflow-hidden">
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-start gap-2"
              >
                <span className="text-copper shrink-0">⚡</span>
                <span className={idx === logs.length - 1 ? "text-alabaster" : ""}>{log}</span>
              </motion.div>
            ))}
          </div>

          {/* Core Indicator bar */}
          <div className="mt-4 pt-3 border-t border-[#1E1E24]/60 flex items-center justify-between text-[10px] tracking-wider uppercase text-slate-gray shrink-0">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-copper animate-spin" style={{ animationDuration: '3s' }} />
              <span>COGNITIVE CORE ACTIVATED</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-copper" />
              <span>CONTAINER SHIELD ON</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center font-mono text-[10px] uppercase text-slate-gray tracking-wider">
            <span>Loading Quantum Schematics</span>
            <span className="text-alabaster">{Math.min(100, progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-onyx border border-[#1E1E24] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-copper to-amber-500 rounded-full"
              style={{ width: `${Math.min(100, progress)}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
