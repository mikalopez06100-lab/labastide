import type { POI } from "@/types";

export const pois: POI[] = [
  {
    cat: "beach", color: "#3a96d4", name: "Plage des Marinières",
    meta: { fr: "Plage publique · 1,2 km", en: "Public beach · 1.2 km", de: "Öffentlicher Strand · 1,2 km", it: "Spiaggia pubblica · 1,2 km", es: "Playa pública · 1,2 km" },
    lat: 43.7066, lng: 7.3148, gmaps: "https://maps.google.com/?q=Plage+des+Marinières+Villefranche",
  },
  {
    cat: "beach", color: "#3a96d4", name: "Plage de Passable",
    meta: { fr: "Cap Ferrat · 3,5 km", en: "Cap Ferrat · 3.5 km", de: "Cap Ferrat · 3,5 km", it: "Cap Ferrat · 3,5 km", es: "Cap Ferrat · 3,5 km" },
    lat: 43.6917, lng: 7.3286, gmaps: "https://maps.google.com/?q=Plage+de+Passable",
  },
  {
    cat: "beach", color: "#3a96d4", name: "Paloma Beach",
    meta: { fr: "Plage privée · Saint-Jean-Cap-Ferrat", en: "Private beach · Saint-Jean-Cap-Ferrat", de: "Privatstrand · Saint-Jean-Cap-Ferrat", it: "Spiaggia privata · Saint-Jean-Cap-Ferrat", es: "Playa privada · Saint-Jean-Cap-Ferrat" },
    lat: 43.6883, lng: 7.3375, gmaps: "https://maps.google.com/?q=Paloma+Beach",
  },
  {
    cat: "food", color: "#d4673a", name: "La Mère Germaine",
    meta: { fr: "Bistrot de bord de mer · €€€", en: "Seaside bistro · €€€", de: "Bistro am Meer · €€€", it: "Bistrot sul mare · €€€", es: "Bistró frente al mar · €€€" },
    lat: 43.7041, lng: 7.3107, gmaps: "https://maps.google.com/?q=La+Mère+Germaine+Villefranche",
  },
  {
    cat: "food", color: "#d4673a", name: "Le Cosmo",
    meta: { fr: "Cuisine méditerranéenne · €€", en: "Mediterranean cuisine · €€", de: "Mediterrane Küche · €€", it: "Cucina mediterranea · €€", es: "Cocina mediterránea · €€" },
    lat: 43.7044, lng: 7.3105, gmaps: "https://maps.google.com/?q=Le+Cosmo+Villefranche",
  },
  {
    cat: "food", color: "#d4673a", name: "La Trinquette",
    meta: { fr: "Restaurant du port · €€", en: "Harbour restaurant · €€", de: "Hafenrestaurant · €€", it: "Ristorante del porto · €€", es: "Restaurante del puerto · €€" },
    lat: 43.7062, lng: 7.3173, gmaps: "https://maps.google.com/?q=La+Trinquette+Villefranche",
  },
  {
    cat: "village", color: "#b8935b", name: "Vieille ville de Villefranche",
    meta: { fr: "Ruelles, Citadelle, port", en: "Old town, Citadel, harbour", de: "Altstadt, Zitadelle, Hafen", it: "Centro storico, Cittadella, porto", es: "Casco antiguo, Ciudadela, puerto" },
    lat: 43.7050, lng: 7.3110, gmaps: "https://maps.google.com/?q=Villefranche-sur-Mer+vieille+ville",
  },
  {
    cat: "village", color: "#b8935b", name: "Èze Village",
    meta: { fr: "Village médiéval perché · 7 km", en: "Hilltop medieval village · 7 km", de: "Bergdorf · 7 km", it: "Borgo medievale · 7 km", es: "Pueblo medieval · 7 km" },
    lat: 43.7280, lng: 7.3611, gmaps: "https://maps.google.com/?q=Eze+village",
  },
  {
    cat: "village", color: "#b8935b", name: "Saint-Paul-de-Vence",
    meta: { fr: "Cité des arts · 30 km", en: "City of arts · 30 km", de: "Stadt der Künste · 30 km", it: "Città delle arti · 30 km", es: "Ciudad de las artes · 30 km" },
    lat: 43.6975, lng: 7.1224, gmaps: "https://maps.google.com/?q=Saint-Paul-de-Vence",
  },
  {
    cat: "village", color: "#b8935b", name: "Monaco",
    meta: { fr: "Principauté · 15 km", en: "Principality · 15 km", de: "Fürstentum · 15 km", it: "Principato · 15 km", es: "Principado · 15 km" },
    lat: 43.7384, lng: 7.4246, gmaps: "https://maps.google.com/?q=Monaco",
  },
  {
    cat: "village", color: "#b8935b", name: "Nice · Vieux-Nice",
    meta: { fr: "Cours Saleya, Promenade · 5 km", en: "Cours Saleya, Promenade · 5 km", de: "Cours Saleya, Promenade · 5 km", it: "Cours Saleya, Promenade · 5 km", es: "Cours Saleya, Promenade · 5 km" },
    lat: 43.6961, lng: 7.2754, gmaps: "https://maps.google.com/?q=Vieux+Nice",
  },
  {
    cat: "market", color: "#7ba83a", name: "Marché de Villefranche",
    meta: { fr: "Tous les matins · Place Amélie Pollonais", en: "Every morning · Place Amélie Pollonais", de: "Jeden Morgen · Place Amélie Pollonais", it: "Ogni mattina · Place Amélie Pollonais", es: "Cada mañana · Place Amélie Pollonais" },
    lat: 43.7045, lng: 7.3109, gmaps: "https://maps.google.com/?q=Marché+Villefranche-sur-Mer",
  },
  {
    cat: "market", color: "#7ba83a", name: "Cours Saleya · Nice",
    meta: { fr: "Fleurs & produits frais · 6 j/7", en: "Flowers & produce · 6 days/wk", de: "Blumen & Frischwaren · 6 Tage/Woche", it: "Fiori & freschi · 6 g/7", es: "Flores & frescos · 6 d/sem" },
    lat: 43.6953, lng: 7.2762, gmaps: "https://maps.google.com/?q=Cours+Saleya",
  },
  {
    cat: "shop", color: "#666", name: "Casino Shop",
    meta: { fr: "Supérette · 5 min à pied", en: "Mini-market · 5 min walk", de: "Supermarkt · 5 Min. zu Fuß", it: "Minimarket · 5 min a piedi", es: "Supermercado · 5 min a pie" },
    lat: 43.7095, lng: 7.3215, gmaps: "https://maps.google.com/?q=Casino+Shop+Villefranche",
  },
  {
    cat: "shop", color: "#666", name: "Intermarché Beaulieu",
    meta: { fr: "Supermarché complet · 1,5 km", en: "Full supermarket · 1.5 km", de: "Vollsupermarkt · 1,5 km", it: "Supermercato · 1,5 km", es: "Supermercado · 1,5 km" },
    lat: 43.7080, lng: 7.3300, gmaps: "https://maps.google.com/?q=Intermarché+Beaulieu-sur-Mer",
  },
  {
    cat: "activity", color: "#a83a7b", name: "Villa Ephrussi de Rothschild",
    meta: { fr: "Villa & jardins · Cap Ferrat", en: "Villa & gardens · Cap Ferrat", de: "Villa & Gärten · Cap Ferrat", it: "Villa & giardini · Cap Ferrat", es: "Villa & jardines · Cap Ferrat" },
    lat: 43.6920, lng: 7.3309, gmaps: "https://maps.google.com/?q=Villa+Ephrussi+de+Rothschild",
  },
  {
    cat: "activity", color: "#a83a7b", name: "Sentier des Douaniers",
    meta: { fr: "Randonnée côtière · Cap Ferrat", en: "Coastal walk · Cap Ferrat", de: "Küstenwanderung · Cap Ferrat", it: "Sentiero costiero · Cap Ferrat", es: "Sendero costero · Cap Ferrat" },
    lat: 43.6843, lng: 7.3392, gmaps: "https://maps.google.com/?q=Sentier+des+Douaniers+Cap+Ferrat",
  },
  {
    cat: "activity", color: "#a83a7b", name: "Musée Cocteau",
    meta: { fr: "Chapelle Saint-Pierre · Villefranche", en: "Chapelle Saint-Pierre · Villefranche", de: "Chapelle Saint-Pierre · Villefranche", it: "Chapelle Saint-Pierre · Villefranche", es: "Chapelle Saint-Pierre · Villefranche" },
    lat: 43.7042, lng: 7.3128, gmaps: "https://maps.google.com/?q=Chapelle+Saint-Pierre+Villefranche",
  },
];

export const catColors: Record<string, string> = {
  beach: "#3a96d4",
  food: "#d4673a",
  village: "#b8935b",
  market: "#7ba83a",
  shop: "#666",
  activity: "#a83a7b",
};

export const catEmojis: Record<string, string> = {
  beach: "🏖",
  food: "🍴",
  village: "🏛",
  market: "🥖",
  shop: "🛒",
  activity: "🎯",
};
