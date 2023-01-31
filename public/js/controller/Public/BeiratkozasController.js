import PublicAdatModel from "../../model/Public/PublicAdatModel.js";
import BeiratkozasokView from "../../view/Public/Beiratkozas/BeiratkozasokView.js";

class BeiratkozasController{
    constructor(){
        console.log("BeiratkozasController");
        const token = $('meta[name="csrf-token"]').attr("content");
        const beiratkozasmodel = new PublicAdatModel(token);
        this.vegpont = "/show/1";
        beiratkozasmodel.adatBe(this.vegpont, this.BeiratkozasAdatok);
        
        $(window).on("kuldes", (event)=>{
            console.log("Elküld a controllerben");
            this.vegpont = "/beiratkozo"
            beiratkozasmodel.adatModosit(this.vegpont, event.detail);
            console.log(event.detail);
        });
    } 
    BeiratkozasAdatok(tomb){
        const szuloElem = $('main')
        new BeiratkozasokView(tomb, szuloElem);
    }
}
export default BeiratkozasController;