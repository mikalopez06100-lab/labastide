"use client";

import { useTranslations } from "next-intl";

export default function EmergencySection() {
  const t = useTranslations("em");

  const emergencyNumbers = [
    { number: "15", label: "SAMU" },
    { number: "17", label: t("police") },
    { number: "18", label: t("fire") },
    { number: "112", label: t("eu") },
  ];

  const usefulNumbers = [
    { label: t("pharm"), number: "32 37", tel: "tel:3237" },
    { label: t("doctor"), number: "+33 4 93 01 07 07", tel: "tel:+33493010707" },
    { label: t("hospital"), number: "+33 4 92 03 92 92", tel: "tel:+33492039292" },
    { label: t("dentist"), number: "+33 4 93 76 88 88", tel: "tel:+33493768888" },
    { label: t("townhall"), number: "+33 4 93 76 33 27", tel: "tel:+33493763327" },
  ];

  return (
    <section id="urgences" className="px-5 py-12 bg-navy">
      <p className="flex items-center gap-3 text-gold-light text-xs uppercase tracking-[0.2em] font-medium mb-3">
        <span className="block w-8 h-px bg-gold-light" />
        {t("label")}
      </p>

      <h2
        className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] leading-[1.15] text-white mb-8 [&>em]:text-gold-light [&>em]:not-italic"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {emergencyNumbers.map((item) => (
          <a
            key={item.number}
            href={`tel:${item.number}`}
            className="flex flex-col items-center gap-2 py-5 rounded-[var(--radius-card)] bg-white/[0.07] border border-white/10 hover:bg-white/[0.12] transition-colors"
          >
            <span className="font-serif text-[2rem] text-gold-light font-medium leading-none">
              {item.number}
            </span>
            <span className="text-[11px] uppercase tracking-wide text-white/70 font-medium">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {usefulNumbers.map((item) => (
          <a
            key={item.tel}
            href={item.tel}
            className="flex items-center justify-between gap-3 px-4 py-3 rounded-[10px] bg-white/[0.07] border border-white/10 hover:bg-white/[0.12] transition-colors"
          >
            <span className="text-[14px] text-white/90 font-medium">{item.label}</span>
            <span className="text-[14px] text-gold-light font-medium whitespace-nowrap">
              {item.number}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
