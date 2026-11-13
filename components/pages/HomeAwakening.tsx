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
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { publications } from "@/lib/publications";

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
    <section className="min-h-screen px-6 py-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-6 pb-16">
          <div className="space-y-6">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC]"
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
              className="text-base md:text-lg text-[#CBD5E1] leading-relaxed max-w-xl"
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

            {/* Academic credentials strip */}
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

            {/* Primary CTAs */}
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

            {/* Profile & Contact Links from CV */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-[#94A3B8]"
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
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden bg-[#101624]">
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

        {/* Research Interests */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
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
        <ScrollReveal delay={0.2}>
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
