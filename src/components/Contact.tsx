"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Link2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const waMessage = [
      t.contact.whatsappIntro,
      "",
      `${t.contact.formLabels.name}: ${name}`,
      `${t.contact.formLabels.email}: ${email}`,
      `${t.contact.formLabels.message}: ${message}`,
    ].join("\n");
    window.open(
      buildWhatsAppUrl(t.contact.phoneWhatsapp, waMessage),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const infoItems = [
    { icon: Mail, label: t.contact.email, href: `mailto:${t.contact.email}` },
    {
      icon: Phone,
      label: t.contact.phoneDisplay,
      href: buildWhatsAppUrl(t.contact.phoneWhatsapp, t.contact.whatsappIntro),
    },
    { icon: MapPin, label: t.contact.location, href: undefined },
    {
      icon: Link2,
      label: "LinkedIn",
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

          <ul className="mt-10 space-y-5">
            {infoItems.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30">
                    <Icon size={17} className="text-gold-light" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-paper/85 sm:text-base">
                    {label}
                  </span>
                </span>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex transition-opacity duration-200 hover:opacity-75 cursor-pointer"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
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
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors duration-200 hover:bg-gold-light cursor-pointer"
              >
                {t.contact.formLabels.submit}
                <MessageCircle size={15} aria-hidden="true" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
