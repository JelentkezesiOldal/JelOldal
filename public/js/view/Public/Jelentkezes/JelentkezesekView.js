import JelentkezesView from "./JelentkezesView.js";

class JelentkezesekView{
    constructor(tomb, szuloElem){
        szuloElem.append(`
        <article>
        </article>
        `)

        this.sorElem = szuloElem.children("article:last-child");
        this.selectElem = this.sorElem.children("select")
        new JelentkezesView(tomb, this.sorElem);
        
    }
}

export default JelentkezesekView;
