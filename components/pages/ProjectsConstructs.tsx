"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { PageTransition } from "@/components/cosmos/PageTransition";

const projects = [
  {
    title: "BankLedger",
    subtitle: "Financial Backend Engine",
    period: "Mar 2026 – Present",
    metric: "< 200ms P95 Latency",
    problem:
      "Traditional account management APIs treat financial mutations as simple CRUD — no atomicity guarantees, no audit trails, no protection against duplicate submissions. A single dropped request can cause ledger imbalances worth real money.",
    architecture:
      "Double-entry accounting with MongoDB ACID transactions. Every transfer atomically debits one account and credits another within a single session, enforced at the database driver level. Idempotency keys prevent duplicate mutations even under network retries.",
    challenges:
      "Race conditions under concurrent transfers to the same account. Solved with pessimistic document-level locking and sequential consistency on the hot path. Pagination over the full transaction history uses cursor-based traversal to avoid O(N) offset scans.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/satabartosarkar123/BankLedger",
  },
  {
    title: "Nutino",
    subtitle: "AI-Powered News Intelligence Pipeline",
    period: "Feb 2026 – Present",
    metric: "1000+ Articles Processed",
    problem:
      "Consuming news at scale requires more than RSS feeds. Users need structured extraction, contextual summarization, and intelligent filtering — not raw article dumps from unreliable third-party APIs.",
    architecture:
      "Backend-controlled multi-stage pipeline: API ingestion → validation → concurrent Gemini summarization with retry logic → server-side Redis caching (5-min TTL). Frontend receives only clean, pre-processed intelligence. Structured Zod validation on every input boundary.",
    challenges:
      "Gemini API rate limits under concurrent load. Engineered a bounded-concurrency executor (Promise pool, max 3 parallel) with exponential backoff and circuit-breaker patterns. Implemented server-side caching to reduce redundant LLM calls by 60%.",
    tech: ["Next.js", "Gemini API", "Redis", "Zod", "Tailwind CSS"],
    github: "https://github.com/satabartosarkar123/01newssum",
  },
];

export function ProjectsConstructs() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-mono text-[#64FFDA]/50 tracking-[0.4em] uppercase mb-4">
              Region: The Constructs
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E8F5E9] mb-2">
              Projects
            </h1>
            <p className="text-sm text-[#81C784]/60 max-w-lg mb-2">
              Production-grade systems designed to endure real-world stress.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/40 to-transparent mb-16" />
          </ScrollReveal>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.title} delay={idx * 0.15}>
                <div className="group stardust-hover rounded-xl bg-[#0F1F17]/60 backdrop-blur-sm overflow-hidden">
                  {/* Header */}
                  <div className="p-8 pb-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-1">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#E8F5E9] font-mono">
                          {project.title}
                        </h2>
                        <p className="text-xs text-[#81C784]/60 mt-1">{project.subtitle} · {project.period}</p>
                      </div>
                      <span className="text-[10px] font-mono text-[#64FFDA] px-3 py-1.5 rounded-full border border-[#64FFDA]/15 w-fit">
                        {project.metric}
                      </span>
                    </div>
                  </div>

                  {/* Depth panels */}
                  <div className="p-8 pt-6 space-y-6">
                    {/* Problem */}
                    <div>
                      <h3 className="text-xs font-mono text-[#64FFDA]/60 tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-1 h-3 rounded-sm bg-[#64FFDA]/40" />
                        PROBLEM SPACE
                      </h3>
                      <p className="text-sm text-[#E8F5E9]/70 leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Architecture */}
                    <div>
                      <h3 className="text-xs font-mono text-[#b388ff]/60 tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-1 h-3 rounded-sm bg-[#b388ff]/40" />
                        SYSTEM ARCHITECTURE
                      </h3>
                      <p className="text-sm text-[#E8F5E9]/70 leading-relaxed">{project.architecture}</p>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className="text-xs font-mono text-[#FFD54F]/60 tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-1 h-3 rounded-sm bg-[#FFD54F]/40" />
                        ENGINEERING CHALLENGES
                      </h3>
                      <p className="text-sm text-[#E8F5E9]/70 leading-relaxed">{project.challenges}</p>
                    </div>

                    {/* Tech + Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#64FFDA]/8">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="skill-tag px-2.5 py-1 rounded text-[10px] font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#64FFDA]/70 hover:text-[#64FFDA] border border-[#64FFDA]/15 hover:border-[#64FFDA]/40 px-4 py-2 rounded-lg transition-all duration-500 hover:shadow-[0_0_15px_rgba(100,255,218,0.08)]"
                      >
                        View Source ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
