import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import FelhasznalokView from "../../view/Admin/Felhasznalok/FelhasznalokView.js";
import JelentkezokView from "../../view/Admin/Jelentkezok/JelentkezokView.js";
import SzakokView from "../../view/Admin/Szakok/SzakokView.js";


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
            this.vegpont = "/admin/szakok"
            adminadatmodel.adatBe(this.vegpont, this.szakokMutat);
        })
        $("#arch").on("click", () => {
            adminadatmodel.adatBe();
        })
        $(window).on("torol", (event) => {
            console.log(event.detail)
            this.vegpont = "/admin/jelentkezok/torol"
            adminadatmodel.adatTorol(this.vegpont, event.detail);
            location.reload()
        })
        $(window).on("indit", (event) => {
            console.log(event.detail)
            
        })

    }
    statisztikaMutat(tomb){
        const szuloElem = $("article")
        new FelhasznalokView(tomb, szuloElem)
    }
    jelentkezokMutat(tomb){
        const szuloElem = $("article")
        new JelentkezokView(tomb, szuloElem)
    }
    szakokMutat(tomb){
        const szuloElem = $("article")
        new SzakokView(tomb, szuloElem)
    }
}

export default AdminController