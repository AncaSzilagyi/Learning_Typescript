import { Page } from "@playwright/test"
export default class LoginPage {
    constructor(public page: Page) {
    }
    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }
    async enterEmail(email: string) {
        await this.page.type("//input[@name='email']", email, { delay: 50 })
    }
    async enterLoginPassword(password: string) {
        await this.page.type("//input[@name='password']", password, { delay: 50 })

    }

    //todo write test case for Forgotten Password link 

    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            await this.page.click("//input[@value='Login']")
        ])
    }

}