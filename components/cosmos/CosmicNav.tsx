"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "Home", region: "Awakening" },
  { href: "/about", label: "About", region: "Mind" },
  { href: "/projects", label: "Projects", region: "Constructs" },
  { href: "/experience", label: "Experience", region: "Timeline" },
  { href: "/skills", label: "Skills", region: "Ecosystem" },
  { href: "/contact", label: "Contact", region: "Signal" },
];

export function CosmicNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#64FFDA] group-hover:shadow-[0_0_12px_rgba(100,255,218,0.6)] transition-all duration-500" />
          <span className="text-sm font-mono text-[#E8F5E9]/80 tracking-wider group-hover:text-[#64FFDA] transition-colors duration-300">
            SS
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`relative px-4 py-2 text-xs font-mono tracking-wider transition-all duration-500 rounded-full
                  ${
                    isActive
                      ? "text-[#64FFDA] bg-[#64FFDA]/8"
                      : "text-[#81C784]/60 hover:text-[#E8F5E9] hover:bg-[#E8F5E9]/5"
                  }
                `}
              >
                {isActive && (
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#64FFDA] shadow-[0_0_6px_rgba(100,255,218,0.8)]" />
                )}
                <span className={isActive ? "ml-2" : ""}>{route.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile: current region indicator */}
        <div className="md:hidden">
          <span className="text-[10px] font-mono text-[#64FFDA]/60 tracking-widest uppercase">
            {routes.find((r) => r.href === pathname)?.region || "Exploring"}
          </span>
        </div>
      </div>
    </nav>
  );
}
