import React from 'react'
import Elements from './Elements'

describe('<Elements />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Elements />)
  })
})