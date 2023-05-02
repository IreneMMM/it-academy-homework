class Search {

    constructor(page) {
        this.searchButton = page.locator('.js-de-searchButton')
        this.searchInput = page.locator('input[type="search"]')
        this.firstProductLink = page.locator('.js-de-searchReply>li a').nth(0)
    }

    async searchProduct(product) {
        await this.searchButton.click()
        await this.searchInput.type(product, { delay: 300})
        await this.firstProductLink.waitFor()
        await this.firstProductLink.click()
    }
}

module.exports = Search;