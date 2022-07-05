describe('Silenium', () => {
    it('Silenium btn', () => {
        cy.visit('https://www.selenium.dev/')
        cy.get('button[class="navbar-toggler collapsed"]')
        cy.should('be.visible')
    })
})