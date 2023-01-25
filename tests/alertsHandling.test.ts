import {test } from "@playwright/test";

test("handling alerts", async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    await page.locator("button:has-text('Click Me')").nth(0).click();
})