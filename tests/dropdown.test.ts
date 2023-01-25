import { test } from "@playwright/test"

test("Handling dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        // value: "Friday"
        index: 3
    });
    await page.waitForTimeout(3000);
})