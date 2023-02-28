class JelentkezoView{
    #elem
    constructor(elem, szuloElem, modal){
        console.log("jelentkezoView")
        this.#elem = elem
        szuloElem.append(`<tr id="J${elem.jelentkezo_id}">
            <td data-label="OM azonosító">${elem.diak_azonosito}</td>
            <td data-label="Név">${elem.tanulo_neve}</td>
            <td data-label="E-mail">${elem.email}</td>
            <td data-label="Telefonszám">${elem.telefonszam}</td>
        </tr>`)
    
        $("#J"+elem.jelentkezo_id).on("click", () => {
            console.log("J"+ elem.jelentkezo_id + " katt")
            $(".modal").show()
            modal.append(`
            <div>
                <p>Tanuló neve: <input id="tanulo_neve" value="${elem.tanulo_neve}" disabled></input></p>
                <p>Születéskori neve: <input id="szuleteskori_neve" value="${elem.szuleteskori_neve}" disabled></input></p>
                <p>Anyja neve: <input id="anyja_neve" value="${elem.anyja_neve}" disabled></input></p>
                <p>Születési dátum: <input id="szuletesi_datum" value="${elem.szuletesi_datum}" disabled></input></p>
                <p>Születési hely: <input id="szuletesi_hely" value="${elem.szuletesi_hely}" disabled></input></p>
                <p>E-mail címe: <input id="email" value="${elem.email}" disabled></input></p>
                <p>Telefonszáma: <input id="telefonszam" value="${elem.telefonszam}" disabled></input></p>
                <p>Értesítési cím: <input id="ertesitesi_cim" value="${elem.ertesitesi_cim}" disabled></input></p>
                <p>Neme: <input id="neme" value="${elem.neme}" disabled></input></p>
                <p>OM azonosító: <input id="diak_azonosito" value="${elem.diak_azonosito}" disabled></input></p>
                <p>Személyi igazolvány száma: <input id="szemelyi_igazolvany_szam" value="${elem.szemelyi_igazolvany_szam}" disabled></input></p>
                <p>Taj szám: <input id="taj_szam" value="${elem.taj_szam}" disabled></input></p>
                <p>Adószám: <input id="adoszam" value="${elem.adoszam}" disabled></input></p>
                <p>Érettségi bizonyítvány száma: <input id="erettsegi_bizonyitvany_szama" value="${elem.erettsegi_bizonyitvany_szama}" disabled></input></p>
                <p>Szakmai bizonyítvány száma: <input id="szakmai_bizonyitvany_szama" value="${elem.szakmai_bizonyitvany_szama}" disabled></input></p>
                <p>Bankszámlaszám: <input id="bankszamlaszam" value="${elem.bankszamlaszam}" disabled></input></p>
                <p>Státusz: <input id="statusz" value="${elem.statusz}" disabled></input></p>
                <spam id="mod${elem.jelentkezo_id}">Módosítás</spam>
                <spam id="archiv${elem.jelentkezo_id}">Archíválás</spam>
                <spam id="torol${elem.jelentkezo_id}">Törlés</spam>
            </div>
            `)
            this.modElem = $(`#mod${elem.jelentkezo_id}`)
            this.archivElem = $(`#archiv${elem.jelentkezo_id}`)
            this.torolElem = $(`#torol${elem.jelentkezo_id}`)
            
            this.modElem.on("click", ()=>{
                console.log("Módosít Gomb")
                $("div input").prop('disabled', false)
                this.adatokBe()
                console.log(elem.tanulo_neve)
                //this.kattintastrigger("mod");
                // $(".modal").hide()
                // $(".modal-content div").remove()
            })

            this.archivElem.on("click", ()=>{
                console.log("Archív Gomb")
                this.kattintastrigger("archiv");
                $(".modal").hide()
                $(".modal-content div").remove()
            })

            this.torolElem.on("click", ()=>{
                console.log("Töröl gomb")
                this.kattintastrigger("torol");
                $(".modal").hide()
                $(".modal-content div").remove()
            });
            

        })

        $(".close").on("click", () => {
            $(".modal").hide()
            $(".modal-content div").remove()
        })
    }

    adatokBe(){
        this.#elem.tanulo_neve = $("#tanulo_neve").val()
        this.#elem.szuleteskori_neve = $("#szuleteskori_neve").val()
        this.#elem.anyja_neve = $("#anyja_neve").val()
        this.#elem.szuletesi_datum = $("#szuletesi_datum").val()
        this.#elem.szuletesi_hely = $("#szuletesi_hely").val()
        this.#elem.email = $("#email").val()
        this.#elem.telefonszam = $("#telefonszam").val()
        this.#elem.ertesitesi_cim = $("#ertesitesi_cim").val()
        this.#elem.neme = $("#neme").val()
        this.#elem.diak_azonosito = $("#diak_azonosito").val()
        this.#elem.szemelyi_igazolvany_szam = $("#szemelyi_igazolvany_szam").val()
        this.#elem.taj_szam = $("#taj_szam").val()
        this.#elem.adoszam = $("#adoszam").val()
        this.#elem.erettsegi_bizonyitvany_szama = $("#erettsegi_bizonyitvany_szama").val()
        this.#elem.szakmai_bizonyitvany_szama = $("#szakmai_bizonyitvany_szama").val()
        this.#elem.bankszamlaszam = $("#bankszamlaszam").val()
        this.#elem.statusz = $("#statusz").val()
    }

    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}
export default JelentkezoView