import { Page } from "@playwright/test"
export default class myAccount {
    constructor(public page: Page) {

    }
    generateRandomNumber(minimum: number, maximum: number){
        minimum = Math.ceil(minimum);
        maximum = Math.floor(maximum);
        return (Math.floor(Math.random()*(maximum-minimum+1))+minimum).toString();

    }

    async enterFirstName(firstname: string) {
        await this.page.type("//input[@name='firstname']", firstname, { delay: 50 })
    }
    async enterLastName(lastname: string) {
        await this.page.type("//input[@name='lastname']", lastname, { delay: 50 })
    }
    async enterEmail(email: string) {
        await this.page.type("//input[@name='email']", email, { delay: 50 })
    }
    async enterTelephone(phone: string) {
        await this.page.type("//input[@name='telephone']", phone, { delay: 50 })
    }
    
    async clickContinueToRegister() {
        // await this.page.click("//input[value='Continue']");
        Promise.all([
            // this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("//input[@value='Continue']")
        ]);


    }
}