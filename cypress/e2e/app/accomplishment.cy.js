/// <reference types="cypress" />

describe("Accomplishments", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/accomplishments")
    })

    it("should show error if information is missing", () => {
        cy.get("")
    })
})