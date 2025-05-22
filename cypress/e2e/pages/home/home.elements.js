export class HomeElements{
    static get categoriesMenu(){
        return{
            get phone(){
                return cy.contains('a', 'Phones')
            },
            get laptps(){
                return  cy.contains('a', 'Laptops')
            },
            get monitors(){
                return cy.contains('a', 'Monitors')
            },
        };
    }

    static product(productname){
return cy.contains('a', productname, {timeout:3000})
    }
}