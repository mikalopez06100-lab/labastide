import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domaine de la Bastide — Votre séjour",
  description:
    "Livret d'accueil du Domaine de la Bastide à Villefranche-sur-Mer. Toutes les informations pour votre séjour : Wi-Fi, services, transports, lieux à découvrir.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Domaine de la Bastide",
    title: "Domaine de la Bastide — Villefranche-sur-Mer",
    description:
      "Votre livret d'accueil digital : Wi-Fi, carte interactive, services, transports et bonnes adresses.",
    url: "https://labastide.vercel.app",
    images: [
      {
        url: "https://labastide.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Domaine de la Bastide — Villefranche-sur-Mer",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domaine de la Bastide — Villefranche-sur-Mer",
    description:
      "Votre livret d'accueil digital : Wi-Fi, carte, services & bonnes adresses.",
    images: ["https://labastide.vercel.app/images/og-image.png"],
  },
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
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
