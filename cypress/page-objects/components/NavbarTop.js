export default class NavbarTop {

    
    static getPhoneNumber() {
        cy.get('.nav-top__link')
    }

    static getEmail() {
        cy.get('.nav-top__link')
    }

    static clickOnB2b() {
        cy.get('.nav-top__link')[2].click()
    }

    static clickOnCooperate() {
        cy.get('.nav-top__link')[3].click()
    }
}