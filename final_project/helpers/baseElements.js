const BasePage = require("../page-objects/basePage");

class BaseElements extends BasePage {

    constructor(page) {
        super(page);
    }

    // Get inner text from listitem and return Array
    async getTextFromListOfItems(element, page) {
        await page.locator(element)
        const list = await page.$$(element)
        const items = await Promise.all((list).map(async (item) => {
            return await item.innerText()
        }))
        return items;
    }

    // Delete $ and 3 last symbols from price
    async convertPriceToNumber(price) {
        const priceText = await this.getText(price)
        const slicedText = await priceText.slice(1, -3)
        let convertedPrice;

        if (slicedText.includes(',')) {
            convertedPrice = Number(slicedText.replace(/\,/g, ''))
        } else {
            convertedPrice = Number(slicedText)
        }
        return convertedPrice;
    }

    // Convert list of prices to numbers
    async convertPriceListToNumberList(priceList) {
        const convertedPriceList = await priceList.map(price => Number(price.replace(/[,$]/g, '')))
        return convertedPriceList;
    }

    async openFilter(filterName) {
        await filterName.waitFor()
        await filterName.click()
    }

    async sortByType(sortType) {
        await sortType.waitFor()
        await sortType.click()
    }

    async getText(element) {
        await element.waitFor()
        return await element.innerText()
    }

    async getTotalPrice(quantity, price) {
        await price.waitFor()
        const convertedPrice = await this.convertPriceToNumber(price)
        const totalPrice = Number(quantity) * convertedPrice
        return totalPrice
    }
}

module.exports = new BaseElements();