"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";

interface LangModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const languages: { code: Locale; name: string; flag: string }[] = [
  {
    code: "fr",
    name: "Français",
    flag: "linear-gradient(to right, #002395 33%, #fff 33% 66%, #ED2939 66%)",
  },
  {
    code: "en",
    name: "English",
    flag: "#012169",
  },
  {
    code: "de",
    name: "Deutsch",
    flag: "linear-gradient(to bottom, #000 33%, #DD0000 33% 66%, #FFCC00 66%)",
  },
  {
    code: "it",
    name: "Italiano",
    flag: "linear-gradient(to right, #009246 33%, #fff 33% 66%, #CE2B37 66%)",
  },
  {
    code: "es",
    name: "Español",
    flag: "linear-gradient(to bottom, #AA151B 25%, #F1BF00 25% 75%, #AA151B 75%)",
  },
];

export default function LangModal({ isOpen, onClose }: LangModalProps) {
  const t = useTranslations("lang");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  if (!isOpen) return null;

  const handleSelect = (code: Locale) => {
    router.replace(pathname, { locale: code });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-[20px] animate-slide-up">
        <div className="flex justify-center pt-3 pb-1">
          <span className="w-10 h-1 rounded-full bg-navy/15" />
        </div>

        <div className="px-6 pt-2 pb-2">
          <h3 className="font-serif text-xl text-navy">{t("title")}</h3>
          <p className="text-sm text-navy/60 mt-1">{t("sub")}</p>
        </div>

        <div
          className="flex flex-col gap-2 px-6 pb-6"
          style={{ paddingBottom: "calc(24px + var(--safe-bottom))" }}
        >
          {languages.map((lang) => {
            const isActive = locale === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center gap-4 w-full px-4 py-3.5 rounded-xl text-left transition-colors ${
                  isActive
                    ? "bg-cream border-2 border-gold"
                    : "bg-paper border border-[var(--line)] hover:border-navy/20"
                }`}
              >
                <span
                  className="w-8 h-5 rounded-[3px] shrink-0"
                  style={{ background: lang.flag }}
                />
                <span className="text-[15px] font-medium text-navy">
                  {lang.name}
                </span>
                {isActive && (
                  <svg
                    className="ml-auto text-gold"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
