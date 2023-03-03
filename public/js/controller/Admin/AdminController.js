import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import ArchivaltakView from "../../view/Admin/Archivum/ArchivaltakView.js";
import FelhasznalokView from "../../view/Admin/Felhasznalok/FelhasznalokView.js";
import JelentkezokElfogadView from "../../view/Admin/Jelentkezok/JelentkezokElfogadView.js";
import JelentkezokView from "../../view/Admin/Jelentkezok/JelentkezokView.js";
import SzakokView from "../../view/Admin/Szakok/SzakokView.js";

class AdminController {
    constructor() {
        console.log("AdminController");
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adminadatmodel = new AdminAdatModel(token);
        this.vegpont = "";
        $("#stat").on("click", () => {
            adminadatmodel.adatBe();
        });

        $("#felh").on("click", () => {
            adminadatmodel.adatBe("/admin/felPlusSzak", this.felhasznalokMutat);
        });

        $("#jele").on("click", () => {
            adminadatmodel.adatBe("/admin/osszes", this.jelentkezokMutat);
        });

        $("#elf").on("click", () => {
            adminadatmodel.adatBe("/admin/elfVar", this.jelentkezokElfogadMutat);
        });

        $("#szak").on("click", () => {
            adminadatmodel.adatBe("/admin/inditSzak", this.szakokMutat);
        });

        $("#arch").on("click", () => {
            adminadatmodel.adatBe("/admin/archivOsszes", this.archivaltMutat);
        });

        $(window).on("mod", (event) => {
            adminadatmodel.adatModosit("/admin/modosit", event.detail)
            location.reload()
        })

        $(window).on("archiv", (event) => {
            adminadatmodel.adatUj("/admin/ujArchivum", event.detail);
            adminadatmodel.adatTorol("/admin/torol/", event.detail);
            // location.reload();
        });

        $(window).on("torol", (event) => {
            adminadatmodel.adatTorol("/admin/torol/", event.detail);
            location.reload();
        });

        $(window).on("indit", (event) => {
            console.log(event.detail);
            adminadatmodel.adatUj("/admin/ujInditottSzak", event.detail);
        });

        $(window).on("keres", (event) => {
            this.vegpont = "/admin/kereses";
            this.vegpont += "/" + event.detail;
            adminadatmodel.adatBe(this.vegpont, this.felhasznalokMutat);
        });

        $(window).on("keresJ", (event) => {
            this.vegpont = "/admin/keresesj";
            this.vegpont += "/" + event.detail;
            adminadatmodel.adatBe(this.vegpont, this.jelentkezokMutat);
        });

        $(window).on("felvesz", (event) => {
            console.log(event.detail);
            adminadatmodel.adatUj("/admin/ujFelhasznalo", event.detail);
            adminadatmodel.adatBe("/admin/felPlusSzak", this.felhasznalokMutat);
        });

        $(window).on("ujszak", (event) => {
            console.log(event.detail);
            adminadatmodel.adatUj("/admin/ujSzak", event.detail);
            //location.reload();
        });

        $(window).on("mod", (event) => {
            console.log(event.detail);
            adminadatmodel.adatModosit("/admin/modosit", event.detail);
            //location.reload();
        });

        // $(window).on("ment", () => {
        //     generatePDF();
        // });
    }

    felhasznalokMutat(tomb){
        const szuloElem = $("article")
        new FelhasznalokView(tomb, szuloElem)
    }
    jelentkezokMutat(tomb) {
        const szuloElem = $("article");
        new JelentkezokView(tomb, szuloElem);
    }
    jelentkezokElfogadMutat(tomb){
        const szuloElem = $("article");
        new JelentkezokElfogadView(tomb, szuloElem)
    }
    szakokMutat(tomb) {
        const szuloElem = $("article");
        new SzakokView(tomb, szuloElem);
    }
    archivaltMutat(tomb) {
        const szuloElem = $("article");
        new ArchivaltakView(tomb, szuloElem);
    }
}


export default AdminController;
