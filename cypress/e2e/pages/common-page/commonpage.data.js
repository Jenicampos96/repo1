export class CommonPageData {
  static get url() {
    return "https://www.demoblaze.com/index.html";
  }

  static get testSuites(){ //estas son para llamarlas desde Registro
    return{
      registro:"Registro",
      autenticacion: "Autenticacion",
      catalogoYcompra: "catalogo y compra",

    }
  }
}
