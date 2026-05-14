# Domaine de la Bastide — Livret d'accueil digital

PWA mobile-first servant de livret d'accueil pour le **Domaine de la Bastide** à Villefranche-sur-Mer. Chaque logement possède sa propre URL (accessible via QR code) avec ses données spécifiques, tout en partageant le contenu commun du domaine.

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| CMS | Sanity.io (schémas prêts) |
| Carte | Leaflet + react-leaflet (tuiles CARTO) |
| Météo | Open-Meteo API (sans clé) |
| i18n | next-intl (FR / EN / DE / IT / ES) |
| PWA | @ducanh2912/next-pwa |
| Hébergement | Vercel |

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

L'app sera accessible sur `http://localhost:3000`.

## Architecture des routes

```
/                            → Redirection vers la locale détectée
/[locale]                    → Page d'accueil avec sélecteur de logement
/[locale]/logement/[slug]    → Livret complet pour un logement
```

- `[locale]` : fr | en | de | it | es
- `[slug]` : identifiant du logement (ex. `suite-salisbury`, `studio-belle-epoque`)
- Le QR code de chaque logement pointe vers `/fr/logement/[slug]`

## Logements de démonstration

| Logement | Slug | Étage | Surface | Capacité |
|---|---|---|---|---|
| Suite Salisbury | `suite-salisbury` | 1er | 65 m² | 4 pers. |
| Studio Belle Époque | `studio-belle-epoque` | RDC | 35 m² | 2 pers. |

## Structure du projet

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Layout avec NextIntlClientProvider
│   │   ├── page.tsx                # Sélecteur de logement
│   │   └── logement/[slug]/
│   │       └── page.tsx            # Livret complet
│   ├── layout.tsx                  # Root layout (metadata, viewport)
│   └── page.tsx                    # Redirect vers locale
├── components/                     # 17 composants React
│   ├── TopBar.tsx                  # Barre de navigation sticky
│   ├── Hero.tsx                    # Section héro avec image
│   ├── WeatherChip.tsx             # Météo en temps réel
│   ├── QuickActions.tsx            # 4 raccourcis rapides
│   ├── StaySection.tsx             # Wi-Fi, accès, gardienne, équipement
│   ├── HistorySection.tsx          # Citation Lord Salisbury
│   ├── MapSection.tsx              # Carte Leaflet + filtres
│   ├── MapView.tsx                 # Composant carte (chargé dynamiquement)
│   ├── TransportSection.tsx        # Uber, taxi, train, bus
│   ├── ServicesSection.tsx         # Services à la demande
│   ├── EmergencySection.tsx        # Numéros d'urgence
│   ├── ThanksSection.tsx           # Message de remerciement
│   ├── BottomNav.tsx               # Navigation fixe style app
│   ├── LangModal.tsx               # Bottom sheet sélection langue
│   ├── InstallHint.tsx             # Incitation PWA (iOS Safari)
│   ├── CopyButton.tsx              # Bouton copier (Wi-Fi, codes)
│   └── LivretPage.tsx              # Assembleur principal
├── data/                           # Données statiques de démo
│   ├── domaine.ts                  # Infos communes du domaine
│   ├── logements.ts                # 2 logements de démo
│   └── pois.ts                     # 18 points d'intérêt
├── i18n/                           # Configuration i18n
│   ├── config.ts                   # Locales et défauts
│   ├── routing.ts                  # Routing next-intl
│   ├── request.ts                  # Server-side config
│   └── navigation.ts               # Navigation helpers
├── lib/
│   └── sanity.ts                   # Client Sanity
├── messages/                       # Traductions (5 langues)
│   ├── fr.json
│   ├── en.json
│   ├── de.json
│   ├── it.json
│   └── es.json
├── sanity/schemas/                 # Schémas CMS Sanity
│   ├── domaine.ts                  # Données communes
│   ├── logement.ts                 # Par logement
│   └── index.ts
└── types/
    └── index.ts                    # Types TypeScript
```

## Édition du contenu (Sanity Studio)

### Configuration initiale

1. Créer un projet sur [sanity.io](https://www.sanity.io)
2. Copier `.env.local.example` vers `.env.local` et remplir les variables
3. Déployer le Studio séparément ou l'embarquer dans l'app

### Ce que la propriétaire peut modifier

- **Mot de passe Wi-Fi** : dans le document "Logement" correspondant
- **Code portail** : dans chaque document "Logement"
- **Numéros d'urgence** : dans le document "Domaine"
- **Points d'intérêt** : ajouter/modifier/supprimer dans le document "Domaine"
- **Services et tarifs** : dans le document "Domaine"
- **Coordonnées gardienne** : dans le document "Domaine"

### Ajouter un nouveau logement

1. Aller dans Sanity Studio → Logement → Créer
2. Remplir : nom, slug, étage, surface, capacité, codes, équipement
3. Redéployer l'app (ou attendre la revalidation ISR)

## Générer un QR code pour un logement

Pour chaque logement, le QR code doit pointer vers :

```
https://guide.domaine-de-la-bastide.fr/fr/logement/[slug]
```

La langue se redéfinira automatiquement selon les préférences du device du voyageur.

Outils recommandés : [qr-code-generator.com](https://www.qr-code-generator.com) ou [goqr.me](https://goqr.me)

## Données à collecter avant mise en production

- [ ] Liste exacte des logements (noms, étages, surfaces, capacités)
- [ ] Codes portail et mots de passe Wi-Fi réels par logement
- [ ] Numéro de téléphone et WhatsApp réels de Mme Gallis
- [ ] Photos professionnelles de chaque logement
- [ ] Tarifs réels des services à la demande
- [ ] Vérification des numéros d'urgence locaux
- [ ] Coordonnées GPS exactes du domaine

## Déploiement Vercel

1. Pousser le repo sur GitHub
2. Connecter le repo à Vercel
3. Configurer les variables d'environnement si Sanity est utilisé
4. Configurer le domaine personnalisé (`guide.domaine-de-la-bastide.fr`)
