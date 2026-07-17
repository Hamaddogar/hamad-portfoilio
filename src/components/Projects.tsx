import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";
import { Project } from "../types";
import { 
  Monitor, Tablet, Smartphone, Play, ExternalLink, Code, Check, X,
  ChevronLeft, ChevronRight, Sparkles, Cpu, Layers, Activity, FileText,
  Clock, Globe, Video, Compass, HelpCircle, Info, Lock, RefreshCw, SlidersHorizontal,
  Award, ShieldCheck, Database, Zap
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Console state per project ID: active media tab ('preview' | 'demo' | 'architecture' | 'gallery')
  const [mediaTabs, setMediaTabs] = useState<Record<string, "preview" | "demo" | "architecture" | "gallery">>({});
  
  // Console state per project ID: device frame ('desktop' | 'tablet' | 'mobile')
  const [deviceFrames, setDeviceFrames] = useState<Record<string, "desktop" | "tablet" | "mobile">>({});
  
  // Console state per project ID: load interactive iframe or static screenshot
  const [iframeModes, setIframeModes] = useState<Record<string, "live" | "static">>({});

  // Console state per project ID: loading state for active iframe
  const [iframeLoading, setIframeLoading] = useState<Record<string, boolean>>({});

  // Filter labels required by the user
  const filters = [
    "All Projects", "AI", "SaaS", "Healthcare", "Finance", "Travel", "E-Commerce", "Education", 
    "Full Stack", "Frontend", "Backend", "Live Projects", "Video Available"
  ];

  // Helper to determine if project matches filter criteria
  const matchesFilter = (project: Project, filter: string) => {
    if (filter === "All Projects") return true;
    const cat = project.category.toLowerCase();
    const query = filter.toLowerCase();

    if (query === "ai") return project.aiTech.length > 0 || cat.includes("ai");
    if (query === "saas") return cat.includes("saas");
    if (query === "healthcare") return cat.includes("healthcare") || project.industry?.toLowerCase().includes("healthcare");
    if (query === "finance") return cat.includes("finance") || project.industry?.toLowerCase().includes("finance");
    if (query === "travel") return cat.includes("travel") || project.industry?.toLowerCase().includes("travel");
    if (query === "e-commerce") return cat.includes("e-commerce") || project.industry?.toLowerCase().includes("retail") || project.industry?.toLowerCase().includes("textile");
    if (query === "education") return cat.includes("education") || project.industry?.toLowerCase().includes("edtech");
    if (query === "full stack") return cat.includes("full stack") || cat.includes("fullstack");
    if (query === "frontend") return cat.includes("frontend") || project.techStack.includes("React") || project.techStack.includes("Next.js");
    if (query === "backend") return cat.includes("backend") || project.techStack.includes("Node.js") || project.techStack.includes("NestJS") || project.techStack.includes("FastAPI");
    if (query === "live projects") return !!project.liveUrl;
    if (query === "video available") return !!project.demoVideoUrl;

    return cat.includes(query);
  };

  const filteredProjects = projectsData.filter(p => matchesFilter(p, activeFilter));

  // Reset index on filter change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Handle Carousel navigation
  const nextProject = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Keyboard navigation for carousel and modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && !selectedProject) {
        nextProject();
      } else if (e.key === "ArrowLeft" && !selectedProject) {
        prevProject();
      } else if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredProjects.length, selectedProject]);

  // Trigger loading spinner when iframe loads, tab switches to preview, or mode is live
  useEffect(() => {
    const currentProj = filteredProjects[currentIndex];
    if (!currentProj) return;
    
    const tab = getMediaTab(currentProj.id);
    const mode = getIframeMode(currentProj.id);
    
    if (tab === "preview" && mode === "live") {
      setIframeLoading(prev => ({ ...prev, [currentProj.id]: true }));
    }
  }, [currentIndex, activeFilter, mediaTabs, iframeModes]);

  // Helper functions for localized console tab state
  const getMediaTab = (projectId: string, defaultTab: "preview" | "demo" | "architecture" | "gallery" = "gallery") => {
    const proj = projectsData.find(p => p.id === projectId);
    // If we have liveUrl but no default, fallback to preview if allowed, otherwise gallery
    const resolvedDefault = proj?.liveUrl ? "preview" : (proj?.demoVideoUrl ? "demo" : "gallery");
    return mediaTabs[projectId] || resolvedDefault;
  };

  const setMediaTab = (projectId: string, tab: "preview" | "demo" | "architecture" | "gallery") => {
    setMediaTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  const getDeviceFrame = (projectId: string): "desktop" | "tablet" | "mobile" => {
    return deviceFrames[projectId] || "desktop";
  };

  const setDeviceFrame = (projectId: string, frame: "desktop" | "tablet" | "mobile") => {
    setDeviceFrames(prev => ({ ...prev, [projectId]: frame }));
  };

  const getIframeMode = (projectId: string): "live" | "static" => {
    return iframeModes[projectId] || "static"; // Default to static (Interactive scrollable screenshot) for 100% stability
  };

  const setIframeMode = (projectId: string, mode: "live" | "static") => {
    setIframeModes(prev => ({ ...prev, [projectId]: mode }));
  };

  return (
    <section className="py-24 bg-obsidian border-y border-[#1E1E24]/60 relative overflow-hidden" id="projects">
      {/* Background radial soft light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-copper/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="w-[94%] max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
              <span>[ SECTION.03 ]</span>
              <span>•</span>
              <span>Principal Portfolio</span>
            </div>
            <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-alabaster tracking-tight">
              Cinematic Case <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">Study Showcases.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-gray max-w-2xl leading-relaxed mt-1">
              Acting as Lead Architect and Principal Engineer, I engineer high-throughput business solutions. Drag or filter the interactive console layouts below to review real live websites, full architecture diagrams, and custom video demos.
            </p>
          </div>

          {/* Quick instructions indicator */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[9px] text-slate-gray bg-[#121216]/60 border border-[#1E1E24]/80 px-3.5 py-1.5 rounded-xl shrink-0">
            <Zap className="w-3 h-3 text-copper animate-pulse" />
            <span>USE LEFT / RIGHT ARROWS TO NAVIGATE CAROUSEL</span>
          </div>
        </div>

        {/* Categories / Interactive Filter Bar */}
        <div className="mb-12 border-b border-[#1E1E24]/60 pb-6 overflow-x-auto scrollbar-none flex gap-2">
          <div className="flex gap-1.5 shrink-0 px-1 py-1 bg-[#121216]/50 border border-[#1E1E24]/40 rounded-2xl">
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3.5 py-2 rounded-xl font-mono text-[9px] sm:text-[10px] uppercase tracking-wider transition-all ${
                    isActive 
                      ? "bg-copper text-alabaster shadow-md font-medium" 
                      : "text-slate-gray hover:text-alabaster hover:bg-onyx/45"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* CAROUSEL WRAPPER WITH LARGE CINEMATIC CARD PANELS */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="w-full h-[400px] border border-[#1E1E24] rounded-3xl bg-onyx/15 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-14 h-14 rounded-full bg-onyx border border-[#1E1E24] flex items-center justify-center text-copper mb-4">
                  <SlidersHorizontal className="w-6 h-6" />
                </div>
                <h3 className="font-display font-medium text-lg text-alabaster">No direct matches for "{activeFilter}"</h3>
                <p className="font-sans text-xs text-slate-gray max-w-md mt-2 leading-relaxed">
                  While Muhammad hasn't listed a standalone {activeFilter} proprietary product, he possesses extensive architectural expertise implementing enterprise integrations that span high-security cloud and database infrastructures.
                </p>
                <button
                  onClick={() => setActiveFilter("All Projects")}
                  className="mt-6 px-5 py-2.5 bg-[#121216] border border-copper/30 hover:border-copper text-copper rounded-xl font-mono text-[10px] uppercase tracking-wider transition-all"
                >
                  Clear Filter Selection
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={filteredProjects[currentIndex].id}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#121216]/45 border border-[#1E1E24] rounded-[32px] p-6 sm:p-10 lg:p-12 relative overflow-hidden"
              >
                
                {/* Visual Backdrop Overlay */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-copper/5 to-transparent pointer-events-none opacity-40" />

                {/* LEFT SIDE: EDITORIAL SHOWCASE INFO */}
                <div className="lg:col-span-5 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Project Meta Metrics & Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="font-mono text-[8.5px] text-copper tracking-wider uppercase bg-copper/10 border border-copper/20 px-2.5 py-0.5 rounded">
                        {filteredProjects[currentIndex].timeline}
                      </span>
                      <span className="font-mono text-[8.5px] text-slate-gray uppercase">
                        {filteredProjects[currentIndex].industry}
                      </span>
                      <span className="text-slate-gray">•</span>
                      <span className="font-mono text-[8.5px] text-slate-gray uppercase">
                        {filteredProjects[currentIndex].country}
                      </span>
                    </div>

                    {/* Company Indicator */}
                    <div className="font-display font-medium text-xs text-copper tracking-wider uppercase mb-1">
                      {filteredProjects[currentIndex].company}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight leading-tight">
                      {filteredProjects[currentIndex].title}
                    </h3>
                    <p className="font-mono text-[9px] text-slate-gray uppercase tracking-widest mt-1.5 mb-4">
                      {filteredProjects[currentIndex].subtitle}
                    </p>

                    {/* Body text Description */}
                    <p className="font-sans text-xs sm:text-[13px] text-slate-gray leading-relaxed mb-6">
                      {filteredProjects[currentIndex].description}
                    </p>

                    {/* Key Core Performance Metrics */}
                    <div className="grid grid-cols-3 gap-3 border-y border-[#1E1E24] py-4 mb-6">
                      {filteredProjects[currentIndex].metrics.map((m, i) => (
                        <div key={i} className="text-left">
                          <div className="font-display font-bold text-sm sm:text-base text-alabaster leading-none mb-1">
                            {m.value}
                          </div>
                          <div className="font-sans text-[7.5px] text-slate-gray uppercase tracking-tight leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick responsibilities snippet */}
                    <div className="mb-8">
                      <span className="font-mono text-[8.5px] text-copper uppercase tracking-wider block mb-2">// PRIMARY SCOPE</span>
                      <div className="flex flex-col gap-1.5">
                        {filteredProjects[currentIndex].responsibilities?.slice(0, 2).map((resp, idx) => (
                          <div key={idx} className="flex gap-2 items-start text-left">
                            <Check className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                            <p className="font-sans text-[11px] text-slate-gray leading-relaxed line-clamp-1">
                              {resp}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM OF INFO SIDE: ACTION BUTTONS */}
                  <div className="flex flex-wrap gap-2.5 border-t border-[#1E1E24] pt-6 mt-4">
                    {filteredProjects[currentIndex].liveUrl && (
                      <a
                        href={filteredProjects[currentIndex].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 h-10 bg-copper hover:bg-copper/90 text-alabaster font-mono text-[9px] uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-xl transition-all shadow-lg shadow-copper/10 shrink-0"
                      >
                        Visit Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    
                    {filteredProjects[currentIndex].demoVideoUrl && (
                      <button
                        onClick={() => {
                          setMediaTab(filteredProjects[currentIndex].id, "demo");
                        }}
                        className="px-4 h-10 bg-onyx/60 border border-[#1E1E24] hover:bg-copper/15 hover:border-copper/30 text-alabaster font-mono text-[9px] uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-xl transition-all shrink-0"
                      >
                        Watch Demo
                        <Play className="w-3 h-3 fill-current" />
                      </button>
                    )}

                    <button
                      onClick={() => {
                        setSelectedProject(filteredProjects[currentIndex]);
                      }}
                      className="px-4 h-10 bg-onyx/40 border border-[#1E1E24] hover:border-copper/30 text-slate-gray hover:text-alabaster font-mono text-[9px] uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-xl transition-all shrink-0"
                    >
                      Case Study
                      <FileText className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedProject(filteredProjects[currentIndex]);
                      }}
                      className="px-4 h-10 bg-transparent border border-[#1E1E24]/80 hover:border-copper/20 text-slate-gray hover:text-copper font-mono text-[9px] uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-xl transition-all shrink-0"
                    >
                      Architecture
                      <Layers className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE: INTERACTIVE PREVIEW CONSOLE */}
                <div className="lg:col-span-7 flex flex-col justify-between h-[520px] lg:h-[560px] bg-onyx/15 border border-[#1E1E24] rounded-2xl overflow-hidden relative group">
                  
                  {/* Console Header Selector Tabs */}
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#121216]/80 border-b border-[#1E1E24]/60 z-10">
                    <div className="flex gap-1">
                      {/* Live Website Preview Button (Only if has liveUrl) */}
                      {filteredProjects[currentIndex].liveUrl && (
                        <button
                          onClick={() => setMediaTab(filteredProjects[currentIndex].id, "preview")}
                          className={`px-3 py-1.5 rounded-lg font-mono text-[8px] sm:text-[9.5px] uppercase tracking-wider transition-all ${
                            getMediaTab(filteredProjects[currentIndex].id) === "preview"
                              ? "bg-copper/15 text-copper border border-copper/30"
                              : "text-slate-gray hover:text-alabaster"
                          }`}
                        >
                          Live Site
                        </button>
                      )}

                      {/* Demo Video Button */}
                      {filteredProjects[currentIndex].demoVideoUrl && (
                        <button
                          onClick={() => setMediaTab(filteredProjects[currentIndex].id, "demo")}
                          className={`px-3 py-1.5 rounded-lg font-mono text-[8px] sm:text-[9.5px] uppercase tracking-wider transition-all ${
                            getMediaTab(filteredProjects[currentIndex].id) === "demo"
                              ? "bg-copper/15 text-copper border border-copper/30"
                              : "text-slate-gray hover:text-alabaster"
                          }`}
                        >
                          Video Walkthrough
                        </button>
                      )}

                      {/* Architecture Step Button */}
                      <button
                        onClick={() => setMediaTab(filteredProjects[currentIndex].id, "architecture")}
                        className={`px-3 py-1.5 rounded-lg font-mono text-[8px] sm:text-[9.5px] uppercase tracking-wider transition-all ${
                          getMediaTab(filteredProjects[currentIndex].id) === "architecture"
                            ? "bg-copper/15 text-copper border border-copper/30"
                            : "text-slate-gray hover:text-alabaster"
                        }`}
                      >
                        Architecture Node
                      </button>

                      {/* Screen Gallery Button */}
                      <button
                        onClick={() => setMediaTab(filteredProjects[currentIndex].id, "gallery")}
                        className={`px-3 py-1.5 rounded-lg font-mono text-[8px] sm:text-[9.5px] uppercase tracking-wider transition-all ${
                          getMediaTab(filteredProjects[currentIndex].id) === "gallery"
                            ? "bg-copper/15 text-copper border border-copper/30"
                            : "text-slate-gray hover:text-alabaster"
                        }`}
                      >
                        Static Screens
                      </button>
                    </div>

                    {/* Window controller visual circles */}
                    <div className="hidden sm:flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                    </div>
                  </div>

                  {/* Console Body: Dynamic Viewports based on Active Tab */}
                  <div className="flex-grow relative bg-[#0B0B0E] p-4 flex items-center justify-center overflow-hidden">
                    
                    {/* VIEWPORT PANEL 1: LIVE INTERACTIVE PREVIEW */}
                    {getMediaTab(filteredProjects[currentIndex].id) === "preview" && (
                      <div className="w-full h-full flex flex-col justify-between">
                        
                        {/* Device Responsive Selector Bars & Sandbox Warning */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3 bg-[#121216]/50 border border-[#1E1E24]/60 p-2 rounded-xl">
                          <div className="flex items-center gap-3">
                            {/* Device frame switchers */}
                            <div className="flex items-center gap-1 bg-onyx/40 p-0.5 rounded-lg border border-[#1E1E24]">
                              <button
                                onClick={() => setDeviceFrame(filteredProjects[currentIndex].id, "desktop")}
                                className={`p-1.5 rounded ${getDeviceFrame(filteredProjects[currentIndex].id) === "desktop" ? "bg-copper text-alabaster" : "text-slate-gray hover:text-alabaster"}`}
                                title="Desktop Mockup"
                              >
                                <Monitor className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setDeviceFrame(filteredProjects[currentIndex].id, "tablet")}
                                className={`p-1.5 rounded ${getDeviceFrame(filteredProjects[currentIndex].id) === "tablet" ? "bg-copper text-alabaster" : "text-slate-gray hover:text-alabaster"}`}
                                title="Tablet Mockup"
                              >
                                <Tablet className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setDeviceFrame(filteredProjects[currentIndex].id, "mobile")}
                                className={`p-1.5 rounded ${getDeviceFrame(filteredProjects[currentIndex].id) === "mobile" ? "bg-copper text-alabaster" : "text-slate-gray hover:text-alabaster"}`}
                                title="Mobile Mockup"
                              >
                                <Smartphone className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* Mode Toggle: Static vs Live */}
                            <div className="flex items-center gap-1 bg-onyx/40 p-0.5 rounded-lg border border-[#1E1E24]">
                              <button
                                onClick={() => setIframeMode(filteredProjects[currentIndex].id, "static")}
                                className={`px-2.5 py-1 text-[8.5px] rounded font-mono uppercase ${getIframeMode(filteredProjects[currentIndex].id) === "static" ? "bg-onyx text-copper font-medium" : "text-slate-gray hover:text-alabaster"}`}
                              >
                                Interactive Demo
                              </button>
                              <button
                                onClick={() => setIframeMode(filteredProjects[currentIndex].id, "live")}
                                className={`px-2.5 py-1 text-[8.5px] rounded font-mono uppercase ${getIframeMode(filteredProjects[currentIndex].id) === "live" ? "bg-onyx text-copper font-medium" : "text-slate-gray hover:text-alabaster"}`}
                              >
                                Sandbox Live
                              </button>
                            </div>
                          </div>

                          <a
                            href={filteredProjects[currentIndex].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-mono text-[8.5px] text-slate-gray hover:text-copper transition-all bg-[#1E1E24]/30 hover:bg-[#1E1E24]/60 border border-[#1E1E24]/50 px-2.5 py-1 rounded-lg"
                            title="Open live website in a new tab"
                          >
                            <Lock className="w-3 h-3 text-copper" />
                            <span className="truncate max-w-[120px]">{filteredProjects[currentIndex].liveUrl?.replace("https://", "")}</span>
                            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                          </a>
                        </div>

                        {/* Interactive Frame Wrapper */}
                        <div className="flex-grow flex items-center justify-center overflow-hidden">
                          {getIframeMode(filteredProjects[currentIndex].id) === "live" ? (
                            /* Live interactive iframe matching active frame */
                            <div className={`transition-all duration-300 border border-[#1E1E24] shadow-2xl relative bg-white ${
                              getDeviceFrame(filteredProjects[currentIndex].id) === "desktop" 
                                ? "w-full h-full rounded-lg" 
                                : getDeviceFrame(filteredProjects[currentIndex].id) === "tablet"
                                  ? "w-[70%] h-[95%] rounded-2xl border-4 border-onyx"
                                  : "w-[40%] h-[98%] rounded-[28px] border-8 border-onyx"
                            }`}>
                              {/* Top camera slit visual on phone */}
                              {getDeviceFrame(filteredProjects[currentIndex].id) === "mobile" && (
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-4 bg-onyx rounded-b-md z-30 flex items-center justify-center">
                                  <div className="w-6 h-1 bg-neutral-800 rounded-full" />
                                </div>
                              )}

                              {/* Loading Spinner Overlay */}
                              {iframeLoading[filteredProjects[currentIndex].id] && (
                                <div className="absolute inset-0 bg-[#0B0B0E] flex flex-col items-center justify-center z-20 rounded-lg">
                                  <div className="w-8 h-8 border-2 border-t-copper border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-3" />
                                  <span className="font-mono text-[8px] text-copper uppercase tracking-wider animate-pulse">Establishing Live Connection...</span>
                                </div>
                              )}

                              <iframe
                                src={filteredProjects[currentIndex].liveUrl}
                                className="w-full h-full border-none rounded-sm bg-white relative z-10"
                                title={`${filteredProjects[currentIndex].title} Live Preview`}
                                referrerPolicy="no-referrer"
                                onLoad={() => {
                                  const projId = filteredProjects[currentIndex]?.id;
                                  if (projId) {
                                    setIframeLoading(prev => ({ ...prev, [projId]: false }));
                                  }
                                }}
                              />
                            </div>
                          ) : (
                            /* Automatic fallback/static rendering inside device frames */
                            <div className={`transition-all duration-300 shadow-2xl relative bg-onyx/20 border border-[#1E1E24] flex flex-col ${
                              getDeviceFrame(filteredProjects[currentIndex].id) === "desktop" 
                                ? "w-full h-full rounded-lg" 
                                : getDeviceFrame(filteredProjects[currentIndex].id) === "tablet"
                                  ? "w-[70%] h-[95%] rounded-2xl border-4 border-onyx"
                                  : "w-[40%] h-[98%] rounded-[28px] border-8 border-onyx"
                            }`}>
                              {/* Sleek browser mock frame headers for Desktop */}
                              {getDeviceFrame(filteredProjects[currentIndex].id) === "desktop" && (
                                <div className="h-7 bg-[#121216]/90 border-b border-[#1E1E24] px-3 flex items-center justify-between z-20 relative shrink-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                                  </div>
                                  <div className="mx-auto bg-onyx border border-[#1E1E24]/60 px-8 py-0.5 rounded text-[7.5px] font-mono text-slate-gray flex items-center gap-1 max-w-[200px] truncate">
                                    <Lock className="w-2.5 h-2.5 text-copper shrink-0" />
                                    <span className="truncate">{filteredProjects[currentIndex].liveUrl}</span>
                                  </div>
                                  <div className="w-10" />
                                </div>
                              )}

                              {/* Mobile top status bar */}
                              {getDeviceFrame(filteredProjects[currentIndex].id) === "mobile" && (
                                <div className="h-6 bg-[#121216]/90 border-b border-[#1E1E24]/30 px-5 pt-1.5 flex items-center justify-between z-20 relative shrink-0 text-[7px] font-mono text-slate-gray">
                                  <span>10:12 AM</span>
                                  <div className="flex items-center gap-1">
                                    <span>5G</span>
                                    <span>100%</span>
                                  </div>
                                </div>
                              )}

                              {/* Tablet top status bar */}
                              {getDeviceFrame(filteredProjects[currentIndex].id) === "tablet" && (
                                <div className="h-6 bg-[#121216]/90 border-b border-[#1E1E24]/30 px-5 flex items-center justify-between z-20 relative shrink-0 text-[7px] font-mono text-slate-gray">
                                  <span>Safari</span>
                                  <div className="bg-onyx border border-[#1E1E24]/60 px-6 py-0.5 rounded text-[7px] font-mono text-slate-gray">
                                    {filteredProjects[currentIndex].liveUrl?.replace("https://", "")}
                                  </div>
                                  <span>100%</span>
                                </div>
                              )}
                              
                              {/* Scrollable image container simulating the working live website */}
                              <div className="flex-grow overflow-y-auto scrollbar-none hover:scrollbar-thin scrollbar-track-transparent scrollbar-thumb-copper/20 relative select-none">
                                <img 
                                  src={filteredProjects[currentIndex].screenshots?.[getDeviceFrame(filteredProjects[currentIndex].id) === "desktop" ? 0 : 1] || filteredProjects[currentIndex].screenshots?.[0]} 
                                  className="w-full h-auto object-cover object-top block" 
                                  alt={`${filteredProjects[currentIndex].title} Main Screen Layout`}
                                />
                              </div>

                              {/* Interactive scroll hover overlay tip */}
                              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#121216]/90 border border-copper/30 px-3 py-1 rounded-full text-[8px] font-mono text-copper tracking-wider uppercase shadow-xl backdrop-blur-sm pointer-events-none z-20 animate-pulse flex items-center gap-1 shrink-0">
                                <SlidersHorizontal className="w-2.5 h-2.5 text-copper" />
                                <span>Scroll to explore main screen</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Informative warning tip */}
                        <div className="mt-3.5 flex items-center gap-2 font-mono text-[8px] text-slate-gray px-2 py-1.5 bg-[#121216]/30 rounded">
                          <Info className="w-3 h-3 text-copper shrink-0" />
                          <span>Embedding is subject to client domain security. If the site is blank, click 'Sandbox Live' or use 'Visit Website'.</span>
                        </div>

                      </div>
                    )}

                    {/* VIEWPORT PANEL 2: DEMO VIDEO WALKTHROUGH */}
                    {getMediaTab(filteredProjects[currentIndex].id) === "demo" && (
                      <div className="w-full h-full rounded-xl overflow-hidden border border-[#1E1E24] relative bg-[#050507]">
                        {filteredProjects[currentIndex].demoVideoUrl ? (
                          <iframe
                            src={filteredProjects[currentIndex].demoVideoUrl}
                            className="w-full h-full border-none"
                            title={`${filteredProjects[currentIndex].title} Video Demo`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                            <Video className="w-12 h-12 text-slate-gray/40 mb-3" />
                            <div className="font-mono text-[10px] text-alabaster uppercase tracking-wider">Demo walkthrough rendering...</div>
                            <p className="font-sans text-[11px] text-slate-gray max-w-sm mt-1">
                              Video walkthrough details for this client delivery are undergoing NDA security scrubbing.
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* VIEWPORT PANEL 3: STEP ARCHITECTURE DIAGRAM */}
                    {getMediaTab(filteredProjects[currentIndex].id) === "architecture" && (
                      <div className="w-full h-full flex flex-col justify-between overflow-y-auto pr-1">
                        <div>
                          <div className="flex items-center justify-between border-b border-[#1E1E24]/60 pb-3 mb-4">
                            <span className="font-mono text-[9px] text-copper uppercase tracking-wider">// DESIGN SCHEMA</span>
                            <span className="font-mono text-[8.5px] text-slate-gray uppercase">{filteredProjects[currentIndex].architecture.diagramLabel}</span>
                          </div>

                          {/* Steps Render */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {filteredProjects[currentIndex].architecture.steps.map((st, i) => (
                              <div key={i} className="p-3.5 bg-[#121216]/60 border border-[#1E1E24] rounded-xl flex flex-col justify-between relative group hover:border-copper/30 transition-all">
                                <div className="absolute top-2.5 right-2.5 font-mono text-[8px] text-copper font-bold">
                                  0{i + 1}
                                </div>
                                <div>
                                  <span className="px-1.5 py-0.5 bg-onyx rounded text-[7.5px] font-mono text-slate-gray uppercase border border-[#1E1E24]/80">
                                    {st.role}
                                  </span>
                                  <h4 className="font-display font-medium text-xs text-alabaster mt-2 group-hover:text-copper transition-colors">
                                    {st.name}
                                  </h4>
                                </div>
                                <p className="font-sans text-[10.5px] text-slate-gray mt-1.5 leading-relaxed">
                                  {st.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Integration parameters */}
                        <div className="mt-4 p-3 bg-onyx/30 border border-[#1E1E24] rounded-xl flex flex-wrap gap-1.5 items-center justify-start">
                          <span className="font-mono text-[8px] text-slate-gray uppercase">Model Infrastructure:</span>
                          {filteredProjects[currentIndex].aiTech.map(t => (
                            <span key={t} className="px-2 py-0.5 bg-obsidian border border-copper/10 rounded text-[7.5px] font-mono text-copper uppercase">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* VIEWPORT PANEL 4: SCREENSHOT GALLERY */}
                    {getMediaTab(filteredProjects[currentIndex].id) === "gallery" && (
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                          {filteredProjects[currentIndex].screenshots?.slice(0, 2).map((scr, idx) => (
                            <div key={idx} className="h-full min-h-[160px] max-h-[220px] rounded-xl overflow-hidden border border-[#1E1E24] relative group">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 z-10">
                                <span className="font-mono text-[8.5px] text-alabaster">SCREENSHOT MODULE 0{idx + 1}</span>
                              </div>
                              <img src={scr} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Showcase layout details" />
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 text-center font-mono text-[8px] text-slate-gray">
                          * STATIC CAPTURED ASSETS FROM HIGH-FIDELITY DESIGN REPOS.
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Console footer metadata bar */}
                  <div className="px-4 py-2.5 bg-[#121216]/90 border-t border-[#1E1E24]/60 flex items-center justify-between font-mono text-[8px] text-slate-gray">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>SECURE LOCAL SHELL CONNECTION</span>
                    </div>
                    <span>SYSTEM RENDER: STABLE</span>
                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* CAROUSEL NAVIGATION OVERLAYS / ARROWS */}
          {filteredProjects.length > 1 && (
            <div className="flex items-center justify-between mt-8">
              
              {/* Previous Button */}
              <button
                onClick={prevProject}
                className="w-12 h-12 rounded-2xl bg-[#121216]/80 border border-[#1E1E24] hover:border-copper/40 flex items-center justify-center text-slate-gray hover:text-copper transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicator dots */}
              <div className="flex items-center gap-1.5">
                {filteredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === i 
                        ? "w-6 bg-copper" 
                        : "w-1.5 bg-slate-gray/30 hover:bg-slate-gray/50"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-2xl bg-[#121216]/80 border border-[#1E1E24] hover:border-copper/40 flex items-center justify-center text-slate-gray hover:text-copper transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </div>
          )}
        </div>

      </div>

      {/* DETAILED ANALYSIS IMPERSIVE OVERLAY SHEET */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-md overflow-y-auto px-4 py-8 sm:p-12 flex justify-center items-start"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl bg-[#121216] border border-[#1E1E24] rounded-3xl overflow-hidden shadow-2xl relative mt-4"
            >
              
              {/* Header section with Close Button */}
              <div className="flex justify-between items-center px-6 sm:px-8 py-6 border-b border-[#1E1E24] bg-onyx/30">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[8px] text-copper uppercase tracking-wider bg-copper/10 border border-copper/20 px-2 py-0.5 rounded">
                      {selectedProject.industry}
                    </span>
                    <span className="font-mono text-[8px] text-slate-gray uppercase">
                      ID: {selectedProject.id}
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-lg sm:text-xl lg:text-2xl text-alabaster mt-1.5 leading-tight">
                    {selectedProject.title} • Technical Case Study
                  </h3>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-full border border-[#1E1E24] hover:bg-onyx flex items-center justify-center text-slate-gray hover:text-alabaster transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid content inside fullscreen case study sheet */}
              <div className="p-6 sm:p-8 lg:p-10 max-h-[75vh] overflow-y-auto flex flex-col gap-10">
                
                {/* Section 1: Business Context & Delivered Solution */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Business Problem block */}
                  <div className="md:col-span-6 p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="font-mono text-[9px] text-rose-400 tracking-widest uppercase font-semibold">THE BUSINESS CHALLENGE</span>
                    </div>
                    <p className="font-sans text-xs sm:text-[13px] text-slate-gray leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Solution Delivered block */}
                  <div className="md:col-span-6 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase font-semibold">THE SOLUTION DELIVERED</span>
                    </div>
                    <p className="font-sans text-xs sm:text-[13px] text-slate-gray leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                </div>

                {/* Section 2: Core Engineering Responsibilities & Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#1E1E24]/60">
                  
                  {/* Detailed Responsibilities List */}
                  <div className="md:col-span-7">
                    <span className="font-mono text-[9px] text-copper tracking-widest uppercase block mb-4">// DETAILED RESPONSIBILITIES</span>
                    <div className="flex flex-col gap-4">
                      {selectedProject.responsibilities?.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start text-left">
                          <div className="w-6 h-6 rounded bg-[#121216] border border-[#1E1E24]/80 flex items-center justify-center font-mono text-[9px] text-copper shrink-0 mt-0.5">
                            0{i + 1}
                          </div>
                          <p className="font-sans text-xs sm:text-[13px] text-slate-gray leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements List */}
                  <div className="md:col-span-5 bg-onyx/25 border border-[#1E1E24] p-6 rounded-2xl">
                    <span className="font-mono text-[9px] text-copper tracking-widest uppercase block mb-4">// PRIMARY REVELATIONS & KEY ACHIEVEMENTS</span>
                    <div className="flex flex-col gap-4">
                      {selectedProject.achievements?.map((item, i) => (
                        <div key={i} className="flex gap-3.5 items-start">
                          <Award className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                          <div>
                            <p className="font-sans text-xs sm:text-[13px] text-slate-gray leading-relaxed">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Section 3: AI Capabilities and Business Impact metrics */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#1E1E24]/60 items-start">
                  
                  {/* AI integrations column */}
                  <div className="md:col-span-6 flex flex-col gap-4">
                    <div>
                      <span className="font-mono text-[9px] text-copper tracking-widest uppercase block mb-1">// COGNITIVE AI FEATURES</span>
                      <h4 className="font-display font-medium text-sm text-alabaster mt-1">Autonomous Systems Deployed</h4>
                    </div>
                    
                    {selectedProject.aiFeatures && selectedProject.aiFeatures.length > 0 ? (
                      <div className="flex flex-col gap-3">
                        {selectedProject.aiFeatures.map((feat, idx) => (
                          <div key={idx} className="p-4 bg-onyx/15 border border-[#1E1E24] rounded-xl flex gap-3">
                            <Sparkles className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                            <p className="font-sans text-xs text-slate-gray leading-relaxed">{feat}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 bg-[#121216] border border-[#1E1E24] rounded-xl font-sans text-xs text-slate-gray italic leading-relaxed">
                        No direct LLM APIs were integrated in this specific build. The engineering scope centered on robust, highly deterministic mathematical modeling, data validation systems, and high-concurrency relational schemas.
                      </div>
                    )}
                  </div>

                  {/* Business value column */}
                  <div className="md:col-span-6 flex flex-col gap-4">
                    <div>
                      <span className="font-mono text-[9px] text-copper tracking-widest uppercase block mb-1">// FINANCIAL & OPERATIONAL ROI</span>
                      <h4 className="font-display font-medium text-sm text-alabaster mt-1">Business Impact Overview</h4>
                    </div>
                    <div className="p-6 bg-copper/5 border border-copper/10 rounded-2xl flex flex-col gap-4">
                      <p className="font-sans text-xs sm:text-sm text-slate-gray leading-relaxed">
                        {selectedProject.businessImpact}
                      </p>
                      <div className="grid grid-cols-3 gap-3 border-t border-[#1E1E24] pt-4">
                        {selectedProject.metrics.map((met, i) => (
                          <div key={i}>
                            <span className="font-display font-bold text-sm text-alabaster block">{met.value}</span>
                            <span className="font-mono text-[7px] text-slate-gray uppercase tracking-tight block mt-0.5">{met.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Section 4: Architecture Trace & Technical Specs */}
                <div className="pt-8 border-t border-[#1E1E24]/60">
                  <span className="font-mono text-[9px] text-copper tracking-widest uppercase block mb-6">// DETAILED SYSTEM ARCHITECTURE TRACE</span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {selectedProject.architecture.steps.map((st, i) => (
                      <div key={i} className="p-5 bg-onyx/10 border border-[#1E1E24] rounded-xl relative flex flex-col justify-between h-[160px] group hover:border-copper/30 transition-all">
                        <span className="absolute top-3.5 right-3.5 font-mono text-[10px] text-copper/60 font-bold">0{i + 1}</span>
                        <div>
                          <span className="px-1.5 py-0.5 bg-onyx rounded text-[7.5px] font-mono text-slate-gray uppercase border border-[#1E1E24]">
                            {st.role}
                          </span>
                          <h4 className="font-display font-medium text-xs text-alabaster mt-2 group-hover:text-copper transition-colors">
                            {st.name}
                          </h4>
                        </div>
                        <p className="font-sans text-[10.5px] text-slate-gray mt-2 leading-relaxed line-clamp-3">
                          {st.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5: Tech stack tags list */}
                <div className="pt-8 border-t border-[#1E1E24]/60">
                  <span className="font-mono text-[9px] text-slate-gray tracking-widest uppercase block mb-3">// TECHNOLOGIES INTEGRATED</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.aiTech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-obsidian border border-copper/20 rounded-lg text-[9.5px] font-mono text-copper uppercase">{tech}</span>
                    ))}
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-obsidian border border-[#1E1E24] rounded-lg text-[9.5px] font-mono text-slate-gray uppercase">{tech}</span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom footer overlay close navigation */}
              <div className="flex justify-between items-center px-6 sm:px-8 py-5 border-t border-[#1E1E24] bg-onyx/30 font-mono text-[9px] text-slate-gray">
                <span>PRESS ESC OR DISMISS IN THE UPPER CORNER TO RETURN TO BROWSER VIEW</span>
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="text-copper hover:text-alabaster uppercase tracking-wider font-semibold transition-colors"
                >
                  Dismiss Analysis
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
