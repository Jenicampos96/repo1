import { CommonPageData } from "../pages/common-page/commonpage.data";
import { CommonPageMethods } from "../pages/common-page/commonpage.methods";
import { HomeElements } from "../pages/home/home.elements";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../Util/logger";

const user= LoginData.validCredencials

describe(CommonPageData.testSuites.catalogoYcompra, ()=>{
    it("navegacion por categorias", ()=>{
        Logger.stepNumber(1)
        Logger.step("iniciar sesion como un usuario registrado")
        Logger.subStep("navegar a l aplicacion")
        CommonPageMethods.navigateToDemoBlaze()
        Logger.subStep("clic on login in link")
        CommonPageMethods.clickOnLoginOPtion()
        LoginMethods.login(user.username,user.password)

        Logger.stepNumber(2)
        Logger.step("Navegar a l apagina de inicio")
        CommonPageMethods.clickOnHomeOPtion()

        Logger.stepNumber(3)
        Logger.step("seleccionar una categoria de productos en el menu de navegacion")
        HomeMethods.clickOnMonitorsOption()
        Logger.verification("verificar que se muestre la lista de productos correspondiente a los seleccionados ")
        HomeMethods.verifyProductDisplay("Apple monitor 24")
         HomeMethods.verifyProductDisplay("ASUS Full HD")

    })
})