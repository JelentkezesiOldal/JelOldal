import PublicAdatModel from "../../model/Public/PublicAdatModel.js"
import JelentkezesekView from "../../view/Public/Jelentkezes/JelentkezesekView.js"

class PublicController{
    constructor(){
        const token = $('meta[name="csrf-token"]').attr("content");
        const adatmodel = new PublicAdatModel(token);
        adatmodel.adatBe("/szak_indittotSzak", this.adatok);

        $(window).on("elkuld", (event)=>{
            adatmodel.adatUj("/ujJelentkezo", event.detail);
            console.log("he",event.detail)
            if(!event.detail.tanulo_neve == "" && !event.detail.email == "" && !event.detail.telefonszam == "" ){
                location.replace("/JelentkezesSikerult");
            }
        });
        
    }

    adatok(tomb){
        const szuloElem =$('main');
        new JelentkezesekView(tomb, szuloElem)
        //console.log("töömb", tomb)
       
    }
}

export default PublicController