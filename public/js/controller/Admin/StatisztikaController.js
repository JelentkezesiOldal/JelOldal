import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import StatisztikaMenuView from "../../view/Admin/Statisztika/StatisztikaMenuView.js";
import KordiagramView from "../../view/Admin/Statisztika/KordiagramView.js";
import StatisztikakView from "../../view/Admin/Statisztika/StatisztikakView.js";

class StatisztikaController{
    constructor(){
        this.statisztikakMutat();
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adminadatmodel = new AdminAdatModel(token);
        
        //new StatisztikaMenuView($("article"));
        // $("#stat").on("click", () => {
        //     //adminadatmodel.adatBe("/admin/OsszesJelentkezo", this.statisztikakMutat);
        //     //adminadatmodel.adatBe("/admin/statOsszesJelentkezo", this.statisztikakMutat);
        // });
        // $("#tab1").on("click", () => {
        //     //adminadatmodel.adatBe("/admin/OsszesJelentkezo", this.statisztikakMutat);
        //     adminadatmodel.adatBe("/admin/statOsszesJelentkezo", this.statisztikakMutat);
            
        // });
        $(window).on("tab1", ()=>{
            adminadatmodel.adatBe("/admin/statOsszesJelentkezo", this.KordiagramOsszJelMutat);
        });
        $(window).on("tab2", ()=>{
            adminadatmodel.adatBe("/admin/statOsszesArchivalt", this.KordiagramOsszArchJelMutat);
        });
        
    }
    statisztikakMutat(tomb){
        const szuloElem = $("article");
        new StatisztikakView(tomb, szuloElem);
    }
    KordiagramOsszJelMutat(tomb){
        new KordiagramView(tomb, "Összes jelentkező szakokra bontva");
    }
    KordiagramOsszArchJelMutat(tomb){
        new KordiagramView(tomb, "Összes archivált jelentkező évekre bontva");
    }

}
export default StatisztikaController;