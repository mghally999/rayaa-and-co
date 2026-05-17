import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div
      className="grid gap-x-5 sm:gap-x-8 gap-y-16 sm:gap-y-24"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))" }}
    >
      {products.map((p, i) => (
        <ScrollReveal key={p.id} delay={i * 60}>
          <ProductCard product={p} priority={i < 2} />
        </ScrollReveal>
      ))}
    </div>
  );
}
