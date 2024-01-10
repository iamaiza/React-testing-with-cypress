import React from 'react'
import SideNav from './SideNav'
import { MemoryRouter } from 'react-router-dom'

describe('<SideNav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MemoryRouter>
        <SideNav />
      </MemoryRouter>
    )
  })
})