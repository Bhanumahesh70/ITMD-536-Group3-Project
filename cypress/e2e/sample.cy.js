describe('Sample Test', () => {
    it('Visits the Cypress website', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('type').click();
      cy.url().should('include', '/commands/actions');
      
    });
    it('should load the homepage and display the title', () => {
        cy.visit('/');
        cy.title().should('eq', 'Create Next App');
      });
    
  });
  