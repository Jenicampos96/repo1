import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.wait(2000)
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.insertUserName("hola")
    LoginMethods.insertPassword("hola")
    LoginMethods.clickOnloginButton()
  })
})