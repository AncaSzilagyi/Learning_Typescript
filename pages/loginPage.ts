import { Page } from "@playwright/test"
export default class LoginPage {
    constructor(public page: Page) {
    }
    async enterEmail(email: string) {
        this.page.locator("#input-email")
            .type(email);
    }
    async enterLoginPassword(password: string) {
        this.page.locator("#input-password")
            .type(password);
    }

    //todo write test case for Forgotten Password link 

    async clickLoginBtn(){
        await this.page.click("//input[@value='Login']")
    }

}