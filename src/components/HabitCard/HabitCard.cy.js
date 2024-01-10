import React from 'react'
import HabitCard from './HabitCard'

describe('<HabitCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HabitCard />)
  })
})