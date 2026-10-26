import type { APIRoute } from 'astro';
import { site, stats } from '../data/site';
import { ui } from '../i18n/ui';
import { faqItems, getPosts, getProjects, langs, localizePath, openingHours, slugOf, type Lang } from '../i18n/utils';

// llms.txt (https://llmstxt.org): a plain summary of the studio and its pages for AI assistants.
// Built from the same data as the site, so facts here never drift from the pages.
export const GET: APIRoute = async ({ site: base }) => {
  const en = ui.en;
  const link = (path: string, lang: Lang) => new URL(localizePath(path, lang), base).href;

  const sections = await Promise.all(
    langs.map(async (lang) => {
      const t = ui[lang];
      const pages = (['/', '/work', '/studio', '/journal', '/contact'] as const).map((path) => {
        const key = path === '/' ? 'home' : (path.slice(1) as Exclude<keyof typeof t.seo, 'home'>);
        return `- [${t.seo[key].title}](${link(path, lang)}): ${t.seo[key].description}`;
      });
      const projects = (await getProjects(lang)).map(
        (p) =>
          `- [${p.data.title}](${link(`/work/${slugOf(p)}`, lang)}): ${t.work.categories[p.data.category]}, ${p.data.location}, ${p.data.year}. ${p.data.summary}`,
      );
      const posts = (await getPosts(lang)).map(
        (p) => `- [${p.data.title}](${link(`/journal/${slugOf(p)}`, lang)}): ${p.data.excerpt}`,
      );
      const faq = faqItems(lang).map(({ q, a }) => `- **${q}** ${a}`);

      return [
        `## ${t.langName}`,
        '',
        `### ${t.footer.pages}`,
        ...pages,
        '',
        `### ${t.work.pageLabel}`,
        ...projects,
        '',
        `### ${t.journal.pageLabel}`,
        ...posts,
        '',
        `### ${t.faq.title}`,
        ...faq,
      ].join('\n');
    }),
  );

  const body = [
    `# ${site.name} (${site.legalName})`,
    '',
    `> ${en.description}`,
    '',
    `- Services: ${en.hero.services}`,
    `- Founded: ${site.founded}, in ${site.city}, Indonesia`,
    `- Track record: ${stats[1].value}${stats[1].suffix} projects completed, ${stats[2].value}${stats[2].suffix} clients, projects in ${site.cities} cities`,
    `- Address: ${site.address.join(', ')} (${site.coordinates}, Plus Code ${site.plusCode})`,
    `- Opening hours: ${openingHours('en')
      .map((row) => `${row.days} ${row.time}`)
      .join(', ')}`,
    `- Phone: ${site.phone}`,
    `- WhatsApp: https://wa.me/${site.whatsapp}`,
    `- Email: ${site.email}`,
    `- Map: ${site.maps.link}`,
    ...site.social.map((s) => `- ${s.label}: ${s.href}`),
    `- Languages: Indonesian (default, ${link('/', 'id')}) and English (${link('/', 'en')})`,
    '',
    ...sections.flatMap((section) => [section, '']),
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
