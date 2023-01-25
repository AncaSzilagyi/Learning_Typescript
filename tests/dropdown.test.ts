import { test } from "@playwright/test"

test("Handling dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        label: "Tuesday" //you can also select the option by "value"
    });
    await page.waitForTimeout(3000);
})