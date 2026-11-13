"use client";

import { ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

const experiences = [
  {
    role: "Research Intern — Ubiquitous Network Lab",
    company: "IIT Kharagpur",
    supervisor: {
      name: "Sandip Chakraborty",
      url: "https://scholar.google.com/citations?hl=en&user=pQ6C8YAAAAAJ",
    },
    location: "Kharagpur, India",
    period: "May 2026 – Jul 2026",
    description:
      "Automated 5G QoE measurement and low-level baseband telemetry capture on edge and Android devices.",
    bullets: [
      "Built a multithreaded automated 5G QoE measurement framework on Jetson Nano and Android devices for continuous measurement.",
      "Decoupled Appium UI automation from ADB logging for parallel capture of network and app metrics, preserving telemetry through crashes and timeouts; extracted raw baseband metrics via Magisk/root shell scripts.",
    ],
    tech: [
      "5G QoE",
      "Jetson Nano",
      "Android",
      "Appium",
      "ADB",
      "Magisk",
      "Python",
    ],
  },
  {
    role: "SWE Intern — 4sight Platform",
    company: "Quantyra Analytics",
    location: "Remote",
    period: "Nov 2025 – Jan 2026",
    description:
      "Designed and implemented backend modules for an enterprise SEO analytics and diagnostics platform.",
    bullets: [
      "Engineered a multi-dimensional analytics pipeline processing 20+ KPIs across Google Analytics 4 and Google Search Console, extracting actionable intelligence from raw API payloads.",
      "Architected OAuth 2.0 lifecycle management for 2 Google APIs — implementing token refresh chains, validation middleware, and expiry-aware session handling.",
      "Built a keyword intelligence planner capable of filtering 20–30 keywords by volume distribution, rank trajectory, and search intent classification.",
      "Designed competitor overlap analysis consuming 20+ keyword sets and computing 4–5 similarity metrics to map competitive positioning.",
      "Implemented As-Is SEO diagnostic engine covering 25+ technical checks, including Core Web Vitals integration with Google PageSpeed Insights API.",
    ],
    tech: ["Python", "OAuth 2.0", "GA4 API", "GSC API", "PageSpeed API"],
  },
];

export function ExperienceTimeline() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.25em] uppercase mb-3">
              Research &amp; Engineering Internships
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-2">
              Experience
            </h1>
            <p className="text-sm text-[#94A3B8] max-w-lg mb-3">
              Applied systems research and backend software engineering roles.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mb-14" />
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#60A5FA]/40 via-[#818CF8]/20 to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <ScrollReveal key={exp.company} delay={idx * 0.15}>
                  <div className="relative pl-12 md:pl-16">
                    <div className="absolute left-2.5 md:left-4.5 top-8 w-3 h-3 rounded-sm bg-[#60A5FA] shadow-[0_0_12px_rgba(96,165,250,0.4)]" />

                    <div className="rounded-xl bg-[#101624]/85 border border-white/10 hover:border-[#60A5FA]/35 backdrop-blur-sm p-6 md:p-8 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                        <div>
                          <h2 className="text-xl font-semibold text-[#F8FAFC]">
                            {exp.role}
                          </h2>
                          <p className="text-sm text-[#60A5FA] font-medium mt-0.5">
                            {exp.company}
                            {exp.location ? ` · ${exp.location}` : ""}
                          </p>
                          {exp.supervisor && (
                            <p className="text-xs text-[#94A3B8] mt-1">
                              Supervisor:{" "}
                              <a
                                href={exp.supervisor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[#93C5FD] hover:underline"
                              >
                                {exp.supervisor.name}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </p>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-[#94A3B8] border border-white/10 bg-white/[0.04] px-3 py-1 rounded-md w-fit shrink-0">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-xs text-[#94A3B8] mb-5 italic">
                        {exp.description}
                      </p>

                      <ul className="space-y-3 mb-5">
                        {exp.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm text-[#CBD5E1] leading-relaxed"
                          >
                            <span className="text-[#60A5FA] mt-1.5 text-[7px]">
                              ■
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/8">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="skill-tag px-2.5 py-1 rounded text-[11px] font-mono"
                          >
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
