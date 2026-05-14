"use client";

import { useState } from "react";
import type { Logement, Domaine } from "@/types";
import TopBar from "./TopBar";
import Hero from "./Hero";
import QuickActions from "./QuickActions";
import StaySection from "./StaySection";
import HistorySection from "./HistorySection";
import MapSection from "./MapSection";
import TransportSection from "./TransportSection";
import ServicesSection from "./ServicesSection";
import EmergencySection from "./EmergencySection";
import ThanksSection from "./ThanksSection";
import BottomNav from "./BottomNav";
import LangModal from "./LangModal";
import InstallHint from "./InstallHint";

interface Props {
  logement: Logement;
  domaine: Domaine;
  locale: string;
}

export default function LivretPage({ logement, domaine, locale }: Props) {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <main>
      <TopBar onOpenLang={() => setLangOpen(true)} />
      <InstallHint />
      <Hero />
      <QuickActions gardienneTel={domaine.gardienne.telephone} />
      <StaySection logement={logement} domaine={domaine} locale={locale} />
      <HistorySection />
      <MapSection locale={locale} />
      <TransportSection />
      <ServicesSection whatsappNumber={domaine.gardienne.whatsapp} />
      <EmergencySection />
      <ThanksSection />
      <BottomNav />
      <LangModal isOpen={langOpen} onClose={() => setLangOpen(false)} />
    </main>
  );
}
