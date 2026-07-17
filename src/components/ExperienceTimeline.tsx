import React from "react";
import { motion } from "motion/react";
import { experiencesData } from "../data";
import { Calendar, Briefcase, Award, ArrowUpRight, Cpu, Globe, GraduationCap } from "lucide-react";

export default function ExperienceTimeline() {
  // Let's enrich the company data with industries and abstract icon logos
  const companyMeta: Record<string, { industry: string; logoInitials: string; gradient: string }> = {
    "exp-1": {
      industry: "AI Systems Consulting & DeepTech",
      logoInitials: "AC",
      gradient: "from-copper/20 to-amber-500/5"
    },
    "exp-2": {
      industry: "EdTech & Software Engineering Labs",
      logoInitials: "TA",
      gradient: "from-[#1E1E24] to-[#121216]"
    },
    "exp-3": {
      industry: "SaaS Startups & Creative Tech Hubs",
      logoInitials: "SH",
      gradient: "from-[#121216] to-[#0B0B0E]"
    }
  };

  return (
    <section className="py-24 bg-obsidian border-y border-[#1E1E24]/60 relative" id="timeline">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="w-[92%] max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
            <span>[ SECTION.04 ]</span>
            <span>•</span>
            <span>Corporate Affiliations</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight">
            Companies I've <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">Engineered For.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-gray max-w-2xl leading-relaxed mt-2">
            A selective history of contract delivery, high-trust engineering leadership, and educational training models built for global organizations.
          </p>
        </div>

        {/* Premium grid of company cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiencesData.map((exp, idx) => {
            const meta = companyMeta[exp.id] || { industry: "Technology", logoInitials: "TC", gradient: "from-onyx to-obsidian" };
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.35 }}
                className="p-6 bg-[#121216]/45 border border-[#1E1E24]/60 hover:border-copper/40 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden h-[460px]"
              >
                {/* Background soft glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${meta.gradient} opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Card Top: Logo Placeholder & Industry */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-onyx border border-[#1E1E24] group-hover:border-copper/30 flex items-center justify-center font-display font-semibold text-sm text-copper shadow-inner transition-colors">
                      {meta.logoInitials}
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[8.5px] text-copper tracking-wider uppercase block">{exp.period}</span>
                      <span className="font-sans text-[9px] text-slate-gray mt-0.5 block">{meta.industry}</span>
                    </div>
                  </div>

                  {/* Company and Role Details */}
                  <div className="mb-5">
                    <h3 className="font-display font-medium text-base text-alabaster group-hover:text-copper transition-colors">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-[10px] text-slate-gray mt-1 uppercase tracking-wide">
                      {exp.role}
                    </p>
                  </div>

                  {/* Core Contributions */}
                  <div className="flex flex-col gap-2.5 max-w-2xl mb-5">
                    {exp.description.slice(0, 2).map((desc, index) => (
                      <div key={index} className="flex gap-2 items-start text-left">
                        <Award className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                        <p className="font-sans text-[11px] text-slate-gray leading-relaxed line-clamp-2">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Tech Stack Tag list */}
                <div className="relative z-10 border-t border-[#1E1E24]/60 pt-4">
                  <span className="font-mono text-[8px] text-slate-gray uppercase tracking-wider block mb-2">Technologies Deployed</span>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.slice(0, 5).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 bg-onyx/50 border border-[#1E1E24]/60 rounded font-mono text-[8px] text-slate-gray group-hover:text-alabaster group-hover:border-copper/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded font-mono text-[8px] text-copper">
                        +{exp.technologies.length - 5} More
                      </span>
                    )}
                  </div>
                </div>

                {/* Decorative corner visual */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-copper" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
