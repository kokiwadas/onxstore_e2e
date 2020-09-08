import BasePage from "../BasePage"

export default class LoginPage extends BasePage {
    static login(email, password) {
        cy.login(email, password)
    }

    static clickForgotPasswordLink() {
        cy.get('.password-reset__link').click()
    }

    static clickRegisterButton() {
        cy.get('button[@type="submit"]').click()
    }

    static displayErrorMessage() {
        cy.isVisible('.form-basic__notification--error')
    }

}