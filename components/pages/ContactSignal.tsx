"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

export function ContactSignal() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24 flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <ScrollReveal>
            <p className="text-[10px] font-mono text-[#64FFDA]/50 tracking-[0.4em] uppercase mb-4">
              Region: The Signal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E8F5E9] mb-2">
              Contact
            </h1>
            <p className="text-sm text-[#81C784]/60 max-w-lg mb-2">
              Send a signal. I&apos;m listening.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/40 to-transparent mb-16" />
          </ScrollReveal>

          {/* Signal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Email",
                value: "satabartosarkar005@gmail.com",
                href: "mailto:satabartosarkar005@gmail.com",
                icon: "✉",
              },
              {
                label: "LinkedIn",
                value: "/in/satabarto-sarkar",
                href: "https://www.linkedin.com/in/satabarto-sarkar-5a5467331/",
                icon: "↗",
              },
              {
                label: "GitHub",
                value: "/satabartosarkar123",
                href: "https://github.com/satabartosarkar123",
                icon: "⌘",
              },
            ].map((channel, idx) => (
              <ScrollReveal key={channel.label} delay={idx * 0.15}>
                <Link
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block stardust-hover rounded-xl p-8 bg-[#0F1F17]/60 backdrop-blur-sm text-center group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#64FFDA]/8 border border-[#64FFDA]/15 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.15)] transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-[#64FFDA] text-lg">
                      {channel.icon}
                    </span>
                  </motion.div>
                  <h3 className="text-xs font-mono text-[#E8F5E9]/80 tracking-wider mb-2">
                    {channel.label}
                  </h3>
                  <p className="text-[10px] font-mono text-[#81C784]/50 break-all">
                    {channel.value}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Phone + Location */}
          <ScrollReveal delay={0.4}>
            <div className="text-center space-y-3">
              <p className="text-xs font-mono text-[#81C784]/40">
                +91-8158933609 · Kolkata, India
              </p>
              <div className="h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-[#64FFDA]/20 to-transparent" />
              <p className="text-[10px] font-mono text-[#81C784]/30 tracking-widest">
                Open to internships, research, and engineering roles
              </p>
            </div>
          </ScrollReveal>

          {/* CV Download */}
          <ScrollReveal delay={0.5}>
            <div className="text-center mt-12">
              <Link
                href="/resume/Satabarto_Sarkar_CV.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#64FFDA]/20 text-[#64FFDA] text-xs font-mono tracking-wider hover:border-[#64FFDA]/50 hover:bg-[#64FFDA]/5 hover:shadow-[0_0_25px_rgba(100,255,218,0.1)] transition-all duration-500"
              >
                ↓ Download CV
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
