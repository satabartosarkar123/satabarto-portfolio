export async function EducationSection() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Institute of Engineering and Management, Kolkata",
      period: "Aug 2023 – May 2027",
      highlights: ["Ranked Top 5% in Department", "Cumulative GPA: 9.76 / 10"],
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "DBMS",
        "Machine Learning",
        "Neural Networks & Deep Learning",
        "Design & Analysis of Algorithms",
        "Quantum Computing",
      ],
    },
    {
      degree: "Higher Secondary (12th Grade) — Science (PCMB)",
      institution: "J.N. Academy, Berhampore",
      period: "2023",
      highlights: ["Marks: 91.4%"],
      coursework: [],
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "J.N. Academy, Berhampore",
      period: "2021",
      highlights: ["Marks: 97.2%"],
      coursework: [],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 nebula-gradient-subtle">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="stardust-hover rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm"
            >
              {/* Accent bar */}
              <div className="h-[2px] bg-gradient-to-r from-primary/60 via-[#7c4dff]/40 to-transparent" />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground hud-border px-3 py-1 rounded-full w-fit shrink-0">
                    {edu.period}
                  </span>
                </div>

                {edu.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        ◈ {h}
                      </span>
                    ))}
                  </div>
                )}

                {edu.coursework.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-mono text-muted-foreground mb-3 tracking-wider">
                      KEY COURSEWORK
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((c) => (
                        <span
                          key={c}
                          className="skill-tag px-2.5 py-1 rounded text-[10px] font-mono"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
