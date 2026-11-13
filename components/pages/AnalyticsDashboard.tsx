"use client";

import {
  Eye,
  Globe,
  Lock,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import { PageTransition } from "@/components/cosmos/PageTransition";
import { ScrollReveal } from "@/components/cosmos/ScrollReveal";
import type { AnalyticsSummary } from "@/lib/analytics-store";

interface AnalyticsDashboardProps {
  initialData: AnalyticsSummary;
  authMethod: "clerk" | "secret";
}

export function AnalyticsDashboard({
  initialData,
  authMethod,
}: AnalyticsDashboardProps) {
  const [data, setData] = useState<AnalyticsSummary>(initialData);
  const [loading, setLoading] = useState(false);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/analytics/visits", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLock = async () => {
    await fetch("/api/analytics/auth", { method: "DELETE" });
    window.location.reload();
  };

  return (
    <PageTransition>
      <section className="min-h-screen px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Owner-Only Telemetry · {data.storageBackend.toUpperCase()}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                  Visibility &amp; Flag Counter
                </h1>
                <div className="h-[1px] w-24 bg-gradient-to-r from-[#60A5FA]/70 to-transparent mt-3" />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleRefresh}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#60A5FA]/30 text-[#93C5FD] text-xs font-mono hover:border-[#60A5FA]/70 hover:bg-[#60A5FA]/10 transition-all cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
                  />
                  Refresh
                </button>
                {authMethod === "secret" && (
                  <button
                    type="button"
                    onClick={handleLock}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#818CF8]/30 text-[#A5B4FC] text-xs font-mono hover:border-[#818CF8]/70 hover:bg-[#818CF8]/10 transition-all cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    Lock
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="rounded-xl p-6 bg-[#101624]/85 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2">
                <span>TOTAL VISITS</span>
                <Eye className="w-4 h-4 text-[#60A5FA]" />
              </div>
              <div className="text-3xl font-bold text-[#60A5FA]">
                {data.totalVisits}
              </div>
            </div>

            <div className="rounded-xl p-6 bg-[#101624]/85 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2">
                <span>UNIQUE VISITORS</span>
                <Users className="w-4 h-4 text-[#818CF8]" />
              </div>
              <div className="text-3xl font-bold text-[#818CF8]">
                {data.uniqueVisitors}
              </div>
            </div>

            <div className="rounded-xl p-6 bg-[#101624]/85 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2">
                <span>COUNTRIES</span>
                <Globe className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <div className="text-3xl font-bold text-[#F8FAFC]">
                {data.flagCounter.length}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2 rounded-xl p-6 bg-[#101624]/85 border border-white/10 backdrop-blur-sm">
              <h2 className="text-sm font-mono text-[#60A5FA] tracking-wider uppercase mb-5 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Flag Counter
              </h2>
              {data.flagCounter.length === 0 ? (
                <p className="text-xs font-mono text-[#94A3B8]">
                  No visits recorded yet.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.flagCounter.map((item) => (
                    <div
                      key={item.countryCode}
                      className="p-3.5 rounded-lg border border-white/10 bg-[#080B12]/70"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl leading-none">
                            {item.flag}
                          </span>
                          <div>
                            <p className="text-xs font-medium text-[#F8FAFC]">
                              {item.countryName}
                            </p>
                            <p className="text-[10px] font-mono text-[#94A3B8]">
                              {item.countryCode}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-mono font-semibold text-[#60A5FA]">
                            {item.count}
                          </span>
                          <span className="text-[10px] font-mono text-[#94A3B8] ml-1.5">
                            ({item.percentage}%)
                          </span>
                        </div>
                      </div>
                      <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-[#60A5FA] rounded-full"
                          style={{ width: `${Math.max(item.percentage, 4)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-xl p-6 bg-[#101624]/85 border border-white/10 backdrop-blur-sm">
              <h2 className="text-sm font-mono text-[#818CF8] tracking-wider uppercase mb-5">
                Top Routes
              </h2>
              {data.topPages.length === 0 ? (
                <p className="text-xs font-mono text-[#94A3B8]">
                  No route data yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {data.topPages.map((page) => (
                    <div
                      key={page.path}
                      className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg border border-white/10 bg-[#080B12]/70"
                    >
                      <span className="text-[#CBD5E1] truncate pr-3">
                        {page.path}
                      </span>
                      <span className="text-[#818CF8] font-semibold shrink-0">
                        {page.count}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl p-6 bg-[#101624]/85 border border-white/10 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-[#60A5FA] tracking-wider uppercase mb-5 flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Recent Profile Visitors
            </h2>
            {data.recentVisitors.length === 0 ? (
              <p className="text-xs font-mono text-[#94A3B8]">
                No visitor records yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] font-mono text-[#94A3B8] uppercase">
                      <th className="py-2.5 pr-4">Location</th>
                      <th className="py-2.5 pr-4">Route</th>
                      <th className="py-2.5 pr-4">Client</th>
                      <th className="py-2.5 pr-4">Referrer</th>
                      <th className="py-2.5 pr-4">Visitor ID</th>
                      <th className="py-2.5">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8 text-xs">
                    {data.recentVisitors.map((v) => (
                      <tr key={v.id} className="hover:bg-white/[0.03]">
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <span className="mr-2">{v.flag}</span>
                          <span className="text-[#F8FAFC]">
                            {v.city ? `${v.city}, ` : ""}
                            {v.countryName}
                          </span>
                        </td>
                        <td className="py-3 pr-4 font-mono text-[#60A5FA]">
                          {v.path}
                        </td>
                        <td className="py-3 pr-4 text-[#CBD5E1] whitespace-nowrap">
                          {v.browser} · {v.os} ({v.device})
                        </td>
                        <td className="py-3 pr-4 font-mono text-[#94A3B8]">
                          {v.referrer}
                        </td>
                        <td className="py-3 pr-4 font-mono text-[#818CF8]">
                          #{v.visitorHash.slice(0, 8)}
                        </td>
                        <td className="py-3 font-mono text-[#94A3B8] whitespace-nowrap">
                          {new Date(v.timestamp).toLocaleString("en-IN", {
                            dateStyle: "short",
                            timeStyle: "short",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
