import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, ArrowRight, ShieldCheck, Search } from "lucide-react";

interface HeaderProps {
  onOpenSearch?: () => void;
  currentView?: string;
}

export default function Header({ onOpenSearch, currentView }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Case Studies", href: "#projects" },
    { name: "Academy", href: "#teaching" },
    { name: "Blog", href: "#blog" },
    { name: "Console", href: "#console" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4">
        <div className={`w-[92%] max-w-5xl mx-auto backdrop-blur-md border rounded-full flex items-center justify-between px-6 h-14 transition-all duration-300 ${
          scrolled 
            ? "bg-obsidian/85 border-[#1E1E24] shadow-[0_8px_32px_rgba(0,0,0,0.8)]" 
            : "bg-obsidian/40 border-white/[0.03]"
        }`} id="navbar">
          
          {/* Brand Logo & Monogram */}
          <a href="#" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-lg p-1" aria-label="Muhammad Hamad Home">
            <div className="relative w-7 h-7 bg-onyx border border-[#1E1E24] rounded-md flex items-center justify-center overflow-hidden">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left wing - Software Engineering */}
                <path d="M4 4V20" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
                {/* Connecting core - LangGraph Loop */}
                <path d="M4 12C9 6 15 18 20 12" stroke="#C27803" strokeWidth="2" strokeLinecap="round" />
                {/* Right wing - Education */}
                <path d="M20 4V20" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-tr from-copper/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-sm text-alabaster tracking-tight">M. Hamad</span>
              <span className="font-mono text-[9px] text-copper tracking-widest uppercase">AI Architect</span>
            </div>
          </a>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden md:flex items-center gap-5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const hashValue = link.href.replace("#", "");
              const isCurrent = currentView === hashValue || (currentView === "home" && link.href === "#");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-xs font-medium transition-colors duration-200 tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-md px-1 py-0.5 ${
                    isCurrent ? "text-copper" : "text-slate-gray hover:text-alabaster"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right side CTAs & Status */}
          <div className="hidden md:flex items-center gap-3">
            {/* Command Palette Trigger */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="w-8 h-8 rounded-full border border-white/[0.03] hover:border-[#1E1E24] hover:bg-onyx flex items-center justify-center text-slate-gray hover:text-alabaster transition-all"
                title="Open Command Palette (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            )}

            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-onyx border border-[#1E1E24] rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[8px] text-alabaster tracking-wider uppercase">Active Q3 2026</span>
            </div>
            <a
              href="#contact"
              className="px-3.5 h-8.5 bg-alabaster hover:bg-white text-obsidian font-sans font-semibold text-xs rounded-full flex items-center justify-center gap-1 transition-all duration-200 active:scale-95 hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)]"
            >
              Initiate Discovery
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="w-8 h-8 rounded-full border border-[#1E1E24] bg-onyx flex items-center justify-center text-slate-gray hover:text-alabaster"
                aria-label="Open search palette"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-full border border-[#1E1E24] bg-onyx flex items-center justify-center text-alabaster focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 w-[92%] mx-auto md:hidden"
          >
            <div className="bg-obsidian border border-[#1E1E24] rounded-2xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.95)] backdrop-blur-lg">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[9px] text-copper tracking-widest uppercase">Navigation Map</span>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display font-medium text-lg text-alabaster hover:text-copper transition-colors py-1 border-b border-[#1E1E24]/50"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full h-11 bg-alabaster text-obsidian font-sans font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all duration-150 active:scale-95"
                  >
                    Initiate Discovery
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="flex items-center justify-center gap-1.5 font-mono text-[9px] text-slate-gray mt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-copper" />
                    Secure Sandbox Container Active
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
