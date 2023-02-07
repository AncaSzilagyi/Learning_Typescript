import { Page } from "@playwright/test"
export default class LoginPage {
    public editAccountInfoLocator: string;
    public continueBtnLocator: string;
    constructor(public page: Page) {
        this.editAccountInfoLocator = "//a[contains(text(),' Edit your account information')]";
        this.continueBtnLocator = "//input[@value='Continue']";

    }
    generateRandomNumber(minimum: number, maximum: number){
        minimum = Math.ceil(minimum);
        maximum = Math.floor(maximum);
        return (Math.floor(Math.random()*(maximum-minimum+1))+minimum).toString();

    }
    // todo to put all the general function in another class
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

    async clickEditAccountBtn() {
        await this.page.click(this.editAccountInfoLocator);
    }



}