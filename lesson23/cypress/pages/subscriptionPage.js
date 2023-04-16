const xpath = require('@cypress/xpath')

class subscriptionPage {

    constructor() {
        this.url = 'https://cloud.cypress.io/subscribe'
    }

    elements = {
        subscriptionInput: () => cy.get('input[type=email]', { timeout: 10000}).should('be.enabled'),
        subscriptionButton: () => cy.xpath('//button[contains(text(), "Subscribe today")]').should('be.enabled'),
        subscriptionLegend: () => cy.get('.card-marketing-static h2'),
    }
    
    subscribe(email) {
        this.elements.subscriptionInput().wait(3000).type(email, {delay:300})
        this.elements.subscriptionInput().should('have.value', email)
        this.elements.subscriptionButton().click()
    }
}

module.exports = new subscriptionPage();