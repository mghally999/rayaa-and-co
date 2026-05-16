"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <Link href="/" aria-label="Rayaa & Co — home" className="inline-flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Rayaa & Co"
        width={size}
        height={size}
        priority
        className="rounded-full"
        style={{ width: size, height: size }}
      />
      <span className="hidden sm:inline font-display text-xl tracking-[-0.01em]">
        Rayaa <em className="text-maroon italic">&amp; Co</em>
      </span>
    </Link>
  );
}
