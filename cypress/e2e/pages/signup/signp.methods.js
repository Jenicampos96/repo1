import { SignupElements } from "./signup.elements";

export class SignupMethods {
    static insertUSerNAme(username){
        SignupElements.textboxes.username.invoke("val",username);
    }
    
    static insertPassword(password){
        SignupElements.textboxes.password.invoke("val",password);
    }

    static clickOnsingupBoton(){
        SignupElements.buttons.signup.click()
    }

    static signup(username, password){
        this.insertUSerNAme(username);
        this.insertPassword(password);
        this.clickOnsingupBoton();
    }
}