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
   selectEuropeanCountry() {
      cy.get('#country-option', { timeout: 10000 }).should('be.visible').click({ force: true });
      cy.get('li#France', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
    }
  fillTravelDatesAndDuration() {
      cy.get('#departure-date').should('be.visible').click({ force: true });
      cy.get('.pika-select-month').eq(0).select('October');
      cy.get('.pika-select-year').eq(0).select('2025');
      cy.get('.pika-button.pika-day').filter(':visible').first().click({ force: true });
      cy.get('#return-date').should('be.visible').click({ force: true });
      cy.get('.pika-button.pika-day').filter(':visible').eq(5).click({ force: true }); // Selects the 6th visible day
  }
}