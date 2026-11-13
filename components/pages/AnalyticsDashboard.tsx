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
                <p className="text-[10px] font-mono text-[#64FFDA]/60 tracking-[0.4em] uppercase mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Owner-Only Telemetry · {data.storageBackend.toUpperCase()}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#E8F5E9]">
                  Visibility & Flag Counter
                </h1>
                <div className="h-[1px] w-24 bg-gradient-to-r from-[#64FFDA]/40 to-transparent mt-3" />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleRefresh}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#64FFDA]/20 text-[#64FFDA] text-xs font-mono hover:border-[#64FFDA]/50 hover:bg-[#64FFDA]/8 transition-all cursor-pointer disabled:opacity-50"
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
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#7c4dff]/25 text-[#b388ff] text-xs font-mono hover:border-[#7c4dff]/50 hover:bg-[#7c4dff]/8 transition-all cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    Lock
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Summary KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="stardust-hover rounded-xl p-6 bg-[#0F1F17]/60 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-[#81C784]/60 mb-2">
                <span>TOTAL VISITS</span>
                <Eye className="w-4 h-4 text-[#64FFDA]/70" />
              </div>
              <div className="text-3xl font-bold text-[#64FFDA]">
                {data.totalVisits}
              </div>
            </div>

            <div className="stardust-hover rounded-xl p-6 bg-[#0F1F17]/60 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-[#81C784]/60 mb-2">
                <span>UNIQUE VISITORS</span>
                <Users className="w-4 h-4 text-[#b388ff]/80" />
              </div>
              <div className="text-3xl font-bold text-[#b388ff]">
                {data.uniqueVisitors}
              </div>
            </div>

            <div className="stardust-hover rounded-xl p-6 bg-[#0F1F17]/60 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-[#81C784]/60 mb-2">
                <span>COUNTRIES</span>
                <Globe className="w-4 h-4 text-[#64FFDA]/70" />
              </div>
              <div className="text-3xl font-bold text-[#E8F5E9]">
                {data.flagCounter.length}
              </div>
            </div>
          </div>

          {/* Flag Counter + Top Pages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2 stardust-hover rounded-xl p-6 bg-[#0F1F17]/60 backdrop-blur-sm">
              <h2 className="text-sm font-mono text-[#64FFDA] tracking-wider uppercase mb-5 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Flag Counter
              </h2>
              {data.flagCounter.length === 0 ? (
                <p className="text-xs font-mono text-[#81C784]/50">
                  No visits recorded yet.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.flagCounter.map((item) => (
                    <div
                      key={item.countryCode}
                      className="p-3.5 rounded-lg border border-[#64FFDA]/10 bg-[#0B140F]/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl leading-none">
                            {item.flag}
                          </span>
                          <div>
                            <p className="text-xs font-medium text-[#E8F5E9]">
                              {item.countryName}
                            </p>
                            <p className="text-[10px] font-mono text-[#81C784]/50">
                              {item.countryCode}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-mono font-semibold text-[#64FFDA]">
                            {item.count}
                          </span>
                          <span className="text-[10px] font-mono text-[#81C784]/50 ml-1.5">
                            ({item.percentage}%)
                          </span>
                        </div>
                      </div>
                      <div className="h-1 w-full rounded-full bg-[#64FFDA]/10 overflow-hidden">
                        <div
                          className="h-full bg-[#64FFDA]/70 rounded-full"
                          style={{ width: `${Math.max(item.percentage, 4)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="stardust-hover rounded-xl p-6 bg-[#0F1F17]/60 backdrop-blur-sm">
              <h2 className="text-sm font-mono text-[#b388ff] tracking-wider uppercase mb-5">
                Top Routes
              </h2>
              {data.topPages.length === 0 ? (
                <p className="text-xs font-mono text-[#81C784]/50">
                  No route data yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {data.topPages.map((page) => (
                    <div
                      key={page.path}
                      className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg border border-[#7c4dff]/10 bg-[#0B140F]/50"
                    >
                      <span className="text-[#E8F5E9]/80 truncate pr-3">
                        {page.path}
                      </span>
                      <span className="text-[#b388ff] font-semibold shrink-0">
                        {page.count}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Recent Visitors Log */}
          <div className="stardust-hover rounded-xl p-6 bg-[#0F1F17]/60 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-[#64FFDA] tracking-wider uppercase mb-5 flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Recent Profile Visitors
            </h2>
            {data.recentVisitors.length === 0 ? (
              <p className="text-xs font-mono text-[#81C784]/50">
                No visitor records yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#64FFDA]/15 text-[10px] font-mono text-[#81C784]/60 uppercase">
                      <th className="py-2.5 pr-4">Location</th>
                      <th className="py-2.5 pr-4">Route</th>
                      <th className="py-2.5 pr-4">Client</th>
                      <th className="py-2.5 pr-4">Referrer</th>
                      <th className="py-2.5 pr-4">Visitor ID</th>
                      <th className="py-2.5">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#64FFDA]/8 text-xs">
                    {data.recentVisitors.map((v) => (
                      <tr key={v.id} className="hover:bg-[#64FFDA]/4">
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <span className="mr-2">{v.flag}</span>
                          <span className="text-[#E8F5E9]/85">
                            {v.city ? `${v.city}, ` : ""}
                            {v.countryName}
                          </span>
                        </td>
                        <td className="py-3 pr-4 font-mono text-[#64FFDA]/80">
                          {v.path}
                        </td>
                        <td className="py-3 pr-4 text-[#E8F5E9]/70 whitespace-nowrap">
                          {v.browser} · {v.os} ({v.device})
                        </td>
                        <td className="py-3 pr-4 font-mono text-[#81C784]/60">
                          {v.referrer}
                        </td>
                        <td className="py-3 pr-4 font-mono text-[#b388ff]/80">
                          #{v.visitorHash.slice(0, 8)}
                        </td>
                        <td className="py-3 font-mono text-[#81C784]/50 whitespace-nowrap">
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

