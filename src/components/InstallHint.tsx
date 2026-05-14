"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function isIOSSafari() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
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
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showIOS, setShowIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;
    if (localStorage.getItem("pwa-dismissed") === "1") return;

    // Android / Chrome
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // iOS Safari
    if (isIOSSafari()) {
      const timer = setTimeout(() => setShowIOS(true), 2500);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeinstallprompt", handler);
      };
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    setInstalling(true);
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
    setInstalling(false);
  }, [deferredPrompt]);

  const dismiss = () => {
    setDismissed(true);
    setShowIOS(false);
    setDeferredPrompt(null);
    localStorage.setItem("pwa-dismissed", "1");
  };

  if (dismissed || isStandalone()) return null;

  // Android install prompt
  if (deferredPrompt) {
    return (
      <div className="fixed bottom-20 inset-x-4 z-[60] rounded-2xl bg-white border border-gold shadow-lg overflow-hidden animate-slide-up">
        <div className="bg-gradient-to-r from-navy to-navy/90 px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-serif italic text-lg text-gold shrink-0">
            B
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-serif text-[15px] font-semibold leading-tight text-white">
              {t("title")}
            </p>
            <p className="text-xs text-white/70 mt-0.5 leading-relaxed">
              {t("installDesc")}
            </p>
          </div>
          <button
            onClick={dismiss}
            className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" />
            </svg>
          </button>
        </div>
        <div className="px-4 py-3 flex gap-3">
          <button
            onClick={dismiss}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium text-navy/60 bg-paper hover:bg-cream transition-colors"
          >
            {t("later")}
          </button>
          <button
            onClick={handleInstall}
            disabled={installing}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-gold hover:bg-gold-light transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t("install")}
          </button>
        </div>
      </div>
    );
  }

  // iOS Safari hint
  if (showIOS) {
    return (
      <div className="fixed bottom-20 inset-x-4 z-[60] rounded-2xl bg-white border border-gold shadow-lg overflow-hidden animate-slide-up">
        <div className="bg-gradient-to-r from-navy to-navy/90 px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-serif italic text-lg text-gold shrink-0">
            B
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-serif text-[15px] font-semibold leading-tight text-white">
              {t("title")}
            </p>
          </div>
          <button
            onClick={dismiss}
            className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" />
            </svg>
          </button>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 text-sm text-navy/80">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold">1.</span>
              {t("iosStep1")}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#007AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-sm text-navy/80">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold">2.</span>
              {t("iosStep2")}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
