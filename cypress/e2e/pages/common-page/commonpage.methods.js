import { CommonPageData } from "./commonpage.data";
import { CommonPageElements } from "./commonpage.elements";

export class CommonPageMethods {
  static navigateToDemoBlaze() {
    cy.clearCookies();
    cy.visit(CommonPageData.url);
  }

  static clickOnHomeOPtion() {
    CommonPageElements.TopMenu.home.click();
  }

  static clickOncontactOPtion() {
    CommonPageElements.TopMenu.contact.click();
  }

  static clickOnaboutUsOPtion() {
    CommonPageElements.TopMenu.AboutUs.click();
  }

  static clickOncartPtion() {
    CommonPageElements.TopMenu.cart.click();
  }

  static clickOnLoginOPtion() {
    CommonPageElements.TopMenu.logIn.click();
  }

  static clickOnSignUPOPtion() {
    CommonPageElements.TopMenu.SignUp.click();
  }

  static verifyAlert(espectedMessage) {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(espectedMessage);
    });
  }
}
