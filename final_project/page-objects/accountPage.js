const BasePage = require("./basePage");

class AccountPage extends BasePage {
    constructor(page) {
        super(page);
        this.url = 'https://www.decathlon.com/account';
        this.signInButton = page.locator('a[data-gtm-id="My Account"]')
        this.emailInput = page.locator('#CustomerEmail')
        this.passwordInput = page.locator('#CustomerPassword')
        this.submitButton = page.locator('input[value="Sign In"]')
        this.headingUserName = page.locator('h1.accountHeading');
        this.logoutButton = page.locator('.js-de-logout')
    }


    async login(email, password) {
        await this.signInButton.click()
        await this.emailInput.type(email, {delay: 100})
        await this.passwordInput.type(password, {delay: 100})
        await this.submitButton.click()
    }

    async logout() {
        await this.logoutButton.click()
    }
}

module.exports = AccountPage;
