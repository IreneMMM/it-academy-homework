const BasePage = require("./basePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.url = 'https://www.decathlon.com/';
        this.popupCloseButton = page.locator('.js-closePopup')
        this.shopNowButton = page.getByText('Shop Now')
        this.headerUserName = page.locator('a[data-gtm-id="My Account"] span.de-MenuBar-label');
        this.errorMessage = page.locator('div.errors')
        this.warnMessage = page.locator('.notifications p')
        this.firstProductItem = page.locator('.slick-track article.slick-current').nth(0)
        this.categoryName = page.locator('.de-section13Text')
        this.emailInput = page.locator('.desktop-footer #email_28361008')
        this.imInButton = page.locator('.desktop-footer button.needsclick')
        this.successMessage = page.locator('.ql-font-avalon-bold')

    }

    async gotoAccountPage() {
        await this.headerUserName.click()
    }

    async subscribe(email) {
        await this.emailInput.type(email)
        await this.imInButton.click()
    }
}

module.exports = HomePage;