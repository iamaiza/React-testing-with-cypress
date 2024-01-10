import React from 'react'
import AddModal from './Modal'

describe('<AddModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddModal />)
  })
})