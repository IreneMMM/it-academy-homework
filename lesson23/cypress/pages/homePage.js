class homePage {

    elements = {
        logo: () =>  cy.get('img[alt="Logo"]'),
        loginButton: () => cy.contains('Log In'),
        subscriptionButton: () => cy.contains('Subscribe'),
        navbarLink: () => cy.get('.nav-bar .nav-bar-link'),
        navbarPricingLink: () => cy.get('.nav-bar .nav-bar-link').contains('Pricing'),
        cookiesCloseButton: () => cy.get('.osano-cm-dialog__close.osano-cm-close'),
        docsLink: () => cy.get('a[href="https://on.cypress.io"]').first()
    }

    navigate(url) {
        cy.visit(url);
    }
}

module.exports = new homePage();
