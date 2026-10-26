import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live domain. Canonical URLs, hreflang, the sitemap and structured data are all built from it,
  // so set SITE_URL (e.g. https://indesain.id) when deploying.
  site: process.env.SITE_URL ?? 'https://indesain.example',
  // Pages build to folders ("/work/index.html"), so every URL ends in a slash; links and canonicals match.
  trailingSlash: 'always',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    // Indonesian lives at the root ("/work"), English under "/en/work".
    routing: { prefixDefaultLocale: false },
  },
});
