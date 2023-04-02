const BasePage = require('./base.page');
const elementUtil = require('../util/elementUtil');
const { Key } = require('webdriverio');

class HomePage extends BasePage {

    // page locators:

    get searchButton() {
        return $('.DocSearch-Button-Container');
    }

    get searchButtonOpened() {
        return $('.DocSearch-Input');
    }

    get searchLinks() {
        return $$(".DocSearch-Hit-title mark");
    }

    get toggleButton() {
        return $('.toggleButton_gllP');
    }

    get headerGithubLink() {
        return $('.header-github-link');
    }

    get apiLink() {
        return $("//a[@class=\"navbar__item navbar__link\"][text()=\"API\"]");
    }

    get modal() {
        return $('.DocSearch-Modal');
    }

    get navbar() {
        return $('.navbar');
    }

    //page actions:

    async changeTheme() {
        await elementUtil.doClick(this.toggleButton)
    }

    async goToGithubPage() {
        await elementUtil.doClick(this.headerGithubLink)
        return await this.headerGithubLink.getAttribute('href')
    }

    async getSearchLink(value, linkNumber) {
        await elementUtil.doClick(this.searchButton)
        await elementUtil.doSetValue(this.searchButtonOpened, value)

        const link = await browser.waitUntil(async () => {
            if (this.searchLinks.length === 0) {
                return false;
            }
            return this.searchLinks[linkNumber - 1];
        });
        await link.click();
    }

    async goToApiPage() {
        await elementUtil.doClick(this.apiLink);
    }

    async openSearchWithKeys() {
        await browser.keys([Key.Command, 'K']);
        await elementUtil.doSaveScreenshot(this.modal);
    }

    async closeSearchWithKeys() {
        await browser.keys(Key.Escape);
        await elementUtil.doSaveScreenshot(this.navbar);
    }
}

module.exports = new HomePage()