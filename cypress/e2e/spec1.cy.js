describe('GoDigit Car Insurance Quote Flow', () => {
 
  beforeEach(() => {
    cy.visit('https://www.godigit.com');
    cy.wait(2000);
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
 
  return false;
});
 
 
  it('User Story 9: Navigate to Car Insurance and proceed without car number', () => {
    cy.get('[data-product="product-1"] > .prod-wise-nav').click();
    cy.contains('Car Insurance').click();
    cy.get('.product-name-old-header').first().click();
    cy.get('.car-btn-primary').click({ force: true });
  });
 
  describe('User Story 10: Verify dynamic dropdowns and quote generation', () => {
  beforeEach(() => {
    cy.visit('https://www.godigit.com');
    Cypress.on('uncaught:exception', () => false); // Prevents test failure on JS errors
  });
 
  it.only('should enter valid details and verify quote generation flow', () => {
   
    cy.get('[data-product="product-1"] > .prod-wise-nav').click();
    cy.contains('Car Insurance').click();
    cy.get('.product-name-old-header').first().click();
 
 
    cy.get('[name="registration-search"]').eq(0).type('KA07DK8337', { force: true });
    cy.get('[name="mobile-number"]').eq(0).type('9080934407', { force: true });
    //cy.get('.car-btn-primary').dblclick({force: true});
   // Step 1: Wait for the button to exist and be visible
// Step 1: Wait for the overlay to disappear
// Wait for overlays/loaders to disappear
cy.get('.overlay, .loader', { timeout: 10000 }).should('not.exist');
 
// Wait for the button to be visible and enabled
cy.xpath('//button[contains(@class,"get-quote-btn-common")]')
  .should('be.visible')
  .should('not.be.disabled')
  .scrollIntoView()
  .click({ force: true });
 
// Add a short wait in case of re-render
cy.wait(500);
 
// Try Cypress click first
cy.get('.get-quote-btn-common').click({ force: true });
 
// If still not working, use native JS click
cy.get('.get-quote-btn-common').then($btn => {
  $btn[0].click();
});
 
// Optionally, assert that the next step/page/element appears
cy.contains('Fuel Type', { timeout: 10000 }).should('exist'); // Adjust as needed
 
 
 
 
 
 
 
    cy.wait(10000);
    cy.get('[name="vehicleMake"]', { timeout: 10000 }).click();
    cy.get('input[role="searchbox"][placeholder="Search Car Model"]')
      .should('be.visible')
      .type('TATA', { delay: 100 });
    //cy.contains('TATA TIAGO')
     cy.get('div#TATA\\ TIAGO').scrollIntoView().should('be.visible').click({ force: true })
    .wait(2000)
    .click({force : true});
 
   
    cy.contains('Fuel Type', { timeout: 10000 }).should('exist');
    cy.wait(4000);
    cy.get(':nth-child(2) > .text-sm').should('be.visible').click();
    //cy.get(':nth-child(2) > .text-xs').click({ force: true });
    //cy.get('.mb-3 > :nth-child(2)').click({ force: true });
   // cy.get('.mb-3 > :nth-child(4)')
   
    //p[contains(@class, 'fuel-type-subContent') and normalize-space(text())='Petrol']

    //.click({ force: true })
    //.wait(2000)
    //.click({force:true})
    //.wait(2000); 
    //cy.get(':nth-child(4) > .text-sm').click({ force: true });
    

    //cy.get('[id="ax(at)"]').should('be.visible').click();
    cy.get('#revotronxe').click({ force: true });
 
    cy.get('[id="2025"]').should('be.visible').click();
    cy.get('[id="January"]').should('be.visible').click();
 
 
cy.get('[name="vehicleRegisteredCity"]')
  .click({ force: true }); // Opens the city selection modal
 
cy.get('.p-dialog-content').within(() => {
  cy.get('input[placeholder="Search City"]')
    .should('be.visible')
    .type('New Delhi', { delay: 100 });
  cy.get('div#NewDelhi.new-design-brand-list-city')
  .scrollIntoView()
  .wait(2000)
  //.click()
  //.wait(2000)
  .click({force:true});
  //cy.get('span.ng-star-inserted')
  //.should('be.visible')
  //.click({force:true});



  /*cy.xpath('//button[contains(@class,"get-quote-btn-common")]')
  .should('be.visible')
  .should('not.be.disabled')
  .scrollIntoView()
  .click({ force: true });

  //cy.get('header > .material-icons').dblclick({force: true});
  //cy.get('#NewDelhi > .p-brands').scrollIntoView().should('be.visible').click({ force: true });
  /*cy.xpath("//div[@id='NewDelhi' and contains(@class, 'new-design-brand-list-city')]")
  .scrollIntoView()
  .should('be.visible')
  .click();*/
  //cy.get('.p-dialog-content').first().click();



});
 cy.wait(4000);
   
    cy.get('#continue-btn').should('be.visible').click({ force: true });
 
    cy.wait(30000);
    cy.get('#continue-btn > .ng-star-inserted').should('be.visible').click({ force: true });
 
    //11th user story
    cy.contains('Great choice! A few more details').should('be.visible');
 
   
    cy.get('#mobileNumber').clear().type('12345');
    cy.get('#email').clear().type('abc@');
 
   
    cy.contains('Pay now').click();
 
    // Assert validation messages
    cy.contains('Enter valid email id').should('be.visible');
    cy.contains('Enter valid Mobile Number').should('be.visible');
//12th user story
    cy.get('#vehicleOwnerName').type('Divya QA');
    cy.get('#mobileNumber').clear().type('9080934407');
    cy.get('#email').clear().type('divya.qa@gmail.com');
 
    // cy.get('#insurerName').type('Digit Insurance');
    cy.get('#odInsurer').click(); // Open dropdown
    cy.get('.px-2_5').type('Digit'); // Type to search
    cy.contains('Go Digit General Insurance Limited').click();
    cy.get('#odPolicyNumber').type('POL123456789');
    //cy.get('#policyExpiryDate').type('2026-01-31'); // Format may vary
 
    // Nominee Details
    cy.get('#nomineeName').type('Ravi Kumar');
    //cy.get('.p-dropdown-trigger-icon').select('Brother').should('have.value','Brother'); // Adjust based on dropdown options
    //cy.get('.p-dropdown').select('Brother').should('have.value','Brother'); // Adjust based on dropdown options
    //cy.get('.p-dropdown').type('Brother').click;
    //cy.get('.p-dropdown-trigger-icon').type('Brother').click();
    //cy.get('.p-dropdown-trigger-icon').click();
    //cy.get('.p-dropdown-filter')
  //.should('be.visible')
  //.type('Brother');
  //cy.get('.p-dropdown-items ng-tns-c53-69').contains('Brother')
  //.click({force:true});

    // Step 1: Click the dropdown trigger
cy.get('.p-dropdown-trigger')
  .should('be.visible')
  .click();

// Step 2: Wait for the dropdown panel to appear
cy.get('.p-dropdown-panel')
  .should('be.visible');

// Step 3: Select the "Brother" option
cy.get('.p-dropdown-item')
  .contains('Brother')
  .should('be.visible')
  .click({force:true});


 
    // Car Details
  

    cy.get('#engineNumber').click({force:true}).type('ENG987654321');
    cy.get('#chasisNumber').click({force:true}).type('CHS123456789');
 
    // Confirm PUC and RC checkboxes
   // cy.get('#pucValidated').check();
    //cy.get('#rcAvailable').check();
 
    // Optional Add-on
    cy.contains('Add to Plan').click({force:true}); // No Claim Bonus Protection
 
    // Final step: Pay Now
    cy.contains('Pay now').click({force:true});
 
    // Assert successful navigation or confirmation
   // cy.url().should('include', '/confirmation');
   //cy.wait(9000);
   // cy.contains('Thank you for your purchase').should('be.visible');
  });
 
});
});
//});
