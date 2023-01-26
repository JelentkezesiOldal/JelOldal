import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import FelhasznalokView from "../../view/Admin/Felhasznalok/FelhasznalokView.js";
import JelentkezokView from "../../view/Admin/Jelentkezok/JelentkezokView.js";


class AdminController{
    constructor(){
        console.log("AdminController")
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adminadatmodel = new AdminAdatModel(token);
        this.vegpont = ""
        $("#stat").on("click", () => {
            
            adminadatmodel.adatBe();
        })
        $("#felh").on("click", () => {
            this.vegpont = "/admin/felhasznalok"
            adminadatmodel.adatBe(this.vegpont, this.statisztikaMutat);
        })
        $("#jele").on("click", () => {
            this.vegpont = "/admin/jelentkezok"
            adminadatmodel.adatBe(this.vegpont, this.jelentkezokMutat);
        })
        $("#szak").on("click", () => {
            adminadatmodel.adatBe();
        })
        $("#arch").on("click", () => {
            adminadatmodel.adatBe();
        })


    }
    loginMeth(){
    }

    statisztikaMutat(tomb){
        const szuloElem = $("article")
        new FelhasznalokView(tomb, szuloElem)
    }
    jelentkezokMutat(tomb){
        const szuloElem = $("article")
        new JelentkezokView(tomb, szuloElem)
    }
}

export default AdminController