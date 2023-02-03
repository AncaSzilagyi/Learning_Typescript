import { expect, test } from '@playwright/test';
import RegisterPage from '../pages/registrationPage';
import LoginPage from '../pages/loginPage';
import SpecialHotPage from '../pages/specialHotPage';
import HomePage from '../pages/homePage';

const email = "testElisa@mailinator.com";
const password = "testPassword";
test("Register test_01", async ({ page, baseURL}) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Elisa");
    await register.enterLastName("test");
    await register.enterEmail(email);
    await register.enterTelephone("1234570");
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    expect(register.isSubscribedChecked()).toBeChecked();
    await register.clickTermsAndConditions();
    await register.clickContinueToRegister();

})