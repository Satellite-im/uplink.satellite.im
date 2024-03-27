const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/Satellite-im/uplink.satellite.im/settings/pages');

  const isLive = await page.evaluate(() => {
    const liveElement = document.querySelector('div.Box-row.d-flex.flex-items-center');
    return liveElement && liveElement.innerText.includes('Your site is live');
  });

  await browser.close();
  
  return isLive;
})();
