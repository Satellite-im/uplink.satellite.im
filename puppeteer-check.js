const puppeteer = require('puppeteer');

const checkPagesStatus = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  let isLive = false;

  while (!isLive) {
    await page.goto('https://github.com/Satellite-im/uplink.satellite.im/settings/pages');

    isLive = await page.evaluate(() => {
      const liveElement = document.querySelector('div.Box-row.d-flex.flex-items-center');
      return liveElement && liveElement.innerText.includes('Your site is live');
    });

    if (!isLive) {
      // Wait for 10 seconds before checking again
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }

  await browser.close();

  return isLive;
};

checkPagesStatus().then((isLive) => {
  console.log('GitHub Pages status:', isLive ? 'Live' : 'Not live');
});
