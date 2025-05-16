export class CommonPageData {
  static get url() {
    return "https://www.demoblaze.com/index.html";
  }

  static get testSuites(){ //estas son para llamarlas desde Registro
    return{
      registroYautenticacion:"Regsitro y autenticacion",
      catalogoYcompra: "catalogo y compra"
    }
  }
}
