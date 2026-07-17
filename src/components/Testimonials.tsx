import React from "react";
import { testimonialsData } from "../data";
import { Quote, MessageSquare } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-onyx/45 border-y border-[#1E1E24]/60 relative" id="testimonials">
      <div className="w-[92%] max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
            <span>[ SECTION.08 ]</span>
            <span>•</span>
            <span>Client & Alumni Verification</span>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight">
            The Evidence of <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">High Trust.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-gray max-w-2xl leading-relaxed mt-2">
            Social proof from startup founders, enterprise engineering leaders, and professional software engineers who completed my core mentoring curriculum.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((test) => (
            <div 
              key={test.id} 
              className="p-6 bg-obsidian border border-[#1E1E24] hover:border-[#2E2E38] rounded-2xl flex flex-col justify-between min-h-[280px] transition-all duration-300 relative group"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-[#1E1E24] group-hover:text-copper/10 transition-colors duration-300">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              {/* Review Text */}
              <p className="font-sans text-xs text-slate-gray leading-relaxed relative z-10">
                "{test.content}"
              </p>

              {/* Reviewer Details */}
              <div className="border-t border-[#1E1E24]/60 pt-4 mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-onyx border border-[#1E1E24] flex items-center justify-center font-mono text-[10px] text-copper font-semibold">
                  {test.avatarLetter}
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-medium text-xs text-alabaster">
                    {test.name}
                  </span>
                  <span className="font-sans text-[10px] text-slate-gray">
                    {test.role}, {test.company}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
