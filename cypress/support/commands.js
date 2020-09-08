import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

Cypress.Commands.add('login', (username, password) => {
    cy.get('#login-form  input[type="email"]').as('emailInput')
    cy.get('#login-form  input[type="password"]').as('passwordInput')
    cy.get('#login-form  button[type="submit"]').as('loginButton')
    
    cy.get('@emailInput').clear().type(username)
    cy.get('@passwordInput').clear().type(password)
    cy.get('@loginButton').click() 
})

addMatchImageSnapshotCommand({
    failureTreshold: 0.00,
    failureTresholdType: 'percent',
    customDiffConfig: { treshold: 0.0 },
    capture: "viewport"
})

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist')
})

Cypress.Commands.add("setViewport", (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
})

