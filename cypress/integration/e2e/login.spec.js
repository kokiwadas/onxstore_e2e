import { url, login_email, login_password } from '../../config'
import NavbarToolBar from '../../page-objects/components/NavbarToolBar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login Failed Test', () => {
    before(function() {
        cy.visit(url)
        NavbarToolBar.openLoginModal()
        NavbarToolBar.clickLoginButton()
    })

    it('Login with invalid credentials', () => {
        LoginPage.login('invalidEmail@test.test', 'invalidPassword')
    })

    it('Error message is displayed', () => {
        LoginPage.displayErrorMessage()
    })
})

describe('Login / Logout Success Test', () => {
    before(function() {
        cy.visit(url)
        NavbarToolBar.openLoginModal()
        NavbarToolBar.clickLoginButton()
    })

    it('Login with valid credentials', () => {
        LoginPage.login(login_email, login_password)
        cy.isVisible('.modal-registration--signed')
    })
})

describe('Logout Test', () => {
    before(function() {
        cy.visit(url)
        NavbarToolBar.openLoginModal()
        NavbarToolBar.clickLoginButton()
        LoginPage.login(login_email, login_password)
        cy.isVisible('.modal-registration--signed')
    })

    it('Logout user', () => {
        NavbarToolBar.logOut()
        cy.isHidden('.modal-registration--signed')
    })
})

// describe('Login Success Test', () => {

// })

// describe('Login / Logout Test', () => {

//     before(function() {
//         cy.visit('http://stage.onexstore.pl/')
//     })
    
//     it('should click login button', () => {
//         cy.get('div[class="modal-slide-listener"]').click()
//         cy.get('a').contains('Zaloguj się').click()
//         cy.url().should('include', '/zaloguj/')
//         cy.get('h1').contains('Zaloguj się')
//     })

//     it('should not log in user with invalid data', () => {
        
//         cy.login('invalidUsername', 'invalidPassword')
        
//     })
    
//     it('should show error message', () => {
//         var errorMessage = "Błędny e-mail lub hasło"
//         cy.get('.form-basic__notification--error')
//         .should('be.visible')
//         .and('contain', errorMessage)
//     })

//     it('should login to the existing user account', () => {

//         cy.fixture('user').then(user => {
//             const username = user.username
//             const password = user.password
            
//             cy.login(username, password)
//         })
        
//         //add assertion to check if user is really logged in
//     })

//     it('should logout from the store', () => {
//         //TODO
//     })
// })