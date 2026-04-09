import Link from "next/link";

export async function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 pb-40 nebula-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to internships, research collaborations, and engineering roles. 
            Let&apos;s build something impactful.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <Link
            href="mailto:satabartosarkar005@gmail.com"
            className="stardust-hover rounded-xl p-6 bg-card/50 backdrop-blur-sm text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:glow-shadow transition-all">
              <span className="text-primary text-xl">✉</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Email</h3>
            <p className="text-xs text-muted-foreground font-mono break-all">
              satabartosarkar005@gmail.com
            </p>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/satabarto-sarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="stardust-hover rounded-xl p-6 bg-card/50 backdrop-blur-sm text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:glow-shadow transition-all">
              <span className="text-primary text-xl">↗</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-xs text-muted-foreground font-mono">
              /in/satabarto-sarkar
            </p>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/satabartosarkar123"
            target="_blank"
            rel="noopener noreferrer"
            className="stardust-hover rounded-xl p-6 bg-card/50 backdrop-blur-sm text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:glow-shadow transition-all">
              <span className="text-primary text-xl">⌘</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">GitHub</h3>
            <p className="text-xs text-muted-foreground font-mono">
              /satabartosarkar123
            </p>
          </Link>
        </div>

        {/* Phone */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground font-mono">
            📱 +91-8158933609 · 📍 Kolkata, India
          </p>
        </div>
      </div>
    </section>
  );
}
