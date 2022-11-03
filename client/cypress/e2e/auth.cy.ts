describe('Auth0', () => {
  beforeEach(() => {
    cy.loginByAuth0Api(
      Cypress.env('auth0_username'),
      Cypress.env('auth0_password')
    )
  })

  it('should be logged in', () => {
    cy.get('#mat-tab-link-4').should('be.visible')
    cy.get('#mat-tab-link-4').click()
    cy.get('[data-cy="nickname"]').should('have.text', 'User: a4002e9c48f918')
    cy.get('[data-cy="email"]').should('have.text', 'Email: a4002e9c48f918@smtp.mailtrap.io')
  });

})
