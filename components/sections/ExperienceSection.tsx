export async function ExperienceSection() {
  const experiences = [
    {
      role: "SWE Intern — 4sight",
      company: "Quantyra Analytics",
      period: "Nov 2025 – Jan 2026",
      bullets: [
        "Built backend modules for SEO automation platform processing 20+ KPIs across GA4 & GSC.",
        "Secured access to 2 Google APIs via OAuth 2.0 with token refresh, validation, and expiry handling.",
        "Engineered keyword planner filtering 20–30 keywords by volume, rank, and intent.",
        "Implemented competitor analysis using 20+ keywords and 4–5 overlap metrics.",
        "Built As-Is SEO diagnostics covering 25+ checks, including Core Web Vitals.",
      ],
      tech: ["OAuth 2.0", "Google Analytics 4", "Google Search Console", "Python"],
    },
    {
      role: "Research Intern",
      company: "IEEE Student Internship Program",
      period: "Jun 2025 – Aug 2025",
      bullets: [
        "EEG seizure detection: preprocessing (wavelets, augmentation), 1D-CNN, CNN+LSTM.",
        "Evaluation: k-fold CV, accuracy, macro-F1, latency; ML vs DL benchmarking.",
      ],
      tech: ["PyTorch", "1D-CNN", "CNN+LSTM", "scikit-learn"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="relative pl-8 pb-8 border-l border-primary/20 last:border-l-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary glow-shadow" />

              <div className="stardust-hover rounded-xl p-6 md:p-8 bg-card/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground hud-border px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5 text-[8px]">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="skill-tag px-2.5 py-1 rounded text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
