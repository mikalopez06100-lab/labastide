import { notFound } from "next/navigation";
import { getLogement, logements } from "@/data/logements";
import { domaine } from "@/data/domaine";
import LivretPage from "@/components/LivretPage";

export function generateStaticParams() {
  return logements
    .filter((l) => l.actif)
    .map((l) => ({ slug: l.slug }));
}

export default async function LogementPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const logement = getLogement(slug);

  if (!logement) {
    notFound();
  }

  return <LivretPage logement={logement} domaine={domaine} locale={locale} />;
}
