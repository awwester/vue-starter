// https://docs.cypress.io/api/introduction/api.html

describe('Authenticated navigation tests', () => {
  beforeEach(() => {
    cy.login()
    cy.wait(100)
  })

  it('Visits the dashboard', () => {
    cy.visit('/dashboard')
    cy.get('#dashboard-nav').should('exist')
  })

  it('Visits dashboard items', () => {
    cy.visit('/dashboard/items')
    cy.contains('.dashboard-items', '1, 2, 3')
  })

  it('Visits dashboard purchases', () => {
    cy.visit('/dashboard/purchases')
    cy.contains('.dashboard-purchases', '4, 5, 6')
  })
})
