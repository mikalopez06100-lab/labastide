"use client";

import { useTranslations } from "next-intl";

interface ServicesSectionProps {
  whatsappNumber: string;
}

export default function ServicesSection({ whatsappNumber }: ServicesSectionProps) {
  const t = useTranslations("serv");

  const services = [
    {
      title: t("towels"),
      desc: t("towelsDesc"),
      price: "10 €",
      message: "Bonjour, je souhaite commander 2 serviettes supplémentaires.",
    },
    {
      title: t("linen"),
      desc: t("linenDesc"),
      price: "10 €",
      message: "Bonjour, je souhaite commander 1 parure de drap.",
    },
    {
      title: t("cleaning"),
      desc: t("cleaningDesc"),
      price: t("onQuote"),
      message: "Bonjour, je souhaite un ménage intermédiaire.",
    },
    {
      title: t("transfer"),
      desc: t("transferDesc"),
      price: t("onQuote"),
      message: "Bonjour, je souhaite un transfert privé.",
    },
    {
      title: t("chef"),
      desc: t("chefDesc"),
      price: t("onQuote"),
      message: "Bonjour, je souhaite réserver un chef à domicile.",
    },
    {
      title: t("massage"),
      desc: t("massageDesc"),
      price: t("onQuote"),
      message: "Bonjour, je souhaite réserver un massage.",
    },
  ];

  return (
    <section id="services" className="px-5 py-12">
      <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">
        <span className="block w-8 h-px bg-gold" />
        {t("label")}
      </p>

      <h2
        className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] leading-[1.15] text-navy mb-3 [&>em]:text-gold [&>em]:not-italic"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <p className="text-[14px] text-navy/70 leading-relaxed mb-8 max-w-lg">
        {t("intro")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-3 p-5 rounded-[var(--radius-card)] bg-white border border-[var(--line)] shadow-[var(--shadow-sm)]"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-serif text-[17px] text-navy font-medium leading-tight">
                {service.title}
              </h4>
              <span className="flex-shrink-0 px-2.5 py-0.5 rounded-full bg-cream text-[11px] uppercase tracking-wide font-semibold text-navy/70">
                {service.price}
              </span>
            </div>
            <p className="text-[13px] text-navy/60 leading-relaxed">
              {service.desc}
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-gold text-[12px] uppercase tracking-[0.1em] font-semibold hover:text-gold-light transition-colors"
            >
              {t("ask")} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
