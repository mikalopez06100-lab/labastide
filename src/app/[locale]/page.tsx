import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { logements } from "@/data/logements";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");
  const activeLogements = logements.filter((l) => l.actif);

  return (
    <main className="min-h-screen bg-paper">
      <section className="relative min-h-[40vh] flex flex-col justify-end p-6 pb-8 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1600&q=85')",
            filter: "brightness(0.45)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/20" />
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[30px] h-[30px] border border-gold flex items-center justify-center font-serif italic text-[17px] text-gold">
              B
            </span>
            <span className="font-serif text-sm tracking-[0.15em] uppercase text-white">
              La <b className="font-medium">Bastide</b>
            </span>
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold-light font-medium mb-3 flex items-center gap-2.5">
            <span className="w-6 h-px bg-gold-light" />
            Villefranche-sur-Mer
          </p>
          <h1
            className="font-serif text-[clamp(32px,8vw,48px)] leading-[1] tracking-tight mb-3"
            dangerouslySetInnerHTML={{ __html: t.raw("selectTitle") }}
          />
          <p className="text-[15px] font-light leading-relaxed opacity-90 max-w-[480px]">
            {t("selectIntro")}
          </p>
        </div>
      </section>

      <section className="px-5 py-10 max-w-[720px] mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-2.5 flex items-center gap-2.5">
          <span className="w-6 h-px bg-gold" />
          {t("selectLabel")}
        </p>

        <div className="grid gap-3 mt-6">
          {activeLogements.map((logement) => (
            <Link
              key={logement.slug}
              href={`/logement/${logement.slug}`}
              className="flex items-center gap-4 p-4 bg-white border border-[var(--line)] rounded-[14px] shadow-[var(--shadow-sm)] transition-transform active:scale-[0.98]"
            >
              <div className="w-12 h-12 rounded-[10px] bg-cream flex items-center justify-center font-serif italic text-xl text-navy shrink-0">
                B
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg text-navy font-medium leading-tight">
                  {logement.nom}
                </h3>
                <p className="text-xs text-[#777] mt-0.5">
                  {t("floor")} {logement.etage} · {logement.surface} m² ·{" "}
                  {logement.capacite} {t("capacity")}
                </p>
              </div>
              <span className="text-[11px] tracking-[0.15em] uppercase text-gold font-semibold shrink-0">
                {t("discover")} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
