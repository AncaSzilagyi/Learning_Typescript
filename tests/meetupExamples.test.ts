import { chromium, webkit, firefox } from '@playwright/test';

(async () => {
    for (const browseType of [chromium, webkit, firefox]) {
        const browser = await browseType.launch();
        // minimize launching browsers, that's why we use context!
        const page = await browser.newPage();
        //you use context for many pages in the same browser
        await page.goto('https://www.meetup.com');
        await page.screenshot();
    }
})