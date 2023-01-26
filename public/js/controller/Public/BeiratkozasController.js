import PublicAdatModel from "../../model/Public/PublicAdatModel";
import BeiratkozasokView from "../../view/Public/Beiratkozas/BeiratkozasokView";
import PublicController from "./PublicController.js";

class BeiratkozasController{
    constructor(){
        console.log("BeiratkozasController");
        const token = $('meta[name="csrf-token"]').attr("content");
        const beiratkozasmodel = new PublicAdatModel(token);
        this.vegpont = "/beiratkozo";
        beiratkozasmodel.adatBe(this.vegpont, this.BeiratkozasAdatok);

        $(window).on("elkuld", (event)=>{
            console.log("Elküld a controllerben");
            beiratkozasmodel.adatModosit(this.vegpont, event.detail);
        });
    }
    BeiratkozasAdatok(tomb){
        const szuloElem = $('main')
        new BeiratkozasokView(tomb, szuloElem);
    }
}
export default BeiratkozasController;