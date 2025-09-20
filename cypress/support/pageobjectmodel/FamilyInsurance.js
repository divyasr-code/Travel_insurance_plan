export class TravelInsurancePage {
  visitHomePage() {
    cy.visit('https://www.godigit.com/');
    cy.get('body').should('exist'); 
  }

  navigateToTravelInsurance() {
    cy.contains('div.prod-wise-nav', 'General').should('be.visible').click();
    cy.get('.selected-product-old').find('span').contains('Travel Insurance').should('be.visible').click();
    cy.contains('a', 'Family Travel Insurance').should('be.visible').click();
    cy.url().should('include', 'travel-insurance');
  }

  selectSingleTripOption() {
      cy.get('#fb0-radio').check({ force: true });
  }
}