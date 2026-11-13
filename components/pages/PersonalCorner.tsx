"use client";

import { BookOpen, Camera, Compass, Headphones, Swords } from "lucide-react";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

const hobbies = [
  {
    icon: Camera,
    title: "Photography & Street Frames",
    tag: "Visual Storytelling",
    description:
      "Capturing everyday geometry, monsoon light, and candid street moments around Kolkata — balancing technical framing with spontaneous composition.",
    accent: "text-[#64FFDA]",
    border: "border-[#64FFDA]/25",
    bg: "bg-[#64FFDA]/8",
  },
  {
    icon: Swords,
    title: "Chess & Strategy",
    tag: "Tactical Thinking",
    description:
      "Rapid and blitz games to unwind between coding sprints. Drawn to endgame calculation, positional sacrifices, and pattern recognition.",
    accent: "text-[#a78bfa]",
    border: "border-[#a78bfa]/25",
    bg: "bg-[#a78bfa]/8",
  },
  {
    icon: BookOpen,
    title: "Reading & Ideas",
    tag: "Sci-Fi · Philosophy · Systems",
    description:
      "Exploring hard sci-fi, epistemology, and essays on how complex systems evolve — from distributed computing to human decision-making.",
    accent: "text-[#38bdf8]",
    border: "border-[#38bdf8]/25",
    bg: "bg-[#38bdf8]/8",
  },
  {
    icon: Headphones,
    title: "Music & Deep-Work Acoustics",
    tag: "Ambient · Synth · Indie",
    description:
      "Curating instrumental, lo-fi, and ambient electronic playlists that power late-night paper writing and architecture design sessions.",
    accent: "text-[#f59e0b]",
    border: "border-[#f59e0b]/25",
    bg: "bg-[#f59e0b]/8",
  },
];

const currentlyExploring = [
  { label: "Location", value: "Kolkata, India" },
  { label: "Off-Screen Fuel", value: "Filter coffee & evening walks" },
  {
    label: "Side Curiosity",
    value: "Topological data analysis & neuro-symbolic AI",
  },
];

export function PersonalCorner() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#64FFDA] tracking-[0.25em] uppercase mb-3">
              Beyond Research
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-3">
              Personal Corner
            </h1>
            <p className="text-sm text-[#94A3B8] max-w-xl mb-3 leading-relaxed">
              The hobbies, curiosities, and creative outlets that keep my
              perspective sharp outside of papers and production systems.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/60 to-transparent mb-14" />
          </ScrollReveal>

          {/* Hobby Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {hobbies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={idx * 0.1}>
                  <div
                    className={`rounded-xl p-7 bg-[#0F1A24]/80 border ${item.border} backdrop-blur-sm hover:bg-[#132230]/85 transition-all duration-300 h-full`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg ${item.bg} border ${item.border} flex items-center justify-center`}
                      >
                        <Icon className={`w-5 h-5 ${item.accent}`} />
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full ${item.bg} ${item.accent} border ${item.border}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold text-[#F1F5F9] mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[#CBD5E1]/85 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Currently / Quick Notes */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-xl p-6 md:p-8 bg-[#0F1A24]/75 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-5">
                <Compass className="w-4 h-4 text-[#64FFDA]" />
                <h2 className="text-sm font-mono text-[#F1F5F9] uppercase tracking-wider">
                  Field Notes
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {currentlyExploring.map((note) => (
                  <div
                    key={note.label}
                    className="p-4 rounded-lg bg-[#091118]/70 border border-white/8"
                  >
                    <p className="text-[10px] font-mono text-[#64FFDA]/80 uppercase tracking-wider mb-1">
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
