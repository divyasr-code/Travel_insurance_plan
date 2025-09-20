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
  enterQuoteDetails(registrationNumber, mobileNumber) {
    cy.get('[name="registration-search"]').eq(0).type(registrationNumber, { force: true });
    cy.get('[name="mobile-number"]').eq(0).type(mobileNumber, { force: true });
  }
 
  clickGetQuoteButton() {
    cy.get('.overlay, .loader', { timeout: 10000 }).should('not.exist');
    cy.xpath('//button[contains(@class,"get-quote-btn-common")]')
      .should('be.visible')
      .should('not.be.disabled')
      .scrollIntoView()
      .click({ force: true });
    cy.wait(500);
    cy.get('.get-quote-btn-common').click({ force: true });
    cy.get('.get-quote-btn-common').then($btn => {
      $btn[0].click();
    });
    cy.contains('Fuel Type', { timeout: 10000 }).should('exist');
  }
 
  selectCarModel(carModelId) {
    cy.wait(10000);
    cy.get('[name="vehicleMake"]').click();
    cy.get('input[role="searchbox"][placeholder="Search Car Model"]')
      .should('be.visible')
      .type('TATA', { delay: 100 });
    cy.get(`div#${carModelId}`).scrollIntoView().should('be.visible').click({ force: true }).wait(2000).click({ force: true });
  }
 
  selectFuelType() {
    cy.contains('Fuel Type', { timeout: 10000 }).should('exist');
    cy.wait(4000);
    cy.get(':nth-child(2) > .text-sm').should('be.visible').click();
  }
 
  selectVariantAndDate(variantId, yearId, monthId) {
    cy.get(`#${variantId}`).click({ force: true });
    cy.get(`#${yearId}`).should('be.visible').click();
    cy.get(`#${monthId}`).should('be.visible').click();
  }
 
  selectCity(cityId, cityName) {
    cy.get('[name="vehicleRegisteredCity"]').click({ force: true });
    cy.get('.p-dialog-content').within(() => {
      cy.get('input[placeholder="Search City"]')
        .should('be.visible')
        .type(cityName, { delay: 100 });
      cy.get(`div#${cityId}.new-design-brand-list-city`)
        .scrollIntoView()
        .wait(2000)
        .click({ force: true });
    });
    cy.wait(4000);
  }
 
  continueToDetails() {
    cy.get('#continue-btn').should('be.visible').click({ force: true });
    cy.wait(30000);
    cy.get('#continue-btn > .ng-star-inserted').should('be.visible').click({ force: true });
    cy.wait(6000);
    cy.contains('Great choice! A few more details').should('be.visible');
  }
 

  
}

export default new TravelPlan();
