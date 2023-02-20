

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
                <p>Tanuló neve: ${elem.tanulo_neve}</p>
                <p>Születéskori neve: ${elem.szuleteskori_neve}</p>
                <p>Anyja neve: ${elem.anyja_neve}</p>
                <p>Születési dátum: ${elem.szuletesi_datum}</p>
                <p>Születési hely: ${elem.szuletesi_hely}</p>
                <p>E-mail címe: ${elem.email}</p>
                <p>Telefonszáma: ${elem.telefonszam}</p>
                <p>Értesítési cím: ${elem.ertesitesi_cim}</p>
                <p>Neme: ${elem.neme}</p>
                <p>OM azonosító: ${elem.diak_azonosito}</p>
                <p>Személyi igazolvány száma: ${elem.szemelyi_igazolvany_szam}</p>
                <p>Taj szám: ${elem.taj_szam}</p>
                <p>Adószám: ${elem.adoszam}</p>
                <p>Érettségi bizonyítvány száma: ${elem.erettsegi_bizonyitvany_szama}</p>
                <p>Szakmai bizonyítvány száma: ${elem.szakmai_bizonyitvany_szama}</p>
                <p>Bankszámlaszám: ${elem.bankszamlaszam}</p>
                <p>Státusz: ${elem.statusz}</p>
                <spam id="torol${elem.jelentkezo_id}">Törlés</spam>
                <spam id="mod${elem.jelentkezo_id}">Törlés</spam>
                <spam id="archiv${elem.jelentkezo_id}">Törlés</spam>
            </div>
            `)
            this.torolElem = $(`#torol${elem.jelentkezo_id}`)
        
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

    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}
export default JelentkezoView