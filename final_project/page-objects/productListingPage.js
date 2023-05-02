const BasePage = require('./basePage');
const BaseElements = require('../helpers/baseElements')

class ProductListingPage extends BasePage {
    constructor(page) {
        super(page);
        this.resultPageHeader = page.locator('.adept-search__query-visualization__term u')
        this.productTitle = '.adept-product-display__title'
        this.productPrice = '.adept-product-display__price span:not(.adept-product-display__price__regular--strikeout)'
        this.sortTypeLowToHigh = page.locator('label[for="checkbox--Price-(Low-to-high)"]')
        this.productFilterButton = page.locator('button[aria-label="product category Filter"]')
        this.colorFilterButton = page.locator('button[aria-label="Color Filter"]')
        this.filterSelected = '.adept-selection-list__text'
        this.sizeButton = page.getByRole('button', { name: 'Select the size 3XL before adding this product to your cart. 3XL' })
        this.sizeButtonActive = page.locator('.js-de-SizeSwatches-option.de-is-active')
        this.sizeButtonEnabled = page.locator('.de-SwatchObjects--size:not(.de-is-outofstock)').nth(0)
        this.quantity = page.locator('#Quantity')
    }

    async chooseProductByNumber(number) {
        await this.page.locator(this.productTitle).nth(number).click()
    }

    async getListOfProductNames() {
       return await BaseElements.getTextFromListOfItems(this.productTitle, this.page)
    }
    
    async getListOfPrices() {
        return await BaseElements.getTextFromListOfItems(this.productPrice, this.page)
    }

    async chooseProductFilterType(type) {
        await this.page.locator(`label[for="checkbox-PRODUCT_TYPE-${type}"]`).waitFor()
        await this.page.locator(`label[for="checkbox-PRODUCT_TYPE-${type}"]`).click()
    }

    async chooseColor(color) {
            await this.page.locator(`button[title="${color}"]`).waitFor()
            await this.page.locator(`button[title="${color}"]`).click()
    }

    async chooseColors(colorList) {
        for(const color of colorList) {
            await this.chooseColor(color)
        }
    }

}

module.exports = ProductListingPage;