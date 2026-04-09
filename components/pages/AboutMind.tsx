"use client";

import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { PageTransition } from "@/components/cosmos/PageTransition";

export function AboutMind() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Section identity */}
          <ScrollReveal>
            <p className="text-[10px] font-mono text-[#64FFDA]/50 tracking-[0.4em] uppercase mb-4">
              Region: The Mind
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E8F5E9] mb-2">
              About
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/40 to-transparent mb-12" />
          </ScrollReveal>

          {/* Narrative blocks — each reveals progressively */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="stardust-hover rounded-xl p-8 bg-[#0F1F17]/60 backdrop-blur-sm">
                <p className="text-[#E8F5E9]/80 leading-relaxed text-base">
                  I architect systems that endure pressure — financial ledgers enforcing atomic consistency 
                  across double-entry transactions, AI pipelines processing thousands of articles through 
                  structured concurrent stages, and SEO engines crawling production web properties against 
                  25+ diagnostic parameters.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="stardust-hover rounded-xl p-8 bg-[#0F1F17]/60 backdrop-blur-sm">
                <p className="text-[#E8F5E9]/80 leading-relaxed text-base">
                  My engineering philosophy: <span className="text-[#64FFDA]">every system should be auditable, 
                  every failure recoverable, every operation idempotent.</span> This thinking was shaped by 
                  building BankLedger — a financial backend where race conditions mean lost money — and Nutino, 
                  where a single malformed API response can cascade through an entire summarization pipeline.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="stardust-hover rounded-xl p-8 bg-[#0F1F17]/60 backdrop-blur-sm">
                <p className="text-[#E8F5E9]/80 leading-relaxed text-base">
                  Currently in my third year at the Institute of Engineering and Management, Kolkata, 
                  carrying a <span className="text-[#64FFDA]">9.76 CGPA</span> and placed in the 
                  <span className="text-[#64FFDA]"> top 5% of the department</span>. I lead the Industry Team 
                  at IEM&apos;s Centre of Excellence in Generative AI and have served as a core ML member at 
                  Google Developer Group on campus.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats grid */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: "9.76", label: "CGPA / 10" },
                { value: "Top 5%", label: "Department Rank" },
                { value: "2", label: "Production Systems" },
                { value: "2", label: "Industry Internships" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center stardust-hover rounded-xl p-5 bg-[#0F1F17]/40"
                >
                  <div className="text-2xl font-bold text-[#64FFDA] mb-1">{stat.value}</div>
                  <div className="text-[10px] font-mono text-[#81C784]/50 tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal delay={0.5}>
            <div className="mt-16">
              <h2 className="text-lg font-semibold text-[#E8F5E9] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]" />
                Academic Lineage
              </h2>
              <div className="space-y-4">
                {[
                  {
                    degree: "B.Tech in Computer Science & Engineering",
                    place: "Institute of Engineering & Management, Kolkata",
                    period: "2023 – 2027",
                    note: "CGPA 9.76 · Top 5%",
                  },
                  {
                    degree: "Higher Secondary (12th) — Science",
                    place: "J.N. Academy, Berhampore",
                    period: "2023",
                    note: "91.4%",
                  },
                  {
                    degree: "Secondary (10th)",
                    place: "J.N. Academy, Berhampore",
                    period: "2021",
                    note: "97.2%",
                  },
                ].map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-lg border border-[#64FFDA]/8 hover:border-[#64FFDA]/20 transition-all duration-500"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#E8F5E9]">{edu.degree}</p>
                      <p className="text-xs text-[#81C784]/60 mt-0.5">{edu.place}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <span className="text-[10px] font-mono text-[#64FFDA]/60 px-2 py-1 rounded-full border border-[#64FFDA]/10">
                        {edu.note}
                      </span>
                      <span className="text-[10px] font-mono text-[#81C784]/40">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications & Societies */}
          <ScrollReveal delay={0.6}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-semibold text-[#E8F5E9] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b388ff]" />
                  Credentials
                </h2>
                <div className="space-y-3">
                  {["McKinsey Forward Program", "Google Business Intelligence", "Cisco Cybersecurity"].map((cert) => (
                    <div key={cert} className="flex items-center gap-3 text-sm text-[#E8F5E9]/70">
                      <span className="text-[#64FFDA] text-[8px]">◈</span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#E8F5E9] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]" />
                  Societies
                </h2>
                <div className="space-y-3">
                  <div className="text-sm text-[#E8F5E9]/70">
                    <p>CoE in Generative AI, IEM</p>
                    <p className="text-[10px] text-[#81C784]/50 mt-0.5">Industry Team Lead</p>
                  </div>
                  <div className="text-sm text-[#E8F5E9]/70">
                    <p>GDG On Campus, IEM</p>
                    <p className="text-[10px] text-[#81C784]/50 mt-0.5">Core Member, ML Team</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
