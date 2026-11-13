"use client";

import { Check, Copy, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import { publications } from "@/lib/publications";

export function PublicationsArchive() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-mono text-[#64FFDA]/50 tracking-[0.4em] uppercase mb-4">
              Region: The Research Archive
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E8F5E9] mb-2">
              Publications
            </h1>
            <p className="text-sm text-[#81C784]/60 max-w-lg mb-2">
              Peer-reviewed research and preprints across topological vision and
              neuro-symbolic graph learning.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/40 to-transparent mb-16" />
          </ScrollReveal>

          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <ScrollReveal key={pub.id} delay={idx * 0.15}>
                <article className="stardust-hover rounded-xl bg-[#0F1F17]/60 backdrop-blur-sm p-6 md:p-8">
                  {/* Top metadata row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#64FFDA] px-2.5 py-1 rounded-full border border-[#64FFDA]/20 bg-[#64FFDA]/5">
                        <FileText className="w-3 h-3" />
                        {pub.type}
                      </span>
                      <span className="text-[10px] font-mono text-[#b388ff] px-2.5 py-1 rounded-full border border-[#7c4dff]/20 bg-[#7c4dff]/5">
                        {pub.venueShort} · {pub.year}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-[#81C784]/70 px-2.5 py-1 rounded-full border border-[#64FFDA]/10">
                      {pub.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-semibold text-[#E8F5E9] leading-snug mb-3">
                    {pub.title}
                  </h2>

                  {/* Authors */}
                  <p className="text-sm text-[#E8F5E9]/70 mb-3 leading-relaxed">
                    {pub.authors.map((author, i) => {
                      const isMe = author === "Satabarto Sarkar";
                      return (
                        <span key={author}>
                          <span
                            className={
                              isMe
                                ? "text-[#64FFDA] font-medium"
                                : "text-[#E8F5E9]/75"
                            }
                          >
                            {author}
                          </span>
                          {i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </p>

                  {/* Venue & Location */}
                  <p className="text-xs text-[#81C784]/70 font-mono mb-6">
                    {pub.venue}
                    {pub.location ? ` · ${pub.location}` : ""}
                    {pub.primaryClass ? ` · ${pub.primaryClass}` : ""}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#64FFDA]/10">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#64FFDA]/20 text-[#64FFDA] text-xs font-mono hover:border-[#64FFDA]/50 hover:bg-[#64FFDA]/8 transition-all duration-300"
                    >
                      <span>{pub.urlLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#7c4dff]/20 text-[#b388ff] text-xs font-mono hover:border-[#7c4dff]/50 hover:bg-[#7c4dff]/8 transition-all duration-300 cursor-pointer"
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
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
