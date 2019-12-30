// https://docs.cypress.io/api/introduction/api.html

describe('Authenticated navigation tests', () => {
  beforeEach(() => {
    cy.login()
    cy.wait(100)
  })

  it('Can navigate to dashboard pages', () => {
    cy.visit('/dashboard')
    cy.get('.nav-links').should('exist')
    cy.get('#vert-nav-items').click()
    cy.contains('.dashboard-items', '1, 2, 3')
    cy.get('#vert-nav-purchases').click()
    cy.contains('.dashboard-purchases', '4, 5, 6')
  })

  it('Can logout', () => {
    cy.visit('/dashboard')
    cy.get('#vert-nav-logout').click()
    cy.contains('h2', 'Welcome!')

    // Verify that the token is gone by trying to go back to dashboard.
    cy.visit('/dashboard')
    cy.contains('h2', 'Login')
  })
})
