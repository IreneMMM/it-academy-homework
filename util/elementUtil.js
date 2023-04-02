class ElementUtil {

    get fileName() {
        return `screenshot-${new Date().toISOString()}.png`;
    } 

    async doClick(element) {
        await element.waitForClickable()
        await element.click()
    }

    async doSetValue(element, value) {
        await element.waitForDisplayed()
        await element.setValue(value)
    }

    async doGetText(element) {
        await element.waitForDisplayed()
        return await element.getText()
    }

    async doSaveScreenshot(element) {
        await element.waitForDisplayed()
        await element.saveScreenshot(`./screenshots/${this.fileName}`);
    }
}

module.exports = new ElementUtil()
