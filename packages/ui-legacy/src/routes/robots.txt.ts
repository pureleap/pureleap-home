/* eslint-disable @typescript-eslint/no-unused-vars */
import type { SSRHandler } from '@goldstack/template-ssr';

export const handler: SSRHandler = async (event, context) => {
  // Base URL will be determined by environment
  const baseUrl =
    process.env.GOLDSTACK_DEPLOYMENT === 'prod'
      ? 'https://pureleap.com'
      : 'https://dev-pureleap.home.mxro.de';

  return {
    body: `Sitemap: ${baseUrl}/sitemap.xml
User-agent: *
${process.env.GOLDSTACK_DEPLOYMENT !== 'prod' ? 'Disallow: /' : ''}`,
    headers: {
      'Content-Type': 'text/plain',
    },
    statusCode: 200,
  };
};

export default handler;
