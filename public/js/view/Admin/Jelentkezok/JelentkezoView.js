import AdminAdatModel from "../../../model/Admin/AdminAdatModel.js";


class JelentkezoView {
    #elem;
    #kep = {}
    constructor(elem, szuloElem, modal) {   
        console.log("jelentkezoView");
        this.#elem = elem;
        console.log(elem)
        szuloElem.append(`<tr id="J${elem.jelentkezo_id}">
            <td data-label="datum">${elem.datum}</td>
            <td data-label="OM azonosító">${elem.diak_azonosito}</td>
            <td data-label="Név">${elem.tanulo_neve}</td>
            <td data-label="E-mail">${elem.email}</td>
            <td data-label="Telefonszám">${elem.telefonszam}</td>
        </tr>`)

        $("#J"+elem.jelentkezo_id).on("click", () => {
            console.log("J"+ elem.jelentkezo_id + " katt")
            $(".modalSajat").show()
            this.modalFeltoltes(elem, modal)
    
            this.mentElem.on("click", () => {
                this.adatokBe()
                
                
                generatePDF(this.#elem);
            });
        });

        $(".closeSajat").on("click", () => {
            $(".modalSajat").hide()
            $(".modal-contentSajat div").remove()
        })
    }

    modalFeltoltes(elem, modal){
        const adminadatmodel = new AdminAdatModel();
        modal.append(`
            <div id="modalDivContent">
                <p>Tanuló neve: <input id="tanulo_neve" value="${elem.tanulo_neve}" disabled></input><spam class="edit" name="1">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>    
                <p>Születéskori neve: <input id="szuleteskori_neve" value="${elem.szuleteskori_neve}" disabled></input><spam class="edit" name="2">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Anyja neve: <input id="anyja_neve" value="${elem.anyja_neve}" disabled></input><spam class="edit" name="3">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Születési dátum: <input id="szuletesi_datum" value="${elem.szuletesi_datum}" disabled></input><spam class="edit" name="4">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Születési hely: <input id="szuletesi_hely" value="${elem.szuletesi_hely}" disabled></input><spam class="edit" name="5">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>E-mail címe: <input id="email" value="${elem.email}" disabled></input><spam class="edit" name="6">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Telefonszáma: <input id="telefonszam" value="${elem.telefonszam}" disabled></input><spam class="edit" name="7">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Értesítési cím: <input id="ertesitesi_cim" value="${elem.ertesitesi_cim}" disabled></input>
                <p>Neme: <input id="neme" value="${elem.neme}" disabled></input><spam class="edit" name="9">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>OM azonosító: <input id="diak_azonosito" value="${elem.diak_azonosito}" disabled></input><spam class="edit" name="10">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Személyi igazolvány száma: <input id="szemelyi_igazolvany_szam" value="${elem.szemelyi_igazolvany_szam}" disabled></input><spam class="edit" name="11">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Taj szám: <input id="taj_szam" value="${elem.taj_szam}" disabled></input><spam class="edit" name="12">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Adószám: <input id="adoszam" value="${elem.adoszam}" disabled></input><spam class="edit" name="13">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Érettségi bizonyítvány száma: <input id="erettsegi_bizonyitvany_szama" value="${elem.erettsegi_bizonyitvany_szama}" disabled></input><spam class="edit" name="14">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Szakmai bizonyítvány száma: <input id="szakmai_bizonyitvany_szama" value="${elem.szakmai_bizonyitvany_szama}" disabled></input><spam class="edit" name="15">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Bankszámlaszám: <input id="bankszamlaszam" value="${elem.bankszamlaszam}" disabled></input><spam class="edit" name="16">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Státusz: <input id="statusz" value="${elem.statusz}" disabled></input>
                <div class="gombok">
                    <button id="mod${elem.jelentkezo_id}">Módosítás</button>
                    <button id="archiv${elem.jelentkezo_id}">Archiválás</button>
                    <button id="torol${elem.jelentkezo_id}">Törlés</button>
                    <button id="ment${elem.jelentkezo_id}">Mentés PDF-be</button>
                    <button id="kep${elem.jelentkezo_id}">Képek</button>
                </div>
            </div>
        `);

        this.modElem = $(`#mod${elem.jelentkezo_id}`);
            this.archivElem = $(`#archiv${elem.jelentkezo_id}`);
            this.torolElem = $(`#torol${elem.jelentkezo_id}`);
            this.mentElem = $(`#ment${elem.jelentkezo_id}`);
            this.kepekElem = $(`#kep${elem.jelentkezo_id}`);
            
            this.kepekElem.on("click", () => {
                modal.empty();
                this.kepekMegjelenites(elem, modal);
            })

            this.modElem.on("click", () => {
                console.log("Módosít Gomb");
                this.adatokBe();
                console.log(elem.tanulo_neve);
                this.kattintastrigger("mod");
                $(".modal").hide()
                $(".modal-content div").remove()
            });

            this.archivElem.on("click", () => {
                console.log("Archív Gomb");
                this.kattintastrigger("archiv");
                $(".modalSajat").hide()
                $(".modal-contentSajat div").remove()
            })

            this.torolElem.on("click", () => {
                console.log("Töröl gomb");
                this.kattintastrigger("torol");
                $(".modalSajat").hide()
                $(".modal-contentSajat div").remove()
            });

            $(".edit").click(function (){
                adminadatmodel.setAdat($(this).attr("name")) 
                adminadatmodel.setSaveElem($(".modalSajat div p:nth-child(" + adminadatmodel.getAdat() + ") input").val())
                adminadatmodel.setEditElem($(".modalSajat div p:nth-child(" + adminadatmodel.getAdat() + ") .edit"))
                adminadatmodel.setDoneElem($(".modalSajat div p:nth-child(" + adminadatmodel.getAdat() + ") .done"))
                adminadatmodel.setUndoElem($(".modalSajat div p:nth-child(" + adminadatmodel.getAdat() + ") .undo"))
                adminadatmodel.setInputElem($(".modalSajat div p:nth-child(" + adminadatmodel.getAdat() + ") input"))
                adminadatmodel.getInputElem().prop('disabled', false)
                adminadatmodel.getEditElem().css('display', 'none')
                adminadatmodel.getDoneElem().css('visibility', 'visible')
                adminadatmodel.getUndoElem().css('visibility', 'visible')
            })

            $(".undo").click(function (){
                $(".modalSajat div p:nth-child(" + adminadatmodel.getAdat() + ") input").val(adminadatmodel.getSaveElem())
                adminadatmodel.getInputElem().prop('disabled', true)
                adminadatmodel.getEditElem().css('display', 'unset')
                adminadatmodel.getDoneElem().css('visibility', 'hidden')
                adminadatmodel.getUndoElem().css('visibility', 'hidden')
            })

            $('.done').click(function (){
                adminadatmodel.getInputElem().prop('disabled', true)
                adminadatmodel.getEditElem().css('display', 'unset')
                adminadatmodel.getDoneElem().css('visibility', 'hidden')
                adminadatmodel.getUndoElem().css('visibility', 'hidden')
            })
    }

    kepekMegjelenites(elem, modal){
        modal.append(`
            <h2>Lakcímkártya</h2>
                <img src="/storage/files/${elem.lakcimkartyaeleje}" alt="Kép nincs feltöltve.">
                <img src="/storage/files/${elem.lakcimkartyahatulja}" alt="Kép nincs feltöltve.">
            <h2>Diákigazolvány</h2>    
                <img src="/storage/files/${elem.diakigazolvanyeleje}" alt="Kép nincs feltöltve.">
                <img src="/storage/files/${elem.diakigazolvanyhatulja}" alt="Kép nincs feltöltve.">
            <h2>Személyi igazolvány</h2>
                <img src="/storage/files/${elem.szemelyi_igazolvany_eleje}" alt="Kép nincs feltöltve.">
                <img src="/storage/files/${elem.szemelyi_igazolvany_hatulja}" alt="Kép nincs feltöltve.">
            <h2>Taj kártya</h2>    
                <img src="/storage/files/${elem.taj_kartya}" alt="Kép nincs feltöltve.">
            <h2>Adóigazolvány</h2>
                <img src="/storage/files/${elem.adoigazolvany}" alt="Kép nincs feltöltve.">
            <h2>Érettségi bizonyítvány</h2>
                <img src="/storage/files/${elem.erettsegi_igazolvany}" alt="Kép nincs feltöltve.">
            <h2>Szakmai bizonyítvány</h2>    
                <img src="/storage/files/${elem.szakmai_bizonyitvany}" alt="Kép nincs feltöltve.">
            <h2>Orvosi alkalmassági</h2>    
                <img src="/storage/files/${elem.orvosi_alkalmassagi}" alt="Kép nincs feltöltve.">
            <div class="gombok">
                <button id="letoltes${elem.jelentkezo_id}">Összes letöltése</button>
                <button id="kepVissza${elem.jelentkezo_id}">Vissza</button>
            </div>
        `)

        this.letoltesElem = $(`#letoltes${elem.jelentkezo_id}`)
        this.kepVisszaElem = $(`#kepVissza${elem.jelentkezo_id}`)
        

        this.letoltesElem.on("click", () => {
            console.log("letöltés")
            this.#kep.lakcimkartyaeleje = elem.lakcimkartyaeleje;
            this.#kep.lakcimkartyahatulja = elem.lakcimkartyahatulja;
            this.#kep.diakigazolvanyeleje = elem.diakigazolvanyeleje;
            this.#kep.diakigazolvanyhatulja = elem.diakigazolvanyhatulja;
            this.#kep.szemelyi_igazolvany_eleje = elem.szemelyi_igazolvany_eleje;
            this.#kep.szemelyi_igazolvany_hatulja = elem.szemelyi_igazolvany_hatulja;
            this.#kep.taj_kartya = elem.taj_kartya;
            this.#kep.adoigazolvany = elem.adoigazolvany;
            this.#kep.erettsegi_igazolvany = elem.erettsegi_igazolvany;
            this.#kep.szakmai_bizonyitvany = elem.szakmai_bizonyitvany;
            this.#kep.orvosi_alkalmassagi = elem.orvosi_alkalmassagi;
            //console.log(this.#kep.lakEleje)
            this.kattintasTrigger("letolt")
        })

        this.kepVisszaElem.on("click", () => {
            modal.empty();
            this.modalFeltoltes(elem, modal)
        })

    }

    adatokBe() {
        this.#elem.datum = $("#datum").val();
        this.#elem.tanulo_neve = $("#tanulo_neve").val();
        this.#elem.szuleteskori_neve = $("#szuleteskori_neve").val();
        this.#elem.anyja_neve = $("#anyja_neve").val();
        this.#elem.szuletesi_datum = $("#szuletesi_datum").val();
        this.#elem.szuletesi_hely = $("#szuletesi_hely").val();
        this.#elem.email = $("#email").val();
        this.#elem.telefonszam = $("#telefonszam").val();
        this.#elem.ertesitesi_cim = $("#ertesitesi_cim").val();
        this.#elem.neme = $("#neme").val();
        this.#elem.diak_azonosito = $("#diak_azonosito").val();
        this.#elem.szemelyi_igazolvany_szam = $(
            "#szemelyi_igazolvany_szam"
        ).val();
        this.#elem.taj_szam = $("#taj_szam").val();
        this.#elem.adoszam = $("#adoszam").val();
        this.#elem.erettsegi_bizonyitvany_szama = $(
            "#erettsegi_bizonyitvany_szama"
        ).val();
        this.#elem.szakmai_bizonyitvany_szama = $(
            "#szakmai_bizonyitvany_szama"
        ).val();
        this.#elem.bankszamlaszam = $("#bankszamlaszam").val();
        this.#elem.statusz = $("#statusz").val();
    }

    kattintastrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.#elem });
        window.dispatchEvent(esemeny);
    }

    kattintasTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.#kep });
        window.dispatchEvent(esemeny);
    }
}

function generatePDF(tomb) {
    const doksi ={
        header: {
            text: tomb.tanulo_neve,
            alignment: 'center',
            fontSize: 20,
            bold: true,
            margin: [10,10,10,20]
        },
        content: [
            {
            table: {
                
                headerRows:1,
                body:[
                    ['Választott szak:', tomb.megnevezes],
                    ['Születéskori neve:', tomb.szuleteskori_neve],
                    ['Anyja neve:', tomb.anyja_neve],
                    ['Születési dátum:', tomb.szuletesi_datum],
                    ['Születési hely:', tomb.szuletesi_hely],
                    ['Email címe:', tomb.email],
                    ['Telefonszám:', tomb.telefonszam],
                    ['Értesítési cím:', tomb.ertesitesi_cim],
                    ['Lakcím:', tomb.allando_lakcim],
                    ['Neme:', tomb.neme],
                    ['OM azonosító:', tomb.diak_azonosito],
                    ['Személyi igazolvány szám:', tomb.szemelyi_igazolvany_szam],
                    ['Taj szám:', tomb.taj_szam],
                    ['Adószám:', tomb.adoszam],
                    ['Érettségi bizonyítvány száma:', tomb.erettsegi_bizonyitvany_szama],
                    ['Szakmai bizonyítvány száma:', tomb.szakmai_bizonyitvany_szama],
                    ['Bankszámlaszám:', tomb.bankszamlaszam]
                    
                ]
            },
            "layout": "noBorders",
            layout: {
                defaultBorder: false,
                paddingTop: function(i, node) { return 5; },
                paddingBottom: function(i, node) { return 5; }
              }
            }
        ],
        styles:{
            header: {
                alignment : 'center',
                fontSize: 40,
            },
            tableExample: {
                margin: [0, 5, 0, 15]
              }
        }
    }
    pdfMake.createPdf(doksi).download('jelentkezo');
}
export default JelentkezoView;
