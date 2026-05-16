import Image from "next/image";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductGrid from "@/components/ProductGrid";
import Lookbook from "@/components/Lookbook";
import ScrollReveal from "@/components/ScrollReveal";
import { products, journalEntries } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee items={[
        "Hand-embroidered",
        "Made in Dubai",
        "Edition 01",
        "Mirror Work",
        "Limited Numbers",
        "Atelier Made",
        "Heirloom Pieces",
      ]} />

      {/* Featured product grid */}
      <section>
        <div className="wrap">
          <div className="flex items-end justify-between gap-6 mb-20">
            <ScrollReveal>
              <p className="eyebrow mb-6">Featured · Edition 01</p>
              <h2 className="h-xl max-w-[18ch]">
                Pieces from <em className="italic" style={{ color: "var(--maroon)" }}>the house.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150} className="hidden md:block">
              <a href="/collection" className="btn">View All ({products.length})</a>
            </ScrollReveal>
          </div>

          <ProductGrid products={products.slice(0, 8)} />
        </div>
      </section>

      <Lookbook />

      {/* Journal teaser */}
      <section style={{ background: "var(--bg)" }}>
        <div className="wrap">
          <div className="flex items-end justify-between mb-16">
            <ScrollReveal>
              <p className="eyebrow mb-6">Journal</p>
              <h2 className="h-xl">Quiet readings.</h2>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <a href="/journal" className="btn">All entries</a>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {journalEntries.map((j, i) => (
              <ScrollReveal key={j.title} delay={i * 100}>
                <article className="group cursor-pointer">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    <Image
                      src={j.image}
                      alt={j.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="transition-transform duration-[1200ms]"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="eyebrow mt-6 no-rule" style={{ color: "var(--ink-soft)" }}>
                    {j.date}
                  </p>
                  <h3 className="h-md mt-3">{j.title}</h3>
                  <p className="opacity-80 text-sm mt-3">{j.excerpt}</p>
                  <span className="inline-flex items-center gap-2 mt-5 text-[11px] tracking-[0.22em] uppercase" style={{ color: "var(--maroon)" }}>
                    Read entry
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
