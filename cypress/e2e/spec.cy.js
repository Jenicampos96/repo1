import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./Util/logger"

describe('template spec', () => {
  it('passes', () => {
    const usuario= "random01"
    const contrasena="random01"

    Logger.stepNumber(1)
    Logger.step("Navegar por la pagina Demoblaze")
    cy.visit('https://www.demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step("click en el link Login")
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
   Logger.step(`Loggearse con las credenciales: "${usuario}" / "${contrasena}"`);
   LoginMethods.login(usuario, contrasena)

  Logger.verification(`el home deberia mostrar "Welcome ${usuario} "`);

    cy.get('a#nameofuser').should("contain.text", usuario)
  })
})