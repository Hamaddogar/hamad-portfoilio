import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Check, Terminal, ShieldCheck, ArrowRight, Loader } from "lucide-react";

type InquiryType = "consulting" | "hire" | "mentorship";

export default function ConsultationTerminal() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("consulting");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form values state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$10k - $25k",
    timeline: "Immediate (< 1 month)",
    roleLevel: "Senior AI Engineer",
    techStack: "React + Python/FastAPI",
    skillsBaseline: "Mid-level Engineer",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      alert("Please complete all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate high-performance API container processing
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "$10k - $25k",
      timeline: "Immediate (< 1 month)",
      roleLevel: "Senior AI Engineer",
      techStack: "React + Python/FastAPI",
      skillsBaseline: "Mid-level Engineer",
      description: ""
    });
  };

  return (
    <section className="py-24 bg-obsidian relative border-b border-[#1E1E24]/60" id="consultation">
      <div className="w-[92%] max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Dynamic Copy Block */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper tracking-widest uppercase">
            <span>[ SECTION.09 ]</span>
            <span>•</span>
            <span>Gateway Portal</span>
          </div>
          
          <h2 className="font-display font-light text-2xl sm:text-3xl text-alabaster tracking-tight leading-snug">
            Let's Build Cognitive <br />
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-alabaster to-copper">Infrastructure That Scales.</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-gray leading-relaxed mt-2">
            Initiate a high-intent, structural communication link. Select your specific inquiry channel below. The terminal will automatically adapt fields to match your exact parameters.
          </p>

          <div className="flex flex-col gap-3 w-full mt-4 border-t border-[#1E1E24]/60 pt-6">
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-gray">
              <span className="h-1.5 w-1.5 rounded-full bg-copper"></span>
              Average response: &lt; 12 Hours
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-gray">
              <span className="h-1.5 w-1.5 rounded-full bg-copper"></span>
              Secure direct email link active
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-gray">
              <span className="h-1.5 w-1.5 rounded-full bg-copper"></span>
              GCP/FastAPI Docker node ready
            </div>
          </div>
        </div>

        {/* Right Side: Multi-Step Active Terminal Form */}
        <div className="lg:col-span-7">
          <div className="bg-onyx/40 border border-[#1E1E24] rounded-2xl overflow-hidden backdrop-blur-sm min-h-[460px] flex flex-col justify-between p-6 sm:p-8">
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-5 w-full"
                >
                  {/* Inquiry Category Selectors */}
                  <div className="grid grid-cols-3 gap-2 border-b border-[#1E1E24] pb-4">
                    {([
                      { id: "consulting", label: "Consulting" },
                      { id: "hire", label: "Hiring Manager" },
                      { id: "mentorship", label: "Mentorship" }
                    ] as const).map((tab) => {
                      const isActive = inquiryType === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setInquiryType(tab.id)}
                          className={`h-9 rounded-lg font-mono text-[8px] sm:text-[9px] uppercase tracking-wider border transition-all duration-200 ${
                            isActive
                              ? "bg-copper border-copper text-alabaster font-semibold"
                              : "bg-obsidian border-[#1E1E24]/60 text-slate-gray hover:text-alabaster"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Shared Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-mono text-[9px] text-slate-gray uppercase">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster placeholder-slate-gray/50 focus:outline-none focus:border-copper transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-mono text-[9px] text-slate-gray uppercase">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@organization.com"
                        className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster placeholder-slate-gray/50 focus:outline-none focus:border-copper transition-colors"
                      />
                    </div>
                  </div>

                  {/* Adaptive Fields based on inquiryType */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={inquiryType}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {/* CONSULTING PATH */}
                      {inquiryType === "consulting" && (
                        <>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="company" className="font-mono text-[9px] text-slate-gray uppercase">Company Name</label>
                            <input
                              id="company"
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Acme Startups"
                              className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster placeholder-slate-gray/50 focus:outline-none focus:border-copper transition-colors"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="budget" className="font-mono text-[9px] text-slate-gray uppercase">Budget Scope</label>
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors"
                            >
                              <option>$5k - $10k</option>
                              <option>$10k - $25k</option>
                              <option>$25k - $50k</option>
                              <option>$50k+</option>
                            </select>
                          </div>
                        </>
                      )}

                      {/* ENTERPRISE HIRE PATH */}
                      {inquiryType === "hire" && (
                        <>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="company-hire" className="font-mono text-[9px] text-slate-gray uppercase">Organization</label>
                            <input
                              id="company-hire"
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Elysium Tech"
                              className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster placeholder-slate-gray/50 focus:outline-none focus:border-copper transition-colors"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="roleLevel" className="font-mono text-[9px] text-slate-gray uppercase">Target Role Level</label>
                            <select
                              id="roleLevel"
                              name="roleLevel"
                              value={formData.roleLevel}
                              onChange={handleInputChange}
                              className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors"
                            >
                              <option>Senior AI Engineer</option>
                              <option>AI Systems Architect</option>
                              <option>Director of Generative AI</option>
                            </select>
                          </div>
                        </>
                      )}

                      {/* MENTORSHIP PATH */}
                      {inquiryType === "mentorship" && (
                        <>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="skillsBaseline" className="font-mono text-[9px] text-slate-gray uppercase">Your Coding Level</label>
                            <select
                              id="skillsBaseline"
                              name="skillsBaseline"
                              value={formData.skillsBaseline}
                              onChange={handleInputChange}
                              className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors"
                            >
                              <option>Junior Software Developer</option>
                              <option>Mid-level Engineer</option>
                              <option>Senior Engineer (Non-AI)</option>
                              <option>CS Academic Student</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label htmlFor="timeline-mentorship" className="font-mono text-[9px] text-slate-gray uppercase">Desired Cohort</label>
                            <select
                              id="timeline-mentorship"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className="h-10 px-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster focus:outline-none focus:border-copper transition-colors"
                            >
                              <option>Immediate (Q3 2026)</option>
                              <option>Next Cohort (Q4 2026)</option>
                            </select>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="font-mono text-[9px] text-slate-gray uppercase">Project Outline / Inquiry Details *</label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder={
                        inquiryType === "consulting" 
                          ? "Detail your required multi-agent workflow, model scope, and business objective."
                          : inquiryType === "hire"
                            ? "Describe the scale parameters, company culture, and active engineering needs."
                            : "Briefly explain your background, why you want to transition into AI, and your goals."
                      }
                      className="p-4 bg-obsidian border border-[#1E1E24] rounded-lg text-xs text-alabaster placeholder-slate-gray/50 focus:outline-none focus:border-copper transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full bg-alabaster hover:bg-white text-obsidian rounded-lg font-sans font-medium text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin text-obsidian" />
                        Processing Secure Node Link...
                      </>
                    ) : (
                      <>
                        Transmit Discovery Request
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 flex-grow gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-onyx border border-copper/30 flex items-center justify-center text-copper shadow-[0_0_16px_rgba(194,120,3,0.15)]">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  
                  <div>
                    <span className="font-mono text-[9px] text-copper tracking-widest uppercase">TRANSMISSION COMPLETE</span>
                    <h3 className="font-display font-medium text-lg text-alabaster mt-1">Discovery Packet Received</h3>
                    <p className="font-sans text-xs text-slate-gray max-w-sm leading-relaxed mt-2 mx-auto">
                      Inquiry received successfully. Muhammad Hamad's systems orchestrator will routing this packet and follow up within 12 hours.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="h-9 px-4 rounded-lg border border-[#1E1E24] hover:bg-onyx/40 text-slate-gray hover:text-alabaster font-mono text-[9px] uppercase tracking-wider transition-all duration-200"
                  >
                    Transmit New Packet
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-[#1E1E24] pt-4 mt-6 flex items-center justify-between font-mono text-[8px] text-slate-gray">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-copper" />
                SSL CONTAINER HANDSHAKE COMPLETED
              </span>
              <span>NODE SECURE</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
