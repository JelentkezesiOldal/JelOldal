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
            adminadatmodel.adatBe("/admin/felPlusSzak", this.felhasznalokMutat);
        })
        $("#jele").on("click", () => {
            adminadatmodel.adatBe("/admin/osszes", this.jelentkezokMutat);
        })
        $("#szak").on("click", () => {
            adminadatmodel.adatBe("/admin/inditSzak", this.szakokMutat);
        })

        $("#arch").on("click", () => {
            adminadatmodel.adatBe("/admin/archivOsszes", this.archivaltMutat);
        })

        $(window).on("torol", (event) => {
            this.vegpont = "/admin/torol/"
            adminadatmodel.adatUj("/admin/ujArchivum", event.detail)
            adminadatmodel.adatTorol("/admin/torol/", event.detail);
            location.reload()
        })
        $(window).on("indit", (event) => {
            console.log(event.detail)
            adminadatmodel.adatUj("/admin/ujInditottSzak", event.detail)
        
        })
        $(window).on("keres", (event) => {
            this.vegpont = "/admin/kereses"
            this.vegpont += "/" + event.detail
            adminadatmodel.adatBe(this.vegpont, this.felhasznalokMutat)
        })

        $(window).on("keresJ", (event) => {
            this.vegpont = "/admin/keresesj"
            this.vegpont += "/" + event.detail
            adminadatmodel.adatBe(this.vegpont, this.jelentkezokMutat)
        })

        $(window).on("felvesz", (event) => {
            console.log(event.detail)
            adminadatmodel.adatUj("/admin/ujFelhasznalo", event.detail)
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