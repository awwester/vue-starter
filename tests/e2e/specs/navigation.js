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

  it('Visits dashboard items', () => {
    cy.visit('/dashboard/items')
    cy.contains('.dashboard-items', '1, 2, 3')
  })

  it('Visits dashboard purchases', () => {
    cy.visit('/dashboard/purchases')
    cy.contains('.dashboard-purchases', '4, 5, 6')
  })

  it('Visits login view', () => {
    cy.visit('/auth/login')
    cy.contains('h2', 'Login')
  })

  it('Visits registration view', () => {
    cy.visit('/auth/register')
    cy.contains('h2', 'Register')
  })
})
