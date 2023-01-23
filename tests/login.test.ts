import { chromium, test } from "@playwright/test"

test("Login test demo", async () => {

    const browser = await chromium.launch({
        headless: false
    });
    //chromium is a browser engine that we will run the tests with;
    const context = await browser.newContext();
    //based on chromium browser, it is used in a way of adding 
    //multiple contexts and pages in the same time. A context will not share cookies
    //or cache with another context.
    const page = context.newPage(); //new tab

    await (await page).goto("https://ecommerce-playground.lambdatest.io/");
    await (await page).hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");
    // await (await page).click("text=Login");
    await (await page).click("'Login'"); // this is the same command as the one from above
    await (await page).fill("input[name='email']", "test_elisa@gmail.com");
    await (await page).fill("input[name='password']", "testPassword123");
    await (await page).click("input[value='Login']");
})

//test_elisa@gmail.com
//testPassword123