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
   selectTravellersAndEnterMobile() {  
      cy.contains('.traveller-sec div', '2').should('be.visible').click({ force: true });
      cy.get('#car-mobile-number').clear().type('123').blur();
      cy.get('#car-mobile-number').invoke('val').then(phno => {
      const phnoRegex = /^[6-9]\d{9}$/;
      if (!phnoRegex.test(phno)) {
       cy.get('.help-block').should('exist') .invoke('text')
        .then(errorText => {
        cy.log(`Validation Error: ${errorText}`);
      });
        cy.get('#car-mobile-number').clear().type('9876543219').blur();
      }
    });
      cy.get('button.view-price-btn:not(.disabled):not(.btn-loading)').should('be.visible')
        .click({ force: true })
        .wait(200)
        .click({ force: true })
        .wait(2000);
  }  
  enterTravellerDOBs() {
      cy.get('#travellers').should('exist').should('be.visible').click({ force: true }) 
        .type('19/09/1995', { force: true }); 

      cy.get('.p-inputtext').eq(1).type('20/11/1990', { force: true });
      cy.get('#continue-btn').should('be.visible').click()
        .wait(200)
        .click({ force: true })
        .wait(3000);
  }
}