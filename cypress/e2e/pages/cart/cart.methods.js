import { CartElements } from "./cart.elements";

export class CartMethods{
    static clicOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }
}