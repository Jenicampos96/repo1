export class CartElements{
    static get buttons(){
        return {
            get placeholder(){
               return  cy.get('button[data-toggle="modal"]')
            },

        };

    }
   // este es el formato solo que cypress no lo soporta hayq ue convertirlo
  //td[text()="Nexus 6"]/ancestor::tr//a

    static get links(){
        return {
            delete(productName){
                return cy.contains("td", productName).closest("tr").find("a")
            }
        }
    }
}