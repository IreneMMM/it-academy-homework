const {
    test,
    expect
} = require('@playwright/test');
const HomePage = require('../../page-objects/homePage');
const AccountPage = require('../../page-objects/accountPage');
const Search = require('../../page-objects/components/search');
const ProductListingPage = require('../../page-objects/productListingPage');
const ProductPage = require('../../page-objects/productPage');
const CartModal = require('../../page-objects/components/cartModal');
const Cart = require('../../page-objects/components/cart');
const BaseElements = require('../../helpers/baseElements')
const constants = require('../../data/constants.json')

test.describe('Test cart functionality', async function () {
    let homePage;
    let productPage;
    let productListingPage;
    let cartModal;
    let search;
    let cart;
    let accountPage;

    let purchase = {
        item: 'fleeces',
        color: 'Red',
        number: '0',
        email: constants['VALID-EMAIL'],
        password: constants['VALID-PASSWORD'],
        address: 'Riverwalk',
        apartment: '10',
        city: 'Jacksonville',
        zip: '32034',
        phone: '322219046462300'
    }

    test.beforeEach(async ({
        page
    }) => {
        homePage = new HomePage(page)
        productListingPage = new ProductListingPage(page)
        productPage = new ProductPage(page)
        cartModal = new CartModal(page)
        search = new Search(page)
        cart = new Cart(page)
        await homePage.navigate(homePage.url)
        await homePage.popupCloseButton.click()
        await page.waitForLoadState('networkidle')
        await page.waitForLoadState('domcontentloaded')
    })

    test('Check the product can be removed from the cart', async () => {
        await homePage.firstProductItem.click()
        await productPage.addToCartButton.click()
        await cartModal.viewCartButton.click()
        await cart.removeButton.click()
        await expect(cart.emptyCartMessage).toContainText('Your shopping cart is empty')
    });

    test('Check the total amount of products in the cart', async () => {
        await search.searchProduct('bikes')
        await productListingPage.chooseProductByNumber('0')
        await productListingPage.sizeButtonEnabled.click()
        await productPage.addToCartButton.click()
        await cartModal.closeButton.click()
        await search.searchProduct('gloves')
        await productListingPage.chooseProductByNumber('1')
        await productListingPage.sizeButtonEnabled.click()
        await productPage.addToCartButton.click()
        await cartModal.closeButton.click()
        await cart.cartButton.click()
        await expect(cart.itemsTotalAmount).toContainText('2')
    });

    test('Check the User can do the complete purchase process', async ({
        page
    }) => {
        accountPage = new AccountPage(page)
        await search.searchProduct(purchase.item)
        await BaseElements.openFilter(productListingPage.colorFilterButton)
        await productListingPage.chooseColor(purchase.color)
        await productListingPage.chooseProductByNumber(purchase.number)
        await productListingPage.sizeButton.click()
        await productListingPage.quantity.fill('2')
        await productPage.addToCartButton.waitFor()
        await productPage.addToCartButton.click()
        await expect.soft(cart.cartJumperImage).toBeVisible()
        await cartModal.checkoutButton.click()
        await cart.loginButton.click()
        await accountPage.emailInput.type(purchase.email)
        await accountPage.passwordInput.type(purchase.password)
        await accountPage.submitButton.click()
        await cart.fillContactInfo(purchase.address, purchase.apartment, purchase.city, purchase.zip, purchase.phone)
        await cart.continueToShipmentButton.click()    
        await cart.continueToPaymentButton.waitFor({state: "visible", timeout: 5000})
        await expect(cart.continueToPaymentButton).toBeEnabled()
    })
})