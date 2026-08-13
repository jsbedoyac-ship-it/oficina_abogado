"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function Timeline() {
  const { t } = useLanguage();

  return (
    <section id="trayectoria" className="bg-paper-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl border border-gold/30 shadow-[0_20px_50px_-20px_rgba(11,18,32,0.3)] lg:mx-0">
              <Image
                src="/juan-sebastian-bedoya.jpg"
                alt="Juan Sebastián Bedoya Castrillón"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                {t.timeline.eyebrow}
              </span>
              <h2 className="mt-4 font-serif-display text-3xl leading-tight font-medium text-ink sm:text-4xl">
                {t.timeline.title}
              </h2>
            </Reveal>

            <div className="mt-16">
              <ol className="relative border-l border-border pl-8 sm:pl-10">
                {t.timeline.items.map((entry, i) => (
                  <Reveal
                    as="li"
                    key={entry.title + entry.org}
                    delay={Math.min(i * 0.08, 0.4)}
                    className="relative mb-12 last:mb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-gold sm:-left-[calc(2.5rem+5px)]"
                    />
                    <span className="text-xs font-semibold tracking-wide text-gold uppercase">
                      {entry.year}
                    </span>
                    <h3 className="mt-1 font-serif-display text-xl text-ink">
                      {entry.title}
                    </h3>
                    <p className="text-sm font-medium text-navy">{entry.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {entry.description}
                    </p>
                  </Reveal>
                ))}
              </ol>

              <Reveal
                delay={0.1}
                className="mt-4 rounded-2xl border border-border bg-paper p-8"
              >
                <h3 className="font-serif-display text-lg text-ink">
                  {t.timeline.courses.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {t.timeline.courses.items.map((course) => (
                    <li
                      key={course}
                      className="flex items-start gap-2 text-sm text-muted sm:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                      />
                      {course}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
