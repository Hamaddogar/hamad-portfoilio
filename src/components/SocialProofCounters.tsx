import React from "react";
import { motion } from "motion/react";
import { Star, Linkedin, Users, Calendar, CheckSquare, GraduationCap, ShieldCheck } from "lucide-react";

export default function SocialProofCounters() {
  const stats = [
    {
      value: "300+",
      label: "Fiverr Reviews",
      sub: "With Perfect 5.0 ★ Rating",
      icon: <Star className="w-5 h-5 text-copper fill-copper" />,
      glowing: true
    },
    {
      value: "Elite",
      label: "LinkedIn Recommendations",
      sub: "From Founders & CTOs",
      icon: <Linkedin className="w-5 h-5 text-copper" />,
      glowing: false
    },
    {
      value: "15+",
      label: "Enterprise Clients",
      sub: "Across US, EU, and APAC",
      icon: <Users className="w-5 h-5 text-copper" />,
      glowing: false
    },
    {
      value: "6+",
      label: "Years Experience",
      sub: "AI & Full Stack Practice",
      icon: <Calendar className="w-5 h-5 text-copper" />,
      glowing: false
    },
    {
      value: "100+",
      label: "Projects Shipped",
      sub: "Autonomous Agents & RAGs",
      icon: <CheckSquare className="w-5 h-5 text-copper" />,
      glowing: true
    },
    {
      value: "200+",
      label: "Students Mentored",
      sub: "Trained in Active Academy",
      icon: <GraduationCap className="w-5 h-5 text-copper" />,
      glowing: false
    }
  ];

  return (
    <section className="py-16 bg-[#0B0B0E] border-y border-[#1E1E24]/60 relative overflow-hidden" id="social-proof-summary">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
      
      <div className="w-[92%] max-w-5xl mx-auto relative z-10">
        
        {/* Subtle Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="font-mono text-[9px] text-copper tracking-widest uppercase">// PERFORMANCE CITATIONS & METRICS</span>
          <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
            Proven Authority. Verified Outcomes.
          </h2>
        </div>

        {/* Beautiful Bento-inspired grid of KPI summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className={`p-6 bg-[#121216]/40 border rounded-2xl flex flex-col justify-between relative group transition-all duration-300 hover:-translate-y-1 ${
                stat.glowing 
                  ? "border-copper/30 shadow-[0_4px_24px_rgba(194,120,3,0.03)] hover:border-copper/60 hover:shadow-[0_12px_32px_rgba(194,120,3,0.08)] bg-gradient-to-b from-[#121216]/60 to-[#0B0B0E]" 
                  : "border-[#1E1E24]/60 hover:border-[#1E1E24] hover:bg-[#121216]/60"
              }`}
            >
              {/* Card Header: Icon & Verification check */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-onyx/60 border border-[#1E1E24] flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-mono text-[7px] text-emerald-500 uppercase tracking-wider">VERIFIED</span>
                </div>
              </div>

              {/* Big value display */}
              <div>
                <div className="font-display font-semibold text-3xl sm:text-4xl text-alabaster tracking-tight group-hover:text-copper transition-colors duration-200">
                  {stat.value}
                </div>
                <div className="font-display font-medium text-xs text-alabaster mt-1 tracking-wide">
                  {stat.label}
                </div>
                <p className="font-sans text-[10px] text-slate-gray mt-1 leading-normal">
                  {stat.sub}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-[#1E1E24] rounded-full group-hover:bg-copper transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
