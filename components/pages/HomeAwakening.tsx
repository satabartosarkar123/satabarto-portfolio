"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

export function HomeAwakening() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: The Presence */}
          <div className="space-y-8">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#64FFDA]/15 text-[10px] font-mono text-[#64FFDA]/70 tracking-[0.2em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] animate-pulse" />
              SYSTEM ONLINE
            </motion.div>

            {/* Name — emerges */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#E8F5E9]"
            >
              Satabarto
              <br />
              <span className="text-[#64FFDA]">Sarkar</span>
            </motion.h1>

            {/* Headline — fades in like emerging */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="text-lg md:text-xl text-[#81C784]/80 font-light leading-relaxed max-w-lg"
            >
              Designing systems and intelligent pipelines.
              <br />
              <span className="text-[#64FFDA]/60 text-sm font-mono">
                B.Tech CSE · IEM Kolkata · CGPA 9.78
              </span>
            </motion.p>

            {/* Navigation hints */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-lg border border-[#64FFDA]/15 text-[#64FFDA] text-xs font-mono tracking-wider hover:border-[#64FFDA]/40 hover:bg-[#64FFDA]/5 hover:shadow-[0_0_20px_rgba(100,255,218,0.08)] transition-all duration-500"
              >
                Explore the Mind →
              </Link>
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-lg border border-[#7c4dff]/15 text-[#b388ff] text-xs font-mono tracking-wider hover:border-[#7c4dff]/40 hover:bg-[#7c4dff]/5 hover:shadow-[0_0_20px_rgba(124,77,255,0.08)] transition-all duration-500"
              >
                View Constructs →
              </Link>
            </motion.div>

            {/* Coordinates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="flex gap-8 pt-4 text-[10px] font-mono text-[#81C784]/40 tracking-wider"
            >
              <span>Kolkata, India</span>
              <span>satabartosarkar005@gmail.com</span>
            </motion.div>
          </div>

          {/* Right: The Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden profile-glow">
              <Image
                src="/images/satabarto-hero.png"
                alt="Satabarto Sarkar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <ScrollReveal delay={2.5} className="text-center mt-20">
          <p className="text-[9px] font-mono text-[#64FFDA]/30 tracking-[0.4em] uppercase">
            Navigate the ecosystem above
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
