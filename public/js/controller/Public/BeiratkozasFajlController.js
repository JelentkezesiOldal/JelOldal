import PublicAdatModel from "../../model/Public/PublicAdatModel.js";
import BeiratkozasFileUploadokView from "../../view/Public/Beiratkozas/BeiratkozasFileUploadokView.js";

class BeiratkozasFajlController{
constructor(){
    console.log("BeiratkozasFajlController");
    const token = $('meta[name="csrf-token"]').attr("content");
    
    const urltoken = $('#token').val();

    const beiratkozasmodel = new PublicAdatModel(token);
    this.vegpont = "/show";
    beiratkozasmodel.BeiratkozasAdat(this.vegpont, this.BeiratkozasAdatok, urltoken);
        

    $(window).on("kuldes", (event)=>{
        beiratkozasmodel.FileTorol("/fajlmappatorles",event.detail, urltoken);
        beiratkozasmodel.FileUpload("/file_upload", event.detail);
        location.replace("/adatrogzites");
    });
    $(window).on("vissza", ()=>{
        location.replace("/beiratkozas/" + urltoken);
    });

}
BeiratkozasAdatok(tomb){
    const szuloElem = $('main')
    console.log("Beiratkozas ADATOK:   ", tomb);
    new BeiratkozasFileUploadokView(tomb, szuloElem);
}

}
export default BeiratkozasFajlController;