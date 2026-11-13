"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/analytics")) return;

    const storageKey = `visited:${pathname}`;
    try {
      if (sessionStorage.getItem(storageKey)) return;
      sessionStorage.setItem(storageKey, "1");
    } catch {
      // sessionStorage may be blocked in strict privacy modes
    }

    fetch("/api/analytics/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        referrer: typeof document !== "undefined" ? document.referrer : "",
      }),
      keepalive: true,
    }).catch(() => {
      // Fail silently so portfolio UX is never affected
    });
  }, [pathname]);

  return null;
}

