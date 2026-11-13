"use client";

import { Check, Copy, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import {
  type Publication,
  publications,
  underReviewManuscripts,
} from "@/lib/publications";

export function PublicationsArchive() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "accepted" | "review">("all");

  const handleCopyBibtex = async (id: string, bibtex: string) => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopiedId(id);
      setTimeout(
        () => setCopiedId((prev) => (prev === id ? null : prev)),
        2000,
      );
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
  };

  const renderCard = (pub: Publication, idx: number) => (
    <ScrollReveal key={pub.id} delay={Math.min(idx * 0.08, 0.3)}>
      <article className="rounded-xl bg-[#0F1A24]/80 border border-white/10 hover:border-[#64FFDA]/30 backdrop-blur-sm p-6 md:p-7 transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono font-semibold text-[#091118] bg-[#64FFDA] px-2 py-0.5 rounded">
              [{pub.code}]
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#64FFDA] px-2.5 py-1 rounded-full border border-[#64FFDA]/25 bg-[#64FFDA]/8">
              <FileText className="w-3 h-3" />
              {pub.type}
            </span>
            <span className="text-[10px] font-mono text-[#a78bfa] px-2.5 py-1 rounded-full border border-[#a78bfa]/25 bg-[#a78bfa]/10">
              {pub.venueShort} · {pub.year}
            </span>
          </div>

          <span
            className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
              pub.status === "Under Review"
                ? "text-[#fbbf24] border-[#fbbf24]/25 bg-[#fbbf24]/8"
                : "text-[#64FFDA] border-[#64FFDA]/25 bg-[#64FFDA]/8"
            }`}
          >
            {pub.status}
          </span>
        </div>

        <h2 className="text-lg md:text-xl font-semibold text-[#F1F5F9] leading-snug mb-2.5">
          {pub.title}
        </h2>

        <p className="text-sm text-[#CBD5E1] mb-2.5 leading-relaxed">
          {pub.authors.map((author, i) => {
            const isMe = author === "Satabarto Sarkar";
            return (
              <span key={author}>
                <span
                  className={
                    isMe ? "text-[#64FFDA] font-medium" : "text-[#CBD5E1]"
                  }
                >
                  {author}
                </span>
                {i < pub.authors.length - 1 ? ", " : ""}
              </span>
            );
          })}
        </p>

        <p className="text-xs text-[#94A3B8] font-mono mb-4">
          {pub.venue}
          {pub.location ? ` · ${pub.location}` : ""}
          {pub.primaryClass ? ` · ${pub.primaryClass}` : ""}
        </p>

        {(pub.url || pub.bibtex) && (
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {pub.url && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#64FFDA]/25 text-[#64FFDA] text-xs font-mono hover:border-[#64FFDA]/60 hover:bg-[#64FFDA]/10 transition-all duration-300"
              >
                <span>{pub.urlLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {pub.bibtex && (
              <button
                type="button"
                onClick={() => handleCopyBibtex(pub.id, pub.bibtex || "")}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#a78bfa]/25 text-[#a78bfa] text-xs font-mono hover:border-[#a78bfa]/60 hover:bg-[#a78bfa]/10 transition-all duration-300 cursor-pointer"
              >
                {copiedId === pub.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#64FFDA]" />
                    <span className="text-[#64FFDA]">BibTeX Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy BibTeX</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </article>
    </ScrollReveal>
  );

  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#64FFDA] tracking-[0.25em] uppercase mb-3">
              Peer-Reviewed &amp; Preprints
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9]">
                Publications
              </h1>
              <div className="flex items-center gap-2">
                {(
                  [
                    {
                      id: "all",
                      label: `All (${publications.length + underReviewManuscripts.length})`,
                    },
                    {
                      id: "accepted",
                      label: `Accepted (${publications.length})`,
                    },
                    {
                      id: "review",
                      label: `Under Review (${underReviewManuscripts.length})`,
                    },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-colors cursor-pointer ${
                      filter === tab.id
                        ? "bg-[#64FFDA] text-[#091118] font-semibold"
                        : "bg-white/[0.04] text-[#94A3B8] hover:text-white border border-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-xl mb-3">
              Trustworthy &amp; certified machine learning, neuro-symbolic
              reasoning, graph neural networks, and spiking neural P systems.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/60 to-transparent mb-12" />
          </ScrollReveal>

          {filter !== "review" && (
            <div className="mb-12">
              <h2 className="text-xs font-mono text-[#64FFDA] uppercase tracking-widest mb-5">
                Accepted &amp; In Press
              </h2>
              <div className="space-y-6">
                {publications.map((pub, idx) => renderCard(pub, idx))}
              </div>
            </div>
          )}

          {filter !== "accepted" && (
            <div>
              <h2 className="text-xs font-mono text-[#fbbf24] uppercase tracking-widest mb-5">
                Manuscripts Under Review
              </h2>
              <div className="space-y-5">
                {underReviewManuscripts.map((pub, idx) => renderCard(pub, idx))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
