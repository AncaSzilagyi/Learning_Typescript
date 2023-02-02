import { test } from '@playwright/test';

test("Download files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.locator("#textbox").type("something");
    await page.click("//button[@id='create']");
    await page.screenshot();
    await page.click("#link-to-download");
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ]);
    const path = await download[0].path();
    console.log(path);
})