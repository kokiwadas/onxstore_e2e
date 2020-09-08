import BasePage from '../BasePage'

export default class RegistrationPage extends BasePage {

    static typeUsername(username) {
        cy.get('#signup-form').find('[name=name]').type(username)
    }

    static typeEmail(email) {
        cy.get('#signup-form').find('[name=email]').type(email, { parseSpecialCharSequences: false })
    }

    static typePhoneNumber(phoneNumber) {
        cy.get('#signup-form').find('[name=phone]').type(phoneNumber)
    }

    static typePassword(password) {
        cy.get('#signup-form').find('[name=password]').type(password)
    }

    static selectPrivacyPolicy() {
        cy.get('[name=termsAndCond]').click( { force: true } )
    }

    static selectAllCheckboxes() {
        cy.get('[name=selectAll]').click()
    }

    static selectNewsletterEmail() {
        cy.get('[name=newsletterEmail]').click()
    }

    static selectNewsletterSMS() {
        cy.get('[name=newsletterSMS]').click()
    }

    static clickCreateAccount() {
        cy.get('#signup-form').find('[type=submit]').click()
    }

    static register(username, email, phoneNumber, password) {
        this.typeUsername(username)
        this.typeEmail(email)
        this.typePhoneNumber(phoneNumber)
        this.typePassword(password)
        this.selectPrivacyPolicy()
        this.clickCreateAccount()
    }
}