import travelPlan from '../support/pageobjectmodel/CarInsurance';
import { FamilyInsurancePage } from '../support/pageobjectmodel/FamilyInsurance';

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
