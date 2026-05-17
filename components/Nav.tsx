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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => { document.body.style.overflow = original; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const headerSolid = scrolled || open;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backdropFilter: headerSolid ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: headerSolid ? "blur(14px) saturate(140%)" : "none",
          background: headerSolid ? "color-mix(in srgb, var(--bg) 88%, transparent)" : "transparent",
          borderBottom: headerSolid ? "1px solid var(--rule-soft)" : "1px solid transparent",
        }}
      >
        <div className="wrap flex items-center justify-between h-[64px] md:h-[72px]">
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

          <div className="flex items-center gap-2 md:gap-3">
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

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-rule hover:bg-ink/5 transition-colors"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span
                aria-hidden
                className="block w-4 h-px bg-current transition-transform duration-300"
                style={{
                  transform: open ? "translateY(0) rotate(45deg)" : "translateY(-4px)",
                }}
              />
              <span
                aria-hidden
                className="block w-4 h-px bg-current absolute transition-transform duration-300"
                style={{
                  transform: open ? "translateY(0) rotate(-45deg)" : "translateY(4px)",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        className="md:hidden fixed inset-0 z-40 transition-opacity duration-500"
        style={{
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
        }}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className="absolute inset-0 w-full h-full"
          style={{
            background: "color-mix(in srgb, var(--ink) 32%, transparent)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        />

        {/* Panel */}
        <nav
          className="absolute top-0 right-0 h-full w-[86%] max-w-[420px] flex flex-col"
          style={{
            background: "var(--bg)",
            borderLeft: "1px solid var(--rule-soft)",
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="flex items-center justify-between px-6 pt-5 pb-6" style={{ borderBottom: "1px solid var(--rule-soft)" }}>
            <span className="eyebrow no-rule" style={{ color: "var(--maroon)" }}>Menu</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">SS&apos;26 · Edition 01</span>
          </div>

          <ul className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
            {LINKS.map((l, i) => {
              const active = pathname?.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between gap-6 py-5"
                    style={{
                      borderBottom: "1px solid var(--rule-soft)",
                      color: active ? "var(--maroon)" : "var(--ink)",
                    }}
                  >
                    <span className="font-display text-[34px] leading-none">
                      {l.label}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.3em] uppercase opacity-60"
                      style={{ color: active ? "var(--maroon)" : "var(--ink-soft)" }}
                    >
                      0{i + 1}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="px-6 pb-10 pt-6 space-y-4" style={{ borderTop: "1px solid var(--rule-soft)" }}>
            <a
              href="mailto:hello@rayaaandco.com"
              className="block text-sm"
              style={{ color: "var(--ink)" }}
            >
              hello@rayaaandco.com
            </a>
            <a
              href="https://instagram.com/rayaa_and_co"
              target="_blank"
              rel="noreferrer"
              className="block text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--maroon)" }}
            >
              @rayaa_and_co
            </a>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">
              Made by hand in Dubai
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
