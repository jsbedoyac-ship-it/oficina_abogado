"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

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
  const whatsappHref = buildWhatsAppUrl(
    t.contact.phoneWhatsapp,
    t.contact.whatsappIntro,
  );

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
        animate={{
          opacity: [0, 1, 1],
          scale: [0.9, 1, 1.015, 1],
          rotate: 0,
        }}
        transition={{
          opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
          scale: {
            duration: 9,
            times: [0, 0.16, 0.58, 1],
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-gold/10"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: [0, 0.5, 0.2, 0.5], scale: [1.08, 1.12, 1.08] }}
        transition={{
          opacity: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          scale: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8 lg:pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-gold-light uppercase"
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.div variants={item}>
            <h1 className="font-serif-display text-[2.4rem] leading-[1.15] font-medium tracking-wide uppercase sm:text-5xl lg:text-[3.4rem]">
              Bedoya Castrillón
            </h1>
            <div className="mt-4 h-px w-16 bg-gold" />
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-paper/50 uppercase">
              {t.hero.brandTagline}
            </p>
          </motion.div>

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
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform duration-200 hover:scale-[1.03] hover:bg-gold-light cursor-pointer"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#trayectoria"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-all duration-200 hover:scale-[1.03] hover:border-gold-light hover:text-gold-light cursor-pointer"
            >
              {t.hero.ctaSecondary}
              <ArrowDown
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
