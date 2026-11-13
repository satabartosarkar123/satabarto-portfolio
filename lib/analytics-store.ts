import { promises as fs } from "node:fs";
import path from "node:path";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export interface VisitRecord {
  id: string;
  timestamp: string;
  path: string;
  countryCode: string;
  countryName: string;
  city: string;
  region: string;
  browser: string;
  os: string;
  device: string;
  referrer: string;
  visitorHash: string;
}

export interface FlagCountItem {
  countryCode: string;
  countryName: string;
  flag: string;
  count: number;
  percentage: number;
}

export interface AnalyticsSummary {
  totalVisits: number;
  uniqueVisitors: number;
  flagCounter: FlagCountItem[];
  topPages: { path: string; count: number }[];
  recentVisitors: (VisitRecord & { flag: string })[];
  storageBackend: "sanity" | "local";
}

const MAX_LOCAL_RECORDS = 2000;

export function countryCodeToFlag(code: string): string {
  const normalized = code.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized) || normalized === "XX") {
    return "🌐";
  }
  const OFFSET = 127397;
  return String.fromCodePoint(
    normalized.charCodeAt(0) + OFFSET,
    normalized.charCodeAt(1) + OFFSET,
  );
}

export function getCountryName(code: string): string {
  const normalized = code.trim().toUpperCase();
  if (!normalized || normalized === "XX") return "Unknown";
  if (normalized === "LOCAL") return "Localhost";
  try {
    const display = new Intl.DisplayNames(["en"], { type: "region" });
    return display.of(normalized) || normalized;
  } catch {
    return normalized;
  }
}

function getSanityWriteClient() {
  const token =
    process.env.SANITY_SERVER_API_TOKEN || process.env.SANITY_API_TOKEN;
  if (
    !token ||
    token.includes("PLACEHOLDER") ||
    !projectId ||
    projectId.includes("your_project")
  ) {
    return null;
  }
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  });
}

async function resolveLocalFilePath(): Promise<string> {
  const primaryDir = path.join(process.cwd(), ".data");
  try {
    await fs.mkdir(primaryDir, { recursive: true });
    return path.join(primaryDir, "visitor-telemetry.json");
  } catch {
    return "/tmp/visitor-telemetry.json";
  }
}

async function readLocalRecords(): Promise<VisitRecord[]> {
  try {
    const filePath = await resolveLocalFilePath();
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeLocalRecords(records: VisitRecord[]): Promise<void> {
  const filePath = await resolveLocalFilePath();
  await fs.writeFile(
    filePath,
    JSON.stringify(records.slice(0, MAX_LOCAL_RECORDS), null, 2),
    "utf-8",
  );
}

export async function recordVisit(visit: VisitRecord): Promise<void> {
  const sanity = getSanityWriteClient();
  if (sanity) {
    try {
      await sanity.create({
        _type: "visitorTelemetry",
        ...visit,
      });
      return;
    } catch (err) {
      console.error(
        "Sanity telemetry write failed, falling back to local:",
        err,
      );
    }
  }

  const existing = await readLocalRecords();
  existing.unshift(visit);
  await writeLocalRecords(existing);
}

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  let records: VisitRecord[] = [];
  let storageBackend: "sanity" | "local" = "local";

  const sanity = getSanityWriteClient();
  if (sanity) {
    try {
      const docs = await sanity.fetch<VisitRecord[]>(
        `*[_type == "visitorTelemetry"] | order(timestamp desc)[0...1000]{
          id,
          timestamp,
          path,
          countryCode,
          countryName,
          city,
          region,
          browser,
          os,
          device,
          referrer,
          visitorHash
        }`,
      );
      if (Array.isArray(docs)) {
        records = docs;
        storageBackend = "sanity";
      }
    } catch (err) {
      console.error(
        "Sanity telemetry read failed, falling back to local:",
        err,
      );
      records = await readLocalRecords();
    }
  } else {
    records = await readLocalRecords();
  }

  const totalVisits = records.length;
  const uniqueSet = new Set<string>();
  const countryMap = new Map<
    string,
    { countryCode: string; countryName: string; count: number }
  >();
  const pageMap = new Map<string, number>();

  for (const r of records) {
    if (r.visitorHash) uniqueSet.add(r.visitorHash);

    const code = (r.countryCode || "XX").toUpperCase();
    const name = r.countryName || getCountryName(code);
    const prevCountry = countryMap.get(code);
    if (prevCountry) {
      prevCountry.count += 1;
    } else {
      countryMap.set(code, { countryCode: code, countryName: name, count: 1 });
    }

    const pagePath = r.path || "/";
    pageMap.set(pagePath, (pageMap.get(pagePath) || 0) + 1);
  }

  const flagCounter: FlagCountItem[] = Array.from(countryMap.values())
    .sort((a, b) => b.count - a.count)
    .map((item) => ({
      ...item,
      flag: countryCodeToFlag(item.countryCode),
      percentage:
        totalVisits > 0 ? Math.round((item.count / totalVisits) * 100) : 0,
    }));

  const topPages = Array.from(pageMap.entries())
    .map(([p, count]) => ({ path: p, count }))
    .sort((a, b) => b.count - a.count);

  const recentVisitors = records.slice(0, 100).map((r) => ({
    ...r,
    flag: countryCodeToFlag(r.countryCode || "XX"),
  }));

  return {
    totalVisits,
    uniqueVisitors: uniqueSet.size,
    flagCounter,
    topPages,
    recentVisitors,
    storageBackend,
  };
}
