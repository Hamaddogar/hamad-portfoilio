import React from "react";
import { motion } from "motion/react";
import { Cpu, Terminal, Users, Award, Shield, Milestone } from "lucide-react";

export default function AboutPreview() {
  const corePillars = [
    {
      icon: <Cpu className="w-5 h-5 text-copper" />,
      title: "Advanced AI Orchestration",
      description: "Moving past simple API wrapping. Building complex cyclic agent graphs, state machines with LangGraph, and multi-layered hybrid vector search context assemblers that optimize cost and response latency."
    },
    {
      icon: <Terminal className="w-5 h-5 text-copper" />,
      title: "Enterprise Full-Stack Rigor",
      description: "Delivering model intelligence through safe, high-concurrency architectures. Expert in TypeScript, React, Next.js, FastAPI, NestJS, and optimized PostgreSQL relational database schemas."
    },
    {
      icon: <Users className="w-5 h-5 text-copper" />,
      title: "Practitioner-Led Pedagogy",
      description: "Teaching what is built in active client production today. Mentoring over 200 developers internationally in Python, Machine Learning, and LangGraph, converting abstract concepts into clear practical code."
    }
  ];

  return (
    <section className="py-24 bg-onyx/45 border-y border-[#1E1E24]/60 relative" id="about">
      <div className="w-[92%] max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
            <span>[ SECTION.02 ]</span>
            <span>•</span>
            <span>Foundations</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight">
            Bridging the Gap Between <br />
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">Research & Production.</span>
          </h2>
        </div>

        {/* Brand Story Integration */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          <div className="md:col-span-7 font-sans text-sm sm:text-base text-slate-gray leading-relaxed flex flex-col gap-5">
            <p>
              I watched the software engineering landscape shift beneath our feet. As a Full Stack Engineer, I was accustomed to building robust web architectures, scaling databases, and designing sleek user interfaces. But when the generative AI wave arrived, I noticed a massive disconnect.
            </p>
            <p>
              On one side, researchers designed incredible neural models that remained locked in experimental Python notebooks. On the other side, traditional developers built basic API wrappers that collapsed under the first sign of concurrent production traffic or burned through model token budgets in hours.
            </p>
            <p>
              I realized my background in enterprise software design was the missing link. I treat AI not as a magic black box, but as an **architectural system**. I began building stateful multi-agent orchestrations with LangGraph and FastAPI, optimizing context token spend, and delivering these models inside beautiful, type-safe, and highly responsive Next.js and React applications.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 bg-obsidian border border-[#1E1E24] rounded-xl flex flex-col justify-between h-[150px]">
              <Milestone className="w-5 h-5 text-copper" />
              <div>
                <div className="font-display text-lg font-medium text-alabaster">6+ Years</div>
                <div className="font-mono text-[9px] text-slate-gray uppercase tracking-wider mt-1">Professional Practice</div>
              </div>
            </div>
            
            <div className="p-5 bg-obsidian border border-[#1E1E24] rounded-xl flex flex-col justify-between h-[150px]">
              <Award className="w-5 h-5 text-copper" />
              <div>
                <div className="font-display text-lg font-medium text-alabaster">100%</div>
                <div className="font-mono text-[9px] text-slate-gray uppercase tracking-wider mt-1">Production Integrity</div>
              </div>
            </div>

            <div className="p-5 bg-obsidian border border-[#1E1E24] rounded-xl flex flex-col justify-between h-[150px] col-span-2">
              <Shield className="w-5 h-5 text-copper" />
              <div>
                <div className="font-display text-sm font-medium text-alabaster">Zero-Trust Frameworks</div>
                <p className="font-sans text-[11px] text-slate-gray mt-1 leading-relaxed">
                  Integrating guardrails, rate-limit policies, and semantic cost limits directly in FastAPI and NestJS gateway channels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Three-Legged Stool Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#1E1E24]/60">
          {corePillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-obsidian/40 border border-[#1E1E24]/40 hover:border-[#1E1E24] hover:bg-obsidian/70 transition-all duration-300 rounded-xl flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-onyx border border-[#1E1E24] flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="font-display font-medium text-base text-alabaster tracking-tight">
                {pillar.title}
              </h3>
              <p className="font-sans text-xs text-slate-gray leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
