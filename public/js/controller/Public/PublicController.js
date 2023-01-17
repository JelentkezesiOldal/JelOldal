import PublicAdatModel from "../../model/Public/PublicAdatModel.js"
import JelentkezesView from "../../view/Public/Jelentkezes/JelentkezesView.js"

class PublicController{
    constructor(tomb){
        console.log("PublicController")
        const token = $('meta[name="csrf-token"]').attr("content");
        const adatmodel = new PublicAdatModel(token);
        this.vegpont = "/jelentkezoHaromAdat"
        //adatmodel.adatUj(this.vegpont, this.adatok);
        
        $(window).on("elkuld", (event)=>{
            adatmodel.adatUj(this.vegpont, event.detail);
        });
    }
}

export default PublicController