import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Lookbook() {
  return (
    <section style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <ScrollReveal>
          <p className="eyebrow mb-10">Lookbook · Edition 01</p>
        </ScrollReveal>

        <div className="split">
          <ScrollReveal>
            <div className="relative" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/look-04.jpg"
                alt="Editorial Look 01"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <span
                className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5"
                style={{ background: "var(--bg)", color: "var(--maroon)", borderRadius: 999 }}
              >
                Look 01 · Noor
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-[42ch]">
              <h2 className="h-lg">
                A piece is not finished <br/>
                <em className="italic" style={{ color: "var(--maroon)" }}>until the hand says so.</em>
              </h2>
              <p className="lede mt-8">
                Every Rayaa &amp; Co garment passes through six pairs of hands before
                it leaves the atelier. Pattern, cut, embroidery, mirror-setting, finish, and
                final inspection &mdash; nothing is rushed.
              </p>
              <p className="mt-6 opacity-80">
                Our embroiderers train for years before they touch a finished bodice.
                The work shows in the smallest places: the way a mirror catches the
                light, the weight of a hem, the silence of a perfectly hidden seam.
              </p>
              <a href="/atelier" className="btn btn-maroon mt-10">Read more</a>
            </div>
          </ScrollReveal>
        </div>

        {/* Second editorial split — reversed */}
        <div className="split mt-24" style={{ direction: "rtl" }}>
          <ScrollReveal>
            <div className="relative" style={{ aspectRatio: "4/5", direction: "ltr" }}>
              <Image
                src="/images/look-13.jpg"
                alt="Editorial Look 02"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <span
                className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5"
                style={{ background: "var(--bg)", color: "var(--maroon)", borderRadius: 999 }}
              >
                Look 02 · Dana
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-[42ch]" style={{ direction: "ltr" }}>
              <h2 className="h-lg">
                Heirloom pieces, <br/>
                <em className="italic" style={{ color: "var(--maroon)" }}>made for daughters.</em>
              </h2>
              <p className="lede mt-8">
                We don&apos;t chase trends. Edition 01 is built around five silhouettes that
                will be loved long after the season ends &mdash; the kind of pieces that
                live in a closet for a generation.
              </p>
              <a href="/collection" className="btn mt-10">Shop the Edition</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
