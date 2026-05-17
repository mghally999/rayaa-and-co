"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.set(".hero-line .word", { yPercent: 110, opacity: 0 });
      gsap.set(".hero-eyebrow", { opacity: 0, y: 14 });
      gsap.set(".hero-lede", { opacity: 0, y: 16 });
      gsap.set(".hero-cta", { opacity: 0, y: 16 });
      gsap.set(".hero-image-wrap", { opacity: 0, scale: 1.06, yPercent: 4 });
      gsap.set(".hero-meta-pill", { opacity: 0, x: -20 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.9 }, 0.1)
        .to(".hero-line .word", { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.08 }, 0.2)
        .to(".hero-lede", { opacity: 1, y: 0, duration: 1.0 }, 0.9)
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.9 }, 1.05)
        .to(".hero-image-wrap", { opacity: 1, scale: 1, yPercent: 0, duration: 1.6, ease: "expo.out" }, 0.25)
        .to(".hero-meta-pill", { opacity: 1, x: 0, duration: 0.9, stagger: 0.1 }, 1.0);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-20">
      <HeroCanvas />

      <div className="wrap relative z-10 grid grid-cols-12 gap-8 md:gap-6 items-center min-h-[62vh] md:min-h-[78vh]">
        {/* Copy column */}
        <div className="col-span-12 md:col-span-7 lg:col-span-6">
          <p className="hero-eyebrow eyebrow mb-8">A House of Embroidery · Dubai</p>

          <h1 className="display">
            <span className="hero-line overflow-hidden inline-block leading-[0.9] pb-[0.05em]">
              <span className="word inline-block">Quiet</span>
            </span>{" "}
            <span className="hero-line overflow-hidden inline-block leading-[0.9] pb-[0.05em]">
              <span className="word inline-block"><em>luxury,</em></span>
            </span>
            <br />
            <span className="hero-line overflow-hidden inline-block leading-[0.9] pb-[0.05em]">
              <span className="word inline-block">crafted</span>
            </span>{" "}
            <span className="hero-line overflow-hidden inline-block leading-[0.9] pb-[0.05em]">
              <span className="word inline-block">by</span>
            </span>{" "}
            <span className="hero-line overflow-hidden inline-block leading-[0.9] pb-[0.05em]">
              <span className="word inline-block">hand.</span>
            </span>
          </h1>

          <p className="hero-lede lede mt-8 max-w-[42ch]">
            Mirror-work, hand-beading, and silk-thread embroidery on heirloom silhouettes.
            Limited pieces, made slowly in our Dubai atelier.
          </p>

          <div className="hero-cta mt-12 flex flex-wrap gap-4 items-center">
            <a href="/collection" className="btn">
              Explore Collection
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="/atelier" className="btn btn-maroon">Our Atelier</a>
          </div>
        </div>

        {/* Image column — model breaks out of the frame */}
        <div className="col-span-12 md:col-span-5 lg:col-span-6 relative px-2 sm:px-0">
          <div
            className="hero-image-wrap relative mx-auto"
            style={{ aspectRatio: "3/4", maxWidth: "520px" }}
          >
            <div
              className="absolute inset-0 overflow-visible"
              style={{ background: "var(--paper)", borderRadius: 2 }}
            >
              <div className="absolute -inset-y-[14%] inset-x-0">
                <Image
                  src="/images/look-09.jpg"
                  alt="Rayaa & Co — hero look"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 520px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: "1px solid var(--rule-soft)", borderRadius: 2 }}
              />
            </div>

            {/* Floating editorial pills */}
            <div
              className="hero-meta-pill absolute left-1 sm:-left-4 top-4 sm:top-6 z-20 px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium"
              style={{ background: "var(--bg)", border: "1px solid var(--rule)", borderRadius: 999 }}
            >
              SS&apos;26 · Edition 01
            </div>
            <div
              className="hero-meta-pill absolute right-1 sm:-right-2 bottom-6 sm:bottom-10 z-20 px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium"
              style={{ background: "var(--maroon)", color: "var(--bg)", borderRadius: 999 }}
            >
              Made by hand
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="wrap relative z-10 mt-10 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase opacity-70">
        <span className="block w-10 h-px bg-current" />
        Scroll
      </div>
    </section>
  );
}
