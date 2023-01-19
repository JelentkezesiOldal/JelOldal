import JelentkezesView from "./JelentkezesView.js";

class JelentkezesekView{
    constructor(tomb, szuloElem){
        szuloElem.append(`
        <table>
        <tr>
        <th><label for="tanulo_neve">Név:</label></th>
        <th><label for="email">Email cím:</label></th>
        <th><label for="telefonszam">Telefonszám:</label></th>
       
        </tr>
        </table>
        `)

        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbody");

        new JelentkezesView( this.tbodyElem)
        
    }
}

export default JelentkezesekView;
