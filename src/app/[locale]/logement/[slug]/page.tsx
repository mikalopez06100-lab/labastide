import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getLogement, logements } from "@/data/logements";
import { domaine } from "@/data/domaine";
import { routing } from "@/i18n/routing";
import LivretPage from "@/components/LivretPage";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    logements
      .filter((l) => l.actif)
      .map((l) => ({ locale, slug: l.slug }))
  );
}

export default async function LogementPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const logement = getLogement(slug);
  if (!logement) {
    notFound();
  }

  return <LivretPage logement={logement} domaine={domaine} locale={locale} />;
}
