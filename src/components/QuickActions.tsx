"use client";

import { useTranslations } from "next-intl";

interface QuickActionsProps {
  gardienneTel: string;
}

const WifiIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="3" />
    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
  </svg>
);

const AlertIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default function QuickActions({ gardienneTel }: QuickActionsProps) {
  const t = useTranslations("qa");

  const actions = [
    { icon: <WifiIcon />, label: t("wifi"), href: "#sejour" },
    { icon: <PhoneIcon />, label: t("host"), href: `tel:${gardienneTel}` },
    { icon: <MapIcon />, label: t("around"), href: "#carte" },
    { icon: <AlertIcon />, label: t("urgent"), href: "#urgences" },
  ];

  return (
    <nav className="grid grid-cols-4 gap-2.5 px-5 -mt-5 relative z-10">
      {actions.map((a) => (
        <a
          key={a.label}
          href={a.href}
          className="flex flex-col items-center gap-1.5 py-3.5 rounded-[var(--radius-card)] bg-white border border-[var(--line)] text-navy text-center shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow)] transition-shadow"
        >
          <span className="text-gold">{a.icon}</span>
          <span className="text-[11px] font-medium leading-tight">{a.label}</span>
        </a>
      ))}
    </nav>
  );
}
