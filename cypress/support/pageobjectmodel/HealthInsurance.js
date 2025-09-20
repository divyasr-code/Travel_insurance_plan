class HealthInsurancePage {
  visitHomePage() {
    cy.visit('https://www.godigit.com/');
    cy.on('uncaught:exception', () => false);
  }
 
  expandGeneralDropdown() {
    cy.get('[data-product="product-1"] .prod-wise-nav img[alt="arrow"]', { timeout: 10000 })
      .should('exist')
      .scrollIntoView()
      .click({ force: true });
  }
 
  waitForDropdownVisible() {
    cy.get('div.dropdown-body.show-header-content.product-second-section-old.scrollbar-thin', { timeout: 10000 })
      .should('have.css', 'opacity', '1');
  }
 
  clickHealthInsuranceLabel() {
    cy.contains('span', /Health Insurance/i, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
  }
}