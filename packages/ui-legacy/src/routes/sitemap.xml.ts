/* eslint-disable @typescript-eslint/no-unused-vars */
import type { SSRHandler } from '@goldstack/template-ssr';

export const handler: SSRHandler = async (event, context) => {
  // Base URL will be determined by environment
  const baseUrl =
    process.env.GOLDSTACK_DEPLOYMENT === 'prod'
      ? 'https://pureleap.com'
      : 'https://dev-pureleap.home.mxro.de';

  // Define available routes
  const routes = [
    '', // root route
    'anti-spam-policy',
    'privacy-policy',
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route ? '/' + route : ''}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return {
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml',
    },
    statusCode: 200,
  };
};

export default handler;
