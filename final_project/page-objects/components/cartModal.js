class CartModal {
    constructor(page) {
        this.cartModal = page.locator('.de-PostAddToCart')
        this.productTitle = page.locator('.de-CartItemInfo-price h3')
        this.productQuantity = page.locator('//*[contains(@class, "de-CartItemInfo-price")]//span[contains(text(), "Qty")]')
        this.totalPrice = page.locator('//*[contains(@class, "de-CartItemInfo-price")]//span[contains(@class, "de-u-textMedium")]')
        this.viewCartButton = page.locator('.js-de-PostAddToCart-viewCart')
        this.checkoutButton = page.locator('.de-PostAddToCart-content .js-de-PostAddToCart-checkout')
        this.closeButton = page.locator('button[data-test="post-add-to-cart-drawer-close-toggle"]')
    }
}

module.exports = CartModal;