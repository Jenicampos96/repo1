import { CommonPageData } from "../pages/common-page/commonpage.data"
import { CommonPageMethods } from "../pages/common-page/commonpage.methods"
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../Util/logger"

describe (CommonPageData.testSuites.registroYautenticacion, ()=>{
    it ("Registro de Usuario valido", ()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la pagina de inicio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer click en la barra de navegacion")
        CommonPageMethods.clickOnSignUPOPtion();

        Logger.stepNumber(3)
        Logger.step("completar todos los campos obligatorios con informacion valida")
        SignupMethods.insertUSerNAme("cgfch")
        SignupMethods.insertPassword("cgfch")

        Logger.stepNumber(4)
        Logger.step("Hacer click en el boton signup para registrar al usuario")
        SignupMethods.clickOnsingupBoton();
       
        Logger.verification("verificar que se muestre el mensaje'Sign up successful'")
        SignupMethods.verifySignUpSuccesfulMessageISDispalyed();
    })
})