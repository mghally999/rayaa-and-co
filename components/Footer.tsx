"use client";

import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule-soft)",
        background: "var(--bg-warm)",
        paddingTop: "clamp(72px, 9vw, 140px)",
        paddingBottom: "48px",
      }}
    >
      <div className="wrap">
        {/* Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-end pb-16 md:pb-20" style={{ borderBottom: "1px solid var(--rule-soft)" }}>
          <div>
            <p className="eyebrow mb-6">The Letter</p>
            <h3 className="h-lg">
              Quiet notes from <br/>
              <em className="italic" style={{ color: "var(--maroon)" }}>the atelier.</em>
            </h3>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 items-stretch" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Your email"
              className="flex-1 px-5 py-4 text-sm w-full"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--rule)",
                borderRadius: 999,
                color: "var(--ink)",
              }}
            />
            <button type="submit" className="btn btn-maroon justify-center" style={{ borderRadius: 999 }}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12 pt-12 md:pt-16">
          <div className="col-span-2">
            <Logo size={48} />
            <p className="text-sm opacity-80 mt-6 max-w-[36ch]">
              A house of embroidery and atelier-made wear. Based in Dubai.
              Pieces are made slowly, in small numbers.
            </p>
          </div>

          <FooterCol title="Shop" links={[
            { href: "/collection", label: "Collection" },
            { href: "/collection?cat=jalabiyas", label: "Jalabiyas" },
            { href: "/collection?cat=abayas", label: "Abayas" },
            { href: "/collection?cat=accessories", label: "Accessories" },
          ]} />

          <FooterCol title="House" links={[
            { href: "/atelier", label: "Atelier" },
            { href: "/journal", label: "Journal" },
            { href: "/contact", label: "Contact" },
          ]} />

          <FooterCol title="Connect" links={[
            { href: "https://instagram.com/rayaa_and_co", label: "Instagram" },
            { href: "mailto:hello@rayaaandco.com", label: "Email" },
            { href: "https://wa.me/971000000000", label: "WhatsApp" },
          ]} />
        </div>

        <div className="mt-20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs opacity-70" style={{ borderTop: "1px solid var(--rule-soft)" }}>
          <p>© {new Date().getFullYear()} Rayaa &amp; Co. All looks, all hands.</p>
          <p className="font-display italic" style={{ color: "var(--maroon)" }}>
            Made by hand in Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-[10px] tracking-[0.3em] uppercase mb-5 opacity-80">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm hover:text-maroon transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
