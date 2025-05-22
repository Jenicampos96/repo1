import { PlaceOrderelements } from "./placeOrder.elements";

export class PlaceOrderMethods{
  static insertName(name){
    PlaceOrderelements.textBoxes.name.invoke("val",name)
  }
   static insertCountry(country){
    PlaceOrderelements.textBoxes.country.invoke("val", country)
   }

   static insertcity(city){
    PlaceOrderelements.textBoxes.city.invoke("val", city)
   }

    static insertcredircard(creditcard){
    PlaceOrderelements.textBoxes.creditCard.invoke("val", creditcard)
   }
    static insertMonth(month){
    PlaceOrderelements.textBoxes.Month.invoke("val", month)
   }

    static insertYear(year){
    PlaceOrderelements.textBoxes.Year.invoke("val", year)
   }

   static clickOncloseButtons(){
    PlaceOrderelements.buttons.close.click()
   }

    static clickOnpurchaseButtons(){
    PlaceOrderelements.buttons.purchase.click()
   }

   static insertOrderInfortation(data){
 this.insertName(data.name)
 this.insertCountry(data.country)
 this.insertcity(data.city)
 this.insertcredircard(data.creditcardNumber)
 this.insertMonth(data.Month)
 this.insertYear(data.Year)
   }

   
}