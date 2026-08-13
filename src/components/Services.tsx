"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[0.3fr_1fr] lg:gap-12">
          <span className="text-xs font-semibold tracking-[0.14em] text-paper/50 uppercase">
            {t.services.eyebrow}
          </span>
          <div>
            <h2 className="font-serif-display text-3xl leading-tight font-medium sm:text-4xl lg:text-5xl">
              {t.services.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
              {t.services.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-border-dark">
          {t.services.groups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={Math.min(i * 0.08, 0.3)}
              className="group grid grid-cols-1 gap-4 border-b border-border-dark py-10 lg:grid-cols-[0.3fr_1fr] lg:gap-12"
            >
              <div>
                <span className="font-serif-display text-lg text-gold">
                  {group.number}
                </span>
                <h3 className="mt-2 font-serif-display text-2xl text-paper">
                  {group.title}
                </h3>
                <p className="mt-2 text-xs tracking-wide text-paper/40 uppercase">
                  {group.tags}
                </p>
              </div>
              <div className="flex items-start justify-between gap-6">
                <p className="max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base">
                  {group.description}
                </p>
                <ArrowRight
                  size={18}
                  className="mt-1 shrink-0 text-paper/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gold-light"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
