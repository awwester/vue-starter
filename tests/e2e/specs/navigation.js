// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('img').should('exist')
  })

  it('Visits the dashboard', () => {
    cy.visit('/dashboard')
    cy.get('#dashboard-nav').should('exist')
  })

  it('Visits the dasbhoard items', () => {
    cy.visit('/dashboard/items')
    cy.contains('.dashboard-items', '1, 2, 3')
  })

  it('Visits the dashboard purchases', () => {
    cy.visit('/dashboard/purchases')
    cy.contains('.dashboard-purchases', '4, 5, 6')
  })
})
