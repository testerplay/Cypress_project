    it.only('locked'), () => {
        cy.visit('https://www.selenium.dev/')
        cy.get(span).contains('navbar-toggler-icon')
    }



    