import React from 'react'
import Rewards from './Rewards'

describe('<Rewards />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Rewards />)
  })
})