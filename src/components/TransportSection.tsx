"use client";

import { useTranslations } from "next-intl";

const UBER_APP =
  "uber://?action=setPickup&pickup=my_location&dropoff[formatted_address]=1%20Boulevard%20de%20Su%C3%A8de%2C%2006230%20Villefranche-sur-Mer&dropoff[latitude]=43.7081&dropoff[longitude]=7.3256";
const UBER_WEB =
  "https://m.uber.com/looking?drop[0]=%7B%22addr%22%3A%221%20Boulevard%20de%20Su%C3%A8de%2C%2006230%20Villefranche-sur-Mer%22%2C%22latitude%22%3A43.7081%2C%22longitude%22%3A7.3256%7D";

function openUber(e: React.MouseEvent) {
  e.preventDefault();
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
  if (isMobile) {
    const tid = setTimeout(() => {
      window.location.href = UBER_WEB;
    }, 1400);
    window.location.href = UBER_APP;
    window.addEventListener("blur", () => clearTimeout(tid), { once: true });
  } else {
    window.open(UBER_WEB, "_blank");
  }
}

export default function TransportSection() {
  const t = useTranslations("trans");

  const cards = [
    {
      id: "uberCard",
      title: "Uber",
      subtitle: t("uber"),
      href: "#",
      onClick: openUber,
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17h14M6 17a2 2 0 0 1-2-2V9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2" />
          <circle cx="7.5" cy="17" r="2" />
          <circle cx="16.5" cy="17" r="2" />
        </svg>
      ),
    },
    {
      id: "taxiCard",
      title: t("taxi"),
      subtitle: "+33 4 93 13 07 07",
      href: "tel:+33493130707",
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      id: "trainCard",
      title: t("train"),
      subtitle: t("trainDesc"),
      href: "https://www.sncf-connect.com",
      target: "_blank",
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="16" rx="2" />
          <line x1="4" y1="11" x2="20" y2="11" />
          <line x1="12" y1="3" x2="12" y2="11" />
          <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none" />
          <path d="M8 19l-2 3M16 19l2 3" />
        </svg>
      ),
    },
    {
      id: "busCard",
      title: t("bus"),
      subtitle: t("busDesc"),
      href: "https://www.lignesdazur.com",
      target: "_blank",
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="7" cy="15" r="1" fill="currentColor" stroke="none" />
          <circle cx="17" cy="15" r="1" fill="currentColor" stroke="none" />
          <path d="M5 18v2M19 18v2" />
        </svg>
      ),
    },
    {
      id: "gmapsCard",
      title: t("gmaps"),
      subtitle: t("gmapsDesc"),
      href: "https://www.google.com/maps/place/1+Boulevard+de+Su%C3%A8de,+06230+Villefranche-sur-Mer",
      target: "_blank",
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
        </svg>
      ),
    },
    {
      id: "airportCard",
      title: t("airport"),
      subtitle: t("airportDesc"),
      href: "https://www.nice.aeroport.fr",
      target: "_blank",
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15l-5-2.5V7a2 2 0 1 0-4 0v5.5L7 15l1 2 4.5-1.5V19l-1.5 1.5V22l2.5-1 2.5 1v-1.5L14.5 19v-3.5L19 17l2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="transport" className="px-5 py-12">
      <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">
        <span className="block w-8 h-px bg-gold" />
        {t("label")}
      </p>

      <h2
        className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] leading-[1.15] text-navy mb-8 [&>em]:text-gold [&>em]:not-italic"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {cards.map((card) => (
          <a
            key={card.id}
            id={card.id}
            href={card.href}
            target={(card as { target?: string }).target}
            rel={(card as { target?: string }).target ? "noopener noreferrer" : undefined}
            onClick={(card as { onClick?: (e: React.MouseEvent) => void }).onClick}
            className="flex items-center gap-4 p-4 rounded-[var(--radius-card)] bg-white border border-[var(--line)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow)] transition-shadow"
          >
            <span className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-[10px] bg-navy text-white">
              {card.icon}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-serif text-[17px] text-navy font-medium leading-tight">
                {card.title}
              </span>
              <span className="block text-[13px] text-navy/60 leading-snug mt-0.5 truncate">
                {card.subtitle}
              </span>
            </span>
            <span className="flex-shrink-0 text-gold text-lg font-medium">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
