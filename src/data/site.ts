// Brand details that don't change between languages.
// Location, phone, hours and Instagram come from the studio's Google Maps listing.
// `email` and the project count in `stats` are still placeholders. Translatable copy lives in src/i18n/ui.ts.

export const site = {
  name: 'indesain',
  legalName: 'INDESAIN ARSITEK',
  founded: 2011,
  cities: 10,
  city: 'Makassar',
  coordinates: '5.18° S, 119.45° E',
  geo: { lat: -5.1815142, lng: 119.4478294 },
  plusCode: 'RC9X+94',
  email: 'hello@indesain.id',
  phone: '0852-4266-2257',
  phoneHref: 'tel:+6285242662257',
  address: ['Jl. Karaeng Bontotangnga VI No. 7', 'Karunrung, Kec. Rappocini', 'Makassar, Sulawesi Selatan 90221'],
  postal: {
    street: 'Jl. Karaeng Bontotangnga VI No. 7, Karunrung, Kec. Rappocini',
    locality: 'Makassar',
    region: 'Sulawesi Selatan',
    code: '90221',
    country: 'ID',
  },
  maps: {
    link: 'https://maps.app.goo.gl/USobWM1mmdyQy4D7A',
    embed:
      'https://maps.google.com/maps?q=INDESAIN%20ARSITEK%2C%20Jl.%20Karaeng%20Bontotangnga%20VI%20No.7%2C%20Makassar&ll=-5.1815142,119.4478294&z=16&output=embed',
  },
  // Opening hours in 24h time; day labels are translated in ui.ts.
  hours: [
    { days: ['Mo', 'Tu', 'We'], opens: '07:30', closes: '21:00' },
    { days: ['Th', 'Fr', 'Sa'], opens: '07:00', closes: '21:00' },
  ],
  social: [{ label: 'Instagram', href: 'https://www.instagram.com/indesain_makassar/' }],
  // Default share image (Unsplash stand-in, cropped to 1200×630 by shareImage in src/lib/seo.ts).
  shareImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80',
  logo: '/brand/logo.png',
  logoMark: '/brand/logo-mark.png',
};

// Years in practice counts up from the founding year at build time (2026 → 15).
export const stats = [
  { value: new Date().getFullYear() - site.founded, suffix: '' },
  { value: 80, suffix: '+' },
  { value: 70, suffix: '+' },
  { value: site.cities, suffix: '' },
];

export const navPaths = ['/work', '/studio', '/journal', '/contact'] as const;
