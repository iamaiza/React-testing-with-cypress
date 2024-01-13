/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/elements")
    })

    it("locating elements with get", () => {
        // get elements by tag name
        cy.get("button")
        // get elements by tag name AND class name
        cy.get("button.btn-with-class")
        // get elements by specific class name
        cy.get("[class='Elements-btn btn-with-class']")
        // get elements by type
        cy.get("[type='submit']")
        // get elements by data id
        cy.get("[data-cy='btn-id-1']")
        // get elements by tag name AND id
        cy.get("button#btn-with-id")
        // get elements by multiple classes name
        cy.get("button.Elements-btn.btn-with-class.more-btn-classes")

        cy.getByTestId("btn-id-1")
    })

    it("locating elements with contain", () => {
        // get elements by text using contains
        cy.contains("Unique Text")
        cy.contains("Not Unique Text")
        cy.contains("Just Another Button")

        // get elements with selector 
        cy.contains("[type='submit']", "Not Unique Text")
        cy.get("[type='submit']").contains("Not Unique Text")
    })

    it("locating elemnts with find", () => {
        cy.get("#form-1").find(".btn-1")
    })
})