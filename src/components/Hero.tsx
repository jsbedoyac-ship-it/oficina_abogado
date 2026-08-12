"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Scale } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden bg-ink text-paper"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 15%, rgba(179,137,47,0.16) 0%, rgba(11,18,32,0) 60%), radial-gradient(50% 45% at 10% 90%, rgba(30,64,175,0.18) 0%, rgba(11,18,32,0) 60%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-gold/20"
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-gold-light uppercase"
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-serif-display text-[2.6rem] leading-[1.08] font-medium tracking-tight whitespace-pre-line sm:text-6xl lg:text-[4rem]"
          >
            {t.hero.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-lg font-medium text-gold-light sm:text-xl"
          >
            {t.hero.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform duration-200 hover:scale-[1.03] hover:bg-gold-light cursor-pointer"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#trayectoria"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors duration-200 hover:border-gold-light hover:text-gold-light cursor-pointer"
            >
              {t.hero.ctaSecondary}
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 text-xs tracking-wide text-paper/50"
          >
            {t.hero.badge}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center lg:max-w-[380px]"
        >
          <div className="relative flex h-full w-full items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-navy-soft to-ink">
            <div className="absolute inset-4 rounded-full border border-gold/20" />
            <div className="flex flex-col items-center gap-3 text-center">
              <Scale size={32} className="text-gold-light" aria-hidden="true" />
              <span className="font-serif-display text-4xl tracking-widest text-gold-light">
                JSBC
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-paper/50 uppercase">
                Universidad EAFIT
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
