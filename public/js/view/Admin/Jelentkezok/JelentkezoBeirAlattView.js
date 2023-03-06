class JelentkezoBeirAlattView{
    #elem
    constructor(elem, szuloElem, modal) {   
        this.#elem = elem;
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
            </div>
            `);

            $(".closeSajat").on("click", () => {
                $(".modalSajat").hide()
                $(".modal-contentSajat div").remove()
            })
        }
    )}
}

export default JelentkezoBeirAlattView