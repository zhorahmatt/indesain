import type { APIRoute } from 'astro';

// Search engines and AI assistants (answer engines and their crawlers) may read everything.
// To opt out of AI model training only, change "Allow" to "Disallow" for GPTBot, Google-Extended, Applebot-Extended and CCBot.
const aiAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Meta-ExternalAgent',
  'CCBot',
];

export const GET: APIRoute = ({ site }) =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      ...aiAgents.map((agent) => `User-agent: ${agent}`),
      'Allow: /',
      '',
      `Sitemap: ${new URL('/sitemap.xml', site)}`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
