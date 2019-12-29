// https://docs.cypress.io/api/introduction/api.html

describe('Anonymous navigation tests', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Welcome!')
  })

  it('Visits login view', () => {
    cy.visit('/auth/login')
    cy.contains('h2', 'Login')
  })

  it('Visits registration view', () => {
    cy.visit('/auth/register')
    cy.contains('h2', 'Register')
  })

  it("Can't get to dashboard unauthenticated", () => {
    cy.visit('/dashboard')
    cy.contains('h2', 'Login')
  })
})
