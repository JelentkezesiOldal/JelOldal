import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import KordiagramView from "../../view/Admin/Statisztika/KordiagramView.js";
import StatisztikakView from "../../view/Admin/Statisztika/StatisztikakView.js";

class StatisztikaController{
    constructor(){
        this.statisztikakMutat();
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adminadatmodel = new AdminAdatModel(token);
        
        $(window).on("tab1", ()=>{
            adminadatmodel.adatBe("/admin/statOsszesJelentkezo", this.KordiaOsszJelMutat);
            adminadatmodel.adatBe("/admin/statOsszJeloBeirA", this.KordiaOsszJelBeirAMutat);
            adminadatmodel.adatBe("/admin/statOsszJeloElfVar", this.KordiaOsszJelElfvarMutat);
            adminadatmodel.adatBe("/admin/statOsszJeloBeir", this.KordiaOsszJelBeirMutat);

        });
        $(window).on("tab2", ()=>{
            adminadatmodel.adatBe("/admin/statOsszesArchivalt", this.KordiaOsszArchJelMutat);
        });
        
    }
    statisztikakMutat(tomb){
        const szuloElem = $("article");
        new StatisztikakView(tomb, szuloElem);
    }
    KordiaOsszJelMutat(tomb){
        new KordiagramView(tomb, "Összes jelentkező szakokra bontva");
    }
    KordiaOsszJelBeirAMutat(tomb){
        new KordiagramView(tomb, "Összes Beiratkozás alatt lévő jelentkező szakokra bontva");
    }
    KordiaOsszJelElfvarMutat(tomb){
        new KordiagramView(tomb, "Összes Elfogadásra váró jelentkező szakokra bontva");
    }
    KordiaOsszJelBeirMutat(tomb){
        new KordiagramView(tomb, "Összes Beiratkozott jelentkező szakokra bontva");
    }
    KordiaOsszArchJelMutat(tomb){
        new KordiagramView(tomb, "Összes archivált jelentkező évekre bontva");
    }

}
export default StatisztikaController;