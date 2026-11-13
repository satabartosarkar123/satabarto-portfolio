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
        <div className="max-w-md w-full rounded-xl bg-[#0F1F17]/70 border border-[#64FFDA]/15 p-8 text-center backdrop-blur-sm">
          <p className="text-[10px] font-mono text-[#64FFDA]/60 tracking-[0.35em] uppercase mb-3">
            Restricted Sector
          </p>
          <h1 className="text-2xl font-bold text-[#E8F5E9] mb-2">
            Owner Telemetry
          </h1>
          <p className="text-xs text-[#81C784]/70 mb-6 leading-relaxed">
            {authResult.reason === "forbidden"
              ? "Signed-in account is not authorized to view Satabarto Sarkar's private visitor analytics."
              : "This visibility & flag counter is accessible to Satabarto Sarkar only."}
          </p>

          <div className="space-y-4">
            {hasClerkConfigured && authResult.reason === "unauthorized" && (
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-mono hover:bg-[#64FFDA]/10 transition-colors cursor-pointer"
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

