import { SignInButton, SignOutButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { AnalyticsSecretGate } from "@/components/analytics/AnalyticsSecretGate";
import { AnalyticsDashboard } from "@/components/pages/AnalyticsDashboard";
import { getAnalyticsSummary } from "@/lib/analytics-store";
import { verifyOwnerAccess } from "@/lib/owner-auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Owner Telemetry — Satabarto Sarkar",
  robots: { index: false, follow: false },
};

export default async function AnalyticsPage() {
  const authResult = await verifyOwnerAccess();

  if (!authResult.authorized) {
    const hasSecretConfigured = Boolean(process.env.ANALYTICS_SECRET?.trim());
    const hasClerkConfigured = Boolean(
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
        !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("YOUR_"),
    );

    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-md w-full rounded-xl bg-[#101624]/85 border border-white/10 p-8 text-center backdrop-blur-sm">
          <p className="text-[11px] font-mono text-[#60A5FA] tracking-[0.3em] uppercase mb-3">
            Restricted Sector
          </p>
          <h1 className="text-2xl font-bold text-[#F8FAFC] mb-2">
            Owner Telemetry
          </h1>
          <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
            {authResult.reason === "forbidden"
              ? "Signed-in account is not authorized to view Satabarto Sarkar's private visitor analytics."
              : "This visibility & flag counter is accessible to Satabarto Sarkar only."}
          </p>

          <div className="space-y-4">
            {hasClerkConfigured && authResult.reason === "unauthorized" && (
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#60A5FA]/35 text-[#93C5FD] text-xs font-mono hover:bg-[#60A5FA]/10 transition-colors cursor-pointer"
                >
                  Sign In as Owner (Clerk)
                </button>
              </SignInButton>
            )}

            {hasClerkConfigured && authResult.reason === "forbidden" && (
              <SignOutButton>
                <button
                  type="button"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#ef5350]/30 text-[#ef5350] text-xs font-mono hover:bg-[#ef5350]/10 transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </SignOutButton>
            )}

            {hasSecretConfigured && <AnalyticsSecretGate />}

            {!hasClerkConfigured && !hasSecretConfigured && (
              <p className="text-[11px] font-mono text-[#81C784]/50">
                Configure Clerk (`OWNER_EMAIL`) or `ANALYTICS_SECRET` in your
                environment variables to unlock this dashboard.
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  const summary = await getAnalyticsSummary();
  return (
    <AnalyticsDashboard
      initialData={summary}
      authMethod={authResult.method || "clerk"}
    />
  );
}
