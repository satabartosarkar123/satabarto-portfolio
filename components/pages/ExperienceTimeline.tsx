"use client";

import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { PageTransition } from "@/components/cosmos/PageTransition";

const experiences = [
  {
    role: "SWE Intern — 4sight Platform",
    company: "Quantyra Analytics",
    period: "Nov 2025 – Jan 2026",
    description: "Designed and implemented backend modules for an enterprise SEO automation platform.",
    bullets: [
      "Engineered a multi-dimensional analytics pipeline processing 20+ KPIs across Google Analytics 4 and Google Search Console, extracting actionable intelligence from raw API payloads.",
      "Architected OAuth 2.0 lifecycle management for 2 Google APIs — implementing token refresh chains, validation middleware, and expiry-aware session handling.",
      "Built a keyword intelligence planner capable of filtering 20–30 keywords by volume distribution, rank trajectory, and search intent classification.",
      "Designed competitor overlap analysis consuming 20+ keyword sets and computing 4–5 similarity metrics to map competitive positioning.",
      "Implemented As-Is SEO diagnostic engine covering 25+ technical checks, including Core Web Vitals integration with Google PageSpeed Insights API.",
    ],
    tech: ["Python", "OAuth 2.0", "GA4 API", "GSC API", "PageSpeed API"],
  },
  {
    role: "Research Intern",
    company: "IEEE Student Internship Program",
    period: "Jun 2025 – Aug 2025",
    description: "Applied deep learning to biomedical signal processing for seizure detection.",
    bullets: [
      "Developed EEG seizure detection pipeline: discrete wavelet transform preprocessing, signal augmentation, and dual-architecture evaluation (1D-CNN, CNN+LSTM hybrid).",
      "Established rigorous evaluation protocol using k-fold cross-validation, tracking accuracy, macro-F1, and inference latency across ML and DL baselines.",
    ],
    tech: ["PyTorch", "1D-CNN", "CNN+LSTM", "scikit-learn", "DWT"],
  },
];

export function ExperienceTimeline() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-mono text-[#64FFDA]/50 tracking-[0.4em] uppercase mb-4">
              Region: The Timeline River
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E8F5E9] mb-2">
              Experience
            </h1>
            <p className="text-sm text-[#81C784]/60 max-w-lg mb-2">
              Each node represents a stage of applied learning.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/40 to-transparent mb-16" />
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* River line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#64FFDA]/30 via-[#64FFDA]/10 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <ScrollReveal key={exp.company} delay={idx * 0.2}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Pulsing node */}
                    <div className="absolute left-2.5 md:left-4.5 top-8 w-3 h-3 rounded-full bg-[#64FFDA] shadow-[0_0_12px_rgba(100,255,218,0.4)]" />
                    <div className="absolute left-[7px] md:left-[13px] top-[29px] w-5 h-5 rounded-full border border-[#64FFDA]/20 animate-pulse" />

                    <div className="stardust-hover rounded-xl bg-[#0F1F17]/60 backdrop-blur-sm p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <div>
                          <h2 className="text-xl font-semibold text-[#E8F5E9]">{exp.role}</h2>
                          <p className="text-sm text-[#64FFDA]/80 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-[10px] font-mono text-[#81C784]/50 border border-[#64FFDA]/10 px-3 py-1 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-xs text-[#81C784]/60 mb-5 italic">{exp.description}</p>

                      <ul className="space-y-3 mb-5">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#E8F5E9]/70 leading-relaxed">
                            <span className="text-[#64FFDA] mt-1.5 text-[6px]">●</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#64FFDA]/8">
                        {exp.tech.map((t) => (
                          <span key={t} className="skill-tag px-2.5 py-1 rounded text-[10px] font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
