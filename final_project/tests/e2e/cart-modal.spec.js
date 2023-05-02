const {
    test,
    expect
} = require('@playwright/test');
const HomePage = require('../../page-objects/homePage');
const ProductPage = require('../../page-objects/productPage');
const CartModal = require('../../page-objects/components/cartModal');
const BaseElements = require('../../helpers/baseElements')

test.describe('Test buying process functionality', async function () {
    let homePage;
    let productPage;
    let cartModal;

    test.beforeEach(async ({
        page
    }) => {
        homePage = new HomePage(page)
        productPage = new ProductPage(page)
        cartModal = new CartModal(page)
        await homePage.navigate(homePage.url)
        await homePage.popupCloseButton.click()
    })

    test('Check that product can be add to cart', async () => {
        await homePage.firstProductItem.click()
        await productPage.addToCartButton.click()
        const productName = await BaseElements.getText(productPage.productItemName)
        await expect(cartModal.productTitle).toContainText(productName)
    });

    test('Check the total amount of products in the cart', async () => {
        const quantity = '2'
        await homePage.firstProductItem.click()
        await productPage.productQuantity.fill(quantity)
        await productPage.addToCartButton.click()
        await expect(cartModal.productQuantity).toContainText(quantity)
    });

    test('Check the total price of 1 and more products in the cart', async () => {
        const quantity = '10'
        await homePage.firstProductItem.click()
        await productPage.productQuantity.fill(quantity)
        await productPage.addToCartButton.click()
        const totalExpectedPrice = await BaseElements.getTotalPrice(quantity, productPage.productPriceAmount)
        const totalReceivedPrice = await BaseElements.convertPriceToNumber(cartModal.totalPrice)
        expect(totalReceivedPrice).toEqual(totalExpectedPrice)
    });
})