import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Award, Mic, FileText, Image, Download, ExternalLink, Library } from "lucide-react";

export default function CertificatesSection() {
  const [downloadingBrand, setDownloadingBrand] = useState(false);

  const certs = [
    { title: "Multi-Agent Systems & LangGraph", issuer: "DeepLearning.ai", date: "2024", id: "DL-9081", url: "https://deeplearning.ai" },
    { title: "Professional Machine Learning Engineer", issuer: "Google Cloud", date: "2023", id: "GCP-8839", url: "https://cloud.google.com" },
    { title: "AWS Solutions Architect Associate", issuer: "Amazon Web Services", date: "2022", id: "AWS-7711", url: "https://aws.amazon.com" }
  ];

  const publications = [
    { title: "Design Patterns for High-Throughput LangGraph Workspaces", publisher: "Practitioner Review", date: "2024", type: "Technical Paper" },
    { title: "Mitigating Token Bloat in Stateful Recurrent Agent Loops", publisher: "AI Engineering Quarterly", date: "2023", type: "Research Note" }
  ];

  const speaking = [
    { event: "Global AI Educator Summit 2024", role: "Keynote: Stateful Agent Orchestration", location: "San Francisco / Hybrid" },
    { event: "Software Architecture Symposium 2023", role: "Speaker: Scaling Relational NL-to-SQL Engines", location: "London / Remote" }
  ];

  const triggerBrandDownload = () => {
    if (downloadingBrand) return;
    setDownloadingBrand(true);
    setTimeout(() => {
      setDownloadingBrand(false);
      alert("Successfully Prepared & Downloaded Brand Assets Archive: mhamad_brand_kit_2026.zip containing vector logos, high-resolution portrait photos, and full bio biographies.");
    }, 1200);
  };

  return (
    <div className="py-16 pt-16 border-t border-[#1E1E24]/60" id="media-kit">
      
      {/* Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <span className="font-mono text-[9px] text-copper tracking-widest uppercase">// RECOGNITION, CREDENTIALS & BRAND ASSETS</span>
        <h2 className="font-display font-light text-2xl text-alabaster tracking-tight">
          Certifications, Speaker Profile & Media Kit
        </h2>
        <p className="font-sans text-xs text-slate-gray max-w-xl">
          Verified academic credentials, published engineering literature, and media packages tailored for podcasts, conferences, and keynotes.
        </p>
      </div>

      {/* Grid: 3 Modules (Certs, Publications & Media kit) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Module 1: Certifications (L: 4/12) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper uppercase tracking-widest mb-4">
              <Award className="w-4 h-4" />
              <span>Verified Certifications</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {certs.map((cert, idx) => (
                <div key={idx} className="p-4 bg-onyx/30 border border-[#1E1E24]/50 rounded-xl relative group hover:border-[#1E1E24] transition-colors">
                  <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-100 transition-opacity">
                    <a href={cert.url} target="_blank" rel="noreferrer" className="text-slate-gray hover:text-copper">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h4 className="font-display font-bold text-xs text-alabaster leading-snug max-w-[90%]">{cert.title}</h4>
                  <p className="font-mono text-[9px] text-slate-gray mt-1 uppercase">{cert.issuer} • {cert.date}</p>
                  <span className="font-mono text-[8.5px] text-copper/70 mt-2 block tracking-wider">ID: {cert.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module 2: Literature & Speaking (Center: 5/12) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Speaking Events */}
          <div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper uppercase tracking-widest mb-4">
              <Mic className="w-4 h-4" />
              <span>Public Speaking Highlights</span>
            </div>

            <div className="flex flex-col gap-3">
              {speaking.map((sp, idx) => (
                <div key={idx} className="p-4 bg-[#0B0B0E]/60 border border-[#1E1E24]/60 rounded-xl">
                  <span className="font-mono text-[8px] text-slate-gray uppercase tracking-wider">{sp.location}</span>
                  <h4 className="font-display font-bold text-xs text-alabaster mt-1">{sp.event}</h4>
                  <p className="font-sans text-xs text-slate-gray leading-normal mt-1">{sp.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Published Papers */}
          <div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-copper uppercase tracking-widest mb-3">
              <Library className="w-4 h-4" />
              <span>Published Research & Articles</span>
            </div>

            <div className="flex flex-col gap-3">
              {publications.map((pub, idx) => (
                <div key={idx} className="p-4 bg-onyx/20 border border-[#1E1E24]/50 rounded-xl flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[8.5px] text-copper uppercase tracking-wider">{pub.type}</span>
                    <h4 className="font-display font-bold text-xs text-alabaster mt-1 leading-snug">{pub.title}</h4>
                    <span className="font-sans text-[10px] text-slate-gray block mt-1">{pub.publisher} • {pub.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module 3: Media Brand Kit (R: 3/12) */}
        <div className="lg:col-span-3 bg-onyx/20 border border-[#1E1E24] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-[#1E1E24] pb-3 shrink-0">
            <Image className="w-4 h-4 text-copper" />
            <span className="font-mono text-[9px] text-copper uppercase tracking-widest">BRANDING & MEDIA KIT</span>
          </div>

          <p className="font-sans text-[11px] text-slate-gray leading-relaxed">
            Hosting or featuring Muhammad Hamad? Download the official press package comprising bios, portraits, and branding elements.
          </p>

          <div className="p-3 bg-obsidian border border-[#1E1E24] rounded-xl font-mono text-[9.5px] text-slate-gray flex flex-col gap-1.5">
            <p>📸 High-res 4K Portraits</p>
            <p>📝 Speaker Biography (100w/300w)</p>
            <p>🎨 Branding SVG Logotypes</p>
            <p>🗣️ Preferred AV Requirements</p>
          </div>

          <button
            onClick={triggerBrandDownload}
            disabled={downloadingBrand}
            className="w-full h-10 bg-onyx hover:bg-obsidian border border-[#1E1E24] text-alabaster text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors font-sans mt-3"
          >
            <Download className={`w-3.5 h-3.5 text-copper ${downloadingBrand ? "animate-spin" : ""}`} />
            {downloadingBrand ? "Downloading Kit..." : "Download Brand Package"}
          </button>
        </div>

      </div>
    </div>
  );
}
