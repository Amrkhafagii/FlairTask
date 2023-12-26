const adminTab = ':nth-child(1) > .oxd-main-menu-item > .oxd-text'


class Menu {


    clickOnAdminTab() {
        cy.get(adminTab).click()

    }


}



export default Menu;




