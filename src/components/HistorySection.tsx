"use client";

import { useTranslations } from "next-intl";

export default function HistorySection() {
  const t = useTranslations("hist");

  return (
    <section id="history" className="px-5 py-12 bg-cream">
      <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">
        <span className="block w-8 h-px bg-gold" />
        {t("label")}
      </p>

      <h2
        className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] leading-[1.15] text-navy mb-8 [&>em]:text-gold [&>em]:not-italic"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <div className="relative bg-white border border-gold rounded-[14px] shadow-[var(--shadow-sm)] p-6 pt-10">
        <span className="absolute -top-5 left-6 text-5xl leading-none text-gold font-serif select-none">
          &#10077;
        </span>

        <div className="flex flex-col gap-4">
          <p className="font-serif italic text-[15px] leading-relaxed text-navy/80">
            {t("p1")}
          </p>
          <p className="font-serif italic text-[15px] leading-relaxed text-navy/80">
            {t("p2")}
          </p>
          <p className="font-serif italic text-[15px] leading-relaxed text-navy/80">
            {t("p3")}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-end justify-between">
          <div>
            <p className="font-serif text-base font-semibold text-navy">
              Lord Salisbury
            </p>
            <p className="text-xs text-navy/50 mt-0.5">{t("role")}</p>
          </div>
          <span className="font-serif text-4xl text-gold leading-none">
            1890
          </span>
        </div>
      </div>
    </section>
  );
}
