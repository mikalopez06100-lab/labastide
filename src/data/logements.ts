import type { Logement } from "@/types";

export const logements: Logement[] = [
  {
    nom: "Suite Salisbury",
    slug: "suite-salisbury",
    etage: "1er",
    surface: 65,
    capacite: 4,
    codePortail: "1890#",
    wifiSsid: "Bastide-Guest",
    wifiPassword: "bastide1890",
    equipement: [
      "fridge", "oven", "coffee", "washer", "ac", "tv", "wifi", "hair", "iron", "vacuum",
    ],
    notesParticulieres: {
      fr: "La terrasse est accessible par la chambre principale. Vue mer panoramique.",
      en: "The terrace is accessible from the master bedroom. Panoramic sea view.",
      de: "Die Terrasse ist über das Hauptschlafzimmer erreichbar. Panorama-Meerblick.",
      it: "La terrazza è accessibile dalla camera principale. Vista mare panoramica.",
      es: "La terraza es accesible desde el dormitorio principal. Vista panorámica al mar.",
    },
    photos: [
      "/images/salon-vue-mer.jpg",
      "/images/chambre-serviettes.jpg",
      "/images/vue-mer-panorama.jpg",
    ],
    actif: true,
  },
  {
    nom: "Studio Belle Époque",
    slug: "studio-belle-epoque",
    etage: "RDC",
    surface: 35,
    capacite: 2,
    codePortail: "1890#",
    wifiSsid: "Bastide-Guest",
    wifiPassword: "bastide1890",
    equipement: [
      "fridge", "oven", "coffee", "ac", "tv", "wifi", "hair",
    ],
    notesParticulieres: {
      fr: "Accès direct au jardin. Idéal pour un couple.",
      en: "Direct garden access. Ideal for a couple.",
      de: "Direkter Zugang zum Garten. Ideal für ein Paar.",
      it: "Accesso diretto al giardino. Ideale per una coppia.",
      es: "Acceso directo al jardín. Ideal para una pareja.",
    },
    photos: [
      "/images/cuisine-studio.jpg",
      "/images/chambre-serviettes.jpg",
      "/images/jardin.jpg",
    ],
    actif: true,
  },
];

export function getLogement(slug: string): Logement | undefined {
  return logements.find((l) => l.slug === slug && l.actif);
}
