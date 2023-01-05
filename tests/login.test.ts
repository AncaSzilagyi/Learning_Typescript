import { chromium, test } from "@playwright/test"

test("Login test demo", async () => {

    const browser = await chromium.launch();
    //chromium is a browser engine that we will run the tests with;
    const context = await browser.newContext();
    //based on chromium browser, it is used in a way of adding 
    //multiple contexts and pages in the same time. A context will not share cookies
    //or cache with another context.
    const page = context.newPage(); //new tab

    await (await page).goto("https://ecommerce-playground.lambdatest.io/");
    await (await page).hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");
    await (await page).click("text=Login");

})