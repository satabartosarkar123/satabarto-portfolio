"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

interface CollaboratorLink {
  name: string;
  url: string;
}

interface ResearchProject {
  title: string;
  period: string;
  role: string;
  advisors?: CollaboratorLink[];
  collaborators?: CollaboratorLink[];
  outputRefs: string[];
  bullets: string[];
}

const researchProjects: ResearchProject[] = [
  {
    title:
      "SAR-TopoGuard — Training-Free Verification of SAR-to-Optical Generators",
    period: "Jul 2026 – Nov 2026",
    role: "First & Corresponding Author",
    advisors: [
      {
        name: "Dr. D. Sobya",
        url: "https://scholar.google.com/citations?user=hc5NaiEAAAAJ&hl=en",
      },
    ],
    outputRefs: ["J1"],
    bullets: [
      "Designed a zero-parameter reliability layer for frozen SAR-to-optical translators: K=5 stochastic candidates (MC dropout for GANs, noise seeds for diffusion), a speckle-aware verifier (GMC − w·HFI) and a SAR-guided high-frequency gate; 0.40 ms and 0.05 GFLOPs per patch.",
      "Built a leakage-free evaluation on SEN1-2 and SEN12MS: scene-disjoint splits, two out-of-distribution sets, 5 generators (Pix2Pix, CycleGAN, CUT, COP-GEN, COP-GEN-Beta), 12 trained GANs over 3 seeds, paired Wilcoxon tests and 10k-resample bootstrap CIs.",
      "Improved every backbone on all three test sets (p < 10⁻⁶; up to +0.33 dB PSNR on diffusion; SSIM gains on all 200 cross-dataset images) and showed when verifier selection helps (diverse diffusion samples) versus when gating does.",
    ],
  },
  {
    title:
      "Event-Driven Spiking Neural P Networks for Ultra-Low-Energy Forecasting",
    period: "Oct 2026 – Present",
    role: "Lead Researcher",
    advisors: [
      {
        name: "Dr. Prithwineel Paul",
        url: "https://scholar.google.com/citations?hl=en&user=DYqUKZMAAAAJ&view_op=list_works&sortby=pubdate",
      },
    ],
    outputRefs: ["W2"],
    bullets: [
      "Proved that recent SNP-inspired forecasters (LSTM-SNP and gated variants) have lost the firing condition, and designed an event-driven SNP network that restores it, with a closed-form, seed-free fit, exact leave-one-out selection of sparsity per series, and an exact 8-bit integer spiking version.",
      "Proved an approximation bound for sparse firing conditions, an exact synaptic-operation count, a spike-code error bound and an oracle inequality under β-mixing dependence.",
      "Benchmarked against 58 deep, spiking, reservoir, kernel, fuzzy and foundation models on 14 series, long-horizon benchmarks and all 100,000 M4 series: first on every chaotic series, second of 21 models at published configurations, ~33 nJ per forecast with 6–24% of neurons firing.",
    ],
  },
  {
    title: "Learnability Theory and Discovery of Symbolic Rules for GNNs",
    period: "Oct 2026 – Nov 2026",
    role: "Corresponding Author",
    advisors: [
      {
        name: "Dr. Prithwineel Paul",
        url: "https://scholar.google.com/citations?hl=en&user=DYqUKZMAAAAJ&view_op=list_works&sortby=pubdate",
      },
    ],
    outputRefs: ["J2", "W1"],
    bullets: [
      "Proved an information-theoretic learnability law: a symbolic rule is worth exactly the label information I(Y; S | T) the trained GNN fails to learn, with computable bounds and a Fano certificate.",
      "Designed out-of-fold rule discovery with 1,000-permutation nulls and Westfall–Young FWER control; it rediscovered ZINC's hidden ring term in 3 independent runs (p_adj = 0.001) and beat expert cycle counts (MAE 0.120 vs 0.131).",
      "Validated on 23 real datasets with pre-registered checks and a frozen held-out evaluation; never significantly worse than baselines, +0.035 ROC-AUC on BBBP.",
    ],
  },
  {
    title: "Certified Three-Way Authentication of AI-Generated Images",
    period: "Oct 2026 – Nov 2026",
    role: "Lead Researcher",
    outputRefs: ["J4", "W3"],
    bullets: [
      "Built an accept / defer / flag detector for images from unseen generators, combining randomized smoothing (Clopper–Pearson bounds), rough-set three-way decisions and conformal risk control over generators.",
      "Certified 92.2% of real images at a 2.3% generator-averaged accept error; 0 certificate violations in 10,400 attacked checks; at α = 2% still accepts 80–92% of reals across 3 backbones where Cohen-style smoothing accepts 0%.",
    ],
  },
  {
    title: "Program Symmetry and Optimisation Traps in Neuro-Symbolic Learning",
    period: "Oct 2026 – Nov 2026",
    role: "Lead Researcher",
    outputRefs: ["J5", "W4"],
    bullets: [
      "Developed a symmetry theory of concept grounding: program automorphisms predict stuck states with closed-form losses (146 traps within 3% of prediction) and the order of symmetry breaking (554/557 visual-Sudoku networks).",
      "Ran 9 preregistered studies (5,800+ networks; MNIST, Fashion, KMNIST, SVHN, CIFAR-10, visual Sudoku); a closed-form annealing schedule raised correct grounding from 0.23 to 0.68, and the method beat NeuPSL and A-NeSI on ViSudo-PC (AuROC 0.995 vs 0.88).",
    ],
  },
  {
    title: "Neuro-Fuzzy Recurrent Systems for Time-Series Forecasting",
    period: "2025 – 2026",
    role: "Lead Student Researcher",
    outputRefs: ["J3"],
    collaborators: [
      {
        name: "Prithwineel Paul",
        url: "https://scholar.google.com/citations?hl=en&user=DYqUKZMAAAAJ&view_op=list_works&sortby=pubdate",
      },
      {
        name: "Ferrante Neri",
        url: "https://scholar.google.com/citations?user=h0JDq7sAAAAJ&hl=en",
      },
      {
        name: "Gexiang Zhang",
        url: "https://scholar.google.com/citations?user=R2th41cAAAAJ&hl=en",
      },
      {
        name: "David Orellana Martín",
        url: "https://scholar.google.com/citations?user=20vey8cAAAAJ&hl=es",
      },
      {
        name: "Antonio Ramírez Marrero",
        url: "https://scholar.google.com/citations?user=a9DmsfAAAAAJ&hl=es",
      },
      {
        name: "Agustín Riscos Núñez",
        url: "https://scholar.google.com/citations?user=iBOvTD8AAAAJ&hl=es",
      },
    ],
    bullets: [
      "Formulated and benchmarked 4 Takagi–Sugeno fuzzy-inference integration topologies in SNP-inspired recurrent memory, with closed-form finite-horizon state and Lipschitz perturbation bounds.",
      "Evaluated on 4 series with 60 seeds per configuration against 10 baselines; best cross-domain RMSE via selective inductive-bias placement (6.57% lower on Milk Production) and sub-0.11% degradation under 10% input noise.",
    ],
  },
];

export function ProjectsConstructs() {
  return (
    <PageTransition>
      <section className="min-h-screen px-4 sm:px-6 py-10 md:py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.25em] uppercase mb-3">
              Selected Research Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-3">
              Research &amp; Projects
            </h1>
            <p className="text-sm text-[#94A3B8] max-w-2xl mb-3">
              Theoretical foundations, certified machine learning,
              neuro-symbolic reasoning, and neuromorphic time-series
              forecasting.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mb-10 md:mb-14" />
          </ScrollReveal>

          <div className="space-y-6 md:space-y-8">
            {researchProjects.map((project, idx) => (
              <ScrollReveal
                key={project.title}
                delay={Math.min(idx * 0.08, 0.3)}
              >
                <article className="rounded-xl bg-[#101624]/85 border border-white/10 hover:border-[#60A5FA]/35 backdrop-blur-sm p-5 sm:p-6 md:p-8 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                    <h2 className="text-xl md:text-2xl font-semibold text-[#F1F5F9] leading-snug">
                      {project.title}
                    </h2>
                    <span className="text-[11px] font-mono text-[#94A3B8] px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 w-fit shrink-0">
                      {project.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8] mb-4">
                    <span className="text-[#CBD5E1] font-medium">
                      {project.role}
                    </span>
                    {project.advisors && project.advisors.length > 0 && (
                      <>
                        <span>·</span>
                        <span>
                          Supervisor / Advisor:{" "}
                          {project.advisors.map((adv, i) => (
                            <span key={adv.name}>
                              <a
                                href={adv.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[#60A5FA] hover:underline"
                              >
                                {adv.name}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                              {i < (project.advisors?.length ?? 0) - 1
                                ? ", "
                                : ""}
                            </span>
                          ))}
                        </span>
                      </>
                    )}
                    <span>·</span>
                    <div className="inline-flex items-center gap-1.5">
                      {project.outputRefs.map((refCode) => (
                        <Link
                          key={refCode}
                          href="/publications"
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#60A5FA]/15 text-[#93C5FD] border border-[#60A5FA]/25 hover:bg-[#60A5FA]/25 transition-colors"
                        >
                          [{refCode}]
                        </Link>
                      ))}
                    </div>
                  </div>

                  {project.collaborators && (
                    <p className="text-xs text-[#94A3B8] mb-4 leading-relaxed">
                      <span className="text-[#CBD5E1] font-medium">
                        Collaborators &amp; Guides:
                      </span>{" "}
                      {project.collaborators.map((collab, i) => (
                        <span key={collab.name}>
                          <a
                            href={collab.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#60A5FA] hover:underline"
                          >
                            {collab.name}
                          </a>
                          {i < (project.collaborators?.length ?? 0) - 1
                            ? ", "
                            : ""}
                        </span>
                      ))}
                    </p>
                  )}

                  <ul className="space-y-2.5 pt-3 border-t border-white/8">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-[#CBD5E1] leading-relaxed"
                      >
                        <span className="text-[#60A5FA] mt-1.5 text-[7px]">
                          ■
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
