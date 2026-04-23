"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

const clusters = [
  {
    title: "Systems & Languages",
    icon: "⌘",
    organisms: ["Java", "Python", "JavaScript", "SQL", "C"],
  },
  {
    title: "Backend Infrastructure",
    icon: "⚡",
    organisms: ["Node.js", "Express.js", "Flask", "Django", "REST APIs"],
  },
  {
    title: "Intelligence & ML",
    icon: "◈",
    organisms: [
      "PyTorch",
      "scikit-learn",
      "pandas",
      "NumPy",
      "LangChain",
      "Gemini API",
      "Mistral API",
      "OpenAI API",
    ],
  },
  {
    title: "Web & Interface",
    icon: "◎",
    organisms: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Data Stores",
    icon: "◉",
    organisms: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Tooling & Platforms",
    icon: "◆",
    organisms: ["Git", "GitHub", "Firebase", "Postman", "Linux", "Vercel"],
  },
];

export function SkillsEcosystem() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-mono text-[#64FFDA]/50 tracking-[0.4em] uppercase mb-4">
              Region: The Ecosystem
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E8F5E9] mb-2">
              Skills
            </h1>
            <p className="text-sm text-[#81C784]/60 max-w-lg mb-2">
              Organisms in a living technical ecosystem. Each cluster represents
              a domain of competence.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/40 to-transparent mb-16" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusters.map((cluster, idx) => (
              <ScrollReveal key={cluster.title} delay={idx * 0.1}>
                <div className="stardust-hover rounded-xl p-6 bg-[#0F1F17]/60 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-lg text-[#64FFDA]">
                      {cluster.icon}
                    </span>
                    <h2 className="text-sm font-semibold text-[#E8F5E9] tracking-wide">
                      {cluster.title}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cluster.organisms.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="skill-tag px-3 py-1.5 rounded-md text-[11px] font-mono cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        whileHover={{
                          y: -3,
                          transition: { duration: 0.3 },
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Key Coursework */}
          <ScrollReveal delay={0.5}>
            <div className="mt-16">
              <h2 className="text-lg font-semibold text-[#E8F5E9] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b388ff]" />
                Key Coursework
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Operating Systems",
                  "DBMS",
                  "Machine Learning",
                  "Neural Networks & Deep Learning",
                  "Design & Analysis of Algorithms",
                  "Quantum Computing",
                  "Computer Networks",
                  "Software Engineering",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-md text-[10px] font-mono text-[#b388ff]/80 border border-[#b388ff]/15 hover:border-[#b388ff]/40 hover:bg-[#b388ff]/5 transition-all duration-400 cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
