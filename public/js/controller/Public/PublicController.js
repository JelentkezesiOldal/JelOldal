import PublicAdatModel from "../../model/Public/PublicAdatModel.js"
import JelentkezesekView from "../../view/Public/Jelentkezes/JelentkezesekView.js"

class PublicController{
    #tomb = [];
    constructor(){
        console.log("PublicController")
        const token = $('meta[name="csrf-token"]').attr("content");
        const adatmodel = new PublicAdatModel(token);
        this.vegpont = "/ujJelentkezo"
        this.adatok(this.#tomb);
        
        $(window).on("elkuld", (event)=>{
            console.log("elküld a controllerben")
            
            adatmodel.adatUj(this.vegpont, event.detail);
            console.log(event.detail)
        });
    }

    adatok(tomb){
        const szuloElem =$('main');
        new JelentkezesekView(tomb, szuloElem)
    }
}

export default PublicController