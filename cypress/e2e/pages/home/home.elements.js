export class HomeElements{
    static get categoriesMenu(){
        return{
            get phone(){
                return cy.contains('a', 'Phones')
            },
            get laptps(){
                 cy.contains('a', 'Laptops')
            },
            get monitors(){
                 cy.contains('a', 'Monitors')
            },
        };
    }

    static product(name){
return cy.contains('a', name)
    }
}