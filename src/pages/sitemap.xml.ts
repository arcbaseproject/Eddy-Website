import type { APIRoute } from 'astro';

// Six pages; a hand-written list beats a sitemap integration.
const pages = ['/', '/features/', '/install/', '/changelog/', '/privacy/', '/terms/'];

export const GET: APIRoute = ({ site }) => {
  // Empty until `site` is set in astro.config.mjs, since sitemap URLs must be absolute.
  const urls = !site ? '' : pages.map(p => `<url><loc>${new URL(p, site)}</loc></url>`).join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
