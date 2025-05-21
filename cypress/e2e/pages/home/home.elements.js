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

    static product(name){
return cy.contains('a', name)
    }
}