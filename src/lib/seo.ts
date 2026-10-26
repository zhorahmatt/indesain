// Structured data (schema.org JSON-LD) and share-image helpers used by Base.astro and the views.
// Every page emits one @graph: the studio, the website, the page itself, its breadcrumb trail,
// plus whatever the page is about (a project, an article, a list, the FAQ). Nodes link by @id.
import { site } from '../data/site';
import { localizePath, useTranslations, type Lang } from '../i18n/utils';

type Node = Record<string, unknown>;

const days = { Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday' } as const;

export const inLanguage = (lang: Lang) => (lang === 'id' ? 'id-ID' : 'en');

export const studioId = (base: URL) => new URL('/#studio', base).href;
export const websiteId = (base: URL) => new URL('/#website', base).href;

/** Absolute 1200×630 share image. Unsplash URLs are re-cropped; other paths are resolved against the site. */
export function shareImage(src: string | undefined, base: URL) {
  const url = new URL(src ?? site.shareImage, base);
  if (url.hostname === 'images.unsplash.com') {
    url.searchParams.set('w', '1200');
    url.searchParams.set('h', '630');
    url.searchParams.set('fit', 'crop');
  }
  return url.href;
}

export function studioNode(lang: Lang, base: URL): Node {
  const t = useTranslations(lang);
  return {
    '@type': ['ProfessionalService', 'GeneralContractor'],
    '@id': studioId(base),
    name: site.legalName,
    alternateName: site.name,
    description: t.description,
    slogan: t.hero.services,
    url: new URL(localizePath('/', lang), base).href,
    logo: { '@type': 'ImageObject', '@id': new URL('/#logo', base).href, url: new URL(site.logo, base).href, width: 512, height: 512, caption: site.name },
    image: shareImage(undefined, base),
    foundingDate: String(site.founded),
    telephone: site.phoneHref.replace('tel:', ''),
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.postal.street,
      addressLocality: site.postal.locality,
      addressRegion: site.postal.region,
      postalCode: site.postal.code,
      addressCountry: site.postal.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.maps.link,
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => days[d as keyof typeof days]),
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      { '@type': 'City', name: site.city },
      { '@type': 'AdministrativeArea', name: site.postal.region },
      { '@type': 'Country', name: 'Indonesia' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: site.phoneHref.replace('tel:', ''),
      email: site.email,
      availableLanguage: ['Indonesian', 'English'],
    },
    knowsAbout: [...t.hero.services.split(' · '), ...t.services.groups.flatMap((g) => g.items)],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.services.label.replace(/[()]/g, ''),
      itemListElement: t.services.groups.map((g) => ({
        '@type': 'OfferCatalog',
        name: g.group,
        itemListElement: g.items.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      })),
    },
    sameAs: site.social.map((s) => s.href),
  };
}

export function websiteNode(lang: Lang, base: URL): Node {
  return {
    '@type': 'WebSite',
    '@id': websiteId(base),
    url: new URL('/', base).href,
    name: site.name,
    alternateName: site.legalName,
    description: useTranslations(lang).description,
    inLanguage: ['id-ID', 'en'],
    publisher: { '@id': studioId(base) },
  };
}

export function breadcrumbNode(url: string, trail: { name: string; url: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: trail.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url })),
  };
}

/** An ordered list of links, for index pages (projects, stories). */
export function itemListNode(url: string, items: { name: string; url: string }[]): Node {
  return {
    '@type': 'ItemList',
    '@id': `${url}#list`,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, url: item.url })),
  };
}

export function faqNode(url: string, items: { q: string; a: string }[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
