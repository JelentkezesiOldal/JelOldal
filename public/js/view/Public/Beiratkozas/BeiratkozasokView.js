import BeiratkozasView from "./BeiratkozasView.js";

class BeiratkozasokView{
    constructor(tomb, szuloElem){
        szuloElem.append(`<article></article>`)
        this.articleElem = szuloElem.children("article:last-child");



        new BeiratkozasView(tomb, this.articleElem);

        /* Object.keys(tomb).forEach(elem => {                  
        });   */
    }

    
}
export default BeiratkozasokView;

