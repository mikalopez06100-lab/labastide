import type { Locale } from "@/i18n/config";

export type LocalizedString = Record<Locale, string>;

export interface POI {
  cat: "beach" | "food" | "village" | "market" | "shop" | "activity";
  color: string;
  name: string;
  meta: LocalizedString;
  lat: number;
  lng: number;
  gmaps: string;
}

export interface Logement {
  nom: string;
  slug: string;
  etage: string;
  surface: number;
  capacite: number;
  codePortail: string;
  wifiSsid: string;
  wifiPassword: string;
  equipement: string[];
  notesParticulieres?: LocalizedString;
  actif: boolean;
}

export interface Service {
  id: string;
  titleKey: string;
  descKey: string;
  tarif: string;
  tarifKey?: string;
  whatsappMessage: LocalizedString;
}

export interface EmergencyNumber {
  label: string;
  numero: string;
  type: "grand" | "liste";
}

export interface Transport {
  id: string;
  titleKey: string;
  descKey?: string;
  subtitle?: string;
  href: string;
  isUber?: boolean;
}

export interface Domaine {
  horaireCheckin: string;
  horaireCheckout: string;
  gardienne: {
    nom: string;
    telephone: string;
    whatsapp: string;
  };
  adresse: {
    rue: string;
    codePostal: string;
    ville: string;
    lat: number;
    lng: number;
  };
}
