import React from 'react'
import Habit from './Habit'

describe('<Habit />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Habit />)
  })
})