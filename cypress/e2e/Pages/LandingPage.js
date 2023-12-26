const loginButton='.oxd-button'
const userName=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
const password= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
const userdata = require("../../fixtures/Users.json")



class LandingPage {


    typeUserAndPass() {

        cy.get(userName).type(userdata.Username)
        cy.get(password).type(userdata.Password)
        cy.get(loginButton).click()
    }

}

export default LandingPage;




