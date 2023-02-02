import { test } from '@playwright/test';

test("Download files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.locator("#textbox").type("something");
    await page.click("//button[@id='create']");
    await page.screenshot();
    await page.click("#link-to-download");
})