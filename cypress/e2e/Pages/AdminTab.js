const userdata = require("../../fixtures/Users.json")
const requestCount = '.orangehrm-horizontal-padding > .oxd-text'
const addButton = '.orangehrm-header-container > .oxd-button'

const userRole = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'
const userRoleFirstChild = '.oxd-select-dropdown > :nth-child(2)'
const employeeName = '.oxd-autocomplete-text-input > input'
const employeeNameChild = '.oxd-autocomplete-option'

const status = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'
const statusChild = '.oxd-select-dropdown > :nth-child(2)'

const userName = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
const password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
const confirmPassword = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'

const save = '.oxd-button--secondary'

const userNameSearch = ':nth-child(2) > .oxd-input'
const search = '.oxd-form-actions > .oxd-button--secondary'
const deleteButton='.oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
const confirmDelete='.oxd-button--label-danger'
class AdminTab {

    static Requests
    static RequestsIncreased



    FillInData() {

        cy.get(userRole).click()
        cy.get(userRoleFirstChild).click()
        cy.get(employeeName).type(userdata.data.employeeName)
        cy.wait(2000)
        cy.get(employeeNameChild).click()

        cy.get(status).click()
        cy.get(statusChild).click()

        cy.get(userName).type(userdata.data.userName)
        cy.get(password).type(userdata.data.password)
        cy.get(confirmPassword).type(userdata.data.password)

        cy.get(save).click()




    }


    clickOnAddButton() {
        cy.get(addButton).click()

    }
    searchUser() {
        cy.get(userNameSearch).type(userdata.data.userName)
        cy.get(search).click()

    }
deleteUser()
{

    cy.get(deleteButton).click()
    cy.get(confirmDelete).click()
}
    static getRecordsFoundCount() {


        cy.getText(requestCount).then((requests) => {
            let number = requests.substring(1, 2)
            this.Requests = +number
            cy.log(number)

        })
        cy.wait(2000)
    }
    static getRecordsFoundCountIncreased() {


        cy.getText(requestCount).then((requestsIncreased) => {
            let number = requestsIncreased.substring(1, 2)
            this.RequestsIncreased = +number
            cy.log(number)
            assert.equal((this.Requests) + 1, this.RequestsIncreased, "equal")


        })
        cy.wait(2000)
    }
    static getRecordsFoundCountDecreased() {


        cy.getText(requestCount).then((requestsIncreased) => {
            let number = requestsIncreased.substring(1, 2)
            this.RequestsIncreased = +number
            cy.log(number)
            assert.equal((this.Requests) - 1, this.RequestsIncreased, "equal")


        })
        cy.wait(2000)
    }
}



export default AdminTab;




