/* esbuild-ignore ui */

import type {
  RenderDocumentProps,
  ReactPropertiesType,
} from '@goldstack/template-ssr';

const renderDocument = async (
  props: RenderDocumentProps<ReactPropertiesType>
): Promise<string> => {
  const tailwindPath = await props.staticFileMapper.resolve({
    name: 'tailwind.css',
  });

  let tailwindConfig: string | undefined = undefined;
  if (process.env.GOLDSTACK_DEPLOYMENT === 'local') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config = require('./../tailwind.config');

    tailwindConfig = JSON.stringify(config.theme);
  }

  const template = `
<!DOCTYPE html>
<html>
  <head>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-SRW19ZZQLW"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-SRW19ZZQLW');
    </script>

    <meta charset="UTF-8">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${props.injectIntoHead}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

   
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css?family=Roboto%20Slab&display=swap" rel="stylesheet">
    <link
    href="https://fonts.googleapis.com/css?family=Hind%20Vadodara&display=swap"
    rel="stylesheet">
    <link rel="manifest" href="/site.webmanifest">
    ${
      process.env.GOLDSTACK_DEPLOYMENT === 'local'
        ? `<script src="https://cdn.tailwindcss.com?plugins=typography"></script>
        `
        : ''
    }
    ${
      tailwindConfig
        ? `<script>tailwind.config = {theme: ${tailwindConfig}};</script>
        `
        : ''
    }
    ${`<link rel="stylesheet" type="text/css" href="${tailwindPath}"  />`}

  </head>
  <body>
    ${props.injectIntoBody}
  </body>
</html>
  `;
  return template;
};

export default renderDocument;
