export const site = {
  name: 'Menuiserie Cortopassi',
  tagline: 'Menuisier artisan dans le Var',
  phone: '04 94 00 00 00',
  phoneHref: '+33494000000',
  email: 'contact@cortopassi-menuiserie.fr',
  address: {
    street: 'Atelier Cortopassi',
    postalCode: '83136',
    city: 'Sainte-Anastasie-sur-Issole',
    region: 'Var',
    country: 'FR',
  },
  hours: [
    { days: 'Lundi - Vendredi', hours: '8h00 - 18h00' },
    { days: 'Samedi', hours: 'Sur rendez-vous' },
    { days: 'Dimanche', hours: 'Fermé' },
  ],
  googleBusinessUrl: 'https://www.google.com/maps/place/?q=place_id:REMPLACER_PAR_VOTRE_FICHE',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11400.0!2d6.4658!3d43.5379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMyJzE2LjQiTiA2wrAyNyc1Ny4wIkU!5e0!3m2!1sfr!2sfr!4v0000000000000',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },
} as const;
