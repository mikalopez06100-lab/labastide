"use client";

import { useTranslations } from "next-intl";

export default function ThanksSection() {
  const t = useTranslations("thx");

  return (
    <section id="thanks" className="px-5 py-16 bg-cream-warm text-center">
      <div className="flex flex-col items-center gap-5 max-w-md mx-auto">
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-2 border-gold font-serif italic text-xl text-gold">
          B
        </div>

        <h2 className="font-serif text-[clamp(1.5rem,5vw,2rem)] leading-[1.2] text-navy">
          {t("title")}
        </h2>

        <p className="text-[15px] leading-relaxed text-navy/70">
          {t("body")}
        </p>

        <p className="font-serif italic text-sm text-gold">
          — Domaine de la Bastide
        </p>
      </div>
    </section>
  );
}
