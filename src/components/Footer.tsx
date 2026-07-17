import React from "react";
import { Terminal, Cpu, ArrowUp, Github, Linkedin, Shield } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-obsidian border-t border-[#1E1E24] py-16 relative z-10" id="footer">
      <div className="w-[92%] max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 items-start">
          
          {/* Logo & Brand statement */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2 group p-1" aria-label="Muhammad Hamad Home">
              <div className="relative w-8 h-8 bg-onyx border border-[#1E1E24] rounded-lg flex items-center justify-center overflow-hidden">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4V20" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M4 12C9 6 15 18 20 12" stroke="#C27803" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 4V20" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-tr from-copper/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-base text-alabaster tracking-tight">Muhammad Hamad</span>
                <span className="font-mono text-[9px] text-copper tracking-widest uppercase">AI Systems Architect</span>
              </div>
            </a>

            <p className="font-sans text-xs text-slate-gray leading-relaxed max-w-sm">
              Architecting production-ready cognitive infrastructures, scaling multi-agent systems, and mentoring the next generation of generative AI software developers.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#1E1E24] bg-[#121216] flex items-center justify-center text-slate-gray hover:text-alabaster hover:border-copper/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#1E1E24] bg-[#121216] flex items-center justify-center text-slate-gray hover:text-alabaster hover:border-copper/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] text-slate-gray uppercase tracking-wider mb-4 border-b border-[#1E1E24] pb-2">Navigation</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="font-sans text-xs text-slate-gray hover:text-alabaster transition-colors w-fit">Biography foundations</a>
              <a href="#expertise" className="font-sans text-xs text-slate-gray hover:text-alabaster transition-colors w-fit">Interactive sandbox</a>
              <a href="#projects" className="font-sans text-xs text-slate-gray hover:text-alabaster transition-colors w-fit">Case study reports</a>
              <a href="#teaching" className="font-sans text-xs text-slate-gray hover:text-alabaster transition-colors w-fit">Academy curriculum</a>
              <a href="#blog" className="font-sans text-xs text-slate-gray hover:text-alabaster transition-colors w-fit">Technical engineering blog</a>
              <a href="#contact" className="font-sans text-xs text-slate-gray hover:text-alabaster transition-colors w-fit">Consultation workspace</a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="font-mono text-[10px] text-slate-gray uppercase tracking-wider mb-2 border-b border-[#1E1E24] pb-2 w-full">Gateway Status</h4>
            <div className="p-4 bg-onyx/45 border border-[#1E1E24] rounded-xl flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2 font-mono text-[9px] text-[#A3E635]">
                <Cpu className="w-3.5 h-3.5 text-copper" />
                <span>SERVERLESS STACK: CONTAINER UP</span>
              </div>
              <p className="font-sans text-[11px] text-slate-gray leading-normal">
                Hosted inside secure container instances with auto-scaling triggers. Response latency: 12ms.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright details and Scroll to top */}
        <div className="border-t border-[#1E1E24] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-slate-gray">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-copper" />
            <span>&copy; {new Date().getFullYear()} MUHAMMAD HAMAD. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-gray hover:text-alabaster transition-colors py-1.5 px-3 bg-onyx border border-[#1E1E24] rounded-lg focus:outline-none focus:ring-1 focus:ring-copper"
            aria-label="Scroll to top"
          >
            Scroll to Top
            <ArrowUp className="w-3.5 h-3.5 text-copper" />
          </button>
        </div>

      </div>
    </footer>
  );
}
