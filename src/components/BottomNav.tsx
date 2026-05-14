"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const UBER_DEEPLINK =
  "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=43.7081&dropoff[longitude]=7.3256&dropoff[nickname]=La%20Bastide";

function HomeIcon() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1l2-4h12l2 4a1 1 0 0 1 1 1v6a2 2 0 0 1-2 2M7.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export default function BottomNav() {
  const t = useTranslations("bn");
  const [active, setActive] = useState("");

  useEffect(() => {
    const onHash = () => setActive(window.location.hash);
    window.addEventListener("hashchange", onHash);
    setActive(window.location.hash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const items = [
    { icon: <HomeIcon />, label: t("home"), href: "#" },
    { icon: <WifiIcon />, label: t("stay"), href: "#sejour" },
    { icon: <MapIcon />, label: t("map"), href: "#carte" },
    { icon: <CarIcon />, label: t("move"), href: UBER_DEEPLINK, external: true },
    { icon: <AlertIcon />, label: t("sos"), href: "#urgences" },
  ];

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 bg-navy/95 backdrop-blur-lg border-t border-white/10"
      style={{ paddingBottom: "calc(8px + var(--safe-bottom))" }}
    >
      <div className="grid grid-cols-5">
        {items.map((item) => {
          const isActive =
            item.href === "#"
              ? active === "" || active === "#"
              : active === item.href;

          const Tag = item.external ? "a" : "a";
          return (
            <Tag
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`flex flex-col items-center gap-1 pt-2 pb-1 transition-colors ${
                isActive ? "text-gold-light" : "text-white/55"
              }`}
            >
              {item.icon}
              <span className="text-[9px] uppercase tracking-[0.06em] font-medium">
                {item.label}
              </span>
            </Tag>
          );
        })}
      </div>
    </nav>
  );
}
