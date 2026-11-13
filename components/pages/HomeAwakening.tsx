"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Cpu,
  ExternalLink,
  Layers,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { publications } from "@/lib/publications";

function GoogleScholarIcon({
  className = "w-3.5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
    </svg>
  );
}

function MentorAvatar({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-16 h-16 rounded-full bg-[#161F33] border border-[#60A5FA]/40 flex items-center justify-center text-sm font-mono font-semibold text-[#93C5FD]">
        {initials}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="w-16 h-16 rounded-full object-cover border-2 border-[#60A5FA]/40 shadow-[0_0_20px_rgba(96,165,250,0.18)]"
    />
  );
}

const researchPillars = [
  {
    icon: BookOpen,
    title: "Trustworthy & Certified ML",
    detail:
      "Conformal risk control, randomized smoothing (Clopper–Pearson bounds), rough-set three-way authentication, and training-free topological verification.",
    accent: "text-[#60A5FA]",
    border: "border-[#60A5FA]/20",
  },
  {
    icon: Layers,
    title: "Neuro-Symbolic & Graph Learning",
    detail:
      "Information-theoretic learnability laws for symbolic rules in GNNs, out-of-fold rule discovery, and program-symmetry theory of concept grounding.",
    accent: "text-[#818CF8]",
    border: "border-[#818CF8]/20",
  },
  {
    icon: Cpu,
    title: "Neuromorphic & Membrane Computing",
    detail:
      "Event-driven Spiking Neural P systems, Takagi–Sugeno fuzzy-recurrent architectures, and ultra-low-energy (~33 nJ) time-series forecasting.",
    accent: "text-[#38BDF8]",
    border: "border-[#38BDF8]/20",
  },
];

export function HomeAwakening() {
  return (
    <section className="min-h-screen px-6 py-14 relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center pt-4 pb-10">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border border-[#60A5FA]/25 bg-[#60A5FA]/10 text-[11px] font-mono text-[#93C5FD] tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              ML Researcher · B.Tech CSE (2023–2027)
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-[#F8FAFC]"
            >
              Satabarto{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent">
                Sarkar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base text-[#CBD5E1] leading-relaxed max-w-xl"
            >
              Undergraduate researcher working on{" "}
              <span className="text-[#F8FAFC] font-medium">
                Trustworthy &amp; Certified Machine Learning
              </span>
              ,{" "}
              <span className="text-[#F8FAFC] font-medium">
                Neuro-Symbolic &amp; Graph Learning
              </span>
              , and{" "}
              <span className="text-[#F8FAFC] font-medium">
                Spiking Neural P Systems
              </span>
              . Published in{" "}
              <span className="text-[#60A5FA] font-medium">IEEE GRSL</span> and{" "}
              <span className="text-[#818CF8] font-medium">
                GraphML @ ACML 2026
              </span>
              ; Research Intern at{" "}
              <span className="text-[#F8FAFC] font-medium">IIT Kharagpur</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 text-xs font-mono"
            >
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#CBD5E1]">
                IEM Kolkata · CGPA 9.8/10 (Top 1%)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#60A5FA]/10 border border-[#60A5FA]/25 text-[#93C5FD]">
                GATE 2026 CS: AIR 2,855 (Top 1.35%)
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#60A5FA] text-[#080B12] text-xs font-mono font-semibold tracking-wider hover:bg-[#93C5FD] transition-all duration-200 shadow-[0_8px_24px_rgba(96,165,250,0.22)]"
              >
                Research Output
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#818CF8]/35 bg-[#818CF8]/10 text-[#E2E8F0] text-xs font-mono tracking-wider hover:border-[#818CF8]/70 hover:bg-[#818CF8]/20 transition-all duration-200"
              >
                Research Projects
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-[#CBD5E1] text-xs font-mono tracking-wider hover:border-white/35 hover:text-white transition-all duration-200"
              >
                Education &amp; Transcripts
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-[#94A3B8]"
            >
              <a
                href="https://orcid.org/0009-0002-6855-3616"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#60A5FA] transition-colors inline-flex items-center gap-1"
              >
                ORCID <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/satabarto-sarkar-5a5467331"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#60A5FA] transition-colors inline-flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/satabartosarkar123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#60A5FA] transition-colors inline-flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="mailto:satabartosarkar005@gmail.com"
                className="hover:text-[#60A5FA] transition-colors inline-flex items-center gap-1"
              >
                <Mail className="w-3 h-3" /> satabartosarkar005@gmail.com
              </a>
              <a
                href="tel:+918158933609"
                className="hover:text-[#60A5FA] transition-colors inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" /> +91 81589 33609
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#60A5FA]/40 via-[#818CF8]/25 to-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden bg-[#101624]">
                <Image
                  src="/images/satabarto-hero-latest.jpg"
                  alt="Satabarto Sarkar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Guided & Mentored By — visible right on the first screen */}
        <div className="mb-12">
          <div className="mb-4">
            <p className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-widest mb-1">
              Research Mentorship
            </p>
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              Guided &amp; Mentored By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Mentor 1: Sandip Chakraborty */}
            <div className="rounded-xl p-5 bg-[#101624]/90 border border-white/10 hover:border-[#60A5FA]/40 transition-colors flex gap-5 items-start">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <MentorAvatar
                  src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pQ6C8YAAAAAJ"
                  alt="Sandip Chakraborty"
                  initials="SC"
                />
                <a
                  href="https://scholar.google.com/citations?hl=en&user=pQ6C8YAAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Sandip Chakraborty — Google Scholar"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#60A5FA]/10 border border-[#60A5FA]/25 text-[#93C5FD] hover:bg-[#60A5FA]/20 text-[10px] font-mono transition-colors"
                >
                  <GoogleScholarIcon className="w-3 h-3" />
                  <span>Scholar</span>
                </a>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#F8FAFC]">
                    Sandip Chakraborty
                  </h3>
                  <span className="text-[10px] font-mono text-[#94A3B8]">
                    May – Jul 2026
                  </span>
                </div>
                <p className="text-xs font-mono text-[#60A5FA] mt-0.5 mb-2">
                  IIT Kharagpur · Ubiquitous Network Lab
                </p>
                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-3">
                  Research Intern under his supervision — built a multithreaded
                  automated 5G QoE measurement framework on Jetson Nano and
                  Android devices, decoupling Appium UI automation from ADB
                  logging and extracting baseband metrics via Magisk/root.
                </p>
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#60A5FA] hover:underline"
                >
                  Experience <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Mentor 2: Dr. Prithwineel Paul */}
            <div className="rounded-xl p-5 bg-[#101624]/90 border border-white/10 hover:border-[#818CF8]/40 transition-colors flex gap-5 items-start">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <MentorAvatar
                  src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=DYqUKZMAAAAJ"
                  alt="Dr. Prithwineel Paul"
                  initials="PP"
                />
                <a
                  href="https://scholar.google.com/citations?hl=en&user=DYqUKZMAAAAJ&view_op=list_works&sortby=pubdate"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Dr. Prithwineel Paul — Google Scholar"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#818CF8]/10 border border-[#818CF8]/25 text-[#A5B4FC] hover:bg-[#818CF8]/20 text-[10px] font-mono transition-colors"
                >
                  <GoogleScholarIcon className="w-3 h-3" />
                  <span>Scholar</span>
                </a>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#F8FAFC]">
                    Dr. Prithwineel Paul
                  </h3>
                  <span className="text-[10px] font-mono text-[#94A3B8]">
                    2025 – Present
                  </span>
                </div>
                <p className="text-xs font-mono text-[#818CF8] mt-0.5 mb-2">
                  Research Guide · Neuro-Symbolic, GNNs &amp; SNP
                </p>
                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-3">
                  Guided my work across symbolic rule learnability in GNNs,
                  event-driven Spiking Neural P networks, Takagi–Sugeno
                  neuro-fuzzy forecasting, and certified image authentication.
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                  {[
                    { code: "W1", id: "sarkar2026pricing" },
                    { code: "J2", id: "j2-rules-gnns" },
                    { code: "J3", id: "j3-fuzzy-lstm-snp" },
                    { code: "J5", id: "j5-program-symmetry" },
                    { code: "W2", id: "w2-sparsity-free" },
                    { code: "W3", id: "w3-accept-defer-flag" },
                  ].map((ref) => (
                    <Link
                      key={ref.code}
                      href={`/publications#${ref.id}`}
                      className="px-2 py-0.5 rounded bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/25 hover:bg-[#818CF8]/30 transition-colors"
                    >
                      [{ref.code}]
                    </Link>
                  ))}
                  <Link
                    href="/publications#sarkar2026pricing"
                    className="inline-flex items-center gap-1 text-[#60A5FA] hover:underline ml-1"
                  >
                    Publications <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mentor 3: Dr. D. Sobya */}
            <div className="rounded-xl p-5 bg-[#101624]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-colors flex gap-4 items-start">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <MentorAvatar
                  src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=hc5NaiEAAAAJ"
                  alt="Dr. D. Sobya"
                  initials="DS"
                />
                <a
                  href="https://scholar.google.com/citations?user=hc5NaiEAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Dr. D. Sobya — Google Scholar"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#7DD3FC] hover:bg-[#38BDF8]/20 text-[10px] font-mono transition-colors"
                >
                  <GoogleScholarIcon className="w-3 h-3" />
                  <span>Scholar</span>
                </a>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#F8FAFC]">
                    Dr. D. Sobya
                  </h3>
                  <span className="text-[10px] font-mono text-[#94A3B8]">
                    Jul – Nov 2026
                  </span>
                </div>
                <p className="text-xs font-mono text-[#38BDF8] mt-0.5 mb-2">
                  Academic Mentor · SAR-TopoGuard
                </p>
                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-3">
                  Supervised SAR-TopoGuard: training-free, speckle-aware
                  topological verification for structure-preserving
                  SAR-to-optical translation (IEEE GRSL, Accepted in press).
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                  <Link
                    href="/publications#sarkar2026sartopoguard"
                    className="px-2 py-0.5 rounded bg-[#38BDF8]/15 text-[#7DD3FC] border border-[#38BDF8]/25 hover:bg-[#38BDF8]/30 transition-colors"
                  >
                    [J1]
                  </Link>
                  <Link
                    href="/publications#sarkar2026sartopoguard"
                    className="inline-flex items-center gap-1 text-[#60A5FA] hover:underline ml-1"
                  >
                    Publication <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {researchPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`rounded-xl p-6 bg-[#101624]/85 border ${pillar.border} backdrop-blur-sm hover:bg-[#141D2F] transition-colors`}
                >
                  <Icon className={`w-5 h-5 ${pillar.accent} mb-3`} />
                  <h2 className="text-sm font-semibold text-[#F8FAFC] mb-2">
                    {pillar.title}
                  </h2>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Accepted Publications Preview */}
        <ScrollReveal delay={0.15}>
          <div className="rounded-2xl border border-white/10 bg-[#101624]/85 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-widest mb-1">
                  Accepted &amp; In Press
                </p>
                <h2 className="text-xl font-bold text-[#F8FAFC]">
                  Selected Publications
                </h2>
              </div>
              <Link
                href="/publications"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#60A5FA] hover:underline"
              >
                All 10 Papers &amp; BibTeX
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {publications.map((pub) => (
                <a
                  key={pub.id}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl p-5 border border-white/10 bg-[#080B12]/70 hover:border-[#60A5FA]/45 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#60A5FA]/15 text-[#93C5FD] border border-[#60A5FA]/25">
                      [{pub.code}] {pub.venueShort} · {pub.year}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#60A5FA] transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#F8FAFC] leading-snug mb-2 group-hover:text-[#60A5FA] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] line-clamp-1">
                    {pub.authors.join(", ")}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
