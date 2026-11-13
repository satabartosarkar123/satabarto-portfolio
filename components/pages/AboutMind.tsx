"use client";

import Link from "next/link";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { publications } from "@/lib/publications";

export function AboutMind() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Section identity */}
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#64FFDA] tracking-[0.25em] uppercase mb-3">
              Background &amp; Education
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
                  I worked on systems that include financial ledgers enforcing
                  atomic consistency across double-entry transactions, AI
                  pipelines processing articles through structured concurrent
                  stages, and SEO engines crawling web properties against
                  diagnostic parameters.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="stardust-hover rounded-xl p-8 bg-[#0F1F17]/60 backdrop-blur-sm">
                <p className="text-[#E8F5E9]/80 leading-relaxed text-base">
                  Final-year B.Tech Computer Science &amp; Engineering student
                  at the Institute of Engineering and Management, Kolkata,
                  carrying a <span className="text-[#64FFDA]">9.8/10 CGPA</span>{" "}
                  and ranked in the{" "}
                  <span className="text-[#64FFDA]">
                    top 1% of the cohort (Y1/Y2/Y3 rank: 6/4/1 of 225)
                  </span>
                  , with{" "}
                  <span className="text-[#a78bfa]">
                    GATE 2026 CS AIR 2,855 / 211,020 (top 1.35%)
                  </span>
                  . I served as Industry Team Student Lead at IEM&apos;s Centre
                  of Excellence in Generative AI and as a core ML member at
                  Google Developer Group on campus.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats grid */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: "9.8", label: "CGPA / 10" },
                { value: "Top 1%", label: "Cohort Rank (1/225 Y3)" },
                { value: "AIR 2,855", label: "GATE 2026 CS (Top 1.35%)" },
                { value: "2 + 8", label: "Accepted / Under Review" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center stardust-hover rounded-xl p-5 bg-[#0F1F17]/40"
                >
                  <div className="text-2xl font-bold text-[#64FFDA] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-[#81C784]/50 tracking-wider">
                    {stat.label}
                  </div>
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
                    note: "CGPA 9.8/10 · Top 1%",
                  },
                  {
                    degree: "GATE 2026 — Computer Science & IT",
                    place: "National Examination (211,020 candidates)",
                    period: "2026",
                    note: "AIR 2,855 · Top 1.35%",
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
                      <p className="text-sm font-medium text-[#E8F5E9]">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-[#81C784]/60 mt-0.5">
                        {edu.place}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <span className="text-[10px] font-mono text-[#64FFDA]/60 px-2 py-1 rounded-full border border-[#64FFDA]/10">
                        {edu.note}
                      </span>
                      <span className="text-[10px] font-mono text-[#81C784]/40">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Publications */}
          <ScrollReveal delay={0.55}>
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[#E8F5E9] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b388ff]" />
                  Publications
                </h2>
                <Link
                  href="/publications"
                  className="text-xs font-mono text-[#64FFDA]/70 hover:text-[#64FFDA] transition-colors"
                >
                  View Archive →
                </Link>
              </div>
              <div className="space-y-4">
                {publications.map((pub) => (
                  <a
                    key={pub.id}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-lg border border-[#64FFDA]/8 hover:border-[#64FFDA]/25 bg-[#0F1F17]/30 transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-[#E8F5E9]">
                          {pub.title}
                        </p>
                        <p className="text-xs text-[#81C784]/60 mt-1">
                          {pub.authors.join(", ")}
                        </p>
                        <p className="text-[11px] font-mono text-[#64FFDA]/70 mt-1">
                          {pub.venue} ({pub.year})
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-[#b388ff]/80 px-2.5 py-1 rounded-full border border-[#7c4dff]/20 w-fit shrink-0">
                        {pub.status}
                      </span>
                    </div>
                  </a>
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
                  {[
                    "NPTEL Deep Learning (IIT Ropar)",
                    "Oracle Agentic AI Foundations Associate",
                    "McKinsey Forward Program",
                    "IEEE Student Member & IEEE GRSS Member",
                  ].map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-3 text-sm text-[#E8F5E9]/70"
                    >
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
                    <p className="text-[10px] text-[#81C784]/50 mt-0.5">
                      Industry Team Lead
                    </p>
                  </div>
                  <div className="text-sm text-[#E8F5E9]/70">
                    <p>GDG On Campus, IEM</p>
                    <p className="text-[10px] text-[#81C784]/50 mt-0.5">
                      Core Member, ML Team
                    </p>
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
