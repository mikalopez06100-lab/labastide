import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domaine de la Bastide — Votre séjour",
  description:
    "Livret d'accueil du Domaine de la Bastide à Villefranche-sur-Mer. Toutes les informations pour votre séjour : Wi-Fi, services, transports, lieux à découvrir.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "La Bastide",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1c2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
