"use client";

import { Award, ExternalLink, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { publications } from "@/lib/publications";

const coursework = [
  "Linear Algebra",
  "Probability & Statistics",
  "Discrete Mathematics",
  "Design & Analysis of Algorithms",
  "Theory of Computation",
  "Machine Learning",
  "Neural Networks & Deep Learning (O)",
  "Artificial Intelligence & Machine Learning (O)",
  "Special Topics in AI (O)",
  "Quantum Computing",
];

export function AboutMind() {
  return (
    <PageTransition>
      <section className="min-h-screen px-4 sm:px-6 py-10 md:py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.25em] uppercase mb-3">
              Education, Credentials &amp; Research
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-2">
              Education &amp; CV
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mb-8 md:mb-12" />
          </ScrollReveal>

          {/* Research Interests */}
          <ScrollReveal delay={0.05}>
            <div className="rounded-xl p-5 sm:p-7 bg-[#101624]/85 border border-white/10 backdrop-blur-sm mb-8 md:mb-10">
              <p className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-wider mb-2">
                Research Interests
              </p>
              <p className="text-[#CBD5E1] leading-relaxed text-sm md:text-base">
                Trustworthy and Certified Machine Learning, Neuro-Symbolic
                Learning, Graph Neural Networks, Neuromorphic &amp; Membrane
                Computing (Spiking Neural P Systems), Reliable Generative
                Models, Uncertainty Quantification, Time-Series Forecasting, and
                Learning Theory.
              </p>
            </div>
          </ScrollReveal>

          {/* Key Metrics */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { value: "9.8/10", label: "B.Tech CGPA" },
                { value: "Top 1%", label: "Rank 6 / 4 / 1 of 225" },
                { value: "AIR 2,855", label: "GATE 2026 CS (Top 1.35%)" },
                { value: "2 + 8", label: "Accepted / Under Review" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center rounded-xl p-5 bg-[#101624]/80 border border-white/10"
                >
                  <div className="text-2xl font-bold text-[#60A5FA] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#94A3B8]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Education with all Transcript links */}
          <ScrollReveal delay={0.15}>
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-[#F8FAFC] mb-5 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#60A5FA]" />
                Education &amp; Transcripts
              </h2>
              <div className="space-y-4">
                <div className="p-6 rounded-xl border border-white/10 bg-[#101624]/80">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-[#F8FAFC]">
                          Institute of Engineering and Management (IEM), Kolkata
                        </h3>
                        <a
                          href="https://drive.google.com/file/d/1l_WE1jKlNRyuDLlAcWrRhWC1ShB3jcO6/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#60A5FA] hover:underline"
                        >
                          (Transcript) <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        B.Tech. in Computer Science &amp; Engineering · Kolkata,
                        India
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      Aug 2023 – May 2027
                    </span>
                  </div>
                  <p className="text-xs text-[#CBD5E1] mt-3 leading-relaxed">
                    <span className="text-[#60A5FA] font-medium">
                      CGPA: 9.8/10
                    </span>{" "}
                    | Top 1% of the cohort (Y1/Y2/Y3 rank:{" "}
                    <a
                      href="https://drive.google.com/file/d/1NHfw3PayzzZKvzyrO6jy2ZdAEPNJJrF6/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#60A5FA] hover:underline"
                    >
                      6
                    </a>
                    /
                    <a
                      href="https://drive.google.com/file/d/1jbIdSRgC9p4XLyBtG3AhYndaoV2weMXW/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#60A5FA] hover:underline"
                    >
                      4
                    </a>
                    /1 of 225)
                  </p>
                  <p className="text-xs text-[#CBD5E1] mt-2 leading-relaxed">
                    <span className="font-semibold text-[#F8FAFC]">
                      National Examination:
                    </span>{" "}
                    GATE 2026 (Computer Science): AIR 2,855 / 211,020 candidates
                    (top 1.35%){" "}
                    <a
                      href="https://drive.google.com/file/d/1w78nAQnTrM-9LaQKzbXMVgnr6-Fc78jA/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#60A5FA] hover:underline"
                    >
                      (Transcript) <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-white/10 bg-[#101624]/80">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base font-semibold text-[#F8FAFC]">
                        J.N. Academy, Berhampore
                      </h3>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Berhampore, West Bengal
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      2012 – 2023
                    </span>
                  </div>
                  <div className="space-y-1.5 mt-3 text-xs text-[#CBD5E1]">
                    <p>
                      WBCHSE | 12th Standard | Science (PCMB):{" "}
                      <span className="text-[#F8FAFC] font-medium">91.4%</span>{" "}
                      | Top 5 in school{" "}
                      <a
                        href="https://drive.google.com/file/d/15sG8LsGvkmY-oOLQIPiN8jqZ1ER-PgPq/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#60A5FA] hover:underline"
                      >
                        (Transcript) <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                    <p>
                      WBBSE | 10th Standard:{" "}
                      <span className="text-[#F8FAFC] font-medium">97.2%</span>{" "}
                      | Top 5 in school{" "}
                      <a
                        href="https://drive.google.com/file/d/1DfqM0bC-rtrWIWvCcs-gTlnB6_mQveQw/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#60A5FA] hover:underline"
                      >
                        (Transcript) <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Relevant Coursework */}
          <ScrollReveal delay={0.2}>
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-[#F8FAFC] mb-4">
                Relevant Coursework
              </h2>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="skill-tag px-3 py-1.5 rounded-md text-xs font-mono"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Accepted Publications Quick View */}
          <ScrollReveal delay={0.25}>
            <div className="mb-14">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-[#F8FAFC] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#818CF8]" />
                  Accepted Publications
                </h2>
                <Link
                  href="/publications"
                  className="text-xs font-mono text-[#60A5FA] hover:underline"
                >
                  All 10 Papers →
                </Link>
              </div>
              <div className="space-y-4">
                {publications.map((pub) => (
                  <a
                    key={pub.id}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-xl border border-white/10 hover:border-[#60A5FA]/40 bg-[#101624]/80 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-[#F8FAFC]">
                          [{pub.code}] {pub.title}
                        </p>
                        <p className="text-xs text-[#94A3B8] mt-1">
                          {pub.authors.join(", ")}
                        </p>
                        <p className="text-[11px] font-mono text-[#60A5FA] mt-1">
                          {pub.venue} ({pub.year})
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-[#93C5FD] px-2.5 py-1 rounded-full border border-[#60A5FA]/25 bg-[#60A5FA]/10 w-fit shrink-0">
                        {pub.status}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Activities & Certifications */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 bg-[#101624]/80 border border-white/10">
                <h2 className="text-base font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#60A5FA]" />
                  Activities &amp; Leadership
                </h2>
                <div className="space-y-4 text-xs text-[#CBD5E1] leading-relaxed">
                  <div>
                    <p className="font-semibold text-[#F8FAFC]">
                      CoE in Generative AI, IEM — Industry Team Student Lead
                    </p>
                    <p className="text-[#94A3B8] font-mono text-[11px] mb-1">
                      Nov 2025 – Jul 2026
                    </p>
                    <p>
                      Organised{" "}
                      <a
                        href="https://genaicoe.iem.edu.in/events/68beed88e92c2feac78a6ebe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60A5FA] hover:underline"
                      >
                        GenSpark 1.0
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://genaicoe.iem.edu.in/events/6a3955351a170dd1f569dc60"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60A5FA] hover:underline"
                      >
                        GenSpark 2.0
                      </a>{" "}
                      ideathons (116+ teams) and two{" "}
                      <a
                        href="https://genaicoe.iem.edu.in/events/6a3957131a170dd1f569dc62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60A5FA] hover:underline"
                      >
                        GenAI workshops
                      </a>
                      ; mentored 2 project teams.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#F8FAFC]">
                      Google Developer Group, IEM — Core Member, ML Team
                    </p>
                    <p className="text-[#94A3B8] font-mono text-[11px]">
                      Sep 2024 – May 2025
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#F8FAFC]">
                      Professional Memberships
                    </p>
                    <p className="text-[#94A3B8]">
                      IEEE Student Member · IEEE GRSS Member
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 bg-[#101624]/80 border border-white/10">
                <h2 className="text-base font-semibold text-[#F8FAFC] mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#818CF8]" />
                  Certifications
                </h2>
                <div className="space-y-3 text-xs text-[#CBD5E1]">
                  <div className="p-3 rounded-lg bg-[#080B12]/70 border border-white/8">
                    <p className="font-medium text-[#F8FAFC]">
                      NPTEL Deep Learning (IIT Ropar)
                    </p>
                  </div>
                  <a
                    href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=000A112E548434919C5ADE87B5E72A92BC54C0C5C97E4FB93715EE02BC84DF23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#080B12]/70 border border-white/8 hover:border-[#60A5FA]/40 transition-colors"
                  >
                    <span className="font-medium text-[#F8FAFC]">
                      Oracle Agentic AI Foundations Associate
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                  </a>
                  <a
                    href="https://www.credly.com/badges/78ae0594-566c-43fc-bc5b-d420d638ccb8/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#080B12]/70 border border-white/8 hover:border-[#60A5FA]/40 transition-colors"
                  >
                    <span className="font-medium text-[#F8FAFC]">
                      McKinsey Forward Program
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
