export const site = {
  name: 'Menuiserie Cortopassi',
  tagline: 'Menuisier artisan dans le Var',
  phone: '06 95 67 57 55',
  phoneHref: '+33695675755',
  email: 'menuisieriecortopassi@gmail.com',
  address: {
    street: '141 impasse du stade',
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
  googleBusinessUrl:
    'https://www.google.com/maps/place/Menuiserie+Cortopassi/@43.3389263,6.1186193,17z/data=!3m1!4b1!4m6!3m5!1s0x12c9412a89761cc3:0x24f1c0a303589643!8m2!3d43.3389263!4d6.1186193!16s%2Fg%2F11zxwzm6jf?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11400.0!2d6.4658!3d43.5379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMyJzE2LjQiTiA2wrAyNyc1Ny4wIkU!5e0!3m2!1sfr!2sfr!4v0000000000000',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },
} as const;
