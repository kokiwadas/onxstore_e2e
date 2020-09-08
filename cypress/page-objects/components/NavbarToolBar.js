export default class NavbarToolBar {

    static openLoginModal() {
        cy.get('.modal-slide-listener').click()
    }

    static clickLoginButton() {
        cy.get('.modal-registration__btn>.offer__submit').eq(0).click()
    }

    static clickRegisterButton() {
        cy.get('.modal-registration__btn>.offer__submit').eq(1).click()
    }

    static logOut() {
        this.openLoginModal()
        cy.get('.link-log-out').click()
    }

    static mySubsriptions() {
        this.openLoginModal()
        cy.get('.modal-registration__link').eq(0).click()
    }

    static mySubsriptions() {
        this.openLoginModal()
        cy.get('.modal-registration__link').eq(0).click()
    }

    static accountSettings() {
        this.openLoginModal()
        cy.get('.modal-registration__link').eq(1).click()
    }

    static editAccount() {
        this.openLoginModal()
        cy.get('.modal-registration__link').eq(2).click()
    }

    static clickOnexstoreLogo() {
        cy.get('.navbar__logo--onexstore').click()
    }

    static clickMicrosoftPartnerLogo() {
        cy.get('.navbar__logo--partner').click()
    }

    static openSmallBasket() {
        cy.get('.modal-box--basket').click()
    }
}