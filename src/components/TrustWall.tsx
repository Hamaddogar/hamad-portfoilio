import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Globe, Star, Users, Briefcase, Award, Zap } from "lucide-react";

export default function TrustWall() {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    enterprise: 0,
    aiProducts: 0,
    students: 0,
    countries: 0
  });

  useEffect(() => {
    const targets = {
      experience: 6,
      projects: 48,
      enterprise: 12,
      aiProducts: 18,
      students: 200,
      countries: 14
    };

    const duration = 1500; // ms
    const steps = 30;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        experience: Math.min(targets.experience, Math.round((targets.experience / steps) * currentStep)),
        projects: Math.min(targets.projects, Math.round((targets.projects / steps) * currentStep)),
        enterprise: Math.min(targets.enterprise, Math.round((targets.enterprise / steps) * currentStep)),
        aiProducts: Math.min(targets.aiProducts, Math.round((targets.aiProducts / steps) * currentStep)),
        students: Math.min(targets.students, Math.round((targets.students / steps) * currentStep)),
        countries: Math.min(targets.countries, Math.round((targets.countries / steps) * currentStep))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const trustMetrics = [
    { value: `${counters.experience}+`, label: "Years Practice", icon: <Award className="w-4 h-4 text-copper" /> },
    { value: `${counters.projects}+`, label: "Projects Delivered", icon: <Briefcase className="w-4 h-4 text-copper" /> },
    { value: `${counters.enterprise}+`, label: "Enterprise Workspaces", icon: <ShieldCheck className="w-4 h-4 text-copper" /> },
    { value: `${counters.aiProducts}+`, label: "AI Core Deployments", icon: <Zap className="w-4 h-4 text-copper" /> },
    { value: `${counters.students}+`, label: "Alumni Mentored", icon: <Users className="w-4 h-4 text-copper" /> },
    { value: `${counters.countries}+`, label: "Countries Served", icon: <Globe className="w-4 h-4 text-copper" /> }
  ];

  const partners = [
    { name: "Synthetix AI", industry: "Cognitive Workflows", region: "United States", period: "2023 - Present" },
    { name: "Elysium Tech", industry: "SaaS Platforms", region: "Singapore", period: "2022 - 2024" },
    { name: "Autonomous Labs", industry: "Agentic Swarms", region: "United Kingdom", period: "2023 - Present" },
    { name: "Apex Data Group", industry: "Financial Modeling", region: "Germany", period: "2022 - Present" }
  ];

  return (
    <div className="py-16 border-t border-[#1E1E24]/60 bg-onyx/10 rounded-3xl p-8 border border-[#1E1E24]/30 my-12" id="trust-wall">
      <div className="flex flex-col items-start gap-2 mb-10">
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
          <span>[ METRIC: GLOBAL_VERIFICATION ]</span>
          <span>•</span>
          <span>TRUST ENGINE</span>
        </div>
        <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
          Trusted by Innovative Clients Worldwide
        </h2>
        <p className="font-sans text-xs text-slate-gray max-w-xl">
          A track record built on deterministic software engineering principles, optimized token economies, and zero-trust security postures.
        </p>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
        {trustMetrics.map((metric, idx) => (
          <div key={idx} className="p-4 bg-obsidian/45 border border-[#1E1E24]/40 hover:border-copper/30 rounded-xl transition-all flex flex-col justify-between min-h-[110px] group">
            <div className="flex justify-between items-start">
              <span className="p-1.5 bg-onyx border border-[#1E1E24] rounded-lg group-hover:border-copper/20 transition-all">
                {metric.icon}
              </span>
              <span className="font-mono text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded tracking-wide">VERIFIED</span>
            </div>
            <div className="mt-4">
              <div className="font-display text-xl font-bold text-alabaster group-hover:text-copper transition-colors">{metric.value}</div>
              <div className="font-sans text-[9px] text-slate-gray uppercase tracking-wider mt-0.5 leading-snug">{metric.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Registry Matrix */}
      <div>
        <span className="font-mono text-[9px] text-slate-gray uppercase tracking-widest block mb-4">// LONG-TERM COLLABORATION RECORD</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {partners.map((partner, idx) => (
            <div key={idx} className="p-4 bg-[#0B0B0E]/60 border border-[#1E1E24]/50 rounded-xl hover:border-[#1E1E24] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-copper/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-copper animate-ping" />
                <h4 className="font-display font-semibold text-xs text-alabaster">{partner.name}</h4>
              </div>
              <div className="flex flex-col gap-1 font-mono text-[9px] text-slate-gray">
                <p>IND: <span className="text-alabaster/80">{partner.industry}</span></p>
                <p>REG: <span className="text-alabaster/80">{partner.region}</span></p>
                <p>DUR: <span className="text-copper font-medium">{partner.period}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
