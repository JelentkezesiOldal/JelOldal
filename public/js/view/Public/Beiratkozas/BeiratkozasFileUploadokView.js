import BeiratkozasFileUploadView from "./BeiratkozasFileUploadView.js";

class BeiratkozasFileUploadokView{
constructor(tomb, szuloElem){
    szuloElem.append(`<article></article>`)
    this.articleElem = szuloElem.children("article:last-child");
    const token = tomb.token;
    const jelid = tomb.jelentkezo_id;
    new BeiratkozasFileUploadView(this.articleElem, jelid, token);
}

}
export default BeiratkozasFileUploadokView;