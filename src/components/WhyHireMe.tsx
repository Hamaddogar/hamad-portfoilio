import React from "react";
import { motion } from "motion/react";
import { 
  Layers, Cpu, ShieldCheck, Database, GraduationCap, 
  Terminal, Users, Code, BarChart2, CheckSquare 
} from "lucide-react";

export default function WhyHireMe() {
  const pillars = [
    {
      title: "Enterprise Architecture",
      desc: "Designing highly cohesive modular microservices that decouple model gateway interfaces from persistent transaction databases.",
      icon: <Layers className="w-5 h-5 text-copper" />
    },
    {
      title: "AI Integration",
      desc: "Pioneering state-driven agent loops and hybrid embeddings retrieval pipelines instead of simple API wrapper calls.",
      icon: <Cpu className="w-5 h-5 text-copper" />
    },
    {
      title: "Production Systems",
      desc: "Delivering fully tested, resilient container nodes prepared for extreme concurrency workloads with strict error recovery.",
      icon: <ShieldCheck className="w-5 h-5 text-copper" />
    },
    {
      title: "Scalable Backend",
      desc: "Optimizing relational schema queries, index models, caching layers, and asynchronous event streams (SSE).",
      icon: <Database className="w-5 h-5 text-copper" />
    },
    {
      title: "Mentorship",
      desc: "Direct training and development acceleration, helping 200+ traditional software engineers transition successfully to AI engineering.",
      icon: <GraduationCap className="w-5 h-5 text-copper" />
    },
    {
      title: "Problem Solving",
      desc: "Dissecting complex system bottlenecks and crafting elegant, robust solutions backed by clean deterministic algorithms.",
      icon: <Terminal className="w-5 h-5 text-copper" />
    },
    {
      title: "Communication",
      desc: "Bridging communication gaps between technical engineers and non-technical founders to establish mutual alignment.",
      icon: <Users className="w-5 h-5 text-copper" />
    },
    {
      title: "Clean Code",
      desc: "Strict adherence to static TypeScript types, modular file structures, self-documenting code, and modern standards.",
      icon: <Code className="w-5 h-5 text-copper" />
    },
    {
      title: "Business Understanding",
      desc: "Translating architectural expenses (token limits, server load) into direct business KPIs and cost savings ROI.",
      icon: <BarChart2 className="w-5 h-5 text-copper" />
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0E] border-y border-[#1E1E24]/60 relative overflow-hidden" id="why-hire-me">
      <div className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-copper/5 blur-[120px] pointer-events-none" />
      
      <div className="w-[92%] max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
            <span>[ SECTION.05 ]</span>
            <span>•</span>
            <span>Value Proposal</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight">
            Why Visionary Teams <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">Partner With Me.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-gray max-w-xl leading-relaxed mt-2">
            I don't just write scripts or build prototypes. I design long-term architectural assets that secure computational efficiency, scale smoothly under production pressure, and drive measurable business returns.
          </p>
        </div>

        {/* 3x3 Bento grid of premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="p-6 bg-[#121216]/40 border border-[#1E1E24]/60 hover:border-copper/40 rounded-2xl flex flex-col gap-4 group transition-all duration-300 hover:bg-[#121216]/75 hover:shadow-lg"
            >
              {/* Card top: icon container */}
              <div className="w-10 h-10 rounded-xl bg-onyx border border-[#1E1E24] group-hover:border-copper/30 flex items-center justify-center transition-colors">
                {pillar.icon}
              </div>

              {/* Card titles & descriptions */}
              <div>
                <h3 className="font-display font-medium text-sm text-alabaster group-hover:text-copper transition-colors duration-200">
                  {pillar.title}
                </h3>
                <p className="font-sans text-[11px] text-slate-gray mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
