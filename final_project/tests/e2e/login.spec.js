const { test, expect } = require('@playwright/test');
const HomePage = require('../../page-objects/homePage');
const AccountPage = require('../../page-objects/accountPage');

const constants = require ('../../data/constants.json')

test.describe('Test Login functionality with valid credentials', async function () {
    let homePage;
    let accountPage;
   
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        accountPage = new AccountPage(page)
        await homePage.navigate(homePage.url)
        await homePage.popupCloseButton.click()
        await accountPage.login(constants['VALID-EMAIL'], constants['VALID-PASSWORD'])
        await homePage.popupCloseButton.click()
    })

    test('The User should see the homepage when logged in', async ({ page }) => {
       await expect(page).toHaveURL('https://www.decathlon.com/')
    });

    test('The User should see the User\'s name in the header when logged in', async () => {
        await expect(homePage.headerUserName).toContainText(constants['USER-NAME'])
    });

    test('The User should see the User\'s name in the heading when logged in', async () => {
        await homePage.gotoAccountPage()
        await expect(accountPage.headingUserName).toContainText(constants['USER-NAME'])
    });

    test('The User should navigate to User\'s account', async ({ page }) => {
        await homePage.gotoAccountPage()
        await expect(page).toHaveURL('/account')
    });

    test('The User should logout from User\'s account', async ({ page }) => {
        await homePage.headerUserName.click()
        await expect(page).toHaveURL('/account')
        await accountPage.logout()
        await expect(page).toHaveURL('/')
    });
})

test.describe('Test Login functionality with invalid credentials', async function () {
    let homePage;
    let accountPage;
   
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        accountPage = new AccountPage(page)
        await homePage.navigate(homePage.url)
        await homePage.popupCloseButton.click()
    })

    test('The User should see the error message when logged in with invalid email', async () => {
        await accountPage.login(constants['INVALID-EMAIL'], constants['VALID-PASSWORD'])
        await expect(homePage.errorMessage).toContainText('Incorrect email or password.')
    });

    test('The User should see the error message when logged in with invalid password', async () => {
        await accountPage.login(constants['VALID-EMAIL'], constants['INVALID-PASSWORD'])
        await expect(homePage.errorMessage).toContainText('Incorrect email or password.')
    });

    test('The User should see the warn message when logged in without credentials', async () => {
        await accountPage.login('', '')
        await expect(homePage.warnMessage).toContainText('All fields are required')
    });
})



