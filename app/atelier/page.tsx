import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Atelier",
  description: "Inside the Rayaa & Co atelier — embroiderers, pattern-cutters, finishers.",
};

const numbers = [
  { v: "6", l: "pairs of hands per piece" },
  { v: "12+", l: "years training in mirror work" },
  { v: "01", l: "edition at a time" },
  { v: "100%", l: "hand-finished in Dubai" },
];

export default function AtelierPage() {
  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="wrap">
          <ScrollReveal>
            <p className="eyebrow mb-6 md:mb-8">The Atelier</p>
            <h1 className="display max-w-[16ch]">
              A house built on <em className="italic" style={{ color: "var(--maroon)" }}>quiet hands.</em>
            </h1>
          </ScrollReveal>

          <div className="split mt-14 md:mt-20">
            <ScrollReveal>
              <div className="relative" style={{ aspectRatio: "3/4" }}>
                <Image src="/images/look-06.jpg" alt="Atelier work" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="max-w-[44ch]">
                <p className="lede">
                  Rayaa &amp; Co was founded in 2024 around a single belief:
                  that the most beautiful things in fashion are still made by hand.
                </p>
                <p className="mt-6 opacity-85">
                  Our atelier sits in a quiet street in Dubai. There is no
                  machinery on the floor &mdash; only embroiderers, a master cutter, two
                  finishers, and the constant soft sound of a needle pulling thread
                  through silk. Each piece passes through six pairs of hands before
                  it leaves us. Nothing is rushed.
                </p>
                <p className="mt-6 opacity-85">
                  We work in small editions because what we make is not built for
                  one season. A Rayaa piece is meant to be passed on &mdash; from a
                  mother to a daughter, from one occasion to a lifetime of them.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {numbers.map((n, i) => (
              <ScrollReveal key={n.l} delay={i * 80}>
                <div>
                  <div className="font-display text-6xl sm:text-7xl md:text-8xl leading-none" style={{ color: "var(--maroon)" }}>{n.v}</div>
                  <p className="mt-3 text-[12px] tracking-[0.22em] uppercase opacity-80 max-w-[18ch]">{n.l}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="wrap">
          <ScrollReveal>
            <p className="eyebrow mb-6">The process</p>
            <h2 className="h-xl max-w-[22ch]">From thread to finished piece, every step is hand-held.</h2>
          </ScrollReveal>

          <ol className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              { n: "01", t: "Pattern & Cut", b: "Each silhouette is drafted by our master cutter from raw rolls of silk and crepe." },
              { n: "02", t: "Embroidery & Mirror", b: "Hand-set mirrors, bugle beads, and silk-thread embroidery worked across days." },
              { n: "03", t: "Finish & Inspection", b: "Linings, hand-rolled hems, hidden seams. Final inspection before the piece is numbered." },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 100}>
                <li>
                  <span className="font-display italic text-3xl" style={{ color: "var(--maroon)" }}>{s.n}</span>
                  <h3 className="h-md mt-4">{s.t}</h3>
                  <p className="opacity-80 mt-3">{s.b}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
