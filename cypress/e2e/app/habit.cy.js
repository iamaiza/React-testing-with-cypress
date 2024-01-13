/// <reference types="cypress" />

describe("Habits", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/habits")
    })

    it("should show modal on button click", () => {
        cy.contains("button", "Add").click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("should show habit card when new habit is added", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Cooking some meal")
        cy.contains("Save Changes").click()
        cy.contains("Cooking some meal").should("be.visible").and("have.class", "HabitCard__habit-container")
    })

    it("should toggle when habit card clicked", () => {
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Cooking some meal")
        cy.contains("Save Changes").click()
        cy.get("[src='/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg']").should("be.visible")
        cy.contains("Cooking some meal").click()
        cy.get("[src='/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg']").should("be.visible")
    })
})