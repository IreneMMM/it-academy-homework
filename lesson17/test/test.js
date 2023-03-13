const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');
const {
    expect
} = require('chai');

describe('chromedriver tests', async function () {
    let driver;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({
            implicit: 10000
        });
    });

    after(async () => {
        await driver.quit();
    });

    it('Home page title should have text "ChromeDriver"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const title = await driver.findElement(By.xpath("//h1[@id = 'h.p_ID_13']/span")).getText();
        expect(title).to.equal('ChromeDriver');
    });

    it('Extensions Page title should have text "Chrome Extensions"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const menuItem = await driver.findElement(By.xpath('//a[contains(@class, "jgXgSe")][contains(text(), "Chrome Extensions")]'));
        await menuItem.click();
        const extensionsTitle = await driver.findElement(By.xpath('//h1[@id = "h.p_ID_13"]/span'));
        driver.executeScript("arguments[0].style.backgroundColor = 'yellow'", extensionsTitle);
        expect(await extensionsTitle.getText()).to.equal('Chrome Extensions');
    });

    it('The first link after searching the word "driver" should contain the word "driver"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const search = await driver.findElement(By.xpath('//*[@role="button"][contains(@class, "iWs3gf")]'));     
        await search.click();
        const input = await driver.findElement(By.css('input[type="search"]'));           
        await input.sendKeys('driver', Key.ENTER);
        const firstResult = await driver.findElement(By.xpath('//div[contains(@class, "gtazFe")][1]//div[contains(@class, "yDWqEe")]'));
        expect(await firstResult.getText()).to.contain('driver');
    });

    it('The url after redirecting to the page "Mobile Emulation" should contain the words "/mobile-emulation"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const mainLink = await driver.findElement(By.xpath('//a[contains(@class, "jgXgSe")][contains(text(), "More")]'));  
        await driver.actions().move({origin: mainLink}).perform();
        const subLink = await driver.findElement(By.xpath('//a[contains(@class, "HlqNPb")][contains(text(), "Mobile Emulation")][@data-level="2"]')); 
        await driver.wait(until.elementIsVisible(subLink));  
        await subLink.click();
        expect(await driver.wait(until.urlContains('/mobile-emulation'), 20000));
    });
});
