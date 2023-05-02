const {
    test,
    expect
} = require('@playwright/test');
const HomePage = require('../../page-objects/homePage');
const Search = require('../../page-objects/components/search');
const ProductListingPage = require('../../page-objects/productListingPage');
const BaseElements = require('../../helpers/baseElements')


test.describe('Test Search functionality', async function () {
    let homePage;
    let search;
    let productListingPage;

    test.beforeEach(async ({
        page
    }) => {
        homePage = new HomePage(page)
        search = new Search(page)
        productListingPage = new ProductListingPage(page)
        await homePage.navigate(homePage.url)
        await homePage.popupCloseButton.click()
    })

    test('The User can search the 1-word product', async () => {
        const searchedProduct = 'bike'
        await search.searchProduct(searchedProduct)
        await expect(productListingPage.resultPageHeader).toContainText(searchedProduct)
    })

    test('The User can search the 2-words product', async () => {
        const searchedProduct = 'bike gloves'
        await search.searchProduct(searchedProduct)
        await expect(productListingPage.resultPageHeader).toContainText(searchedProduct)
    })
})

test.describe('Test Search results', async function () {
    let homePage;
    let search;
    let productListingPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        search = new Search(page)
        productListingPage = new ProductListingPage(page)
        await homePage.navigate(homePage.url)
        await homePage.popupCloseButton.click()
    })

    test('The title of product item should contain searched product text', async () => {
        const searchedProduct = 'ball'
        const searchedProductRegExp = new RegExp('ball', 'i')
        await search.searchProduct(searchedProduct)
        const productItems = await productListingPage.getListOfProductNames()

        for (const productItem of productItems) {
            await productItem.toLowerCase()
            await expect(productItem).toMatch(searchedProductRegExp)
        }
    })

    test('Should sort products by price (low to high)', async ({ page }) => {
        const searchedProduct = 'tents'
        await search.searchProduct(searchedProduct)
        await BaseElements.sortByType(productListingPage.sortTypeLowToHigh)
        await page.waitForLoadState('networkidle');
        
        const priceList = await productListingPage.getListOfPrices()
        const convertedPrices = await BaseElements.convertPriceListToNumberList(priceList)
        for (let i = 0; i < convertedPrices.length - 1; i++) {
            expect(convertedPrices[i]).toBeLessThanOrEqual(convertedPrices[i + 1]);
        }
    })

    test('Should filter products by product category', async () => {
        const searchedProduct = 'tents'
        const filterItem = 'Shelter'
        const filterItemRegExp = new RegExp(filterItem, 'i')

        await search.searchProduct(searchedProduct)
        await BaseElements.openFilter(productListingPage.productFilterButton)
        await productListingPage.chooseProductFilterType(filterItem)

        const productItems = await productListingPage.getListOfProductNames()
        for (const productItem of productItems) {
            await productItem.toLowerCase()
            await expect(productItem).toMatch(filterItemRegExp)
        }
    })

    test('Chosen filters should be visible in the Filters Selected group', async () => {
        const searchedProduct = 'socks'
        const colors = ['Red', 'Yellow', 'Blue']
        await search.searchProduct(searchedProduct)
        await BaseElements.openFilter(productListingPage.colorFilterButton)
        await productListingPage.chooseColors(colors)
        const filtersSelected = await BaseElements.getTextFromListOfItems(productListingPage.filterSelected, productListingPage.page)

        for (const text of filtersSelected) {
            await text.toLowerCase()
            await expect(colors).toContain(text)
        }
    })

})