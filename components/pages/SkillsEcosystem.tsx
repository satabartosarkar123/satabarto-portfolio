"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

const clusters = [
  {
    title: "ML / DL & Graph Learning",
    organisms: [
      "PyTorch",
      "scikit-learn",
      "timm",
      "Hugging Face Hub",
      "RDKit",
      "OGB",
    ],
  },
  {
    title: "Programming",
    organisms: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Statistics & Evaluation",
    organisms: [
      "Conformal Prediction",
      "Permutation & Multiple-Testing Control",
      "Friedman / Nemenyi",
      "Wilcoxon",
      "Bootstrap",
      "Bayesian Tests",
    ],
  },
  {
    title: "Theory",
    organisms: [
      "Learning Theory",
      "Information Theory",
      "Group Theory",
      "Convex Optimisation",
    ],
  },
  {
    title: "Compute",
    organisms: [
      "marimo / molab",
      "Jupyter on Cloud GPUs",
      "Resumable Checkpointed Pipelines",
    ],
  },
  {
    title: "Writing & Dissemination",
    organisms: [
      "LaTeX (IEEEtran, Elsevier CAS, AAAI, PMLR)",
      "OpenReview",
      "arXiv",
    ],
  },
];

export function SkillsEcosystem() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.25em] uppercase mb-3">
              Technical &amp; Theoretical Stack
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-2">
              Skills
            </h1>
            <p className="text-sm text-[#94A3B8] max-w-lg mb-3">
              Tools, statistical rigor, and mathematical foundations used across
              research and systems work.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mb-14" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusters.map((cluster, idx) => (
              <ScrollReveal key={cluster.title} delay={idx * 0.08}>
                <div className="rounded-xl p-6 bg-[#101624]/85 border border-white/10 hover:border-[#60A5FA]/35 backdrop-blur-sm h-full transition-colors">
                  <h2 className="text-sm font-mono font-semibold text-[#93C5FD] mb-5">
                    {cluster.title}
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {cluster.organisms.map((org, i) => (
                      <motion.span
                        key={org}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.06 + i * 0.03 }}
                        className="skill-tag px-3 py-1.5 rounded-md text-xs font-mono"
                      >
                        {org}
                      </motion.span>
                    ))}
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
