class signupPage {

    constructor() {
        this.url = 'https://cloud.cypress.io/signup'
    }

    elements = {
        emailLink: () => cy.get('.btn-provider-email'),
        emailInput: () => cy.get('input[type="email"]'),
        passwordInput: () => cy.get('input[type="password"]'),
        submitButton: () => cy.get('button[type="submit"]'),
        errorMessage: () => cy.get('.email-group .error-message')
    }

    login(email, password) {
        this.elements.emailInput().type(email)
        this.elements.passwordInput().type(password)
        this.elements.submitButton().click()
    }
}

module.exports = new signupPage();