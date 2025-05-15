export class Logger {
  static stepNumber(number) {
    const text = `Step # ${number}`;
    cy.log(text)
    cy.allure().step(text)

  }

   static step(decripcion) {
    const text = `Step - ${decripcion}`;
    cy.log(text)
    cy.allure().step(text)

  }

   static verification(descripcion) {
    const text = `verificacion - ${descripcion}`;
    cy.log(text)
    cy.allure().step(text)

  }

   static subStep(descripcion) {
    const text = `SubSubStep - ${descripcion}`;
    cy.log(text)
    cy.allure().step(text)

  }

   static subverificacion(descripcion) {
    const text = `SubStep - ${descripcion}`;
    cy.log(text)
    cy.allure().step(text)

  }
}
