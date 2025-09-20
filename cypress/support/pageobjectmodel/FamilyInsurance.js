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
  logThreeLowestPlans() {
      cy.get('.plan').should('have.length.at.least', 3).then($plans => {
        const planArr = [];
        Cypress.$($plans).each((index, plan) => {
          const amountText = Cypress.$(plan).find('.plan-name p').text().replace(/[^\d]/g, '');
          const amount = parseInt(amountText, 10);
          const provider = Cypress.$(plan).find('.plan-provider').text().trim() || 'Unknown Provider';
          planArr.push({ amount, provider });
        });
        const lowestPlans = planArr.sort((a, b) => a.amount - b.amount).slice(0, 3);
        lowestPlans.forEach((plan, idx) => {
          cy.log(`Lowest Plan ${idx + 1}: ₹${plan.amount} by ${plan.provider}`);
        });
      });
      cy.contains('button', 'Continue').should('be.visible').click();
  }
   fillTravellerForms() {
    cy.get('#fullName').type('Fghj');
    cy.get('#email').type('test@example.com');
    cy.get('#passportNumber').type('A1234567');
    cy.get('#pincode').type('600119');
    cy.get('label[for="gender-0-1"]').should('be.visible').click({ force: true });
    cy.get('label[for="gender-0-1"]').should('be.visible').click({ force: true });
    cy.get('label[for="gender-0-1"]').should('be.visible')
      .click({ force: true });
      cy.wait(500);
    cy.get('#gender-0-1').should('exist').and('be.visible')
      .and('have.prop', 'checked', true);
    cy.get('#nomineeName').type('Fhhk1');
    cy.get('.p-dropdown-trigger').eq(0).scrollIntoView().should('be.visible')
      .click({ force: true }).wait(500).click();
    cy.get('body')
      .find('.p-dropdown-item')
      .should('have.length.greaterThan', 0)
      .first()
      .should('be.visible')
      .click({ force: true });
    cy.get('#fullName2').type('Alice Smith');
      cy.get('#passportNumber2').type('B7654321');
      cy.get('#gender-1-0').check().should('be.checked');
      cy.get('#nomineeName2').type('Bob Smith');
      cy.get('.p-dropdown-trigger').eq(1).scrollIntoView().should('be.visible').click({ force: true })
        .wait(500).click();

      cy.get('body')
        .find('.p-dropdown-item')
        .should('have.length.greaterThan', 0)
        .first()
        .should('be.visible')
        .click({ force: true });

          cy.get('.purspose-travel').within(() => {
            cy.get('input[type="radio"]').eq(1).check().should('be.checked');
          });
        }
}