"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/collection", label: "Collection" },
  { href: "/atelier",    label: "Atelier"    },
  { href: "/journal",    label: "Journal"    },
  { href: "/contact",    label: "Contact"    },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        background: scrolled ? "color-mix(in srgb, var(--bg) 78%, transparent)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--rule-soft)" : "1px solid transparent",
      }}
    >
      <div className="wrap flex items-center justify-between h-[72px]">
        <Logo size={36} />

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => {
            const active = pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-[12px] tracking-[0.22em] uppercase font-medium"
                style={{ color: active ? "var(--maroon)" : "var(--ink)" }}
              >
                {l.label}
                <span
                  className="absolute left-0 -bottom-1.5 h-px transition-all duration-500"
                  style={{
                    width: active ? "100%" : "0%",
                    background: "var(--maroon)",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Cart"
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-rule hover:bg-ink/5 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7h12l-1.5 11.2A2 2 0 0 1 14.5 20h-5A2 2 0 0 1 7.5 18.2L6 7Z" />
              <path d="M9 7V5a3 3 0 0 1 6 0v2" />
            </svg>
            <span
              className="absolute -top-1 -right-1 w-4 h-4 text-[9px] flex items-center justify-center rounded-full"
              style={{ background: "var(--maroon)", color: "var(--bg)" }}
            >0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
