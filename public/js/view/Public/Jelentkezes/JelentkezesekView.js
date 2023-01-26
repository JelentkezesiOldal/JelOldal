import JelentkezesView from "./JelentkezesView.js";

class JelentkezesekView{
    constructor(tomb, szuloElem){
        szuloElem.append(`
        <article></article>
        `)

        this.articleElem = szuloElem.children("article:last-child");
        new JelentkezesView(this.articleElem)
        
    }
}

export default JelentkezesekView;
