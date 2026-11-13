import { NextResponse } from "next/server";

const OWNER_EMAIL = process.env.OWNER_EMAIL || "satabartosarkar005@gmail.com";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      organization?: string;
      subject?: string;
      message?: string;
    };

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const organization = body.organization?.trim() || "";
    const subject = body.subject?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const formattedBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      organization ? `Organization: ${organization}` : null,
      `Subject: ${subject}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    // 1. Prefer Resend if RESEND_API_KEY is configured in Vercel
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [OWNER_EMAIL],
          reply_to: email,
          subject: `[Portfolio] ${subject}`,
          text: formattedBody,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ ok: true, provider: "resend" });
      }
    }

    // 2. Zero-config email relay via FormSubmit
    const relayRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(OWNER_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          organization: organization || "N/A",
          _subject: `[Portfolio] ${subject}`,
          message,
        }),
      },
    );

    if (relayRes.ok) {
      return NextResponse.json({ ok: true, provider: "formsubmit" });
    }

    return NextResponse.json(
      {
        ok: false,
        mailtoFallback: true,
        error: "Email relay unavailable; opening email client fallback.",
      },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process contact request." },
      { status: 500 },
    );
  }
}

