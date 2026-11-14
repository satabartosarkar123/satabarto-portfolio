"use client";

import { Check, Copy, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import {
  getCoAuthorScholarUrl,
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
    <ScrollReveal key={pub.id} delay={Math.min(idx * 0.06, 0.25)}>
      <article
        id={pub.id}
        className="scroll-mt-24 rounded-xl bg-[#101624]/85 border border-white/10 hover:border-[#60A5FA]/35 backdrop-blur-sm p-5 sm:p-6 md:p-7 transition-all duration-300"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-semibold text-[#080B12] bg-[#60A5FA] px-2 py-0.5 rounded">
              [{pub.code}]
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#93C5FD] px-2.5 py-1 rounded-md border border-[#60A5FA]/25 bg-[#60A5FA]/10">
              <FileText className="w-3 h-3" />
              {pub.type}
            </span>
            <span className="text-[11px] font-mono text-[#A5B4FC] px-2.5 py-1 rounded-md border border-[#818CF8]/25 bg-[#818CF8]/10">
              {pub.venueShort} · {pub.year}
            </span>
          </div>

          <span
            className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
              pub.status === "Under Review"
                ? "text-[#FBBF24] border-[#F59E0B]/25 bg-[#F59E0B]/10"
                : "text-[#93C5FD] border-[#60A5FA]/25 bg-[#60A5FA]/10"
            }`}
          >
            {pub.status}
          </span>
        </div>

        <h2 className="text-lg md:text-xl font-semibold text-[#F8FAFC] leading-snug mb-2.5">
          {pub.title}
        </h2>

        <p className="text-sm text-[#CBD5E1] mb-2.5 leading-relaxed">
          {pub.authors.map((author, i) => {
            const isMe = author === "Satabarto Sarkar";
            const scholarUrl = isMe ? undefined : getCoAuthorScholarUrl(author);
            return (
              <span key={author}>
                {scholarUrl ? (
                  <a
                    href={scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CBD5E1] hover:text-[#60A5FA] underline decoration-white/20 hover:decoration-[#60A5FA] underline-offset-2 transition-colors"
                  >
                    {author}
                  </a>
                ) : (
                  <span
                    className={
                      isMe ? "text-[#60A5FA] font-semibold" : "text-[#CBD5E1]"
                    }
                  >
                    {author}
                  </span>
                )}
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
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#60A5FA]/30 text-[#93C5FD] text-xs font-mono hover:border-[#60A5FA]/70 hover:bg-[#60A5FA]/10 transition-all duration-200"
              >
                <span>{pub.urlLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {pub.bibtex && (
              <button
                type="button"
                onClick={() => handleCopyBibtex(pub.id, pub.bibtex || "")}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#818CF8]/30 text-[#A5B4FC] text-xs font-mono hover:border-[#818CF8]/70 hover:bg-[#818CF8]/10 transition-all duration-200 cursor-pointer"
              >
                {copiedId === pub.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#60A5FA]" />
                    <span className="text-[#60A5FA]">BibTeX Copied</span>
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
      <section className="min-h-screen px-4 sm:px-6 py-10 md:py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.25em] uppercase mb-3">
              Research Output
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC]">
                Publications
              </h1>
              <div className="flex flex-wrap items-center gap-2">
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
                    className={`px-3 py-1.5 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                      filter === tab.id
                        ? "bg-[#60A5FA] text-[#080B12] font-semibold"
                        : "bg-white/[0.04] text-[#94A3B8] hover:text-white border border-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-xl mb-3">
              Journals, workshops, and preprints across trustworthy ML,
              neuro-symbolic reasoning, GNNs, and spiking neural P systems.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mb-12" />
          </ScrollReveal>

          {filter !== "review" && (
            <div className="mb-12">
              <h2 className="text-xs font-mono text-[#60A5FA] uppercase tracking-widest mb-5">
                Accepted &amp; In Press
              </h2>
              <div className="space-y-6">
                {publications.map((pub, idx) => renderCard(pub, idx))}
              </div>
            </div>
          )}

          {filter !== "accepted" && (
            <div>
              <h2 className="text-xs font-mono text-[#FBBF24] uppercase tracking-widest mb-5">
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
