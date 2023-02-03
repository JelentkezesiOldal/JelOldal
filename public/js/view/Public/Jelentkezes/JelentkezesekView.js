import JelentkezesView from "./JelentkezesView.js";
import OpcioView from "./OpcioView.js";

class JelentkezesekView{
    constructor(tomb, szuloElem){
        console.log("tömb", tomb)
        szuloElem.append(`
        <article>
        </article>
        `)

        this.sorElem = szuloElem.children("article:last-child");
        this.selectElem = this.sorElem.children("select")
        tomb.forEach(opcio => {
            const opciom = new OpcioView(opcio, this.selectElem);
            //console.log("opciom", opciom)
        });
        new JelentkezesView(tomb, this.sorElem);
        
    }
}

export default JelentkezesekView;
