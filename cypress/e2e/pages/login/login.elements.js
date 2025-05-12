export class LoginElements{
static get textboxes(){
    return {
        get username(){
            return cy.get('input#loginusername')
        },
        get password(){
            return cy.get('input#loginpassword')
        }
    };
}

static get buttons() {
    return{
        get close(){
            cy.get('div[id="logInModal"] button').eq(1)
        },
        get login(){
            cy.contains('button', 'Log in')
        }
    }
}
}