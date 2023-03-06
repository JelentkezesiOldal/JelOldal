import PublicAdatModel from "../../model/Public/PublicAdatModel.js";
import BeiratkozasokView from "../../view/Public/Beiratkozas/BeiratkozasokView.js";

class BeiratkozasController{
    constructor(){
        console.log("BeiratkozasController");
        const token = $('meta[name="csrf-token"]').attr("content");

        const urltoken = $('#token').val();
        
        console.log('UrlToken: ', urltoken);
        const beiratkozasmodel = new PublicAdatModel(token);
        this.vegpont = "/show";
        beiratkozasmodel.BeiratkozasAdat(this.vegpont, this.BeiratkozasAdatok, urltoken);
        
        $(window).on("mentes", (event)=>{
            console.log("Elküld a controllerben");
            this.vegpont = "/beiratkozo"
            console.log("adatmod elott",event.detail)
            beiratkozasmodel.adatModosit(this.vegpont, event.detail);
            console.log(event.detail);
        });
        
        $(window).on("kuldes", (event)=>{
            console.log("Elküld a controllerben");
            this.vegpont = "/file_upload"
            console.log("adatmod elott fileupload:  ",event.detail)
            beiratkozasmodel.adatModosit(this.vegpont, event.detail, urltoken);
            console.log(event.detail);
        });
    } 
    
    BeiratkozasAdatok(tomb){
        const szuloElem = $('main')
        console.log("Beiratkozas ADATOK:   ", tomb);
        new BeiratkozasokView(tomb, szuloElem);
    }
}
export default BeiratkozasController;