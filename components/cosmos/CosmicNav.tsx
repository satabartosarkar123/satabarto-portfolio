"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "Overview", region: "Overview" },
  { href: "/publications", label: "Publications", region: "Research" },
  { href: "/projects", label: "Research & Projects", region: "Projects" },
  { href: "/experience", label: "Experience", region: "Experience" },
  { href: "/about", label: "Education & CV", region: "Education" },
  { href: "/skills", label: "Skills", region: "Skills" },
  { href: "/personal", label: "Personal", region: "Personal Corner" },
  { href: "/contact", label: "Contact", region: "Contact" },
];

export function CosmicNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3.5 bg-[#080B12]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-sm bg-[#60A5FA] group-hover:bg-[#93C5FD] transition-colors" />
          <span className="text-sm font-mono font-semibold text-[#F1F5F9] tracking-wider group-hover:text-[#60A5FA] transition-colors">
            SATABARTO SARKAR
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`px-3 py-1.5 text-xs font-mono tracking-wide transition-colors rounded-md ${
                  isActive
                    ? "text-[#F8FAFC] bg-[#60A5FA]/15 border border-[#60A5FA]/30"
                    : "text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/[0.04]"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </div>

        <div className="lg:hidden">
          <span className="text-[11px] font-mono text-[#60A5FA] tracking-widest uppercase">
            {routes.find((r) => r.href === pathname)?.region || "Portfolio"}
          </span>
        </div>
      </div>
    </nav>
  );
}
