import { Logger } from "../../Util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods{
static insertUserName(username){
    LoginElements.textboxes.username.invoke("val", username)
}

static insertPassword(password){
    LoginElements.textboxes.password.invoke("val",password)
}

static clickOnloginButton() {
    LoginElements.buttons.login.click()
}

static login(username,pasword){
    Logger.subStep("insertar username")
    this.insertUserName(username)
    Logger.subStep("Insertar password")
    this.insertPassword(pasword)
    Logger.subStep("click en el botton login")
    this.clickOnloginButton()
}
}