"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function Method() {
  const { t } = useLanguage();

  return (
    <section id="metodo" className="bg-paper-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
            {t.method.eyebrow}
          </span>
          <h2 className="mt-4 font-serif-display text-3xl leading-tight font-medium text-ink sm:text-4xl">
            {t.method.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t.method.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {t.method.steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={Math.min(i * 0.08, 0.3)}
              className="border-l border-border pl-6 sm:border-l-0 sm:border-t sm:pt-6 sm:pl-0"
            >
              <span className="text-xs font-semibold tracking-wide text-gold uppercase">
                {t.method.stepLabel} {step.number}
              </span>
              <h3 className="mt-2 font-serif-display text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              <p className="mt-6 border-t border-border pt-3 text-xs font-semibold tracking-wide text-muted uppercase">
                {step.deliverable}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
