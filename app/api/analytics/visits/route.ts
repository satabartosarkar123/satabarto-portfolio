import { NextResponse } from "next/server";
import { getAnalyticsSummary } from "@/lib/analytics-store";
import { verifyOwnerAccess } from "@/lib/owner-auth";

export async function GET() {
  const authResult = await verifyOwnerAccess();
  if (!authResult.authorized) {
    return NextResponse.json(
      { error: "Owner access required" },
      { status: authResult.reason === "forbidden" ? 403 : 401 },
    );
  }

  try {
    const summary = await getAnalyticsSummary();
    return NextResponse.json(summary);
  } catch (error) {
    console.error("Analytics fetch error:", error);
    return NextResponse.json(
      { error: "Failed to load telemetry" },
      { status: 500 },
    );
  }
}

