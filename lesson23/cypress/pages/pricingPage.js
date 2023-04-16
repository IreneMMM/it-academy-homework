class pricingPage {

    elements = {
        currencyButton: () => cy.get('button.card').first().should('be.visible'),
        currencyOption: (currency) => cy.get('div.card button').should('be.visible').contains(currency),
        priceTitles: () => cy.get('div.items-end h2')
    }

    chooseCurrency(currency) {
        this.elements.currencyButton().click()
        this.elements.currencyOption(currency).click()
    }
}

module.exports = new pricingPage();
