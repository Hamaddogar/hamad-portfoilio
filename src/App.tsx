import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProofCounters from "./components/SocialProofCounters";
import AboutPreview from "./components/AboutPreview";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Teaching from "./components/Teaching";
import ExperienceTimeline from "./components/ExperienceTimeline";
import WhyHireMe from "./components/WhyHireMe";
import TechStack from "./components/TechStack";
import ConsultationTerminal from "./components/ConsultationTerminal";
import Footer from "./components/Footer";
import SocialProofCenter from "./components/SocialProofCenter";
import RecruiterDashboard from "./components/RecruiterDashboard";

// Expanded Page Views
import AboutView from "./components/AboutView";
import ExpertiseView from "./components/ExpertiseView";
import ProjectsView from "./components/ProjectsView";
import TeachingView from "./components/TeachingView";
import BlogView from "./components/BlogView";
import ContactView from "./components/ContactView";
import AIConsoleView from "./components/AIConsoleView";

// Advanced Common Elements
import CommandPalette from "./components/CommandPalette";
import Loader from "./components/Loader";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, ArrowUp } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);

  // Hash state synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#" || hash === "#home") {
        setCurrentView("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const view = hash.replace("#", "");
        // Check if it's a valid view
        const validViews = ["about", "expertise", "projects", "teaching", "blog", "contact", "console"];
        if (validViews.includes(view)) {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // 404 handler fallback
          setCurrentView("404");
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Execute on initial mount
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Global Command Palette shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = (hash: string) => {
    window.location.hash = hash;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader">
          <Loader onComplete={() => setLoading(false)} />
        </motion.div>
      ) : (
        <div key="app-root" className="min-h-screen bg-obsidian text-alabaster font-sans selection:bg-copper selection:text-alabaster relative antialiased overflow-x-hidden">
          
          {/* Absolute high-contrast vector grid background and custom gradients */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-copper/5 via-transparent to-transparent pointer-events-none z-0" />
          
          {/* Floating Navigation Header */}
          <Header onOpenSearch={() => setSearchOpen(true)} currentView={currentView} />

          {/* Unified Command Palette Search Overlay */}
          <CommandPalette 
            isOpen={searchOpen} 
            onClose={() => setSearchOpen(false)} 
            onNavigate={handleNavigate}
            onSelectBlog={(blogId) => setActiveBlogId(blogId)}
          />

          {/* Core Content View Frame */}
          <main className="relative pt-12">
            <AnimatePresence mode="wait">
              {currentView === "home" && (
                <motion.div
                  key="home-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Hero />
                  <SocialProofCounters />
                  <AboutPreview />
                  <Projects />
                  <ExperienceTimeline />
                  <WhyHireMe />
                  <Expertise />
                  <Teaching />
                  <TechStack />
                  <div className="max-w-5xl mx-auto px-4 flex flex-col gap-12">
                    <SocialProofCenter />
                    <RecruiterDashboard />
                  </div>
                  <ConsultationTerminal />
                </motion.div>
              )}

              {currentView === "about" && (
                <motion.div key="about-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <AboutView />
                </motion.div>
              )}

              {currentView === "expertise" && (
                <motion.div key="expertise-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <ExpertiseView />
                </motion.div>
              )}

              {currentView === "projects" && (
                <motion.div key="projects-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <ProjectsView />
                </motion.div>
              )}

              {currentView === "teaching" && (
                <motion.div key="teaching-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <TeachingView />
                </motion.div>
              )}

              {currentView === "blog" && (
                <motion.div key="blog-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <BlogView 
                    initialActivePostId={activeBlogId} 
                    onClearInitialPost={() => setActiveBlogId(null)} 
                  />
                </motion.div>
              )}

              {currentView === "contact" && (
                <motion.div key="contact-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <ContactView />
                </motion.div>
              )}

              {currentView === "console" && (
                <motion.div key="console-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <AIConsoleView />
                </motion.div>
              )}

              {currentView === "404" && (
                <motion.div
                  key="404-view"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-40 flex flex-col items-center justify-center text-center px-6"
                >
                  <Terminal className="w-12 h-12 text-copper animate-bounce mb-6" />
                  <h1 className="font-display font-light text-3xl text-alabaster tracking-tight">
                    Exception: <span className="font-normal text-copper">View Out Of Bounds</span>
                  </h1>
                  <p className="font-mono text-xs text-slate-gray mt-2 tracking-wider uppercase">
                    Error 404: Node Routing Registry Failure
                  </p>
                  <button
                    onClick={() => handleNavigate("#")}
                    className="mt-8 px-5 h-10 bg-alabaster hover:bg-white text-obsidian text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all duration-150 active:scale-95"
                  >
                    Return to Safe Coordinates
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Floating Control Hub Capsule */}
          <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
            {/* Quick search button with keyboard hint */}
            <button 
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-1.5 h-9 px-3 bg-onyx/80 backdrop-blur-md border border-[#1E1E24] hover:border-copper/30 rounded-full text-slate-gray hover:text-alabaster transition-all shadow-md font-mono text-[9px] uppercase tracking-wider"
            >
              <span>Search</span>
              <kbd className="bg-obsidian border border-[#1E1E24] px-1 rounded text-alabaster text-[8px] font-semibold">⌘K</kbd>
            </button>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 bg-onyx/80 backdrop-blur-md border border-[#1E1E24] hover:border-copper/40 rounded-full flex items-center justify-center text-slate-gray hover:text-alabaster transition-all shadow-md focus:outline-none"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 text-copper" />
            </button>
          </div>

          {/* Brand footprint Footer */}
          <Footer />

        </div>
      )}
    </AnimatePresence>
  );
}
