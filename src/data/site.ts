// Brand details that don't change between languages.
// Everything here is placeholder content — replace with indesain's real details.
// Translatable copy lives in src/i18n/ui.ts.

export const site = {
  name: 'indesain',
  city: 'Jakarta',
  coordinates: '6.2° S, 106.8° E',
  email: 'hello@indesain.id',
  phone: '+62 21 0000 0000',
  address: ['Jl. Placeholder No. 00', 'Jakarta Selatan 12000', 'Indonesia'],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Behance', href: '#' },
  ],
};

export const stats = [
  { value: 10, suffix: '' },
  { value: 80, suffix: '+' },
  { value: 18, suffix: '' },
  { value: 3, suffix: '' },
];

export const navPaths = ['/work', '/studio', '/journal', '/contact'] as const;
