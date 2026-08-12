"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-4 font-serif-display text-3xl leading-tight font-medium text-ink sm:text-4xl">
            {t.about.title}
          </h2>
        </Reveal>

        <div>
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {t.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {t.about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif-display text-3xl text-navy sm:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs tracking-wide text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
