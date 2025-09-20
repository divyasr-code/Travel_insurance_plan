class TravelPlan {
  visitHomePage() {
    cy.visit('https://www.godigit.com');
    cy.wait(2000);
  }

  suppressExceptions() {
    Cypress.on('uncaught:exception', () => false);
  }

  navigateToCarInsurance() {
    cy.get('[data-product="product-1"] > .prod-wise-nav').click();
    cy.contains('Car Insurance').click();
    cy.get('.product-name-old-header').first().click();
  }

  clickWithoutCarNumber() {
    cy.get('.car-btn-primary').click({ force: true });
  }

  
}

export default new TravelPlan();
