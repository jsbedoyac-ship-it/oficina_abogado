"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t, lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [matter, setMatter] = useState<string>(t.contact.materias[0]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMatter(t.contact.materias[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      t.contact.whatsappIntro,
      "",
      `${t.contact.formLabels.name}: ${name}`,
      `${t.contact.formLabels.phone}: ${phone}`,
      `${t.contact.formLabels.email}: ${email}`,
    ];
    if (company.trim()) {
      lines.push(`${t.contact.formLabels.company}: ${company}`);
    }
    lines.push(`${t.contact.formLabels.matter}: ${matter}`);
    lines.push(`${t.contact.formLabels.message}: ${message}`);

    window.open(
      buildWhatsAppUrl(t.contact.phoneWhatsapp, lines.join("\n")),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const infoItems = [
    {
      label: t.contact.infoLabels.email,
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      label: t.contact.infoLabels.phone,
      value: t.contact.phoneDisplay,
      href: buildWhatsAppUrl(t.contact.phoneWhatsapp, t.contact.whatsappIntro),
    },
    {
      label: t.contact.infoLabels.attention,
      value: t.contact.attention,
      href: undefined,
    },
    {
      label: "LinkedIn",
      value: "LinkedIn",
      href: t.contact.linkedin,
    },
  ];

  return (
    <section id="contacto" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.14em] text-gold-light uppercase">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-4 font-serif-display text-3xl leading-tight font-medium sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70">
            {t.contact.body}
          </p>

          <ul className="mt-10 divide-y divide-border-dark border-t border-border-dark">
            {infoItems.map(({ label, value, href }) => {
              const valueEl = href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-paper transition-colors duration-200 hover:text-gold-light cursor-pointer"
                >
                  {value}
                </a>
              ) : (
                <span className="text-paper">{value}</span>
              );
              return (
                <li
                  key={label}
                  className="flex items-center justify-between gap-4 py-4 text-sm sm:text-base"
                >
                  <span className="text-xs font-semibold tracking-wide text-paper/50 uppercase">
                    {label}
                  </span>
                  {valueEl}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border-dark bg-navy/30 p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold tracking-wide text-paper/70 uppercase"
                >
                  {t.contact.formLabels.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border-dark bg-ink/60 px-4 py-3 text-sm text-paper placeholder-paper/30 outline-none transition-colors duration-200 focus:border-gold-light"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold tracking-wide text-paper/70 uppercase"
                  >
                    {t.contact.formLabels.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-border-dark bg-ink/60 px-4 py-3 text-sm text-paper placeholder-paper/30 outline-none transition-colors duration-200 focus:border-gold-light"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold tracking-wide text-paper/70 uppercase"
                  >
                    {t.contact.formLabels.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-border-dark bg-ink/60 px-4 py-3 text-sm text-paper placeholder-paper/30 outline-none transition-colors duration-200 focus:border-gold-light"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold tracking-wide text-paper/70 uppercase"
                >
                  {t.contact.formLabels.company}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-border-dark bg-ink/60 px-4 py-3 text-sm text-paper placeholder-paper/30 outline-none transition-colors duration-200 focus:border-gold-light"
                />
              </div>

              <div>
                <span className="mb-2 block text-xs font-semibold tracking-wide text-paper/70 uppercase">
                  {t.contact.formLabels.matter}
                </span>
                <div className="flex flex-wrap gap-2">
                  {t.contact.materias.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setMatter(option)}
                      aria-pressed={matter === option}
                      className={`rounded-lg border px-4 py-2 text-sm transition-colors duration-200 cursor-pointer ${
                        matter === option
                          ? "border-gold text-gold-light"
                          : "border-border-dark text-paper/70 hover:border-paper/40"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold tracking-wide text-paper/70 uppercase"
                >
                  {t.contact.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-border-dark bg-ink/60 px-4 py-3 text-sm text-paper placeholder-paper/30 outline-none transition-colors duration-200 focus:border-gold-light"
                />
              </div>

              <p className="text-xs text-paper/50">
                {t.contact.formLabels.disclaimer}
              </p>

              <label className="flex items-start gap-3 text-xs text-paper/70">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border-dark bg-ink/60 accent-gold"
                />
                <span>
                  {t.contact.formLabels.consentPrefix}
                  <a
                    href="#tratamiento-datos"
                    className="text-gold-light underline underline-offset-2 hover:text-gold"
                  >
                    {t.contact.formLabels.consentLink}
                  </a>
                  {t.contact.formLabels.consentSuffix}
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-ink uppercase transition-colors duration-200 hover:bg-gold-light cursor-pointer"
              >
                {t.contact.formLabels.submit}
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
