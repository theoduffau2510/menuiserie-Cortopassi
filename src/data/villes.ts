export interface Ville {
  slug: string;
  name: string;
  distance: string;
  description: string;
}

export const villes: Ville[] = [
  {
    slug: 'sainte-anastasie-sur-issole',
    name: 'Sainte-Anastasie-sur-Issole',
    distance: "commune de l'atelier",
    description:
      "Mon atelier de menuiserie est installé à Sainte-Anastasie-sur-Issole. J'y conçois et fabrique le mobilier, les agencements et les ouvrages en bois avant d'intervenir chez mes clients dans tout le Var.",
  },
  {
    slug: 'toulon',
    name: 'Toulon',
    distance: 'à 45 min de l\'atelier',
    description:
      "Menuisier à Toulon, j'accompagne particuliers et professionnels du bassin toulonnais pour tous leurs projets de mobilier sur mesure, d'agencement intérieur et de rénovation de menuiseries anciennes, avec des interventions dans les quartiers du centre-ville comme dans les résidences périphériques.",
  },
  {
    slug: 'draguignan',
    name: 'Draguignan',
    distance: "commune de l'atelier",
    description:
      "Draguignan fait partie de ma zone d'intervention. Je m'y déplace pour les projets de mobilier, d'agencement intérieur, d'aménagement extérieur et de rénovation de menuiseries.",
  },
  {
    slug: 'frejus',
    name: 'Fréjus',
    distance: 'à 30 min de l\'atelier',
    description:
      "À Fréjus, j'interviens fréquemment pour des aménagements extérieurs — terrasses en bois, pergolas — adaptés au climat méditerranéen, ainsi que pour de l'agencement intérieur dans les villas et appartements du secteur.",
  },
  {
    slug: 'saint-raphael',
    name: 'Saint-Raphaël',
    distance: 'à 35 min de l\'atelier',
    description:
      "Menuisier à Saint-Raphaël, je propose la restauration de menuiseries anciennes typiques des villas de la Côte d'Azur, ainsi que la création de mobilier sur mesure pour les résidences secondaires et principales du secteur.",
  },
  {
    slug: 'hyeres',
    name: 'Hyères',
    distance: 'à 1h de l\'atelier',
    description:
      "À Hyères, j'accompagne mes clients sur des projets de dressings sur mesure, de cuisines en bois massif et d'agencement de rangements adaptés aux appartements comme aux maisons individuelles.",
  },
  {
    slug: 'brignoles',
    name: 'Brignoles',
    distance: 'à 25 min de l\'atelier',
    description:
      "Proche de mon atelier, Brignoles fait partie de mes zones d'intervention privilégiées pour la fabrication de mobilier sur mesure et la rénovation de menuiseries dans les mas et bastides du secteur.",
  },
  {
    slug: 'le-muy',
    name: 'Le Muy',
    distance: 'à 20 min de l\'atelier',
    description:
      "Au Muy, j'interviens régulièrement pour la rénovation de fenêtres et volets en bois sur les longères provençales, ainsi que pour des créations de terrasses et de pergolas en extérieur.",
  },
  {
    slug: 'sainte-maxime',
    name: 'Sainte-Maxime',
    distance: 'à 40 min de l\'atelier',
    description:
      "À Sainte-Maxime, je réalise principalement des aménagements extérieurs — pergolas bioclimatiques, terrasses en bois exotique — ainsi que du mobilier sur mesure pour les villas du golfe de Saint-Tropez.",
  },
  {
    slug: 'grimaud',
    name: 'Grimaud',
    distance: 'à 45 min de l\'atelier',
    description:
      "Menuisier intervenant à Grimaud et dans le golfe de Saint-Tropez, je conçois du mobilier sur mesure et des agencements intérieurs haut de gamme dans le respect du style provençal local.",
  },
  {
    slug: 'la-garde',
    name: 'La Garde',
    distance: 'à 50 min de l\'atelier',
    description:
      "À La Garde, j'interviens pour des projets d'agencement intérieur — cuisines, dressings, bibliothèques — ainsi que pour la fabrication de mobilier sur mesure adapté aux appartements et maisons du secteur toulonnais.",
  },
];
