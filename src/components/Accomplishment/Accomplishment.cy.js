import React from 'react'
import Accomplishment from './Accomplishment'

describe('<Accomplishment />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Accomplishment />)
  })
})