import { ThankYouForPurshaseElements } from "./thank-you-for-purshace.elements";

export class ThankYouForPurshaseMethods{
    static clickOnOkBottons(){
        ThankYouForPurshaseElements.buttons.okButton.click()
    }

    static verifyGreenCheckMArkIsDisplayed(){
        ThankYouForPurshaseElements.icon.iconcheck.should("exist");
    }
}