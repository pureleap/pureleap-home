const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const folder = `screenshots/${timestamp}`;
  fs.mkdirSync(folder, { recursive: true });

  const urls = process.env.URLS.split(/\r?\n/).filter(Boolean);
  const resolutions = [
    { name: 'mobile', width: 375, height: 812 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 },
  ];

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const url of urls) {
    const safe = url
      .replace(/https?:\/\//, '')
      .replace(/[^a-z0-9]/gi, '_')
      .toLowerCase();
    for (const r of resolutions) {
      const jsErrors = [];
      page.on('pageerror', (error) => {
        jsErrors.push(error.message);
      });

      await page.setViewportSize({ width: r.width, height: r.height });
      await page.goto(url, { waitUntil: 'networkidle' });

      if (jsErrors.length > 0) {
        throw new Error(
          `JS errors detected on ${url} at ${r.name} resolution: ${jsErrors.join(', ')}`,
        );
      }

      const path = `${folder}/${safe}_${r.name}.png`;
      await page.screenshot({ path, fullPage: true });
      console.log(`✅ Saved ${path}`);
    }
  }

  await browser.close();
})();
