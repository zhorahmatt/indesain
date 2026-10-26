import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live domain. Canonical URLs, hreflang, the sitemap and structured data are all built from it.
  // SITE_URL overrides it, e.g. for a staging deploy.
  site: process.env.SITE_URL ?? 'https://indesain.web.id',
  // Pages build to folders ("/work/index.html"), so every URL ends in a slash; links and canonicals match.
  trailingSlash: 'always',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    // Indonesian lives at the root ("/work"), English under "/en/work".
    routing: { prefixDefaultLocale: false },
  },
});
