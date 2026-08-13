"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-dark bg-ink py-10 text-paper/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="max-w-3xl text-xs leading-relaxed">
          {t.footer.disclaimer}
        </p>

        <div id="tratamiento-datos" className="mt-8 max-w-3xl scroll-mt-24">
          <h3 className="text-xs font-semibold tracking-wide text-paper/80 uppercase">
            {t.footer.dataPolicyTitle}
          </h3>
          <p className="mt-2 text-xs leading-relaxed">
            {t.footer.dataPolicyBody}
          </p>
        </div>

        <p className="mt-6 text-xs">
          © {year} Juan Sebastián Bedoya Castrillón. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
