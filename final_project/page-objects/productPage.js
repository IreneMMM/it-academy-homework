const BasePage = require('./basePage');
const BaseElements = require('../helpers/baseElements')

class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        //this.selectSizeLabel = page.locator('.js-de-SizeLabel')
        //this.sizeButton = page.locator('.js-de-SizeSwatches').nth(1)
        this.productPriceAmount = page.locator('.js-de-CurrentPrice .js-de-PriceAmount').nth(0)
        this.addToCartButton = page.locator('#AddToCart')
        this.productItemName = page.locator('.de-ProductTitleLockup h1') 
        this.productQuantity = page.locator('#Quantity')
    }

}

module.exports = ProductPage;