"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

interface TopBarProps {
  onOpenLang: () => void;
}

export default function TopBar({ onOpenLang }: TopBarProps) {
  const locale = useLocale();

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-5 py-2 bg-paper/80 backdrop-blur-md border-b border-[var(--line)]"
    >
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo-bastide.png"
          alt="Domaine de la Bastide"
          width={120}
          height={40}
          className="h-9 w-auto"
          priority
        />
      </div>

      <button
        onClick={onOpenLang}
        className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--line)] text-xs font-medium uppercase tracking-wide text-navy bg-white/60 hover:bg-white transition-colors"
      >
        {locale.toUpperCase()}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className="opacity-50"
        >
          <path
            d="M2.5 3.5L5 6.5L7.5 3.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
}
