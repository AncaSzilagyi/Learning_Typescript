import { Page } from "@playwright/test"
export default class RegisterPage {
    constructor(public page: Page) {

    }
    async enterFirstName(firstname: string) {
        // this.page.locator("//input[@name='firstname']")
        //     .fill(firstname);
        await this.page.type("//input[@name='firstname']", firstname, {delay:100})
    }
    async enterLastName(lastname: string) {
        // this.page.locator("//input[@name='lastname']")
        //     .fill(lastname);
        await this.page.type("//input[@name='lastname']", lastname, {delay:100})
    }
    async enterEmail(email: string) {
        // this.page.locator("//input[@name='email']")
        //     .fill(email);
        await this.page.type("//input[@name='email']", email, {delay:100})
    }
    async enterTelephone(phone: string) {
        // this.page.locator("//input[@name='telephone']")
        //     .fill(phone);
        await this.page.type("//input[@name='telephone']", phone, {delay:100})
    }
    async enterPassword(password: string) {
        // this.page.locator("//input[@name='password']")
        //     .fill(password);
        await this.page.type("//input[@name='password']", password, {delay:100})
    }
    async enterConfirmPassword(password: string) {
        // this.page.locator("//input[@name='confirm']")
        //     .fill(password);
        await this.page.type("//input[@name='confirm']", password, {delay:100})
    }
    isSubscribedChecked() {
        return this.page.locator("#input-newsletter-no");
    }
    async clickTermsAndConditions() {
        await this.page.click("//input[@name='agree']");
    }
    async clickContinueToRegister() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            await this.page.click("//input[@value='Continue']")
        ]);

    }
}