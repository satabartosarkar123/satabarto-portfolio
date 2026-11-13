import { timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const configuredSecret = process.env.ANALYTICS_SECRET?.trim();
  if (!configuredSecret) {
    return NextResponse.json(
      { error: "Secret key auth is not configured; sign in with Clerk." },
      { status: 400 },
    );
  }

  const body = await req.json().catch(() => ({}));
  const provided = typeof body?.key === "string" ? body.key.trim() : "";

  const bufA = Buffer.from(provided);
  const bufB = Buffer.from(configuredSecret);
  if (bufA.length !== bufB.length || !timingSafeEqual(bufA, bufB)) {
    return NextResponse.json({ error: "Invalid key" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("analytics_key", configuredSecret, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("analytics_key");
  return NextResponse.json({ ok: true });
}

