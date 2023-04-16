class docsPage {

    elements = {
        searchButton: () =>  cy.get('.DocSearch.DocSearch-Button'),
        searchInput: () => cy.get('input.DocSearch-Input').should('be.visible'),
        resultLinks: () => cy.get('span.DocSearch-Hit-title')
    }

    searchText(text) {
        this.elements.searchButton().click()
        this.elements.searchInput().clear().type(text, {delay:300})
    }
}

module.exports = new docsPage();
