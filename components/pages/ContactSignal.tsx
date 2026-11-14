"use client";

import { CheckCircle2, ExternalLink, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization,
          subject,
          message,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        mailtoFallback?: boolean;
      };

      if (res.ok && data.ok) {
        setStatus("sent");
        setFeedback(
          "Your message has been delivered to satabartosarkar005@gmail.com.",
        );
        setName("");
        setEmail("");
        setOrganization("");
        setSubject("");
        setMessage("");
        return;
      }

      if (data.mailtoFallback) {
        const body = encodeURIComponent(
          `From: ${name} (${email})${organization ? `\nOrganization: ${organization}` : ""}\n\n${message}`,
        );
        window.location.href = `mailto:satabartosarkar005@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        setStatus("idle");
        return;
      }

      setStatus("error");
      setFeedback(data.error || "Could not send message. Please try again.");
    } catch {
      setStatus("error");
      setFeedback(
        "Network error. You can also email satabartosarkar005@gmail.com directly.",
      );
    }
  }

  return (
    <PageTransition>
      <section className="min-h-screen px-4 sm:px-6 py-10 md:py-24 flex items-center">
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
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mb-8 md:mb-12" />
          </ScrollReveal>

          {/* Direct Inquiry Form */}
          <ScrollReveal delay={0.05}>
            <div className="rounded-2xl p-5 sm:p-6 md:p-8 bg-[#101624]/90 border border-white/10 backdrop-blur-sm mb-10">
              <div className="mb-6">
                <p className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-[0.2em] mb-1">
                  Direct Inquiry
                </p>
                <h2 className="text-xl font-semibold text-[#F8FAFC]">
                  Send a Message
                </h2>
                <p className="text-xs text-[#94A3B8] mt-1">
                  For recruiters, research labs, and organizations — messages go
                  straight to my inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Jane Doe / Hiring Team"
                      className="w-full rounded-lg bg-[#080B12]/90 border border-white/10 focus:border-[#60A5FA]/60 focus:outline-none px-3.5 py-2.5 text-sm text-[#F1F5F9] placeholder:text-[#64748B]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full rounded-lg bg-[#080B12]/90 border border-white/10 focus:border-[#60A5FA]/60 focus:outline-none px-3.5 py-2.5 text-sm text-[#F1F5F9] placeholder:text-[#64748B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5"
                    >
                      Organization / Lab (Optional)
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Company, University, or Research Group"
                      className="w-full rounded-lg bg-[#080B12]/90 border border-white/10 focus:border-[#60A5FA]/60 focus:outline-none px-3.5 py-2.5 text-sm text-[#F1F5F9] placeholder:text-[#64748B]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Research Collaboration / Internship / Role"
                      className="w-full rounded-lg bg-[#080B12]/90 border border-white/10 focus:border-[#60A5FA]/60 focus:outline-none px-3.5 py-2.5 text-sm text-[#F1F5F9] placeholder:text-[#64748B]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message, project details, or opportunity here..."
                    className="w-full rounded-lg bg-[#080B12]/90 border border-white/10 focus:border-[#60A5FA]/60 focus:outline-none px-3.5 py-2.5 text-sm text-[#F1F5F9] placeholder:text-[#64748B] resize-y"
                  />
                </div>

                {status === "sent" && (
                  <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 text-sm text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{feedback}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-lg bg-rose-500/10 border border-rose-500/30 px-4 py-3 text-sm text-rose-300">
                    {feedback}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <span className="text-[11px] font-mono text-[#64748B]">
                    Delivered to satabartosarkar005@gmail.com
                  </span>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#60A5FA] hover:bg-[#93C5FD] disabled:opacity-60 text-[#080B12] font-semibold text-sm px-5 py-2.5 w-full sm:w-auto transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
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
