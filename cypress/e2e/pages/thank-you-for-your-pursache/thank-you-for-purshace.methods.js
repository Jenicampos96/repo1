import { ThankYouForPurshaseElements } from "./thank-you-for-purshace.elements";

export class ThankYouForPurshaseMethods{
    static clickOnOkBottons(){
        cy.wait(1000)
        ThankYouForPurshaseElements.buttons.okButton.click()
    }

    static verifyGreenCheckMArkIsDisplayed(){
        ThankYouForPurshaseElements.icon.iconcheck.should("exist");
    }
}