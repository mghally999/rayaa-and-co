import ProductGrid from "@/components/ProductGrid";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/lib/products";

export const metadata = {
  title: "Collection",
  description: "Edition 01 — hand-embroidered pieces from the Rayaa & Co atelier.",
};

export default function CollectionPage() {
  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="wrap">
          <ScrollReveal>
            <p className="eyebrow mb-6 md:mb-8">Edition 01 · Spring/Summer 2026</p>
            <h1 className="display max-w-[14ch]">
              The <em className="italic" style={{ color: "var(--maroon)" }}>Collection.</em>
            </h1>
            <p className="lede mt-8 md:mt-10 max-w-[48ch]">
              {products.length} pieces, hand-finished in our Dubai atelier. Each piece is numbered
              and made in limited quantities — when an edition is gone, it is gone.
            </p>
          </ScrollReveal>

          {/* simple filter chips */}
          <ScrollReveal delay={120} className="mt-12 md:mt-16">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["All", "Jalabiyas", "Abayas", "Accessories", "Bridal"].map((cat, i) => (
                <button
                  key={cat}
                  className="px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase rounded-full transition-colors"
                  style={{
                    border: "1px solid var(--rule)",
                    background: i === 0 ? "var(--ink)" : "transparent",
                    color: i === 0 ? "var(--bg)" : "var(--ink)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pt-12">
        <div className="wrap">
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
