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
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        await 

    })


    // test("Edit account info | test_02", async ({ page, baseURL }) => {
    //     const login = new LoginPage(page);
    //     console.log(email);
    //     await page.goto(`${baseURL}route=account/login`);
    //     await login.login(email, password);
    //     await login.clickEditAccountBtn();

    // })


})

