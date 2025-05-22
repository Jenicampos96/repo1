import { CartElements } from "./cart.elements";

export class CartMethods{
    static clicOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should("be.visible")
    }

    static verifycartPageIsShown(){
        cy.url().should("include", "cart.html")
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOlder.click()
    }
}