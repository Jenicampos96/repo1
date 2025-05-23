export class CommonPageElements {
  static get TopMenu() {
    return {
      get home() {
        return cy.contains("a", "Home");
      },
      get contact() {
        return cy.contains("a", "Contact");
      },
      get AboutUs() {
        return cy.contains("a", "About us");
      },
      get cart() {
        return cy.contains("a", "Cart");
      },
      get logIn() {
        return cy.contains("a", "Log in");
      },
      get SignUp() {
        return cy.contains("a", "Sign up");
      },
      get logout(){
        return cy.get("#logout2")
      }
    };
  }

  static get signUser(){
    return cy.get('a#nameofuser')
  }
}
