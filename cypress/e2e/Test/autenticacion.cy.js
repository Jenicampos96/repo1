import { CommonPageData } from "../pages/common-page/commonpage.data";
import { CommonPageMethods } from "../pages/common-page/commonpage.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../Util/logger";

describe( CommonPageData.testSuites.autenticacion, ()=>{
    it ("inicio de sesion valido", ()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la pagina de inicio")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step("Hacer clic en Log in  en la barra de navegacion")
        CommonPageMethods.clickOnLoginOPtion()

        Logger.stepNumber(3)
        Logger.step("Ingresar un nombre de usuario y contrasena valida")
        LoginMethods.insertUserName(LoginData.validCredencials.username),
        LoginMethods.insertPassword(LoginData.validCredencials.password)
        
       Logger.stepNumber(4)
        Logger.step("Hacer clic en log in para iniciar sesion")
        LoginMethods.clickOnloginButton()
        Logger.verification("verificar que se redirige al usuario a la pagina de inicio")
        CommonPageMethods.verifySignedUser(LoginData.validCredencials.username)

    })
})