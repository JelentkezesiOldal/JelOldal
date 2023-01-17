import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import FelhasznalokView from "../../view/Admin/Felhasznalok/FelhasznalokView.js";

class AdminController{
    constructor(){
        console.log("AdminController")
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adminadatmodel = new AdminAdatModel(token);
        this.vegpont = "/admin/jelentkezok"
        $("#stat").on("click", () => {
            console.log("stat katt")
            adminadatmodel.adatBe(this.vegpont, this.statisztikaMutat);
        })
        $("#felh").on("click", () => {
            adminadatmodel.adatBe();
        })
        $("#jele").on("click", () => {
            adminadatmodel.adatBe();
        })
        $("#szak").on("click", () => {
            adminadatmodel.adatBe();
        })
        $("#arch").on("click", () => {
            adminadatmodel.adatBe();
        })


    }


    statisztikaMutat(tomb){
        const szuloElem = $("article")
        new FelhasznalokView(tomb, szuloElem)
    }
}

export default AdminController