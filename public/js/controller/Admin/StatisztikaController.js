import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import StatisztikaView from "../../view/Admin/Statisztika/StatisztikaView.js";
import StatisztikakView from "../../view/Admin/Statisztika/StatisztikakView.js";

class StatisztikaController{
    constructor(){
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adminadatmodel = new AdminAdatModel(token);
        
        $("#stat").on("click", () => {
            //adminadatmodel.adatBe("/admin/OsszesJelentkezo", this.statisztikakMutat);
            adminadatmodel.adatBe("/admin/statOsszesJelentkezo", this.statisztikakMutat);
        });
        $("#tab1").on("click", () => {
            //adminadatmodel.adatBe("/admin/OsszesJelentkezo", this.statisztikakMutat);
            adminadatmodel.adatBe("/admin/statOsszesJelentkezo", this.statisztikakMutat);
            
        });
        // $(window).on("tab1", (event)=>{
        //     //const statisztikakview = new StatisztikakView();
            
        //     //console.log(event.detail)
        //     //adminadatmodel.adatBe("/admin/osszesJelentkezo", event.detail);
        //     //new StatisztikaView(statisztikakview.divElem)
        // });
    }
    statisztikakMutat(tomb){
        const szuloElem = $("article");
        new StatisztikakView(tomb, szuloElem);
    }
}
export default StatisztikaController;