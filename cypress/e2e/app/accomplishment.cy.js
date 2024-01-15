/// <reference types="cypress" />

describe("Accomplishments", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/accomplishments")
    })

    it("should show error if information is missing", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My first accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I achieve my goal of becoming a basketball player.")
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("should show success component if all information is available", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My first accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I achieve my goal of becoming a basketball player.")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

    it("should return back to accomplishment form on button clicked", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My first accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I achieve my goal of becoming a basketball player.")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Go Back").click()
        cy.contains("h2", "Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("have.value", "")
        cy.get("[data-cy='accomplishment-input']").should("have.value", "")
        cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked")
    })
})