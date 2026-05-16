"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="pt-40">
      <div className="wrap">
        <ScrollReveal>
          <p className="eyebrow mb-8">Contact</p>
          <h1 className="display max-w-[14ch]">
            Write to <em className="italic" style={{ color: "var(--maroon)" }}>the atelier.</em>
          </h1>
        </ScrollReveal>

        <div className="split mt-16 items-start">
          <ScrollReveal>
            <div className="relative" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/look-02.jpg"
                alt="Visit the atelier"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="max-w-[44ch]">
              <p className="lede">
                For appointments, custom commissions, and press inquiries.
                We reply to every note ourselves &mdash; typically within two days.
              </p>

              <form
                className="mt-12 space-y-6"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <Field label="Your name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Subject" name="subject" />
                <FieldArea label="Message" name="message" />

                <button type="submit" className="btn btn-maroon">
                  {sent ? "Sent — thank you" : "Send"}
                </button>
              </form>

              <div className="mt-16 pt-10 grid grid-cols-2 gap-8" style={{ borderTop: "1px solid var(--rule-soft)" }}>
                <div>
                  <p className="eyebrow no-rule mb-3">Visit</p>
                  <p className="text-sm">Atelier by appointment only.<br/>Jumeirah, Dubai · UAE</p>
                </div>
                <div>
                  <p className="eyebrow no-rule mb-3">Connect</p>
                  <p className="text-sm">
                    <a href="mailto:hello@rayaaandco.com">hello@rayaaandco.com</a><br/>
                    <a href="https://instagram.com/rayaa_and_co">@rayaa_and_co</a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase opacity-70 mb-2">{label}</span>
      <input
        name={name}
        type={type}
        className="w-full px-0 py-3 bg-transparent text-base outline-none"
        style={{ borderBottom: "1px solid var(--rule)", color: "var(--ink)" }}
      />
    </label>
  );
}

function FieldArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase opacity-70 mb-2">{label}</span>
      <textarea
        name={name}
        rows={5}
        className="w-full px-0 py-3 bg-transparent text-base outline-none resize-none"
        style={{ borderBottom: "1px solid var(--rule)", color: "var(--ink)" }}
      />
    </label>
  );
}
