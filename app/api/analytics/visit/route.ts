import { createHash, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getCountryName, recordVisit } from "@/lib/analytics-store";

function parseUserAgent(ua: string): {
  browser: string;
  os: string;
  device: string;
} {
  let browser = "Unknown";
  if (/Edg\//i.test(ua)) browser = "Edge";
  else if (/OPR\//i.test(ua) || /Opera/i.test(ua)) browser = "Opera";
  else if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) browser = "Chrome";
  else if (/Firefox\//i.test(ua)) browser = "Firefox";
  else if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) browser = "Safari";
  else if (/bot|crawler|spider|curl|wget/i.test(ua)) browser = "Bot / CLI";

  let os = "Unknown";
  if (/Windows/i.test(ua)) os = "Windows";
  else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";
  else if (/Mac OS X|Macintosh/i.test(ua)) os = "macOS";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/Linux/i.test(ua)) os = "Linux";

  let device = "Desktop";
  if (/bot|crawler|spider/i.test(ua)) device = "Bot";
  else if (/iPad|Tablet/i.test(ua)) device = "Tablet";
  else if (/Mobile|iPhone|Android.*Mobile/i.test(ua)) device = "Mobile";

  return { browser, os, device };
}

function decodeGeoHeader(val: string | null): string {
  if (!val) return "";
  try {
    return decodeURIComponent(val).trim();
  } catch {
    return val.trim();
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawPath = typeof body?.path === "string" ? body.path : "/";
    const cleanPath = rawPath.slice(0, 200) || "/";

    // Never log visits to the private analytics dashboard
    if (cleanPath.startsWith("/analytics")) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    const reqHeaders = req.headers;
    const ua = reqHeaders.get("user-agent") || "";
    const { browser, os, device } = parseUserAgent(ua);

    const rawIp =
      reqHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      reqHeaders.get("x-real-ip") ||
      "unknown";

    const isLocal =
      rawIp === "127.0.0.1" || rawIp === "::1" || rawIp === "unknown";

    const rawCountry =
      reqHeaders.get("x-vercel-ip-country") ||
      reqHeaders.get("cf-ipcountry") ||
      (isLocal ? "LOCAL" : "XX");

    const countryCode = rawCountry.toUpperCase();
    const countryName = getCountryName(countryCode);
    const city =
      decodeGeoHeader(reqHeaders.get("x-vercel-ip-city")) ||
      (isLocal ? "Local" : "");
    const region = decodeGeoHeader(
      reqHeaders.get("x-vercel-ip-country-region"),
    );

    const referrerRaw =
      typeof body?.referrer === "string" && body.referrer.trim()
        ? body.referrer.trim()
        : reqHeaders.get("referer") || "Direct";

    let referrer = "Direct";
    if (referrerRaw && referrerRaw !== "Direct") {
      try {
        referrer = new URL(referrerRaw).hostname || "Direct";
      } catch {
        referrer = referrerRaw.slice(0, 120);
      }
    }

    const salt = process.env.ANALYTICS_SALT || "satabarto-portfolio-telemetry";
    const visitorHash = createHash("sha256")
      .update(`${rawIp}|${ua}|${salt}`)
      .digest("hex")
      .slice(0, 12);

    await recordVisit({
      id: randomUUID(),
      timestamp: new Date().toISOString(),
      path: cleanPath,
      countryCode,
      countryName,
      city,
      region,
      browser,
      os,
      device,
      referrer,
      visitorHash,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Visit tracking error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

