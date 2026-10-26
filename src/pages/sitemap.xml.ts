import type { APIRoute } from 'astro';
import { navPaths } from '../data/site';
import { defaultLang, getPosts, getProjects, langs, localizePath, slugOf } from '../i18n/utils';

// Every page in both languages, each listing its translations (hreflang) so search engines pair them up.
export const GET: APIRoute = async ({ site }) => {
  const projects = await getProjects(defaultLang);
  const posts = await getPosts(defaultLang);
  const pages: { path: string; lastmod?: Date }[] = [
    { path: '/' },
    ...navPaths.map((path) => ({ path })),
    ...projects.map((p) => ({ path: `/work/${slugOf(p)}` })),
    ...posts.map((p) => ({ path: `/journal/${slugOf(p)}`, lastmod: p.data.date })),
  ];

  const href = (path: string, lang: (typeof langs)[number]) => new URL(localizePath(path, lang), site).href;
  const urls = pages.flatMap(({ path, lastmod }) =>
    langs.map((lang) =>
      [
        '  <url>',
        `    <loc>${href(path, lang)}</loc>`,
        lastmod && `    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>`,
        ...langs.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${href(path, alt)}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${href(path, defaultLang)}"/>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n'),
    ),
  );

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
