import { url_register } from '../../config'
import RegistrationPage from '../../page-objects/pages/RegistrationPage'


describe('Registration Success Test', () => {
    before(function() {
        cy.visit(url_register)
    })

    const test_id = new Date().getTime()
    const incoming_mailbox = 'onexstore.emailtesting+' + test_id + '@gmail.com'

    it('Register with valid data', () => {
        RegistrationPage.register('Test Testowicz', incoming_mailbox, '123123123', 'Sheffield1')
        })
    
    it('Second registration step page is displayed', () => {
        cy.get('.section-box__title').should('contain.text', 'Jeszcze jeden krok')
    })

    it('Registration email received', function() {
      cy.task("gmail:check", {
          options: {
              from: "it@onxg.pl",
              to: incoming_mailbox,
              subject: "Test OnexStore - aktywacja konta",
              wait_time_sec: 10, // Poll interval (in seconds)
              max_wait_time_sec: 30, // Maximum poll time (in seconds), after which we'll giveup.
              include_body: true
          }}
        )
        .then(email => {
          assert.isNotNull(email, 'Email was not found')
        })
    })
})


// describe("Email assertion:", () => {
//     it("Look for an email with specific subject and link in email body", function () {
//       cy.task("gmail:get-messages", {
//         options: {
//           from: "it@onxg.pl",
//           subject: "OnexStore - aktywacja konta",
//           include_body: true,
//         }
//       }).then(emails => {
//         assert.isAtLeast(
//           emails.length,
//           1,
//           "Expected to find at least one email, but none were found!"
//         );
//         const body = emails[0].body.html;
//         assert.isTrue(
//           body.indexOf(
//             "http://www.stage.onexstore.pl/potwierdz-konto/?token="
//           ) >= 0,
//           "Found reset link!"
//         )
//       })
//     }) 
// });