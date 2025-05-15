export class ThankYouForPurshaseElements{
    static get buttons(){
       return{
        get okButton(){
            return cy.contains('button', 'OK')
        },
       };
    }

    static get icon(){
        return{
            get iconcheck(){
                return cy.get('.sa-success')
            }
        }
    }
}