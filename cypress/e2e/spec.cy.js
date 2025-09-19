import travelPlan from '../support/pageobjectmodel/travelplan';
import testData from '../fixtures/data.json';

describe('GoDigit Car Insurance Quote Flow', () => {
  beforeEach(() => {
    travelPlan.visitHomePage();
    travelPlan.suppressExceptions();
  });

  it('All car insurance test cases', () => {
    travelPlan.navigateToCarInsurance();
    travelPlan.clickWithoutCarNumber();
    travelPlan.navigateToCarInsurance();
    travelPlan.enterQuoteDetails(testData.registrationNumber, testData.mobileNumber);
    travelPlan.clickGetQuoteButton();
    travelPlan.selectCarModel(testData.carModelId);
    travelPlan.selectFuelType();
    travelPlan.selectVariantAndDate(testData.variantId, testData.yearId, testData.monthId);
    travelPlan.selectCity(testData.cityId, testData.cityName);
    travelPlan.continueToDetails();
    travelPlan.enterInvalidContactDetails();
    travelPlan.enterValidContactDetails(testData.ownerName, testData.mobileNumber, testData.email);
    travelPlan.selectInsurer(testData.insurerName);
    travelPlan.enterNomineeDetails(testData.nomineeName, testData.nomineeRelation);
    travelPlan.enterVehicleDetails(testData.engineNumber, testData.chassisNumber);
    travelPlan.addOptionalAddon();
    travelPlan.finalPayNow();
  });
});
