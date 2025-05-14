export class ProductsDetailsElements{
static get buttons(){
    return{
        get addToCard(){
            return cy.contains('a', 'Add to cart')
        }
    }
}
}