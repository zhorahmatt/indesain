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

/** "/work" → "/work" for Indonesian, "/en/work" for English. */
export function localizePath(path: string, lang: Lang) {
  if (lang === defaultLang) return path;
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
}

/** Removes the language prefix so the same page can be linked in another language. */
export function unlocalizePath(pathname: string) {
  const stripped = pathname.replace(new RegExp(`^/(${langs.join('|')})(?=/|$)`), '');
  return stripped || '/';
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
