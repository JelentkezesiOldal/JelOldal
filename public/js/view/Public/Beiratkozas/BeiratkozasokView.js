import BeiratkozasFileUploadView from "./BeiratkozasFileUploadView.js";
import BeiratkozasView from "./BeiratkozasView.js";

class BeiratkozasokView{
    constructor(tomb, szuloElem){
        szuloElem.append(`<article></article>`)
        this.articleElem = szuloElem.children("article:last-child");

        const jelid = tomb.jelentkezo_id;

        new BeiratkozasView(tomb, this.articleElem);
        new BeiratkozasFileUploadView(this.articleElem, jelid);
        /* Object.keys(tomb).forEach(elem => {                  
        });   */
    }

    
}
export default BeiratkozasokView;

