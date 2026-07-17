import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Search, Clock, ArrowRight, X, Calendar, Share2, Clipboard, Check, ChevronRight } from "lucide-react";
import { blogPosts, BlogPost } from "../blogData";

export default function BlogView({ initialActivePostId, onClearInitialPost }: { initialActivePostId?: string | null, onClearInitialPost?: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [copiedCodeText, setCopiedCodeText] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const readerContainerRef = useRef<HTMLDivElement>(null);

  // Synchronize deep-link selection from CommandPalette or elsewhere
  useEffect(() => {
    if (initialActivePostId) {
      setSelectedPostId(initialActivePostId);
      if (onClearInitialPost) onClearInitialPost();
    }
  }, [initialActivePostId, onClearInitialPost]);

  const handleScroll = () => {
    if (!readerContainerRef.current) return;
    const element = readerContainerRef.current;
    const totalHeight = element.scrollHeight - element.clientHeight;
    if (totalHeight === 0) return;
    const progress = (element.scrollTop / totalHeight) * 100;
    setScrollProgress(progress);
  };

  const selectedPost = blogPosts.find(post => post.id === selectedPostId);

  useEffect(() => {
    if (selectedPostId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPostId]);

  // Categories list
  const categories = ["All", "AI Orchestration", "Information Retrieval", "Backend Engineering"];

  // Filter posts based on query & category
  const filteredPosts = blogPosts.filter(post => {
    const categoryMatches = activeCategory === "All" || post.category === activeCategory;
    const queryMatches = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatches && queryMatches;
  });

  const triggerCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeText(true);
    setTimeout(() => setCopiedCodeText(false), 2000);
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
      <div className="flex flex-col items-start gap-4 mb-12">
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
          <span>[ FILE: BLOG_POSTS.txt ]</span>
          <span>•</span>
          <span>TECHNICAL LOGS</span>
        </div>
        <h1 className="font-display font-light text-4xl sm:text-5xl text-alabaster tracking-tight leading-none">
          Rigorous Engineering, <br />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster via-copper to-amber-500">
            Uncompromised Quality.
          </span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-2xl mt-2 leading-relaxed">
          I write about raw, system-level design patterns, optimization tradeoffs, security paradigms, and operational realities in production AI deployment.
        </p>
      </div>

      {/* Search and Filters Hub */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 pb-6 border-b border-[#1E1E24]/60">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-onyx/20 border border-[#1E1E24]/50 rounded-xl w-full md:w-auto overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 h-8 font-sans text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat ? "bg-copper text-alabaster shadow-md" : "text-slate-gray hover:text-alabaster"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Search */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search className="w-4 h-4 text-slate-gray absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blogs, concepts, tags..."
            className="w-full h-10 bg-[#0B0B0E] border border-[#1E1E24] text-alabaster text-xs rounded-xl pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-copper placeholder-slate-gray"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[9px] text-slate-gray hover:text-alabaster uppercase"
            >
              Clear
            </button>
          )}
        </div>

      </div>

      {/* Blogs Posts Listing */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              onClick={() => setSelectedPostId(post.id)}
              className="group cursor-pointer bg-onyx/30 border border-[#1E1E24]/50 hover:border-[#1E1E24] hover:bg-onyx/65 transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between h-[360px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-copper/5 to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between font-mono text-[9px] text-copper tracking-wider uppercase">
                  <span>// {post.category}</span>
                  <span className="flex items-center gap-1 text-slate-gray">
                    <Clock className="w-3 h-3 text-copper" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-alabaster mt-4 leading-snug group-hover:text-copper transition-colors duration-200 line-clamp-3">
                  {post.title}
                </h3>
                
                <p className="font-sans text-xs text-slate-gray mt-4 leading-relaxed line-clamp-4">
                  {post.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-5">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-obsidian border border-[#1E1E24] rounded font-mono text-[8px] text-alabaster tracking-wider uppercase">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[9px] text-alabaster uppercase tracking-widest font-bold group-hover:text-copper transition-colors">
                  Open Narrative Log
                  <ArrowRight className="w-3.5 h-3.5 text-copper group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-slate-gray">
          <BookOpen className="w-12 h-12 text-copper/35 mb-4 mx-auto animate-bounce" />
          <h4 className="font-display font-medium text-base text-alabaster">No matches found</h4>
          <p className="font-sans text-xs max-w-sm mx-auto leading-relaxed mt-1">Try modifying your query keyword or expanding your search categories to discover more reports.</p>
        </div>
      )}

      {/* Reader Immersive Overlay Mode */}
      <AnimatePresence>
        {selectedPostId && selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPostId(null)}
              className="absolute inset-0 bg-obsidian/95 backdrop-blur-md"
            />

            {/* Reading progress bar at top of layout */}
            <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-onyx">
              <div 
                className="h-full bg-gradient-to-r from-copper to-amber-500 transition-all duration-75"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* Reader Card container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-onyx/80 border border-[#1E1E24] h-[92vh] rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col mx-4"
            >
              
              {/* Reader Sticky Header */}
              <div className="px-6 py-4 border-b border-[#1E1E24] flex items-center justify-between bg-obsidian/30 shrink-0 z-10">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 bg-copper/10 border border-copper/20 text-copper font-mono text-[9px] uppercase tracking-wider rounded-md">
                    {selectedPost.category}
                  </span>
                  <span className="font-mono text-[10px] text-slate-gray flex items-center gap-1.5 uppercase">
                    <Clock className="w-3.5 h-3.5 text-copper" />
                    {selectedPost.readingTime}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => triggerCopyCode(window.location.href)}
                    className="p-1.5 rounded-lg border border-transparent hover:border-[#1E1E24] hover:bg-onyx flex items-center justify-center text-slate-gray hover:text-alabaster transition-colors"
                    title="Copy Article Link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="w-8 h-8 rounded-full border border-[#1E1E24] hover:bg-obsidian/50 flex items-center justify-center text-slate-gray hover:text-alabaster transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Reader Narrative Body Scrollport */}
              <div 
                ref={readerContainerRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 scrollbar-none"
              >
                {/* Meta Head block */}
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-slate-gray">
                    <Calendar className="w-3.5 h-3.5 text-copper" />
                    <span>Published At: {selectedPost.publishedAt}</span>
                  </div>
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-alabaster tracking-tight leading-tight">
                    {selectedPost.title}
                  </h1>
                  <p className="font-sans text-sm text-slate-gray leading-relaxed italic border-l border-copper/40 pl-4 py-0.5">
                    {selectedPost.summary}
                  </p>
                </div>

                <div className="h-[1px] w-full bg-[#1E1E24] mb-8" />

                {/* Main Article parser simulation */}
                <div className="prose prose-invert max-w-none text-slate-gray font-sans text-xs sm:text-sm leading-relaxed flex flex-col gap-6">
                  {/* Parsing markdown lines manually to provide pristine visual rendering and custom styled sections */}
                  {selectedPost.content.split("\n\n").map((chunk, index) => {
                    if (chunk.startsWith("## ")) {
                      return (
                        <h2 key={index} className="font-display text-lg sm:text-xl font-bold text-alabaster tracking-tight mt-6 mb-2">
                          {chunk.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (chunk.startsWith("### ")) {
                      return (
                        <h3 key={index} className="font-display text-sm sm:text-base font-semibold text-alabaster tracking-tight mt-4 mb-1">
                          {chunk.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (chunk.startsWith("`") && chunk.endsWith("`") && chunk.includes("```")) {
                      // Extract code block lines
                      const cleanChunk = chunk.replace(/```[a-zA-Z]*/g, "").replace(/```/g, "").trim();
                      return (
                        <div key={index} className="relative bg-[#0B0B0E] border border-[#1E1E24] rounded-xl p-4 font-mono text-[10.5px] text-alabaster leading-relaxed overflow-x-auto my-4 group">
                          <button
                            onClick={() => triggerCopyCode(cleanChunk)}
                            className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 p-1 bg-onyx border border-[#1E1E24] text-slate-gray hover:text-alabaster rounded transition-all duration-150"
                          >
                            {copiedCodeText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Clipboard className="w-3.5 h-3.5" />}
                          </button>
                          <pre>{cleanChunk}</pre>
                        </div>
                      );
                    }
                    if (chunk.startsWith("* ")) {
                      return (
                        <ul key={index} className="list-disc pl-5 flex flex-col gap-1.5 my-2">
                          {chunk.split("\n").map((line, lIdx) => (
                            <li key={lIdx}>{line.replace("* ", "")}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (chunk.startsWith("1. ")) {
                      return (
                        <ol key={index} className="list-decimal pl-5 flex flex-col gap-1.5 my-2">
                          {chunk.split("\n").map((line, lIdx) => (
                            <li key={lIdx}>{line.replace(/^\d+\.\s+/, "")}</li>
                          ))}
                        </ol>
                      );
                    }
                    // Default paragraph render
                    return (
                      <p key={index} className="leading-relaxed">
                        {chunk}
                      </p>
                    );
                  })}
                </div>

                <div className="h-[1px] w-full bg-[#1E1E24] my-10" />

                {/* Article footer author credentials card */}
                <div className="p-6 bg-obsidian border border-[#1E1E24] rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-onyx border border-[#1E1E24] flex items-center justify-center font-mono font-bold text-copper">
                      MH
                    </div>
                    <div>
                      <span className="font-display font-bold text-xs sm:text-sm text-alabaster block">Muhammad Hamad</span>
                      <span className="font-mono text-[9px] text-copper uppercase block">Lead AI Architect & Educator</span>
                    </div>
                  </div>
                  <p className="font-sans text-[10.5px] text-slate-gray max-w-xs leading-relaxed text-center sm:text-right">
                    Teaching modern, production-grade agent state-machines, dense-sparse retrieval systems, and security sandboxes.
                  </p>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
