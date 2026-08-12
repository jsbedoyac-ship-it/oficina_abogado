"use client";

import { Building2, Users, Scale3d, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

const icons = [Building2, Users, Scale3d];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-4 font-serif-display text-3xl leading-tight font-medium text-ink sm:text-4xl">
            {t.services.title}
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-8 max-w-2xl rounded-xl border border-gold/30 bg-paper-alt px-6 py-4 text-center text-sm leading-relaxed text-muted"
        >
          {t.services.note}
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.services.groups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-paper p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-25px_rgba(11,18,32,0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5">
                    <Icon size={22} className="text-navy" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-serif-display text-xl text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {group.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-border pt-6">
                    {group.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2.5 text-sm text-ink/85"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
