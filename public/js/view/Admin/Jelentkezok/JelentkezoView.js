import AdminAdatModel from "../../../model/Admin/AdminAdatModel.js";


class JelentkezoView {
    #elem;
    constructor(elem, szuloElem, modal) {   
        console.log("jelentkezoView");
        this.#elem = elem;
        const adminadatmodel = new AdminAdatModel();
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
            modal.append(`
            <div>
                <p>Tanuló neve: <input id="tanulo_neve" value="${elem.tanulo_neve}" disabled></input><spam class="edit" name="1">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>    
                <p>Születéskori neve: <input id="szuleteskori_neve" value="${elem.szuleteskori_neve}" disabled></input><spam class="edit" name="2">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Anyja neve: <input id="anyja_neve" value="${elem.anyja_neve}" disabled></input><spam class="edit" name="3">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Születési dátum: <input id="szuletesi_datum" value="${elem.szuletesi_datum}" disabled></input><spam class="edit" name="4">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Születési hely: <input id="szuletesi_hely" value="${elem.szuletesi_hely}" disabled></input><spam class="edit" name="5">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>E-mail címe: <input id="email" value="${elem.email}" disabled></input><spam class="edit" name="6">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Telefonszáma: <input id="telefonszam" value="${elem.telefonszam}" disabled></input><spam class="edit" name="7">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Értesítési cím: <input id="ertesitesi_cim" value="${elem.ertesitesi_cim}" disabled></input><spam class="edit" name="8">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Neme: <input id="neme" value="${elem.neme}" disabled></input><spam class="edit" name="9">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>OM azonosító: <input id="diak_azonosito" value="${elem.diak_azonosito}" disabled></input><spam class="edit" name="10">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Személyi igazolvány száma: <input id="szemelyi_igazolvany_szam" value="${elem.szemelyi_igazolvany_szam}" disabled></input><spam class="edit" name="11">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Taj szám: <input id="taj_szam" value="${elem.taj_szam}" disabled></input><spam class="edit" name="12">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Adószám: <input id="adoszam" value="${elem.adoszam}" disabled></input><spam class="edit" name="13">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Érettségi bizonyítvány száma: <input id="erettsegi_bizonyitvany_szama" value="${elem.erettsegi_bizonyitvany_szama}" disabled></input><spam class="edit" name="14">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Szakmai bizonyítvány száma: <input id="szakmai_bizonyitvany_szama" value="${elem.szakmai_bizonyitvany_szama}" disabled></input><spam class="edit" name="15">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Bankszámlaszám: <input id="bankszamlaszam" value="${elem.bankszamlaszam}" disabled></input><spam class="edit" name="16">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <p>Státusz: <input id="statusz" value="${elem.statusz}" disabled></input><spam class="edit" name="17">&#9998;</spam><spam class="done">✅</spam><spam class="undo">❌</spam></p>
                <spam id="mod${elem.jelentkezo_id}">Módosítás</spam>
                <spam id="archiv${elem.jelentkezo_id}">Archíválás</spam>
                <spam id="torol${elem.jelentkezo_id}">Törlés</spam>
                <spam id="ment${elem.jelentkezo_id}">Mentés PDF-be</spam>
            </div>
            `);
            this.modElem = $(`#mod${elem.jelentkezo_id}`);
            this.archivElem = $(`#archiv${elem.jelentkezo_id}`);
            this.torolElem = $(`#torol${elem.jelentkezo_id}`);
            this.mentElem = $(`#ment${elem.jelentkezo_id}`);
            

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
