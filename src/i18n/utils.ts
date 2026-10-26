import { getCollection } from 'astro:content';
import { ui } from './ui';
import { site } from '../data/site';

export type Lang = keyof typeof ui;

export const defaultLang: Lang = 'id';
export const langs = Object.keys(ui) as Lang[];

export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** "/work" → "/work/" for Indonesian, "/en/work/" for English. Always ends in a slash, matching the built pages. */
export function localizePath(path: string, lang: Lang) {
  const clean = path.replace(/\/+$/, '');
  return `${lang === defaultLang ? '' : `/${lang}`}${clean}/`;
}

/** Removes the language prefix so the same page can be linked in another language. */
export function unlocalizePath(pathname: string) {
  const stripped = pathname.replace(new RegExp(`^/(${langs.join('|')})(?=/|$)`), '');
  return stripped || '/';
}

/** The current page's path without language prefix; the 404 page points to the homepage instead of itself. */
export function pagePath(pathname: string) {
  const path = unlocalizePath(pathname);
  return /^\/404(\.html)?\/?$/.test(path) ? '/' : path;
}

/** Content entries live in "<lang>/<slug>.md"; the slug is shared by both languages. */
export function slugOf(entry: { id: string }) {
  return entry.id.split('/').slice(1).join('/');
}

export async function getProjects(lang: Lang) {
  const all = await getCollection('work', (entry) => entry.id.startsWith(`${lang}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getPosts(lang: Lang) {
  const all = await getCollection('journal', (entry) => entry.id.startsWith(`${lang}/`));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function projectPaths(lang: Lang) {
  const projects = await getProjects(lang);
  return projects.map((project, i) => ({
    params: { slug: slugOf(project) },
    props: { project, next: projects[(i + 1) % projects.length] },
  }));
}

export async function postPaths(lang: Lang) {
  const posts = await getPosts(lang);
  return posts.map((post) => ({ params: { slug: slugOf(post) }, props: { post } }));
}

/** Opening hours as display rows, e.g. "Senin–Rabu · 07.30–21.00"; days not listed are shown as closed. */
export function openingHours(lang: Lang) {
  const t = ui[lang].contact;
  const time = (value: string) => (lang === 'id' ? value.replace(':', '.') : value);
  const rows = site.hours.map((h) => ({
    days: `${t.days[h.days[0]]}–${t.days[h.days[h.days.length - 1]]}`,
    time: `${time(h.opens)}–${time(h.closes)}`,
  }));
  return [...rows, { days: t.days.Su, time: t.closed }];
}

/** WhatsApp chat link with a ready-to-send greeting in the page language. */
export function whatsappLink(lang: Lang) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(ui[lang].hero.whatsappMessage)}`;
}

/** FAQ entries with their {tokens} filled from the site data, shared by the FAQ section and its structured data. */
export function faqItems(lang: Lang) {
  const t = ui[lang];
  const values: Record<string, string> = {
    address: site.address.join(', '),
    hours: openingHours(lang)
      .map((row) => `${row.days} ${row.time}`)
      .join(', '),
    founded: String(site.founded),
    cities: String(site.cities),
    steps: t.process.steps.map((step) => step.title.toLowerCase()).join(', '),
    phone: site.phone,
    email: site.email,
  };
  return t.faq.items.map(({ q, a }) => ({ q, a: a.replace(/\{(\w+)\}/g, (_, key) => values[key]) }));
}
