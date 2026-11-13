import { timingSafeEqual } from "node:crypto";
import { auth, currentUser } from "@clerk/nextjs/server";
import { cookies, headers } from "next/headers";

export interface OwnerAuthResult {
  authorized: boolean;
  reason?: "unauthorized" | "forbidden";
  method?: "clerk" | "secret";
  email?: string;
}

const DEFAULT_OWNER_EMAIL = "satabartosarkar005@gmail.com";

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function verifyOwnerAccess(): Promise<OwnerAuthResult> {
  // 1. Check optional secret key header/cookie (only when ANALYTICS_SECRET is configured)
  const configuredSecret = process.env.ANALYTICS_SECRET?.trim();
  if (configuredSecret) {
    const reqHeaders = await headers();
    const headerKey = reqHeaders.get("x-analytics-key")?.trim();
    const cookieStore = await cookies();
    const cookieKey = cookieStore.get("analytics_key")?.value?.trim();

    if (
      (headerKey && safeEqual(headerKey, configuredSecret)) ||
      (cookieKey && safeEqual(cookieKey, configuredSecret))
    ) {
      return { authorized: true, method: "secret" };
    }
  }

  // 2. Check Clerk authenticated user
  try {
    const { userId } = await auth();
    if (!userId) {
      return { authorized: false, reason: "unauthorized" };
    }

    const ownerClerkId = process.env.OWNER_CLERK_USER_ID?.trim();
    if (ownerClerkId) {
      if (userId === ownerClerkId) {
        return { authorized: true, method: "clerk" };
      }
      return { authorized: false, reason: "forbidden" };
    }

    const user = await currentUser();
    const allowedEmails = (process.env.OWNER_EMAIL || DEFAULT_OWNER_EMAIL)
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    const userEmails =
      user?.emailAddresses.map((e) => e.emailAddress.toLowerCase()) ?? [];

    const matchedEmail = userEmails.find((e) => allowedEmails.includes(e));
    if (matchedEmail) {
      return { authorized: true, method: "clerk", email: matchedEmail };
    }

    return { authorized: false, reason: "forbidden" };
  } catch {
    return { authorized: false, reason: "unauthorized" };
  }
}

