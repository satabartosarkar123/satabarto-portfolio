export async function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="stardust-hover rounded-xl p-8 md:p-12 bg-card/50 backdrop-blur-sm">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a third-year Computer Science student at IEM Kolkata
              (CGPA 9.76/10, Top 5% in Department) who builds things that
              actually work under pressure — financial ledgers that don&apos;t
              lose money, AI pipelines that process thousands of articles, and
              SEO backends that crawl the real web. Not toy projects.
            </p>
            <p>
              My core strength is designing{" "}
              <span className="text-primary font-medium">
                fault-tolerant backend architectures
              </span>
              : double-entry accounting with MongoDB ACID transactions,
              idempotent APIs, structured concurrency, and retry-resilient data
              ingestion.
            </p>
            <p>
              At{" "}
              <span className="text-primary font-medium">
                Quantyra Analytics
              </span>
              , I built production backends processing 20+ SEO KPIs across
              Google Analytics 4 and Search Console, with full OAuth 2.0
              lifecycle management. At{" "}
              <span className="text-primary font-medium">IEEE</span>, I
              engineered EEG seizure detection models using CNN+LSTM
              architectures with rigorous k-fold cross-validation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border">
            {[
              { value: "9.76", label: "CGPA / 10" },
              { value: "Top 5%", label: "In Department" },
              { value: "2", label: "Internships" },
              { value: "2", label: "Production Projects" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
