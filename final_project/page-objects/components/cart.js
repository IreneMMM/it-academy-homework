const BaseElements = require('../../helpers/baseElements')
const ProductListingPage = require('../../page-objects/productListingPage');

class Cart {
    constructor(page) {
        this.cartButton = page.locator('a[data-gtm-id="Cart"]').nth(1)
        this.removeButton = page.locator('//button[contains(text(), "Remove")]')
        this.emptyCartMessage = page.locator('.de-u-padSides h3')
        this.checkoutEmail = page.locator('#checkout_email')
        this.firstName = page.locator('#checkout_shipping_address_first_name')
        this.lastName = page.locator('#checkout_shipping_address_last_name')
        this.address = page.locator('#checkout_shipping_address_address1')
        this.apartment = page.locator('#checkout_shipping_address_address2')
        this.city = page.locator('#checkout_shipping_address_city')
        this.zipcode = page.locator('#checkout_shipping_address_zip')
        this.phone = page.locator('#checkout_shipping_address_phone')
        this.continueToShipmentButton = page.locator('#continue_button')
        this.continueToPaymentButton = page.locator('.step__footer__continue-btn span')
        this.paypalButton = page.getByLabel('PayPal')
        this.sameAddressButton = page.getByText('Same as shipping address')
        this.completeOrderButton = page.getByRole('button', {
            name: 'Complete order'
        })
        this.paypalPageTitle = page.locator('#headerText')
        this.cartJumperImage = page.locator('.de-FreeShippingIndicator-jumper').nth(0)
        this.capchaButtonClose = page.locator('.button-submit')
        this.loginButton = page.getByText('Log in')
        this.itemsTotalPrice = page.locator('.de-QuantitySubtotal')
        this.totalPrice = page.locator('.de-CartSubtotal .de-u-textBold')
        this.itemsTotalAmount = page.locator('.de-PostAddToCart-content h2')
    }

    async fillContactInfo(address, apartment, city, zipcode, phone) {
        await this.address.type(address)
        await this.apartment.type(apartment)
        await this.city.type(city)
        await this.zipcode.type(zipcode)
        await this.phone.type(phone)
    }

}

module.exports = Cart;