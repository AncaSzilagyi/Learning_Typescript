import { Page } from "@playwright/test"
export default class MyAccount {
    public firstNameInput: string;
    public lastNameInput: string;
    public emailInput: string;
    public telephoneInput: string;
    constructor(public page: Page) {
        this.firstNameInput = "//input[@name='firstname']";
        this.lastNameInput = "//input[@name='lastname']";
        this.emailInput = "//input[@name='email']";
        this.telephoneInput = "//input[@name='telephone']";
    }
    generateRandomNumber(minimum: number, maximum: number) {
        minimum = Math.ceil(minimum);
        maximum = Math.floor(maximum);
        return (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum).toString();

    }

    async modifyFirstName(firstname: string) {
        await this.page.fill(this.firstNameInput, "");
        await this.page.type(this.firstNameInput, firstname, { delay: 50 })
    }
    getFirstName(){
        return this.page.locator(this.firstNameInput).getAttribute('value');
    }
    async modifyLastName(lastname: string) {
        await this.page.fill(this.firstNameInput, "");
        await this.page.type(this.lastNameInput, lastname, { delay: 50 })
    }
    getLastName(){
        return this.page.locator(this.lastNameInput).getAttribute('value');
    }
    async modifyEmail(email: string) {
        //unused yet
        await this.page.fill(this.firstNameInput, "");
        await this.page.type(this.emailInput, email, { delay: 50 })
    }
    async modifyTelephone(phone: string) {
        //unused yet
        await this.page.fill(this.firstNameInput, "");
        await this.page.type(this.telephoneInput, phone, { delay: 50 })
    }

    async clickContinueToRegister() {
        Promise.all([
            this.page.click("//input[@value='Continue']")
        ]);


    }
}