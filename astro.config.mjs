import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://indesain.example',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    // Indonesian lives at the root ("/work"), English under "/en/work".
    routing: { prefixDefaultLocale: false },
  },
});
