/* eslint-disable max-len */
const {
  expect,
} = require("chai");

describe("WebdriverIO testing", () => {
  beforeEach(async () => {
    await browser.url("https://webdriver.io");
  });

  it("should change the theme color", async () => {
    await $(".toggleButton_gllP").waitForClickable();
    await $(".toggleButton_gllP").click();
    expect(await $(".toggleButton_gllP").getAttribute("title")).to.contain("currently dark mode");
  });

  it("should search the word and open the 3rd found link", async () => {
    await $(".DocSearch-Button-Container").waitForDisplayed();
    await $(".DocSearch-Button-Container").click();
    await $(".DocSearch-Input").waitForDisplayed();
    await $(".DocSearch-Input").addValue("get");
    const text = await browser.waitUntil(async () => {
      const elems = await $$(".DocSearch-Hit-title mark");
      if (elems.length === 0) {
        return false;
      }
      return elems[2];
    });
    await text.click();
    await browser.getUrl();
    expect(await browser.getUrl()).to.eq("https://webdriver.io/docs/api/element/getTagName/");
  });

  it("should click the menu link and get the url of the page", async () => {
    await $("//a[@class=\"navbar__item navbar__link\"][text()=\"API\"]").waitForClickable();
    await $("//a[@class=\"navbar__item navbar__link\"][text()=\"API\"]").click();
    await browser.getUrl();
    expect(await browser.getUrl()).to.eq("https://webdriver.io/docs/api");
  });

  it("should click the menu link, go back and get the url of the page", async () => {
    await $("//a[@class=\"navbar__item navbar__link\"][text()=\"API\"]").waitForClickable();
    await $("//a[@class=\"navbar__item navbar__link\"][text()=\"API\"]").click();
    await browser.back();
    expect(await browser.getUrl()).to.eq("https://webdriver.io/");
  });

  it("should check text of the sublist link and the title of the page", async () => {
    await $("//a[@class=\"navbar__item navbar__link\"][text()=\"API\"]").waitForClickable();
    await $("//a[@class=\"navbar__item navbar__link\"][text()=\"API\"]").click();
    await $(".menu__link--sublist").waitForExist();

    const sideMenuLinks = await $$(".menu__link--sublist");

    for (let i = 0; i < sideMenuLinks.length; i++) {
      await sideMenuLinks[i].waitForClickable();
      await sideMenuLinks[i].click();
      await $(".theme-doc-sidebar-item-link-level-2 .menu__link").waitForDisplayed();
    }

    const sideMenuSubLinks = await $$(".theme-doc-sidebar-item-link-level-2 .menu__link");

    for (let j = 0; j < sideMenuSubLinks.length; j++) {
      await sideMenuSubLinks[j].waitForClickable();
      const sideMenuSubLinksText = await sideMenuSubLinks[j].getText();
      await sideMenuSubLinks[j].click();
      await $("header h1").waitForDisplayed();
      const headerTitle = await $("header h1").getText();
      expect(headerTitle).to.be.equal(sideMenuSubLinksText);
    }
  });
});
