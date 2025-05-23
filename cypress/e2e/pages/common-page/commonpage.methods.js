import { CommonPageData } from "./commonpage.data";
import { CommonPageElements } from "./commonpage.elements";

export class CommonPageMethods {
  static navigateToDemoBlaze() {
    cy.clearAllCookies();
    cy.clearLocalStorage()
    cy.visit(CommonPageData.url);
    CommonPageMethods.clickOnHomeOPtion()
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

  static clickOncartOPtion() {
    CommonPageElements.TopMenu.cart.click(); //despues de dar click va a omitir errores que no son propios de cypress
    Cypress.on("uncaught:exception", (err, runnable)=>{
      return false
    })
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

  static generateRandomString(length=10){
    let results=""
    const characters="abcdefghijklmnopqrstuvwxyz0123456789"
    const constcharactersLenght = characters.length
    let counter =0

    while (counter<length) {
      results+= characters.charAt(Math.floor(Math.random()* constcharactersLenght))
      counter+= 1
    }
    return results
  }

  static verifySignedUser(username){
   CommonPageElements.signUser.should("have.text", `Welcome ${username}`)
  }

  static logout(){
    cy.get("body").then($body=>{
      if($body.find("#logout2[style='display: block;']").length>0){
        CommonPageElements.TopMenu.logout.click()
      }
    })
  }
}
