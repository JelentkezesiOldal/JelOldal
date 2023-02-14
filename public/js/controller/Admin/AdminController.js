import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import ArchivaltakView from "../../view/Admin/Archivum/ArchivaltakView.js";
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
            this.vegpont = "/admin/felPlusSzak"
            adminadatmodel.adatBe(this.vegpont, this.felhasznalokMutat);
        })
        $("#jele").on("click", () => {
            this.vegpont = "/admin/osszes"
            adminadatmodel.adatBe(this.vegpont, this.jelentkezokMutat);
        })
        $("#szak").on("click", () => {
            this.vegpont = "/admin/inditSzak"
            adminadatmodel.adatBe(this.vegpont, this.szakokMutat);
        })

        $("#arch").on("click", () => {
            adminadatmodel.adatBe("/admin/archivOsszes", this.archivaltMutat);
        })

        $(window).on("torol", (event) => {
            this.vegpont = "/admin/torol/"
            adminadatmodel.adatUj("/admin/ujArchivum", this.archivaltMutat)
            adminadatmodel.adatTorol(this.vegpont, event.detail);
            location.reload()
        })
        $(window).on("indit", (event) => {
            console.log(event.detail)
            adminadatmodel.adatUj("/admin/ujInditottSzak", event.detail)
        
        })
        $(window).on("keres", (event) => {
            this.vegpont = "/admin/keres"
            //console.log(this.vegpont)
            this.vegpont += "/" + event.detail
            //console.log(this.vegpont)
            adminadatmodel.adatBe(this.vegpont, this.felhasznalokMutat)
        
        })
    }
    felhasznalokMutat(tomb){
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
    archivaltMutat(tomb){
        const szuloElem = $("article")
        new ArchivaltakView(tomb, szuloElem)
    }
}

export default AdminController