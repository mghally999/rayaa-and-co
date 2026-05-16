"use client";

import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

export default function ScrollReveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(() => el.classList.add("is-in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}
