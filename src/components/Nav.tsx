"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const sectionIds = ["sobre-mi", "trayectoria", "servicios", "metodo", "contacto"];

export function Nav() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sectionIds[0]);
  const whatsappHref = buildWhatsAppUrl(
    t.contact.phoneWhatsapp,
    t.contact.whatsappIntro,
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const refY = window.innerHeight * 0.4;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= refY) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex flex-col leading-none cursor-pointer">
          <span className="font-serif-display text-sm tracking-wide text-paper uppercase sm:text-base">
            Bedoya Castrillón
          </span>
          <span className="mt-1.5 h-px w-7 bg-gold" />
          <span className="mt-1.5 hidden text-[0.55rem] tracking-[0.2em] text-paper/50 uppercase sm:block">
            Asesoría Legal
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((link) => {
            const id = link.href.slice(1);
            const isActive = id === active;
            return (
              <li key={link.href} className="relative py-1">
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-gold-light"
                      : "text-paper/80 hover:text-gold-light"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 rounded-full border border-border-dark px-3 py-1.5 text-xs font-semibold tracking-wide text-paper/80 transition-colors duration-200 hover:border-gold-light hover:text-gold-light cursor-pointer"
          >
            <Languages size={14} aria-hidden="true" />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.04] hover:bg-gold-light cursor-pointer"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          className="text-paper md:hidden cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border-dark bg-ink md:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1 bg-ink px-5 py-4"
            >
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-base font-medium text-paper/90 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2">
                <button
                  onClick={toggle}
                  className="flex items-center gap-1.5 rounded-full border border-border-dark px-3 py-1.5 text-xs font-semibold tracking-wide text-paper/80 cursor-pointer"
                >
                  <Languages size={14} aria-hidden="true" />
                  {lang === "es" ? "EN" : "ES"}
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink cursor-pointer"
                >
                  {t.nav.cta}
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
