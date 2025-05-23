import { Logger } from "../../Util/logger";
import { CommonPageMethods } from "../common-page/commonpage.methods";
import { LoginMethods } from "../login/login.methods";
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

static deleteProducts(){
    cy.intercept("POST","https://api.demoblaze.com/deleteitem").as("deleteItem")
    cy.get("a[onclick*='deleteItem']").each(link=>{
        link.click()
        cy.wait("@deleteItem")
    })
}

    static empycart(username, password){
        Logger.step("navigat ti DemoBlaze aplication")
CommonPageMethods.navigateToDemoBlaze()
Logger.subStep("log out")
CommonPageMethods.logout()
Logger.subStep("click on home option")
CommonPageMethods.clickOnHomeOPtion()
Logger.subStep("click on log in option")
CommonPageMethods.clickOnLoginOPtion()
Logger.subStep(`log in with this credentials ${username} / ${password}`)
LoginMethods.login(username, password)
Logger.subStep("click on cart option")
CommonPageMethods.clickOncartOPtion()
Logger.subStep("delete products from cart")
this.deleteProducts()
    }
}