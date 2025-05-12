import { LoginElements } from "./login.elements";

export class LoginMethods{
static insertUserName(username){
    LoginElements.textboxes.username.type(username)
}

static insertPassword(password){
    LoginElements.textboxes.password.type(password)
}

static clickOnloginButton() {
    LoginElements.buttons.login.click()
}

static login(username,pasword){
    this.insertUserName(username)
    this.insertPassword(pasword)
    this.clickOnloginButton()
}
}