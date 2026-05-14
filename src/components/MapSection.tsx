"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import dynamic from "next/dynamic";
import { pois, catColors, catEmojis } from "@/data/pois";
import type { Locale } from "@/i18n/config";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] rounded-[14px] bg-cream animate-pulse" />
  ),
});

const categories = [
  "all",
  "beach",
  "food",
  "village",
  "market",
  "shop",
  "activity",
] as const;

export default function MapSection({ locale: _locale }: { locale?: string }) {
  const t = useTranslations("map");
  const tCat = useTranslations("cat");
  const locale = useLocale();
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? pois : pois.filter((p) => p.cat === filter);

  return (
    <section id="carte" className="px-5 py-12 bg-paper">
      <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">
        <span className="block w-8 h-px bg-gold" />
        {t("label")}
      </p>

      <h2
        className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] leading-[1.15] text-navy mb-3 [&>em]:text-gold [&>em]:not-italic"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <p className="text-sm text-navy/70 leading-relaxed mb-6">
        {t("intro")}
      </p>

      {/* Category filter chips */}
      <div className="cat-filters flex gap-2 overflow-x-auto pb-4 -mx-5 px-5">
        {categories.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                active
                  ? "bg-navy text-white"
                  : "bg-white text-navy border border-[var(--line)] hover:border-navy/30"
              }`}
            >
              {cat !== "all" && (
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: catColors[cat] }}
                />
              )}
              {tCat(cat)}
            </button>
          );
        })}
      </div>

      {/* Map */}
      <MapView filter={filter} locale={locale} />

      {/* POI list */}
      <div className="mt-6 flex flex-col gap-2">
        {filtered.map((poi) => (
          <a
            key={poi.name}
            href={poi.gmaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[var(--line)] hover:shadow-[var(--shadow-sm)] transition-shadow"
          >
            <span
              className="flex items-center justify-center w-10 h-10 rounded-full text-lg shrink-0"
              style={{ backgroundColor: poi.color + "18" }}
            >
              {catEmojis[poi.cat]}
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-serif text-[15px] text-navy block truncate">
                {poi.name}
              </span>
              <span className="text-xs text-navy/55 block truncate">
                {poi.meta[locale as Locale] ?? poi.meta.fr}
              </span>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-navy/30 shrink-0"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
