export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'mobilier-sur-mesure',
    title: 'Mobilier sur mesure',
    summary: 'Meubles uniques conçus et fabriqués dans notre atelier du Var.',
    description:
      "Menuisier artisan installé à Sainte-Anastasie-sur-Issole, je conçois et fabrique du mobilier sur mesure — tables, bibliothèques, meubles TV, têtes de lit — dans mon atelier du Var. Chaque pièce est pensée avec vous selon vos contraintes d'espace, vos essences de bois préférées (chêne, noyer, hêtre) et votre budget. Que vous habitiez à Toulon, Draguignan, Fréjus ou ailleurs dans le département, je me déplace pour prendre les mesures sur place et vous proposer un meuble qui s'intègre parfaitement à votre intérieur, avec des finitions artisanales soignées et des matériaux durables.",
    icon: 'hammer',
  },
  {
    slug: 'agencement-interieur',
    title: 'Agencement intérieur',
    summary: 'Cuisines, dressings et rangements pensés pour optimiser votre espace.',
    description:
      "L'agencement intérieur sur mesure permet de tirer le meilleur parti de chaque pièce, même les plus atypiques. Basé dans le Var, j'interviens à Toulon, Hyères, La Garde et dans les communes voisines pour concevoir des cuisines en bois massif, des dressings sur mesure, des bibliothèques intégrées ou des meubles de rangement adaptés aux volumes de votre logement. En tant que menuisier artisan, je privilégie des matériaux de qualité et une fabrication locale, avec un accompagnement du premier croquis jusqu'à la pose finale, pour un résultat fonctionnel et esthétique qui valorise durablement votre bien.",
    icon: 'layout',
  },
  {
    slug: 'exterieur-terrasse',
    title: 'Extérieur & terrasse',
    summary: 'Terrasses, pergolas et clôtures en bois adaptées au climat varois.',
    description:
      "Le climat méditerranéen du Var impose de choisir des bois adaptés pour les aménagements extérieurs. Je réalise des terrasses en bois exotique ou en bois local traité classe 4, des pergolas bioclimatiques, des claustras et des clôtures pour les particuliers de Fréjus, Saint-Raphaël, Sainte-Maxime et de toute la côte varoise. Chaque projet extérieur est étudié pour résister aux embruns et au soleil tout en conservant un rendu chaleureux et naturel. Je me déplace pour discuter avec vous des essences et finitions les plus adaptées à votre extérieur.",
    icon: 'sun',
  },
  {
    slug: 'renovation',
    title: 'Rénovation',
    summary: "Restauration de menuiseries anciennes, portes, fenêtres et escaliers.",
    description:
      "De nombreuses maisons provençales du Var possèdent des menuiseries anciennes qui méritent d'être restaurées plutôt que remplacées. Je propose un service de rénovation d'escaliers, de portes, de volets et de fenêtres en bois, incluant ponçage, traitement, teinte et vitrification, ainsi que le remplacement de pièces abîmées à l'identique. J'interviens dans les bastides et longères du Muy, de Brignoles et des villages alentours pour redonner vie à vos menuiseries d'origine tout en améliorant leur isolation, dans le respect du cachet architectural de votre bien.",
    icon: 'wrench',
  },
];
