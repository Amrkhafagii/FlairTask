/// <reference types="Cypress" />
import LandingPage from '../Pages/LandingPage'
import AdminTab from '../Pages/AdminTab'
import Menu from '../Pages/Menu'
import APIs from '../Pages/APIs'


import { Given, And } from "@badeball/cypress-cucumber-preprocessor"

const landingPage = new LandingPage()
const adminTab = new AdminTab()
const menu = new Menu()


Given('User add candidate', () => {

    APIs.AddCandidate()
})
Given('User delete candidate', () => {

    APIs.DeleteCandidate()
})

Given('User open URL', () => {
    cy.visit(Cypress.env('URL'))
    cy.wait(5000)

})

And('User login', function () {


    landingPage.typeUserAndPass()


})

And('User get the number of records found', function () {


    menu.clickOnAdminTab()
    AdminTab.getRecordsFoundCount()




})
And('User fill the required data', function () {
    adminTab.clickOnAddButton()
    adminTab.FillInData()
    AdminTab.getRecordsFoundCountIncreased()



})

And('User delete the new create user', function () {
    adminTab.searchUser()
    adminTab.deleteUser()
    AdminTab.getRecordsFoundCountDecreased()



})