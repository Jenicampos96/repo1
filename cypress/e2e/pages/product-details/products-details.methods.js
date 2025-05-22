import { CommonPageMethods } from "../common-page/commonpage.methods";
import { ProductsDetailsElements } from "./product-details.elements";

export class ProductDetailsMEthods{
    static clickOnAddTocartBottons(){
        ProductsDetailsElements.buttons.addToCard.click()
    }

    static verifyProductsDetailsPageDisplay(){
        ProductsDetailsElements.buttons.addToCard.should("be.visible")
    }

    static verifyProductAddedMesagge(){
        CommonPageMethods.verifyAlert("Product added")
    }
}