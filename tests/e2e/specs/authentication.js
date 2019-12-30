// https://docs.cypress.io/api/introduction/api.html

describe('Authentication tests', () => {
  it('Visits login view', () => {
    cy.visit('/auth/login')
    cy.get('.login-form').should('exist')
  })

  it('Can fail login', () => {
    cy.get('.login-form').submit()
    cy.get('.alert-danger').should('exist')
  })

  it('Can successfully login', () => {
    cy.get('#login-username').type('admin')
    cy.get('#login-password').type('admin123')
    cy.get('.login-form').submit()
  })
})
