"use client";

import { ExternalLink, Mail, Phone } from "lucide-react";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";

const channels = [
  {
    label: "Email",
    value: "satabartosarkar005@gmail.com",
    href: "mailto:satabartosarkar005@gmail.com",
    isExternal: false,
  },
  {
    label: "Phone",
    value: "+91 81589 33609",
    href: "tel:+918158933609",
    isExternal: false,
  },
  {
    label: "ORCID",
    value: "0009-0002-6855-3616",
    href: "https://orcid.org/0009-0002-6855-3616",
    isExternal: true,
  },
  {
    label: "LinkedIn",
    value: "/in/satabarto-sarkar",
    href: "https://www.linkedin.com/in/satabarto-sarkar-5a5467331",
    isExternal: true,
  },
  {
    label: "GitHub",
    value: "/satabartosarkar123",
    href: "https://github.com/satabartosarkar123",
    isExternal: true,
  },
];

export function ContactSignal() {
  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.25em] uppercase mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-2">
              Contact
            </h1>
            <p className="text-sm text-[#94A3B8] max-w-lg mb-3">
              Open to research collaborations, PhD/internship opportunities, and
              ML systems roles.
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mb-14" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {channels.map((channel, idx) => (
              <ScrollReveal key={channel.label} delay={idx * 0.08}>
                <a
                  href={channel.href}
                  target={channel.isExternal ? "_blank" : undefined}
                  rel={channel.isExternal ? "noopener noreferrer" : undefined}
                  className="block rounded-xl p-6 bg-[#101624]/85 border border-white/10 hover:border-[#60A5FA]/45 backdrop-blur-sm group transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-wider">
                      {channel.label}
                    </span>
                    {channel.label === "Email" ? (
                      <Mail className="w-4 h-4 text-[#94A3B8] group-hover:text-[#60A5FA]" />
                    ) : channel.label === "Phone" ? (
                      <Phone className="w-4 h-4 text-[#94A3B8] group-hover:text-[#60A5FA]" />
                    ) : (
                      <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#60A5FA]" />
                    )}
                  </div>
                  <p className="text-sm text-[#E2E8F0] font-mono break-all group-hover:text-white">
                    {channel.value}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-xs font-mono text-[#94A3B8]">
                Kolkata, India · Institute of Engineering and Management (IEM)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
