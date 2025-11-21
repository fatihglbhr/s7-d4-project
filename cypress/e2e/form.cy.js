describe('Project Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })


  it('Success Page', () => {
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('erdem.guntay@wit.com.tr');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('9fxIH0GXesEwH_I');
    cy.get('[name="terms"]').check();
    cy.get('[data-cy="loginbtn"]').click();
    cy.get('#root p').should('contain', 'Giriş Başarılı!');
  });

  it('Wrong Email', () => {
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('erdem.guntaywit');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('9fxIH0GXesEwH_I');
    cy.get('[name="terms"]').check();
    cy.get('[data-cy="loginbtn"]').should('have.attr','disabled');
    cy.get("[data-cy='error-em']").should('contain', 'Please enter a valid email address');
  });

  it('Wrong Email and Password', () => {
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('Test');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('9fx');
    cy.get('[name="terms"]').check();
    cy.get('[data-cy="loginbtn"]').should('have.attr','disabled');
    cy.get("[data-cy='error-em']").should('contain', 'Please enter a valid email address');
    cy.get("[data-cy='error-pw']").should('contain', 'Password must be at least 4 characters long');
  });

  it('T&C Not Accepted', () => {
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('erdem.guntay@wit.com.tr');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('9fxIH0GXesEwH_I');
    cy.get('[data-cy="loginbtn"]').should('have.attr','disabled');
  });
})