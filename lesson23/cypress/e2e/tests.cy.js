import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import signupPage from '../pages/signupPage'
import subscriptionPage from '../pages/subscriptionPage'
import docsPage from '../pages/docsPage'
import pricingPage from '../pages/pricingPage'



describe('Homepage tests', () => {
    beforeEach(() => {
        homePage.navigate('https://www.cypress.io/')
    })

    it("should check if User can visit main page after clicking on the logo", () => {
        homePage.elements.logo().click()
        cy.location("pathname").should("eq", "/")
    })

    it("should check navbar links", () => {
        homePage.elements.navbarLink()
            .should((links) => {
                expect(links).to.have.length(5)
                expect(links[0]).to.contain('Product')
                expect(links[1]).to.contain('Docs')
                expect(links[2]).to.contain('Community')
                expect(links[3]).to.contain('Company')
                expect(links[4]).to.contain('Pricing')
            })
    })

    it("should display the error message when User registers with the email which is already taken", () => {
        homePage.elements.loginButton().invoke('removeAttr', 'target').click()
        loginPage.elements.signupLink().click()
        signupPage.elements.emailLink().click()
        signupPage.login('tt4999241@gmail.com', 'test@1000')
        signupPage.elements.errorMessage().should('contain', 'That email address is already taken')
    })

    it("should check if User can subscribe to newsletter", () => {
        const email = 'test@example.com'
        homePage.elements.cookiesCloseButton().click()
        homePage.elements.subscriptionButton().click()
        cy.url().should('equal', 'https://www.cypress.io/subscribe/')
        subscriptionPage.subscribe(email)
        subscriptionPage.elements.subscriptionLegend().should('be.visible').and('have.text', 'Thank you for subscribing!')
    })

    it("should verify that the search result page is displayed and contains relevant search results for the searched text", () => {
        const text = 'each'
        let matchedText = new RegExp(text, "i");
        homePage.elements.docsLink().invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'https://docs.cypress.io/guides/overview/why-cypress')
        docsPage.searchText(text, {timeout: 10000})
        docsPage.elements.resultLinks().should('be.visible').each((link) => {
            cy.get(link).invoke('text').should('match', matchedText)
        })
    })

    it("should change the currency of the card", () => {
        const currency = 'EUR'
        const currencySymbol = '€'
        homePage.elements.navbarPricingLink().click()
        cy.url().should('contain', 'https://www.cypress.io/pricing')
        pricingPage.chooseCurrency(currency)
        pricingPage.elements.priceTitles().each((title) => {
            expect(title).to.contain(currencySymbol)
        })
    })


})