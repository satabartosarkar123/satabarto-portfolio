"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Cpu, ExternalLink, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { publications } from "@/lib/publications";

const researchPillars = [
  {
    icon: BookOpen,
    title: "Topological & Neuro-Symbolic ML",
    detail:
      "Training-free topological verification for SAR-to-optical translation (IEEE GRSL) and symbolic rule pricing over Graph Neural Networks (ACML GraphML).",
    accent: "text-[#64FFDA]",
    border: "border-[#64FFDA]/20",
  },
  {
    icon: Layers,
    title: "Fault-Tolerant Backend Systems",
    detail:
      "ACID double-entry financial ledgers, idempotency guarantees, OAuth 2.0 lifecycle pipelines, and concurrency-safe API design.",
    accent: "text-[#a78bfa]",
    border: "border-[#a78bfa]/20",
  },
  {
    icon: Cpu,
    title: "Concurrent AI Pipelines",
    detail:
      "Multi-stage ingestion, bounded-concurrency LLM execution, Redis caching, and biomedical signal processing (EEG seizure detection).",
    accent: "text-[#38bdf8]",
    border: "border-[#38bdf8]/20",
  },
];

export function HomeAwakening() {
  return (
    <section className="min-h-screen px-6 py-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-6 pb-16">
          {/* Left: Identity & Focus */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#64FFDA]/25 bg-[#64FFDA]/8 text-[11px] font-mono text-[#64FFDA] tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]" />
              Researcher &amp; Systems Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F1F5F9]"
            >
              Satabarto{" "}
              <span className="bg-gradient-to-r from-[#64FFDA] via-[#38bdf8] to-[#a78bfa] bg-clip-text text-transparent">
                Sarkar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base md:text-lg text-[#CBD5E1] font-normal leading-relaxed max-w-xl"
            >
              Undergraduate CS researcher &amp; backend engineer building
              verifiable machine learning methods and fault-tolerant distributed
              systems. Published in{" "}
              <span className="text-[#64FFDA] font-medium">IEEE GRSL</span> and{" "}
              <span className="text-[#a78bfa] font-medium">
                GraphML @ ACML 2026
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94A3B8]"
            >
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                B.Tech CSE · IEM Kolkata
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#64FFDA]">
                CGPA 9.78 · Top 5%
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                Kolkata, India
              </span>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#64FFDA] text-[#091118] text-xs font-mono font-semibold tracking-wider hover:bg-[#52e8c4] transition-all duration-300 shadow-[0_0_24px_rgba(100,255,218,0.2)]"
              >
                Publications
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#a78bfa]/35 bg-[#a78bfa]/10 text-[#E2E8F0] text-xs font-mono tracking-wider hover:border-[#a78bfa]/70 hover:bg-[#a78bfa]/18 transition-all duration-300"
              >
                Engineering Projects
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-[#CBD5E1] text-xs font-mono tracking-wider hover:border-white/35 hover:text-white transition-all duration-300"
              >
                About &amp; CV
              </Link>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-[#64FFDA]/35 via-[#38bdf8]/20 to-[#a78bfa]/35 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden bg-[#0F172A]">
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

        {/* Research Focus Pillars */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {researchPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`rounded-xl p-6 bg-[#0F1A24]/80 border ${pillar.border} backdrop-blur-sm hover:bg-[#132230]/85 transition-colors`}
                >
                  <Icon className={`w-5 h-5 ${pillar.accent} mb-3`} />
                  <h2 className="text-sm font-semibold text-[#F1F5F9] mb-2">
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

        {/* Selected Publications Preview */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-white/10 bg-[#0F1A24]/75 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-mono text-[#64FFDA] uppercase tracking-widest mb-1">
                  Recent Research
                </p>
                <h2 className="text-xl font-bold text-[#F1F5F9]">
                  Selected Publications
                </h2>
              </div>
              <Link
                href="/publications"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64FFDA] hover:underline"
              >
                All Publications &amp; BibTeX
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
                  className="group block rounded-xl p-5 border border-white/10 bg-[#091118]/70 hover:border-[#64FFDA]/40 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/20">
                      {pub.venueShort} · {pub.year}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#64FFDA] transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#F1F5F9] leading-snug mb-2 group-hover:text-[#64FFDA] transition-colors">
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
