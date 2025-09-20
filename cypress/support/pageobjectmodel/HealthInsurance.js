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
  extractSubmenuItems() {
    cy.get('.dropdown-body.show-header-content.product-second-section-old.scrollbar-thin', { timeout: 10000 })
      .find('span')
      .should('have.length.greaterThan', 0)
      .each(($el, index) => {
        cy.log(`Submenu ${index + 1}: ${$el.text().trim()}`);
      });
  }
  clickRightPanelHealthLink() {
    cy.get('.product-name-old-header', { timeout: 10000 })
      .contains('Health Insurance')
      .should('exist')
      .click({ force: true });
  }
 
  validateHealthInsurancePage() {
    cy.url().should('include', 'health-insurance');
    cy.contains(/Health Insurance/i).should('exist');
  }
}
 
export default new HealthInsurancePage();
