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

  it('Can fail registration gracefully', () => {
    cy.visit('/auth/register')
    const username = Math.random().toString(36).substring(7)

    // Fail existing username
    cy.get('#register-username').type('admin')
    cy.get('#register-email').type(`admin@asdf.com`)
    cy.get('#register-password-1').type('24wfd2$sfk2')
    cy.get('#register-password-2').type('24wfd2$sfk2')
    cy.get('.register-form').submit()
    cy.get('.alert-danger').should('contain', 'Could not register with provided details')

    // Fail password short
    cy.get('#register-username').type(username)
    cy.get('#register-email').type(`${username}@asdf.com`)
    cy.get('.register-form').submit()
    cy.get('.alert-danger').should('contain', 'Could not register with provided details')
  })

  it('Can register new user', () => {
    const username = Math.random().toString(36).substring(7)
    const password = `${Math.random().toString(36).substring(7)}Aa$`
    cy.visit('/auth/register')
    cy.get('#register-username').type(username)
    cy.get('#register-email').type(`${username}@asdf.com`)
    cy.get('#register-password-1').type(password)
    cy.get('#register-password-2').type(password)
    cy.get('.register-form').submit()

    // Verify that we're routed to the dashboard
    cy.get('.nav-links').should('exist')
  })
})
