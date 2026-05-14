import { defineType, defineField } from "sanity";

export const logementSchema = defineType({
  name: "logement",
  title: "Logement",
  type: "document",
  fields: [
    defineField({ name: "nom", title: "Nom du logement", type: "string" }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "nom" } }),
    defineField({ name: "etage", title: "Étage", type: "string" }),
    defineField({ name: "surface", title: "Surface (m²)", type: "number" }),
    defineField({ name: "capacite", title: "Capacité (personnes)", type: "number" }),
    defineField({ name: "codePortail", title: "Code portail", type: "string" }),
    defineField({ name: "wifiSsid", title: "Nom du réseau Wi-Fi", type: "string" }),
    defineField({ name: "wifiPassword", title: "Mot de passe Wi-Fi", type: "string" }),
    defineField({
      name: "equipement",
      title: "Équipement",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Frigo / congélateur", value: "fridge" },
          { title: "Four & micro-ondes", value: "oven" },
          { title: "Machine à café", value: "coffee" },
          { title: "Lave-linge", value: "washer" },
          { title: "Lave-vaisselle", value: "dishwasher" },
          { title: "Climatisation", value: "ac" },
          { title: "Téléviseur", value: "tv" },
          { title: "Wi-Fi haut débit", value: "wifi" },
          { title: "Sèche-cheveux", value: "hair" },
          { title: "Fer à repasser", value: "iron" },
          { title: "Aspirateur", value: "vacuum" },
        ],
      },
    }),
    defineField({ name: "photos", title: "Photos", type: "array", of: [{ type: "image" }] }),
    defineField({
      name: "notesParticulieres",
      title: "Notes particulières",
      type: "object",
      fields: [
        { name: "fr", title: "Français", type: "text" },
        { name: "en", title: "English", type: "text" },
        { name: "de", title: "Deutsch", type: "text" },
        { name: "it", title: "Italiano", type: "text" },
        { name: "es", title: "Español", type: "text" },
      ],
    }),
    defineField({
      name: "actif",
      title: "Actif",
      type: "boolean",
      initialValue: true,
      description: "Désactiver un logement sans le supprimer",
    }),
  ],
  preview: {
    select: { title: "nom", subtitle: "etage" },
  },
});
