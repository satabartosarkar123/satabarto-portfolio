import Image from "next/image";
import Link from "next/link";

export async function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden nebula-gradient"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="particle"
          style={{
            top: "10%",
            left: "15%",
            ["--duration" as string]: "7s",
            ["--delay" as string]: "0s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "20%",
            left: "70%",
            ["--duration" as string]: "9s",
            ["--delay" as string]: "1s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "60%",
            left: "25%",
            ["--duration" as string]: "8s",
            ["--delay" as string]: "2s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "40%",
            left: "80%",
            ["--duration" as string]: "6s",
            ["--delay" as string]: "0.5s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "75%",
            left: "55%",
            ["--duration" as string]: "10s",
            ["--delay" as string]: "3s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "30%",
            left: "40%",
            ["--duration" as string]: "7.5s",
            ["--delay" as string]: "1.5s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "85%",
            left: "10%",
            ["--duration" as string]: "8.5s",
            ["--delay" as string]: "4s",
          }}
        />
        <div
          className="particle"
          style={{
            top: "15%",
            left: "90%",
            ["--duration" as string]: "6.5s",
            ["--delay" as string]: "2.5s",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hud-border text-xs font-mono text-[#64FFDA] tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#64FFDA] animate-pulse" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#E8F5E9]">
              Satabarto <span className="text-[#64FFDA]">Sarkar</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#81C784] font-medium">
              Computer Science Student · Backend Systems · AI Pipelines
            </p>

            <p className="text-base text-[#81C784]/80 leading-relaxed max-w-lg">
              Engineering fault-tolerant backends and intelligent data
              pipelines. B.Tech CSE at IEM Kolkata — GPA 9.76/10, Top 5% in
              Department.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="https://github.com/satabartosarkar123"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg hud-border hud-border-hover text-[#64FFDA] font-mono text-sm tracking-wide transition-all duration-300 hover:bg-[#64FFDA]/5"
              >
                ↗ GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/satabarto-sarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg hud-border hud-border-hover text-[#64FFDA] font-mono text-sm tracking-wide transition-all duration-300 hover:bg-[#64FFDA]/5"
              >
                ↗ LinkedIn
              </Link>
              <Link
                href="mailto:satabartosarkar005@gmail.com"
                className="px-6 py-3 rounded-lg bg-[#64FFDA]/10 hud-border text-[#64FFDA] font-mono text-sm tracking-wide transition-all duration-300 hover:bg-[#64FFDA]/20"
              >
                ✉ Contact
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-xs text-[#81C784]/60 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]/40" />
                satabartosarkar005@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA]/40" />
                Kolkata, India
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden profile-glow">
              <Image
                src="/images/satabarto-hero-final.jpg"
                alt="Satabarto Sarkar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
