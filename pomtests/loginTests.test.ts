import { expect, test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
// import myAccount from '../pages/myAccountInfoPage';

const email = "testElisa02@mailinator.com";
const password = "testPassword";
test.describe("Login tests", async () => {
    test("Login | test_01", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        console.log(email);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        await expect(page.locator("//h2[@class='card-header h5']").nth(0)).toHaveText("My Account");
    })
    test("Login with invalid email | test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const randomEmail = "testElisa" + login.generateRandomNumber(3, 1000) + "@mailinator.com";
        console.log(email);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toHaveText(" Warning: No match for E-Mail Address and/or Password.");
    })
    // test("Edit account info | test_02", async ({ page, baseURL }) => {
    //     const login = new LoginPage(page);
    //     console.log(email);
    //     await page.goto(`${baseURL}route=account/login`);
    //     await login.login(email, password);
    //     await login.clickEditAccountBtn();

    // })


})

