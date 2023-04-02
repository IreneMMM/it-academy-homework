const homepage = require('../pages/home.page')
const apipage = require('../pages/api.page');

describe('home page tests', async () => {
    beforeEach(async () => {
        await homepage.navigate('https://webdriver.io/');
    });

    it('should change the theme color', async () => {
        await homepage.changeTheme();
        expect(await homepage.toggleButton.getAttribute("title")).toHaveText("currently dark mode");
    });

    it("should search the word and open the 1st found link", async () => {
        await homepage.getSearchLink('get', 1);
        expect(await browser.getUrl()).toHaveUrl("https://webdriver.io/docs/api/element/getValue/");
    });

    it("should click the Github link and get the url of the opened page", async () => {
        await browser.switchWindow(await homepage.goToGithubPage())
        expect(await browser.getUrl()).toHaveUrl("https://github.com/webdriverio/webdriverio");
    });

    it("should click the menu link, go back and get the url of the page", async () => {
        await homepage.goToApiPage();
        await browser.back();
        expect(await browser.getUrl()).toHaveUrl("https://webdriver.io/");
    });

    it("should open the sublink and check the text of the header", async () => {
        await homepage.goToApiPage();
        expect(await browser.getUrl()).toHaveUrl("https://webdriver.io/docs/api");
        await apipage.clickLink(apipage.sideMenuLinks, 6); 
        expect(await apipage.clicLinkAndGetLinkText(apipage.sideMenuSubLinks, 1)).toHaveText(await apipage.getHeaderText())
    });

    it("should open search modal with keys - 'Command + K' and close with 'Escape'", async () => {
        await homepage.openSearchWithKeys();
        expect (await homepage.modal).toBeEnabled();
        await homepage.closeSearchWithKeys();
        expect (await homepage.navbar).toBeEnabled();
    })
})