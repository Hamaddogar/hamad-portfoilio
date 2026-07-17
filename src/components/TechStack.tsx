import React, { useState } from "react";
import { techStackData } from "../data";
import { CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-24 bg-obsidian relative border-b border-[#1E1E24]/60" id="tech-stack">
      <div className="w-[92%] max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
            <span>[ SECTION.07 ]</span>
            <span>•</span>
            <span>Tooling Ecosystem</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight">
            The Architectural <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">Engine Stack.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-gray max-w-2xl leading-relaxed mt-2">
            A precise matrix of technologies, libraries, and protocols that I actively deploy in production environments to support scalable generative workflows.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStackData.map((category, catIdx) => (
            <div 
              key={category.category} 
              className="p-6 bg-onyx/40 border border-[#1E1E24]/60 rounded-2xl backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <div className="flex items-center justify-between border-b border-[#1E1E24]/60 pb-3 mb-4">
                  <h3 className="font-display font-medium text-xs text-alabaster uppercase tracking-wider">
                    {category.category}
                  </h3>
                  <span className="font-mono text-[8px] text-slate-gray font-semibold">
                    [ PANEL.0{catIdx + 1} ]
                  </span>
                </div>

                {/* Grid items */}
                <div className="flex flex-col gap-3">
                  {category.items.map((tech) => {
                    const isHovered = hoveredTech === tech.name;
                    return (
                      <div
                        key={tech.name}
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="p-3 bg-obsidian/60 border border-[#1E1E24]/40 hover:border-[#2E2E38] hover:bg-obsidian/90 transition-all duration-200 rounded-xl relative group cursor-help"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-copper" />
                            <span className="font-display font-medium text-xs text-alabaster">
                              {tech.name}
                            </span>
                          </div>
                          
                          <span className="font-mono text-[8px] text-slate-gray uppercase">
                            {tech.level.split(" / ")[0]}
                          </span>
                        </div>

                        {/* Interactive dynamic subtext */}
                        <p className="font-sans text-[10px] text-slate-gray mt-1 leading-snug">
                          {tech.desc}
                        </p>

                        {/* Custom operational sweet-spot tooltip popup */}
                        {isHovered && (
                          <div className="absolute inset-x-0 bottom-[calc(100%+4px)] z-20 bg-onyx border border-copper/30 p-2.5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.8)] font-mono text-[8px] text-[#A3E635] leading-relaxed">
                            <span className="text-alabaster uppercase block mb-0.5">SWEET SPOT DEPLOYMENT</span>
                            Used to implement stable state machines, async routes, and hybrid vector storage systems.
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Box Footer metadata */}
              <div className="border-t border-[#1E1E24]/40 pt-4 mt-6 flex items-center justify-between font-mono text-[8px] text-slate-gray">
                <span>VERIFIED OPERATION</span>
                <span className="text-copper font-semibold">ONLINE</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
