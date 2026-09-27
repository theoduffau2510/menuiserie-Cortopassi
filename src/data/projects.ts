export type ProjectCategory =
  | 'mobilier-sur-mesure'
  | 'agencement-interieur'
  | 'exterieur-terrasse'
  | 'renovation';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  city: string;
  dimensions: string;
  material: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  featured?: boolean;
}

export const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'mobilier-sur-mesure', label: 'Mobilier sur mesure' },
  { value: 'agencement-interieur', label: 'Agencement intérieur' },
  { value: 'exterieur-terrasse', label: 'Extérieur & terrasse' },
  { value: 'renovation', label: 'Rénovation' },
];

export const projects: Project[] = [
  {
    slug: 'cuisine-sur-mesure',
    title: 'Cuisine sur mesure',
    category: 'agencement-interieur',
    city: 'Var',
    dimensions: 'Sur mesure',
    material: 'Bois',
    description: 'Cuisine avec rangements intégrés, conçue pour s’adapter à la pièce.',
    image: '/images/cuisine%20sur%20mesure.jpeg',
    imageWidth: 2048,
    imageHeight: 1536,
    alt: 'Cuisine sur mesure réalisée par la Menuiserie Cortopassi dans le Var',
    featured: true,
  },
  {
    slug: 'terrasse-en-bois',
    title: 'Terrasse en bois',
    category: 'exterieur-terrasse',
    city: 'Var',
    dimensions: 'Sur mesure',
    material: 'Bois',
    description: 'Une terrasse en bois pour prolonger l’espace de vie vers l’extérieur.',
    image: '/images/terasse.jpeg',
    imageWidth: 1600,
    imageHeight: 1200,
    alt: 'Terrasse en bois réalisée par la Menuiserie Cortopassi dans le Var',
    featured: true,
  },
  {
    slug: 'table-en-bois',
    title: 'Table en bois',
    category: 'mobilier-sur-mesure',
    city: 'Var',
    dimensions: 'Sur mesure',
    material: 'Bois',
    description: 'Une table fabriquée sur mesure, avec une finition qui révèle le bois.',
    image: '/images/table.jpeg',
    imageWidth: 2048,
    imageHeight: 1783,
    alt: 'Table en bois réalisée par la Menuiserie Cortopassi dans le Var',
    featured: true,
  },
  {
    slug: 'escalier-en-bois',
    title: 'Escalier en bois',
    category: 'renovation',
    city: 'Var',
    dimensions: 'Sur mesure',
    material: 'Bois',
    description: 'Un escalier en bois conçu pour s’intégrer aux dimensions de l’espace.',
    image: '/images/Escalier.jpeg',
    imageWidth: 2380,
    imageHeight: 2975,
    alt: 'Escalier en bois réalisé par la Menuiserie Cortopassi dans le Var',
    featured: true,
  },
  {
    slug: 'volets-en-bois',
    title: 'Volets en bois',
    category: 'renovation',
    city: 'Var',
    dimensions: 'Sur mesure',
    material: 'Bois',
    description: 'Des volets en bois ajustés aux ouvertures et à la façade.',
    image: '/images/volet.jpeg',
    imageWidth: 1536,
    imageHeight: 1641,
    alt: 'Volets en bois réalisés par la Menuiserie Cortopassi dans le Var',
  },
  {
    slug: 'porte-en-bois',
    title: 'Porte en bois',
    category: 'renovation',
    city: 'Var',
    dimensions: 'Sur mesure',
    material: 'Bois',
    description: 'Une porte en bois travaillée pour s’intégrer à son ouverture.',
    image: '/images/porte.jpeg',
    imageWidth: 3002,
    imageHeight: 3871,
    alt: 'Porte en bois réalisée par la Menuiserie Cortopassi dans le Var',
  },
  {
    slug: 'fenetres-en-bois',
    title: 'Fenêtres en bois',
    category: 'renovation',
    city: 'Var',
    dimensions: 'Sur mesure',
    material: 'Bois',
    description: 'Des fenêtres en bois fabriquées et ajustées aux ouvertures.',
    image: '/images/Fen%C3%AAtre.jpeg',
    imageWidth: 1480,
    imageHeight: 1753,
    alt: 'Fenêtres en bois réalisées par la Menuiserie Cortopassi dans le Var',
  },
  {
    slug: 'realisation-bois-atelier',
    title: 'Réalisation en bois',
    category: 'mobilier-sur-mesure',
    city: 'Var',
    dimensions: 'Sur mesure',
    material: 'Bois',
    description: 'Réalisation artisanale en bois par la Menuiserie Cortopassi.',
    image: '/images/WhatsApp%20Image%202026-09-26%20at%2010.22.15%20(4).jpeg',
    imageWidth: 4032,
    imageHeight: 3024,
    alt: 'Réalisation en bois de la Menuiserie Cortopassi dans le Var',
  },
];
