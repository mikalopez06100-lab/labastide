"use client";

import { useTranslations } from "next-intl";

function RuleCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[var(--line)] rounded-[14px] shadow-[var(--shadow-sm)] p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xl">{icon}</span>
        <h3 className="font-serif text-lg text-navy font-medium">{title}</h3>
      </div>
      <div className="text-sm text-navy/70 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export default function HouseRulesSection() {
  const t = useTranslations("rules");

  return (
    <section id="rules" className="px-5 py-12 bg-paper">
      <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">
        <span className="block w-8 h-px bg-gold" />
        {t("label")}
      </p>

      <h2
        className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] leading-[1.15] text-navy mb-8 [&>em]:text-gold [&>em]:not-italic"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <div className="flex flex-col gap-4">
        {/* Parking */}
        <RuleCard icon="🅿️" title={t("parkingTitle")}>
          <p>{t("parkingDesc")}</p>
          <p className="text-xs text-navy/50 mt-1">{t("parking2")}</p>
        </RuleCard>

        {/* Gate & Entry */}
        <RuleCard icon="🚪" title={t("entryTitle")}>
          <p><strong className="text-navy">{t("gateLabel")}</strong> {t("gateDesc")}</p>
          <p className="mt-2"><strong className="text-navy">{t("doorLabel")}</strong> {t("doorDesc")}</p>
        </RuleCard>

        {/* Waste sorting */}
        <RuleCard icon="♻️" title={t("trashTitle")}>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-green-600 mt-1 shrink-0" />
              <span>{t("trashGreen")}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mt-1 shrink-0" />
              <span>{t("trashYellow")}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-gray-800 mt-1 shrink-0" />
              <span>{t("trashGlass")}</span>
            </div>
          </div>
        </RuleCard>

        {/* AC */}
        <RuleCard icon="❄️" title={t("acTitle")}>
          <p>{t("acDesc")}</p>
        </RuleCard>

        {/* Tap water */}
        <RuleCard icon="🚰" title={t("waterTitle")}>
          <p>{t("waterDesc")}</p>
        </RuleCard>

        {/* Toilets */}
        <RuleCard icon="🚽" title={t("toiletTitle")}>
          <p>{t("toiletDesc")}</p>
        </RuleCard>

        {/* Noise */}
        <RuleCard icon="🔇" title={t("noiseTitle")}>
          <p>{t("noiseDesc")}</p>
        </RuleCard>

        {/* Non-smoking */}
        <RuleCard icon="🚭" title={t("smokingTitle")}>
          <p>{t("smokingDesc")}</p>
        </RuleCard>

        {/* Maintenance */}
        <RuleCard icon="🔧" title={t("maintenanceTitle")}>
          <p>{t("maintenanceDesc")}</p>
        </RuleCard>
      </div>
    </section>
  );
}
