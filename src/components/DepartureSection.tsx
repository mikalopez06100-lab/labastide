"use client";

import { useTranslations } from "next-intl";

export default function DepartureSection() {
  const t = useTranslations("departure");

  return (
    <section id="departure" className="px-5 py-12 bg-cream">
      <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">
        <span className="block w-8 h-px bg-gold" />
        {t("label")}
      </p>

      <h2
        className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] leading-[1.15] text-navy mb-8 [&>em]:text-gold [&>em]:not-italic"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <div className="flex flex-col gap-4">
        {/* Checkout time */}
        <div className="bg-white border-2 border-gold rounded-[14px] shadow-[var(--shadow-sm)] p-5 text-center">
          <span className="text-3xl">🕙</span>
          <p className="font-serif text-2xl text-navy font-semibold mt-2">
            {t("before")} <span className="text-gold">10:00</span>
          </p>
          <p className="text-sm text-navy/60 mt-1">{t("checkoutNote")}</p>
        </div>

        {/* Keys drop-off */}
        <div className="bg-white border border-[var(--line)] rounded-[14px] shadow-[var(--shadow-sm)] p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl">🔑</span>
            <h3 className="font-serif text-lg text-navy font-medium">
              {t("keysTitle")}
            </h3>
          </div>
          <p className="text-sm text-navy/70 leading-relaxed">{t("keysDesc")}</p>
        </div>

        {/* Cleaning checklist */}
        <div className="bg-white border border-[var(--line)] rounded-[14px] shadow-[var(--shadow-sm)] p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl">🧹</span>
            <h3 className="font-serif text-lg text-navy font-medium">
              {t("cleaningTitle")}
            </h3>
          </div>
          <p className="text-sm text-navy/70 leading-relaxed mb-3">
            {t("cleaningIntro")}
          </p>
          <ul className="space-y-2">
            {(["task1", "task2", "task3"] as const).map((key) => (
              <li key={key} className="flex items-center gap-2 text-sm text-navy">
                <span className="w-5 h-5 rounded-full border-2 border-gold/40 flex items-center justify-center text-[10px] text-gold shrink-0">
                  ✓
                </span>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        {/* Linen */}
        <div className="bg-white border border-[var(--line)] rounded-[14px] shadow-[var(--shadow-sm)] p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl">🛏️</span>
            <h3 className="font-serif text-lg text-navy font-medium">
              {t("linenTitle")}
            </h3>
          </div>
          <div className="text-sm text-navy/70 leading-relaxed space-y-2">
            <p>{t("linenProvided")}</p>
            <p className="text-red-600 font-medium">{t("linenBeach")}</p>
            <p>{t("linenRenewal")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
