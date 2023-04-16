const BasePage = require('./base.page');
const elementUtil = require('../util/elementUtil')

class ApiPage extends BasePage {

    // page locators:
    
    get sideMenuLinks() {
        return $$(".menu__link--sublist");
    }

    get sideMenuSubLinks() {
        return $$(".theme-doc-sidebar-item-link-level-2 .menu__link");
    }

    get header() {
        return $("header h1");
    }

    //page actions:
    
    async clickLink(list, linkNumber) {
        if (linkNumber > list.length) {
            await elementUtil.doClick(list[linkNumber - 1]);
        }
        return 'Choose another linknumber'
    }

    async clicLinkAndGetLinkText(list, linkNumber) {
        if (linkNumber > list.length) {
            await elementUtil.doClick(list[linkNumber - 1]);
            console.log(await elementUtil.doGetText(list[linkNumber - 1]));
        }
        return 'Choose another linknumber'
    }

    async getHeaderText() {
        await elementUtil.doGetText(this.header);
    }
}

module.exports = new ApiPage();