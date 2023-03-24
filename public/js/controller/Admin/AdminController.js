import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";
import ArchivaltakView from "../../view/Admin/Archivum/ArchivaltakView.js";
import FelhasznalokView from "../../view/Admin/Felhasznalok/FelhasznalokView.js";
import JelentkezokBeirAlattView from "../../view/Admin/Jelentkezok/JelentkezokBeirAlattView.js";
import JelentkezokElfogadView from "../../view/Admin/Jelentkezok/JelentkezokElfogadView.js";
import JelentkezokView from "../../view/Admin/Jelentkezok/JelentkezokView.js";
import SzakokElindVIew from "../../view/Admin/Szakok/SzakokElindView.js";
import SzakokView from "../../view/Admin/Szakok/SzakokView.js";

class AdminController {
    constructor() {
        // console.log("AdminController");
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

        $("#beirA").on("click", () => {
            adminadatmodel.adatBe("/admin/beirAlatt", this.jelentkezokBeirAlattMutat);
        });

        $("#szak").on("click", () => {
            adminadatmodel.adatBe("/admin/inditSzak", this.szakokMutat);
            adminadatmodel.adatBe("/szak_indittotSzak", this.szakokElindMutat);
        });

        $("#arch").on("click", () => {
            adminadatmodel.adatBe("/admin/archivOsszes", this.archivaltMutat);
        });

        $(window).on("mod", (event) => {
            adminadatmodel.adatModosit("/admin/modosit", event.detail)
        })

        $(window).on("archiv", (event) => {
            adminadatmodel.adatUj("/admin/ujArchivum", event.detail);
            adminadatmodel.adatTorol("/admin/torol/", event.detail);
        });

        $(window).on("torol", (event) => {
            adminadatmodel.adatTorol("/admin/torol/", event.detail);
        });

        $(window).on("torolSzak", (event) => {
            adminadatmodel.adatTorolSzak("/admin/torolSzak/", event.detail);
            adminadatmodel.adatBe("/admin/inditSzak", this.szakokMutat);
            adminadatmodel.adatBe("/szak_indittotSzak", this.szakokElindMutat);
        });

        $(window).on("torolFelh", (event) => {
            adminadatmodel.adatTorolFelh("/admin/torolFelh/", event.detail);
            adminadatmodel.adatBe("/admin/felPlusSzak", this.felhasznalokMutat);
        });

        $(window).on("indit", (event) => {
            console.log(event.detail);
            adminadatmodel.adatUj("/admin/ujInditottSzak", event.detail);
            adminadatmodel.adatBe("/admin/inditSzak", this.szakokMutat);
            adminadatmodel.adatBe("/szak_indittotSzak", this.szakokElindMutat);
        });

        $(window).on("keres", (event) => {
            this.vegpont = "/admin/kereses/" + event.detail;
            adminadatmodel.adatBe(this.vegpont, this.felhasznalokMutat);
        });

        $(window).on("keresJ", (event) => {
            this.vegpont = "/admin/keresesj/" + event.detail;
            adminadatmodel.adatBe(this.vegpont, this.jelentkezokMutat);
        });

        $(window).on("felvesz", (event) => {
            adminadatmodel.adatUj("/admin/ujFelhasznalo", event.detail);
            adminadatmodel.adatBe("/admin/felPlusSzak", this.felhasznalokMutat);
        });

        $(window).on("ujszak", (event) => {
            adminadatmodel.adatUj("/admin/ujSzak", event.detail);
            adminadatmodel.adatBe("/admin/inditSzak", this.szakokMutat);
            adminadatmodel.adatBe("/szak_indittotSzak", this.szakokElindMutat);
        });

        $(window).on("allArchiv", () => {
            adminadatmodel.adatUjAll("/admin/archivOsszesJel");
            adminadatmodel.adatTorolAll("/admin/torolOsszesJel");
            adminadatmodel.adatTorolAll("/admin/torolInditottSzak");
            adminadatmodel.adatBe("/admin/archivOsszes", this.archivaltMutat);
        });

        $(window).on("vissz", (event) => {
            console.log(event.detail);
            adminadatmodel.adatTorolIndSzak("/admin/torolIndSzak/", event.detail);
            adminadatmodel.adatBe("/admin/inditSzak", this.szakokMutat);
            adminadatmodel.adatBe("/szak_indittotSzak", this.szakokElindMutat);
        });
 
        $(window).on("modUser", (event) => {
            console.log(event.detail);
            adminadatmodel.adatModosit("/admin/elfogad", event.detail);
            adminadatmodel.adatBe("/admin/elfVar", this.jelentkezokElfogadMutat);
        });

        $(window).on("modSzak", (event) => {
            adminadatmodel.adatModosit("/admin/modositSzak", event.detail)
            adminadatmodel.adatBe("/admin/inditSzak", this.szakokMutat);
            adminadatmodel.adatBe("/szak_indittotSzak", this.szakokElindMutat);
        });

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
    jelentkezokBeirAlattMutat(tomb){
        const szuloElem = $("article");
        new JelentkezokBeirAlattView(tomb, szuloElem)
    }
    szakokMutat(tomb) {
        const szuloElem = $("article");
        new SzakokView(tomb, szuloElem);
    }
    szakokElindMutat(tomb){
        const szuloElem = $("article");
        new SzakokElindVIew(tomb, szuloElem);
    }
    archivaltMutat(tomb) {
        const szuloElem = $("article");
        new ArchivaltakView(tomb, szuloElem);
    }
}


export default AdminController;
