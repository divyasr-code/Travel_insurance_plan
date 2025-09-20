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
    enterInvalidContactDetails() {
    cy.get('#mobileNumber').clear().type('12345');
    cy.get('#email').clear().type('abc@');
    cy.contains('Pay now').click();
    cy.contains('Enter valid email id').should('be.visible');
    cy.contains('Enter valid Mobile Number').should('be.visible');
  }
    enterValidContactDetails(ownerName, mobileNumber, email) {
    cy.get('#vehicleOwnerName').type(ownerName);
    cy.get('#mobileNumber').clear().type(mobileNumber);
    cy.get('#email').clear().type(email);
  }
 
  selectInsurer(insurerName) {
    cy.get('#odInsurer').click();
    cy.get('.px-2_5').type(insurerName);
    cy.contains('Go Digit General Insurance Limited').click();
    cy.get('#odPolicyNumber').type('POL123456789');
  }
 
  enterNomineeDetails(nomineeName, nomineeRelation) {
    cy.get('#nomineeName').type(nomineeName);
    cy.get('.p-dropdown-trigger').should('be.visible').click();
    cy.get('.p-dropdown-panel').should('be.visible');
    cy.get('.p-dropdown-item').contains(nomineeRelation).should('be.visible').click({ force: true });
  }
 
  enterVehicleDetails(engineNumber, chassisNumber) {
    cy.get('#engineNumber').click({ force: true }).type(engineNumber);
    cy.get('#chasisNumber').click({ force: true }).type(chassisNumber);
  }
 
  addOptionalAddon() {
    cy.contains('Add to Plan').click({ force: true });
  }
 
  finalPayNow() {
    cy.contains('Pay now').click({ force: true });
  }

  
}

export default new TravelPlan();
