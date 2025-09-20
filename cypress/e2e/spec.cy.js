import travelPlan from '../support/pageobjectmodel/CarInsurance';
import { TravelInsurancePage } from '../support/pageobjectmodel/travelplan';

describe('GoDigit Car Insurance Quote Flow', () => {
  beforeEach(() => {
    travelPlan.visitHomePage();
    travelPlan.suppressExceptions();
  });

  it('Car insurance test cases', () => {
    //1 user story
    travelPlan.navigateToCarInsurance();
    travelPlan.clickWithoutCarNumber();
   });
});
describe('Travel Insurance Test Suite', () => {
  const travelPage = new TravelInsurancePage();

  it('Find student travel insurance for 2 people (Europe), display 3 lowest plans', () => {
    cy.on('uncaught:exception', () => false);

    travelPage.visitHomePage();

    travelPage.navigateToTravelInsurance();

    travelPage.selectSingleTripOption();
  });
});
