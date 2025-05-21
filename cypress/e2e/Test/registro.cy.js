import { CommonPageData } from "../pages/common-page/commonpage.data"
import { CommonPageMethods } from "../pages/common-page/commonpage.methods"
import { LoginData } from "../pages/login/login.data";
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../Util/logger"

const user= CommonPageMethods.generateRandomString();
const password=CommonPageMethods.generateRandomString();
const existingUser = LoginData.validCredencials.username

describe (CommonPageData.testSuites.registro, ()=>{
    it ("Registro de Usuario valido", ()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la pagina de inicio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer click en Sign Up en la barra de navegacion")
        CommonPageMethods.clickOnSignUPOPtion();

        Logger.stepNumber(3)
        Logger.step("completar todos los campos obligatorios con informacion valida")
        SignupMethods.insertUSerNAme(user)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step("Hacer click en el boton signup para registrar al usuario")
        SignupMethods.clickOnsingupBoton();
       
        Logger.verification("verificar que se muestre el mensaje'Sign up successful'")
        SignupMethods.verifySignUpSuccesfulMessageISDispalyed();
    })


     it ("Registro de Usuario invalido", ()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la pagina de inicio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer click en Sign Up en la barra de navegacion")
        CommonPageMethods.clickOnSignUPOPtion();

        Logger.stepNumber(3)
        Logger.step("completar todos los campos con informacion valida")
        SignupMethods.insertUSerNAme(existingUser)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step("Hacer click en el boton signup para registrar al usuario")
        SignupMethods.clickOnsingupBoton();
       
        Logger.verification("verificar que se muestre el mensaje'usuario existente'")
        SignupMethods.verifyThatThisUSerAlreadyExistMesaggeIsDisplay()
    })
})