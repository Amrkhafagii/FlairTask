const cookie = "orangehrm=9b5e31699bee579d54243693ca3dedd8"

class APIs {

    static ID

    static AddCandidate() {
        cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates',

            body: { "firstName": "amr", "middleName": null, "lastName": "khafag", "email": "dsjds@sdjds.com", "contactNumber": null, "keywords": null, "comment": null, "dateOfApplication": "2024-12-26", "consentToKeepData": false },

            headers: {
                "Content-Type": "application/json",
                "Cookie": cookie,
                "Host": "opensource-demo.orangehrmlive.com",
                "Content-Length": 194


            }
        }).then(response => {
            cy.log(response.body.data.id)
            this.ID = response.body.data.id
            expect(response.status).to.eq(200)
        })

    }
    static DeleteCandidate() {
        cy.log(this.ID)
        cy.request({
            method: 'DELETE',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates',

            body: { "ids":[this.ID] },


            headers: {
                "Content-Type": "application/json",
                "Cookie": cookie,
                "Host": "opensource-demo.orangehrmlive.com",
                "Content-Length": 12


            }
        }).then(response => {
            expect(response.status).to.eq(200)
        })

    }
}

export default APIs;
