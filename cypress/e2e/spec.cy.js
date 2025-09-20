import travelPlan from '../support/pageobjectmodel/CarInsurance';
import { TravelInsurancePage } from '../support/pageobjectmodel/travelplan';
import { HealthInsurancePage } from '../support/pageobjectmodel/HealthInsurance';

describe('GoDigit Car Insurance Quote Flow', () => {
  beforeEach(() => {
    travelPlan.visitHomePage();
    travelPlan.suppressExceptions();
  });

  it('Car insurance test cases', () => {
    //1 user story
    travelPlan.navigateToCarInsurance();
    travelPlan.clickWithoutCarNumber();
     //2 user story
    travelPlan.navigateToCarInsurance();
    travelPlan.enterQuoteDetails(testData.registrationNumber, testData.mobileNumber);
    travelPlan.clickGetQuoteButton();
    travelPlan.selectCarModel(testData.carModelId);
    travelPlan.selectFuelType();
    travelPlan.selectVariantAndDate(testData.variantId, testData.yearId, testData.monthId);
    travelPlan.selectCity(testData.cityId, testData.cityName);
    travelPlan.continueToDetails();
   });
   //3 user story
  travelPlan.enterInvalidContactDetails();
   
});
describe('Travel Insurance Test Suite', () => {
  const travelPage = new TravelInsurancePage();

  it('Find student travel insurance for 2 people (Europe), display 3 lowest plans', () => {
    cy.on('uncaught:exception', () => false);

    travelPage.visitHomePage();

    travelPage.navigateToTravelInsurance();

    travelPage.selectSingleTripOption();

    travelPage.selectEuropeanCountry()

    travelPage.fillTravelDatesAndDuration();

    
    travelPage.selectTravellersAndEnterMobile();

    travelPage.enterTravellerDOBs();

    travelPage.logThreeLowestPlans();

    travelPage.fillTravellerForms();

    travelPage.validateFormFields();
  });
});
describe('Health Insurance Navigation Test Suite', () => {
  beforeEach(() => {
    HealthInsurancePage.visitHomePage();
  });
 
  it('Story 12: G-H-V Flow - Access Health Insurance from General dropdown', () => {
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.waitForDropdownVisible();
    HealthInsurancePage.clickHealthInsuranceLabel();
  });
  it('Story 13: Extract and store all Health Insurance submenu items', () => {
    HealthInsurancePage.expandGeneralDropdown();
    HealthInsurancePage.clickHealthInsuranceLabel();
    HealthInsurancePage.waitForDropdownVisible();
    HealthInsurancePage.extractSubmenuItems();
  });
});
