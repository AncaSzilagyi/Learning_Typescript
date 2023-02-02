import { Page } from "@playwright/test"
export default class RegisterPage {
    constructor(public page: Page) {

    }
    async enterFirstName(firstname: string) {
        this.page.locator("#input-firstname")
            .type(firstname);
    }
    async enterLastName(lastname: string) {
        this.page.locator("#input-lastname")
            .type(lastname);
    }
    async enterEmail(email: string) {
        this.page.locator("#input-email")
            .type(email);
    }
    async enterTelephone(phone: string) {
        this.page.locator("#input-telephone")
            .type(phone);
    }
    async enterPassword(password: string) {
        this.page.locator("#input-password")
            .type(password);
    }
    async enterConfirmPassword(password: string) {
        this.page.locator("#input-confirm")
            .type(password);
    }
    async isSubscribed() {
        return await this.page.locator("#input-newsletter-no").isChecked();
    }
    async clickTermsAndConditions() {
        await this.page.click("#input-agree");
    }
    async clickContinueToRegister() {
        await this.page.click("//input[@value='Continue']");
    }

}