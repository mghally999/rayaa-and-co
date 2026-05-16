import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { journalEntries } from "@/lib/products";

export const metadata = {
  title: "Journal",
  description: "Letters, lookbooks, and quiet notes from the Rayaa & Co atelier.",
};

const extras = [
  { date: "Feb 2026", title: "A Glossary of Embroidery", excerpt: "Karchobi, zardozi, mirror, dabka — what each technique brings to a piece.", image: "/images/look-16.jpg" },
  { date: "Jan 2026", title: "Why We Number Every Piece", excerpt: "On editions, scarcity, and what it means to make slowly.", image: "/images/look-19.jpg" },
];

export default function JournalPage() {
  const all = [...journalEntries, ...extras];

  return (
    <section className="pt-40">
      <div className="wrap">
        <ScrollReveal>
          <p className="eyebrow mb-8">The Journal</p>
          <h1 className="display max-w-[14ch]">
            Letters from <em className="italic" style={{ color: "var(--maroon)" }}>the house.</em>
          </h1>
        </ScrollReveal>

        <div className="mt-20 grid gap-y-24">
          {all.map((entry, i) => (
            <ScrollReveal key={entry.title} delay={i * 80}>
              <article className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 relative" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="md:col-span-5">
                  <p className="text-[11px] tracking-[0.3em] uppercase opacity-70">{entry.date}</p>
                  <h2 className="h-lg mt-4">{entry.title}</h2>
                  <p className="lede mt-6">{entry.excerpt}</p>
                  <a className="btn btn-maroon mt-8">Read</a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
