"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-light uppercase">
            {t.about.eyebrow}
          </span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-serif-display text-3xl leading-tight font-medium whitespace-pre-line sm:text-4xl">
              {t.about.name}
            </h2>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-paper/75 sm:text-lg">
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
                    className="flex items-center justify-between border-b border-border-dark py-4"
                  >
                    <dt className="text-sm font-medium text-paper/90 sm:text-base">
                      {fact.label}
                    </dt>
                    <dd className="text-sm text-paper/50 sm:text-base">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
