const {
    test,
    expect
} = require('@playwright/test');
const HomePage = require('../../page-objects/homePage')
const constants = require('../../data/constants.json')

test.describe('Test buying process functionality', async function () {
    let homePage;

    test.beforeEach(async ({
        page
    }) => {
        homePage = new HomePage(page)
        await homePage.navigate(homePage.url)
        await homePage.popupCloseButton.click()
    })

    test('Check the number of sport categories', async () => {
        await expect(homePage.categoryName).toHaveCount(12)
    });

    test('Check the User can make a subscription', async () => {
        await homePage.subscribe(constants['VALID-EMAIL'])
        await expect(homePage.successMessage).toContainText('Thanks for subscribing!')
    });
})    