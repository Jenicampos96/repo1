import { CommonPageMethods } from "../common-page/commonpage.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods {
    static insertUSerNAme(username){
        SignupElements.textboxes().username.invoke("val",username);
    }
    
    static insertPassword(password){
        SignupElements.textboxes().password.invoke("val",password);
    }

    static clickOnsingupBoton(){
        SignupElements.buttons.signup.click()
    }

    static signup(username, password){
        this.insertUSerNAme(username);
        this.insertPassword(password);
        this.clickOnsingupBoton();
    }


    //este metodo es para verfificar que el usuario se loguee con exito
    static verifySignUpSuccesfulMessageISDispalyed(){
        CommonPageMethods.verifyAlert("Sign up successful.")
    }
}