"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:items-start">
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.14em] text-gold-light uppercase">
                {t.about.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-4 font-serif-display text-3xl leading-tight font-medium whitespace-pre-line sm:text-4xl">
                {t.about.name}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-paper/75 sm:text-lg">
                {t.about.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-10 border-t border-border-dark pt-2">
                {t.about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="group flex items-center justify-between border-b border-border-dark py-4 transition-colors duration-200 hover:border-gold/40"
                  >
                    <dt className="text-sm font-medium text-paper/90 transition-colors duration-200 sm:text-base">
                      {fact.label}
                    </dt>
                    <dd className="text-sm text-paper/50 transition-colors duration-200 group-hover:text-gold-light sm:text-base">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl border border-gold/30 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] lg:mx-0">
              <Image
                src="/juan-sebastian-bedoya.jpg"
                alt="Juan Sebastián Bedoya Castrillón"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
