"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Logement, Domaine } from "@/types";
import CopyButton from "./CopyButton";

interface StaySectionProps {
  logement: Logement;
  domaine: Domaine;
  locale: string;
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[var(--line)] last:border-0">
      <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-gold">
        {label}
      </span>
      <span className="text-[15px] font-medium text-navy">{value}</span>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[var(--line)] rounded-[14px] shadow-[var(--shadow-sm)] p-5">
      {children}
    </div>
  );
}

function PhotoCarousel({ photos, nom }: { photos: string[]; nom: string }) {
  const [current, setCurrent] = useState(0);

  if (photos.length === 0) return null;

  return (
    <div className="relative w-full aspect-[16/10] rounded-[14px] overflow-hidden mb-6 shadow-[var(--shadow-sm)]">
      <Image
        src={photos[current]}
        alt={`${nom} - photo ${current + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 768px) 100vw, 720px"
        priority={current === 0}
      />
      {photos.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p === 0 ? photos.length - 1 : p - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy shadow-md"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((p) => (p === photos.length - 1 ? 0 : p + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-navy shadow-md"
            aria-label="Next"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function StaySection({
  logement,
  domaine,
  locale: _locale,
}: StaySectionProps) {
  const t = useTranslations("stay");
  const tEq = useTranslations("eq");

  const phoneHref = `tel:${domaine.gardienne.telephone}`;
  const waHref = `https://wa.me/${domaine.gardienne.whatsapp.replace(/\+/g, "")}`;

  return (
    <section id="sejour" className="px-5 py-12 bg-paper">
      <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">
        <span className="block w-8 h-px bg-gold" />
        {t("label")}
      </p>

      <h2
        className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] leading-[1.15] text-navy mb-8 [&>em]:text-gold [&>em]:not-italic"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      {/* Photo carousel */}
      <PhotoCarousel photos={logement.photos} nom={logement.nom} />

      <div className="flex flex-col gap-4">
        {/* Wi-Fi */}
        <Card>
          <h3 className="font-serif text-lg text-navy mb-3">{t("wifi")}</h3>
          <InfoRow
            label={t("network")}
            value={
              <span className="flex items-center gap-2">
                {logement.wifiSsid}
                <CopyButton value={logement.wifiSsid} />
              </span>
            }
          />
          <InfoRow
            label={t("password")}
            value={
              <span className="flex items-center gap-2 font-mono text-sm">
                {logement.wifiPassword}
                <CopyButton value={logement.wifiPassword} />
              </span>
            }
          />
        </Card>

        {/* Access & hours */}
        <Card>
          <h3 className="font-serif text-lg text-navy mb-3">{t("access")}</h3>
          <InfoRow label={t("checkin")} value={domaine.horaireCheckin} />
          <InfoRow label={t("checkout")} value={domaine.horaireCheckout} />
          <InfoRow
            label={t("code")}
            value={
              <span className="flex items-center gap-2 font-mono">
                {logement.codePortail}
                <CopyButton value={logement.codePortail} />
              </span>
            }
          />
        </Card>

        {/* Housekeeper */}
        <Card>
          <h3 className="font-serif text-lg text-navy mb-3">{t("host")}</h3>
          <p className="text-sm text-navy/70 leading-relaxed mb-4">
            {t("hostDesc")}
          </p>
          <div className="flex gap-3">
            <a
              href={phoneHref}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-navy text-white text-sm font-medium transition-opacity hover:opacity-90"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {t("call")}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25d366" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .611.611l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.39-1.586l-.386-.232-2.649.888.888-2.649-.232-.386A9.94 9.94 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </Card>

        {/* Equipment */}
        <Card>
          <h3 className="font-serif text-lg text-navy mb-1">
            {t("equipment")}
          </h3>
          <p className="text-sm text-navy/70 leading-relaxed mb-4">
            {t("equipmentDesc")}
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {logement.equipement.map((key) => (
              <span key={key} className="text-sm text-navy">
                {tEq(key)}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-navy/50 leading-relaxed">
            {t("refill")}
          </p>
        </Card>
      </div>
    </section>
  );
}
