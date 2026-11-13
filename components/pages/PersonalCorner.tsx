"use client";

import { BookOpen, Compass, Mic2 } from "lucide-react";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

const readingThinkers = [
  "Plato",
  "Immanuel Kant",
  "Adam Smith",
  "Friedrich Nietzsche",
  "Maxwell Maltz",
];

const musicalTraditions = [
  "Raag Sangeet",
  "Khyal & Vistaar",
  "Nazrul Geeti",
  "Raag-Pradhan",
  "Behag · Bageshree · Ahir Bhairab",
];

const fieldNotes = [
  { label: "Location", value: "Kolkata, India" },
  {
    label: "Vocal Practice",
    value: "Hindustani Classical (Raag Sangeet) & Nazrul Geeti",
  },
  {
    label: "Reading Focus",
    value: "Philosophy, Political Economy & Psycho-Cybernetics",
  },
];

export function PersonalCorner() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.25em] uppercase mb-3">
              Beyond Research
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-3">
              Personal Corner
            </h1>
            <p className="text-sm text-[#94A3B8] max-w-xl mb-3 leading-relaxed">
              Classical vocal music and philosophical reading that shape how I
              think, listen, and reason outside of research.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mb-14" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Indian Classical Vocalist */}
            <ScrollReveal delay={0.08}>
              <div className="rounded-xl p-7 bg-[#101624]/85 border border-[#F59E0B]/25 backdrop-blur-sm hover:bg-[#141D2F] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/25 flex items-center justify-center">
                      <Mic2 className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#F59E0B]/10 text-[#FBBF24] border border-[#F59E0B]/25">
                      Hindustani Classical · Vocal
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-[#F8FAFC] mb-2.5">
                    Indian Classical Vocal — Raag Sangeet &amp; Nazrul Geeti
                  </h2>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed mb-5">
                    Indian classical vocalist specializing in Hindustani{" "}
                    <span className="text-[#F8FAFC] font-medium">
                      Raag Sangeet
                    </span>{" "}
                    (khyal, melodic <em>vistaar</em>, <em>meend</em>, and{" "}
                    <em>taal</em> structure), alongside{" "}
                    <span className="text-[#F8FAFC] font-medium">
                      Nazrul Geeti
                    </span>{" "}
                    — Kazi Nazrul Islam&apos;s <em>Raag-Pradhan</em>{" "}
                    compositions that weave classical ragas such as{" "}
                    <em>Behag</em>, <em>Bageshree</em>, and{" "}
                    <em>Ahir Bhairab</em> into Bengali poetic expression.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {musicalTraditions.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#F59E0B]/10 text-[#FCD34D] border border-[#F59E0B]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Philosophy, Political Economy & Cognitive Psychology */}
            <ScrollReveal delay={0.16}>
              <div className="rounded-xl p-7 bg-[#101624]/85 border border-[#60A5FA]/25 backdrop-blur-sm hover:bg-[#141D2F] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#60A5FA]/10 border border-[#60A5FA]/25 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#60A5FA]" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#60A5FA]/10 text-[#93C5FD] border border-[#60A5FA]/25">
                      Philosophy · Economy · Psychology
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-[#F8FAFC] mb-2.5">
                    Philosophy, Political Economy &amp; Self-Cybernetics
                  </h2>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed mb-5">
                    Reading across classical philosophy, moral &amp; political
                    economy, and goal-directed psychology — studying how{" "}
                    <span className="text-[#F8FAFC] font-medium">Plato</span>{" "}
                    and{" "}
                    <span className="text-[#F8FAFC] font-medium">
                      Immanuel Kant
                    </span>{" "}
                    frame reason and epistemology,{" "}
                    <span className="text-[#F8FAFC] font-medium">
                      Adam Smith
                    </span>{" "}
                    on emergent order,{" "}
                    <span className="text-[#F8FAFC] font-medium">
                      Friedrich Nietzsche
                    </span>{" "}
                    on value and agency, and{" "}
                    <span className="text-[#F8FAFC] font-medium">
                      Maxwell Maltz
                    </span>{" "}
                    (<em>Psycho-Cybernetics</em>) on feedback-driven self-image.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {readingThinkers.map((author) => (
                    <span
                      key={author}
                      className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#60A5FA]/10 text-[#93C5FD] border border-[#60A5FA]/20"
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25}>
            <div className="rounded-xl p-6 md:p-8 bg-[#101624]/85 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-5">
                <Compass className="w-4 h-4 text-[#60A5FA]" />
                <h2 className="text-sm font-mono text-[#F8FAFC] uppercase tracking-wider">
                  Field Notes
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {fieldNotes.map((note) => (
                  <div
                    key={note.label}
                    className="p-4 rounded-lg bg-[#080B12]/70 border border-white/8"
                  >
                    <p className="text-[10px] font-mono text-[#60A5FA] uppercase tracking-wider mb-1">
                      {note.label}
                    </p>
                    <p className="text-sm text-[#E2E8F0]">{note.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
