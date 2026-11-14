"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [openedOnPath, setOpenedOnPath] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const mobileMenuOpen = openedOnPath === pathname;

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenedOnPath(null);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenedOnPath(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const currentRegion =
    routes.find((r) => r.href === pathname)?.region || "Portfolio";

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3.5 bg-[#080B12]/85 backdrop-blur-md border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpenedOnPath(null)}
          className="group flex items-center gap-2.5"
        >
          <span className="w-2 h-2 rounded-sm bg-[#60A5FA] group-hover:bg-[#93C5FD] transition-colors" />
          <span className="text-sm font-mono font-semibold text-[#F1F5F9] tracking-wider group-hover:text-[#60A5FA] transition-colors">
            SATABARTO SARKAR
          </span>
        </Link>

        {/* Desktop Nav — unchanged */}
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

        {/* Mobile / Tablet Top-Right Hamburger Trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <span className="text-[10px] sm:text-[11px] font-mono text-[#60A5FA] tracking-widest uppercase">
            {currentRegion}
          </span>
          <button
            type="button"
            onClick={() =>
              setOpenedOnPath((prev) => (prev === pathname ? null : pathname))
            }
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-[#101624]/90 text-[#F1F5F9] hover:border-[#60A5FA]/40 hover:text-[#60A5FA] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#60A5FA]" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#080B12]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_24px_48px_rgba(0,0,0,0.75)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 grid grid-cols-1 gap-1">
            {routes.map((route) => {
              const isActive = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpenedOnPath(null)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono tracking-wide transition-colors ${
                    isActive
                      ? "text-[#F8FAFC] bg-[#60A5FA]/15 border border-[#60A5FA]/30"
                      : "text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <span>{route.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
