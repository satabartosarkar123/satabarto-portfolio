"use client";

import { useState } from "react";

export function AnalyticsSecretGate() {
  const [key, setKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/analytics/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
      if (!res.ok) {
        setError("Invalid owner key.");
        return;
      }
      window.location.reload();
    } catch {
      setError("Network error.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 pt-2">
      <input
        type="password"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Owner telemetry key"
        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B140F] border border-[#64FFDA]/20 text-xs font-mono text-[#E8F5E9] placeholder:text-[#81C784]/40 focus:outline-none focus:border-[#64FFDA]/50"
        required
      />
      {error && <p className="text-[11px] font-mono text-[#ef5350]">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-4 py-2.5 rounded-lg border border-[#7c4dff]/30 text-[#b388ff] text-xs font-mono hover:bg-[#7c4dff]/10 transition-colors cursor-pointer disabled:opacity-50"
      >
        {submitting ? "Verifying..." : "Unlock Telemetry"}
      </button>
    </form>
  );
}
