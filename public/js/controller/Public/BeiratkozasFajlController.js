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
        beiratkozasmodel.FileUpload("/file_upload", event.detail)
/*             $.ajax({
                url: "/file_upload",
                method: "POST",
                headers: {
                    'X-CSRF-TOKEN': token
                },
                success: function() {
                    // az AJAX kérés sikeres volt
                    location.replace("/adatrogzites");
                },
                error: function() {
                    // az AJAX kérés sikertelen volt
                    console.log("Hiba történt az AJAX kérés során!");
                }
            }) */
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