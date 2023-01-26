import JelentkezesView from "../Jelentkezes/JelentkezesView";

class BeiratkozasokView{
    constructor(tomb, szuloElem){
        szuloElem.append(`<article></article>`)
        this.articleElem = szuloElem.children("article:last-child");
        this.formElem = this.articleElem.children("form");



        tomb.forEach(elem => {                  
            new JelentkezesView(elem, this.formElem);
        });
    }

    
}
export default BeiratkozasokView;

