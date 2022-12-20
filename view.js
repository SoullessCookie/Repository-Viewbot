const puppeteer = require('puppeteer');

async function viewRepository(username, repository) {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the repository page
  await page.goto(`https://github.com/${username}/${repository}`);

  // Wait for the page to load
  await page.waitForSelector('h1');

  // Close the browser
  await browser.close();
}

viewRepository('user', 'repository');
