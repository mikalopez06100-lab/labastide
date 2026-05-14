import { defineType, defineField } from "sanity";

const localizedString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      { name: "fr", title: "Français", type: "string" },
      { name: "en", title: "English", type: "string" },
      { name: "de", title: "Deutsch", type: "string" },
      { name: "it", title: "Italiano", type: "string" },
      { name: "es", title: "Español", type: "string" },
    ],
  });

const localizedText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      { name: "fr", title: "Français", type: "text" },
      { name: "en", title: "English", type: "text" },
      { name: "de", title: "Deutsch", type: "text" },
      { name: "it", title: "Italiano", type: "text" },
      { name: "es", title: "Español", type: "text" },
    ],
  });

export const domaineSchema = defineType({
  name: "domaine",
  title: "Domaine (données communes)",
  type: "document",
  fields: [
    defineField({ name: "horaireCheckin", title: "Horaire check-in", type: "string" }),
    defineField({ name: "horaireCheckout", title: "Horaire check-out", type: "string" }),
    defineField({
      name: "gardienne",
      title: "Gardienne",
      type: "object",
      fields: [
        { name: "nom", title: "Nom", type: "string" },
        { name: "telephone", title: "Téléphone", type: "string" },
        { name: "whatsapp", title: "WhatsApp (numéro sans +)", type: "string" },
      ],
    }),
    defineField({
      name: "adresse",
      title: "Adresse",
      type: "object",
      fields: [
        { name: "rue", title: "Rue", type: "string" },
        { name: "codePostal", title: "Code postal", type: "string" },
        { name: "ville", title: "Ville", type: "string" },
        { name: "lat", title: "Latitude", type: "number" },
        { name: "lng", title: "Longitude", type: "number" },
      ],
    }),
    localizedText("histoire1", "Histoire — Paragraphe 1"),
    localizedText("histoire2", "Histoire — Paragraphe 2"),
    localizedText("histoire3", "Histoire — Paragraphe 3"),
    defineField({
      name: "services",
      title: "Services à la demande",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            localizedString("titre", "Titre"),
            localizedText("description", "Description"),
            { name: "tarif", title: "Tarif", type: "string" },
            localizedString("messageWhatsapp", "Message WhatsApp pré-rempli"),
          ],
        },
      ],
    }),
    defineField({
      name: "urgences",
      title: "Numéros d'urgence",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            localizedString("label", "Label"),
            { name: "numero", title: "Numéro", type: "string" },
            {
              name: "type",
              title: "Type d'affichage",
              type: "string",
              options: { list: ["grand", "liste"] },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "transports",
      title: "Transports",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            localizedString("titre", "Titre"),
            localizedString("description", "Description"),
            { name: "lien", title: "Lien", type: "url" },
            { name: "type", title: "Type", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "pois",
      title: "Points d'intérêt",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "nom", title: "Nom", type: "string" },
            {
              name: "categorie",
              title: "Catégorie",
              type: "string",
              options: {
                list: ["beach", "food", "village", "market", "shop", "activity"],
              },
            },
            localizedString("meta", "Description courte"),
            { name: "lat", title: "Latitude", type: "number" },
            { name: "lng", title: "Longitude", type: "number" },
            { name: "lienGoogleMaps", title: "Lien Google Maps", type: "url" },
          ],
        },
      ],
    }),
  ],
});
