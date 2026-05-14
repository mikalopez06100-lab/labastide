"use client";

import { useTranslations } from "next-intl";
import WeatherChip from "./WeatherChip";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative flex flex-col justify-end min-h-[60vh] px-6 pb-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/vue-mer-panorama.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent" />

      <div className="relative z-10 flex flex-col gap-4">
        <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] font-medium">
          <span className="block w-8 h-px bg-gold" />
          {t("eyebrow")}
        </p>

        <h1
          className="font-serif text-[clamp(2rem,6vw,3rem)] leading-[1.1] text-white [&>em]:text-gold [&>em]:not-italic"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        />

        <p className="text-white/80 text-[15px] leading-relaxed max-w-md">
          {t("sub")}
        </p>

        <WeatherChip />
      </div>
    </section>
  );
}
