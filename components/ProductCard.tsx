"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/lib/products";

interface Props {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority }: Props) {
  const [activeColor, setActiveColor] = useState<string | null>(null);

  return (
    <article className="product-card group">
      {product.tag && <span className="badge">{product.tag}</span>}

      <div className="frame">
        <div className="figure">
          <Image
            src={product.image}
            alt={`${product.name} — ${product.category}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            priority={priority}
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {activeColor && (
            <>
              <span
                className="tint tint-color"
                style={{ background: activeColor }}
                aria-hidden
              />
              <span className="tint tint-shade" aria-hidden />
            </>
          )}
        </div>
      </div>

      <div className="meta">
        <div>
          <h3 className="name">{product.name}</h3>
          <p className="text-[12px] mt-1 uppercase tracking-[0.18em] text-ink-soft opacity-70">
            {product.category}
          </p>
          <div className="swatch-row" role="radiogroup" aria-label={`${product.name} colour options`}>
            {product.swatches.map((c) => {
              const isActive = activeColor === c;
              return (
                <button
                  key={c}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  aria-label={`Show in ${c}`}
                  className={`swatch${isActive ? " is-active" : ""}`}
                  style={{ background: c }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveColor((prev) => (prev === c ? null : c));
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="text-right">
          {product.compareAt && (
            <span className="block text-[11px] line-through opacity-50">
              AED {product.compareAt.toLocaleString()}
            </span>
          )}
          <span className="price font-medium" style={{ color: "var(--ink)" }}>
            AED {product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </article>
  );
}
