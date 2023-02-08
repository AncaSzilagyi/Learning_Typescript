import { expect, test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import MyAccount from '../pages/myAccountInfoPage'
// import myAccount from '../pages/myAccountInfoPage';

const email = "testElisa02@mailinator.com";
const password = "testPassword";
test.describe("Modify personal information", async () => {
    test("Modify first and last names | test_01", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const myAccount = new MyAccount(page);
        const updatedFirstName = "Elisa - updated";
        const updatedLastName = "last name - updated";
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);

        await homePage.clickEditAccountInfo();
        await myAccount.modifyFirstName(updatedFirstName);
        await myAccount.clickContinueToRegister();
        await expect (page.locator("//div[@class='alert alert-success alert-dismissible']")).toHaveText(" Success: Your account has been successfully updated.");
        await homePage.clickEditAccountInfo();

        expect(await myAccount.getFirstName()).toEqual(updatedFirstName);

        await myAccount.modifyLastName(updatedLastName);
        await myAccount.clickContinueToRegister();
        await expect (page.locator("//div[@class='alert alert-success alert-dismissible']")).toHaveText(" Success: Your account has been successfully updated.");
        await homePage.clickEditAccountInfo();

        expect(await myAccount.getFirstName()).toEqual(updatedFirstName);
        expect(await myAccount.getLastName()).toEqual(updatedLastName);

    })


    // test("Edit account info | test_02", async ({ page, baseURL }) => {
    //     const login = new LoginPage(page);
    //     console.log(email);
    //     await page.goto(`${baseURL}route=account/login`);
    //     await login.login(email, password);
    //     await login.clickEditAccountBtn();

    // })


})

