import Link from "next/link";

export async function CertificationsSection() {
  const certifications = [
    {
      name: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      year: "2025",
    },
    {
      name: "Google Business Intelligence Specialization",
      issuer: "Google",
      year: "2025",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      year: "2024",
    },
  ];

  const societies = [
    {
      name: "CoE in Generative AI, IEM",
      role: "Industry Team Lead (Nov 2025–Present), Co-Lead (Jul–Nov 2025)",
    },
    {
      name: "Google Developer Group (GDG), IEM",
      role: "Core Member, ML Team (Sep 2024 – May 2025)",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">
            Credentials & Involvement
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & Societies
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="stardust-hover rounded-xl p-6 bg-card/50 backdrop-blur-sm text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-lg">◈</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">{cert.name}</h3>
              <p className="text-sm text-primary font-medium">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground font-mono mt-2">{cert.year}</p>
            </div>
          ))}
        </div>

        {/* Societies */}
        <div className="stardust-hover rounded-xl p-6 md:p-8 bg-card/50 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <span className="text-primary">◉</span> Societies & Leadership
          </h3>
          <div className="space-y-4">
            {societies.map((s) => (
              <div key={s.name} className="flex items-start gap-3">
                <span className="text-primary mt-1 text-[8px]">▸</span>
                <div>
                  <p className="text-sm font-medium text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
