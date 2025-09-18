describe('Travel Insurance Test Suite', () => {
  it('Should load the makemytrip homepage successfully', () => {
  cy.on('uncaught:exception',(err,runnable)=>{
    return false;
  })
  cy.visit('https://www.godigit.com/')
  cy.contains('div.prod-wise-nav', 'General').click();
  cy.get('.selected-product-old').find('span').contains('Travel Insurance').click();
  cy.contains('a', 'Family Travel Insurance').click();
  cy.get('#multi-trip-radio').check({ force: true });
  cy.get('input[type="text"][readonly]').eq(0).click({ force: true });
  cy.get('.accordion-header').first().click();
  cy.get('#departure-date').click({ force: true });
  //cy.get('#departure-date').click({ force: true });
  /*cy.get('.pika-button.pika-day')
  .not('.is-disabled')      
  .filter(':visible')       
  .first()                  
  .click({ force: true });*/
  cy.get('#departure-date').click({ force: true });
  cy.get('.pika-select-month').eq(0).select('October');

  cy.get('#departure-date').click({ force: true });
  cy.get('.pika-select-year').eq(0).select('2025');
  cy.get('.pika-button.pika-day')
  .filter(':visible')       // Only visible buttons
  .first()                  // Pick the first one
  .click({ force: true });  // Force click to ensure interaction
  //cy.get('#departure-date').should('not.have.value', '');
  cy.get('#duration-due').click({ force: true });
  cy.contains('a', '1 to 30 days').click({ force: true });
  cy.contains('.traveller-sec div', '2').click({ force: true });
  cy.get('#car-mobile-number').type('9876543210');
  cy.contains('button', 'View Prices').click({ force: true });
  cy.get('#travellers').type('16/09/1995');
  cy.get('.p-inputtext').eq(1).type('20/11/1990', { force: true });
  cy.get('#continue-btn').click();

  cy.get('.plan').each(($plan, index) => {
  // Extract amount
  const amountText = Cypress.$($plan).find('.plan-name p').text().replace(/[^\d]/g, '');
  const amount = parseInt(amountText, 10);

  // Extract per-day/month context
  const perDayText = Cypress.$($plan).find('.saved-amount').text().trim();
  const monthContext = perDayText.includes('per day') ? perDayText : 'No per-day info';

  // Extract visible features
  const features = [];
  Cypress.$($plan).find('.trvl-just-start').each((i, feature) => {
    const text = Cypress.$(feature).text().trim();
    if (text) features.push(text);
  });

  // Log everything
  cy.log(`Plan ${index + 1}`);
  cy.log(`Amount: ₹${amount}`);
  cy.log(`${monthContext}`);
  cy.log(`Features:`);
  features.forEach((feature) => cy.log(`- ${feature}`));
});
cy.contains('button', 'Continue').click();

cy.get('#fullName').type('Fghj');
cy.get('#email').type('vgyjj');
cy.get('#passportNumber').type('345');
cy.get('#pincode').type('431');
cy.get('#gender-0-1').check();

cy.get('#nomineeName').type('Fhhk1');
//cy.get('.p-dropdown-trigger').click({force:true}); // clicks the first one
// Step 1: Click the dropdown trigger
cy.get('.p-dropdown-trigger').eq(0).click();

// Step 2: Wait for dropdown options to appear and select the first one
cy.get('.p-dropdown-item')           // This targets each option
  .should('be.visible')              // Ensures options are rendered
  .first()                           // Selects the first option
  .click();  
  
                        // Clicks it
cy.get('#fullName2').type('Alice Smith');

cy.get('#passportNumber2').type('B7654321');
cy.get('#gender-1-0').check();
cy.get('#nomineeName2').type('Bob Smith');

//cy.get('.p-dropdown-trigger').click({force:true}); // clicks the first one
// Step 1: Click the dropdown trigger
cy.get('.p-dropdown-trigger').eq(1).click();

// Step 2: Wait for dropdown options to appear and select the first one
cy.get('.p-dropdown-item')           // This targets each option
  .should('be.visible')              // Ensures options are rendered
  .first()                           // Selects the first option
  .click();    

cy.get('.purspose-travel').within(() => {
  cy.get('input[type="radio"]').eq(1).check().should('be.checked');
});

cy.contains('button', 'Pay now').click({ force: true });
 
  // Capture and print error messages
/*cy.get('.error-message').each(($el, index) => {
  const errorText = $el.text().trim();
  cy.log(`Error ${index + 1}: ${errorText}`);
});*/
 
    // Validate and correct each field using regex
cy.get('#email').invoke('val').then(email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    cy.log(email)
    cy.get('#email').clear().type('test@example.com');
  }
});
 
cy.get('#passportNumber').invoke('val').then(passport => {
  const passportRegex = /^[A-Z0-9]{6,9}$/;
  if (!passportRegex.test(passport)) {
    cy.log(passport)
    cy.get('#passportNumber').clear().type('A1234567');
  }
});
 
cy.get('#pincode').invoke('val').then(pincode => {
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  if (!pincodeRegex.test(pincode)) {
    cy.log(pincode)
    cy.get('#pincode').clear().type('600119');
  }
});
 
cy.get('#nomineeName').invoke('val').then(nominee => {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(nominee)) {
    cy.get('#nomineeName').clear().type('John Doe');
  }
});
/*cy.get('div[id="other-travel-radio-button"]:checked').invoke('val').then(selectedGender => {
  const validGenders = ['Male', 'Female', 'Others'];
  if (!validGenders.includes(selectedGender)) {
    cy.log(`Invalid gender selected: ${selectedGender}`);
    // Select a valid option (e.g., 'Male')
    cy.get('input[name="gender"][value="Male"]').check({ force: true });
  } else {
    cy.log(`Valid gender selected: ${selectedGender}`);
  }
});*/
 
    // Reattempt submission
  cy.contains('button', 'Pay now').click({ force: true });
 
    // Confirm success message
    //cy.contains('Your travel insurance policy has been generated').should('be.visible');












    
  })
});