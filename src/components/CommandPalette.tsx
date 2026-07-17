import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Terminal, BookOpen, Cpu, Briefcase, GraduationCap, X, ChevronRight, FileText } from "lucide-react";
import { projectsData, coursesData } from "../data";
import { blogPosts } from "../blogData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (hash: string) => void;
  onSelectProject?: (projectId: string) => void;
  onSelectBlog?: (blogId: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onNavigate,
  onSelectProject,
  onSelectBlog
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (isOpen && e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Command map
  const navigationItems = [
    { name: "Go to Home", hash: "#", icon: <Terminal className="w-4 h-4 text-copper" />, category: "Navigation" },
    { name: "Go to About", hash: "#about", icon: <FileText className="w-4 h-4 text-copper" />, category: "Navigation" },
    { name: "Go to AI Expertise", hash: "#expertise", icon: <Cpu className="w-4 h-4 text-copper" />, category: "Navigation" },
    { name: "Go to Case Studies", hash: "#projects", icon: <Briefcase className="w-4 h-4 text-copper" />, category: "Navigation" },
    { name: "Go to Academy", hash: "#teaching", icon: <GraduationCap className="w-4 h-4 text-copper" />, category: "Navigation" },
    { name: "Go to Technical Blog", hash: "#blog", icon: <BookOpen className="w-4 h-4 text-copper" />, category: "Navigation" },
    { name: "Go to Consultation Portal", hash: "#contact", icon: <Terminal className="w-4 h-4 text-copper" />, category: "Navigation" }
  ];

  const results = [
    ...navigationItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase())),
    ...projectsData.map(proj => ({
      name: `Project: ${proj.title}`,
      hash: "#projects",
      id: proj.id,
      type: "project",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      category: "Case Studies"
    })).filter(item => item.name.toLowerCase().includes(query.toLowerCase())),
    ...coursesData.map(course => ({
      name: `Course: ${course.title}`,
      hash: "#teaching",
      id: course.id,
      type: "course",
      icon: <GraduationCap className="w-4 h-4 text-indigo-400" />,
      category: "Academy"
    })).filter(item => item.name.toLowerCase().includes(query.toLowerCase())),
    ...blogPosts.map(post => ({
      name: `Blog: ${post.title}`,
      hash: "#blog",
      id: post.id,
      type: "blog",
      icon: <BookOpen className="w-4 h-4 text-amber-400" />,
      category: "Blog Posts"
    })).filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
  ];

  const handleSelect = (item: any) => {
    onNavigate(item.hash);
    if (item.type === "project" && onSelectProject && item.id) {
      setTimeout(() => onSelectProject(item.id), 100);
    } else if (item.type === "blog" && onSelectBlog && item.id) {
      setTimeout(() => onSelectBlog(item.id), 100);
    }
    onClose();
  };

  useEffect(() => {
    const handleNavigation = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      }
    };
    window.addEventListener("keydown", handleNavigation);
    return () => window.removeEventListener("keydown", handleNavigation);
  }, [isOpen, results, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-onyx/90 border border-[#1E1E24] rounded-2xl shadow-[0_32px_64px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col h-[400px]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 h-14 border-b border-[#1E1E24] bg-obsidian/45">
              <Search className="w-5 h-5 text-slate-gray shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search resources, projects, blog or navigate..."
                className="w-full bg-transparent border-none text-alabaster text-sm placeholder-slate-gray focus:outline-none focus:ring-0 focus:border-none"
              />
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-onyx border border-transparent hover:border-[#1E1E24] text-slate-gray hover:text-alabaster transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results Grid / List */}
            <div className="flex-1 overflow-y-auto p-2 scrollbar-none">
              {results.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {results.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={`${item.name}-${idx}`}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-150 ${
                          isSelected 
                            ? "bg-copper/10 border border-copper/30 text-alabaster shadow-inner" 
                            : "bg-transparent border border-transparent text-slate-gray hover:text-alabaster"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-md flex items-center justify-center border ${
                            isSelected ? "bg-copper/20 border-copper/40" : "bg-obsidian border-[#1E1E24]"
                          }`}>
                            {item.icon}
                          </div>
                          <div>
                            <span className="font-sans text-xs font-medium block">
                              {item.name}
                            </span>
                            <span className="font-mono text-[9px] text-slate-gray/85 tracking-wider uppercase block mt-0.5">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-gray shrink-0">
                          {isSelected && (
                            <>
                              <span className="text-copper">Select</span>
                              <ChevronRight className="w-3.5 h-3.5 text-copper animate-pulse" />
                            </>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center text-slate-gray">
                  <Terminal className="w-8 h-8 text-copper/40 mb-3 animate-pulse" />
                  <p className="font-sans text-xs">No matching components found for query.</p>
                  <p className="font-mono text-[9px] text-copper/50 mt-1 uppercase tracking-widest">Sandbox Search Failure</p>
                </div>
              )}
            </div>

            {/* Keyboard Shortcuts Hint Footer */}
            <div className="h-9 px-4 border-t border-[#1E1E24] bg-obsidian/45 flex items-center justify-between text-slate-gray font-mono text-[9px] uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <span className="bg-onyx border border-[#1E1E24] px-1 rounded text-alabaster">↑↓</span>
                <span>to navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-onyx border border-[#1E1E24] px-1 rounded text-alabaster">Enter</span>
                <span>to select</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-onyx border border-[#1E1E24] px-1 rounded text-alabaster">Esc</span>
                <span>to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
