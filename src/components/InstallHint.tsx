"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

function isIOSSafari() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|OPiOS|EdgiOS/.test(ua);
  return isIOS && isSafari;
}

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    ("standalone" in window.navigator &&
      (window.navigator as Navigator & { standalone: boolean }).standalone) ||
    window.matchMedia("(display-mode: standalone)").matches
  );
}

export default function InstallHint() {
  const t = useTranslations("pwa");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isIOSSafari() || isStandalone()) return;
    if (localStorage.getItem("pwa-dismissed") === "1") return;

    const timer = setTimeout(() => setShow(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem("pwa-dismissed", "1");
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 inset-x-4 z-[60] rounded-2xl bg-gradient-to-r from-gold to-gold-light p-4 shadow-lg text-navy animate-slide-up">
      <div className="flex items-start gap-3">
        <span className="text-2xl">📲</span>
        <div className="flex-1 min-w-0">
          <p className="font-serif text-[15px] font-semibold leading-tight">
            {t("title")}
          </p>
          <p className="text-xs opacity-80 mt-1 leading-relaxed">
            {t("body")}
          </p>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-navy/10 hover:bg-navy/20 transition-colors"
          aria-label="Close"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M2 2l8 8M10 2l-8 8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
