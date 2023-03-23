class SzakView{
    #elem
    constructor(elem, szuloElem){
        this.#elem = elem
        szuloElem.append(`
            <tr>
                <td data-label="#">${elem.szak_id}</td>
                <td data-label="Megnevezés"><input id="meg${elem.szak_id}" value="${elem.megnevezes}" disabled></td>
                <td data-label="Félévek száma"><input id="hany${elem.szak_id}" value="${elem.hany_felev}" disabled></td>
                <td data-label="" id="indit"><input type="button" id="indit${elem.szak_id}" value='Indítás'></td>
                <td data-label=""><input type="button" id="mod${elem.szak_id}" value='Módosítás'></button></td>
                <td data-label=""><input type="button" id="torol${elem.szak_id}" value='Törlés'></button></td>
            </tr>
        `)

        this.inditElem = $(`#indit${elem.szak_id}`)
        this.modElem = $(`#mod${elem.szak_id}`)
        this.torlesElem = $(`#torol${elem.szak_id}`)
        this.inditElem.on("click", () => {
            console.log("Indit gomb")
            this.kattintasTrigger("indit")
        })
        
        
        this.modElem.on("click", () => {
            this.nevElem = $("#megnev").val()
            this.hanyFelElem = $("#hany_fel").val()
            console.log("Módosít gomb")
            $("input").prop("disabled", false)
            this.inditElem.css('visibility', 'hidden')
            this.modElem.css('visibility', 'hidden')
            this.torlesElem.css('visibility', 'hidden')
            this.modElem.parent().append(`<input type="button" id="mentes" value="Mentés"></input>
            <input type="button" id="vissza" value="Vissza"></input>`)

            this.mentesElem = $ ("#mentes")
            this.visszaElem = $ ("#vissza")

            this.mentesElem.on("click", ()=>{
                var megnev = $(`#meg${elem.szak_id}`).val()
                var hany_felev = $(`#hany${elem.szak_id}`).val()
                this.adatBe(megnev, hany_felev);
                this.kattintasTrigger("modSzak")
            })

            this.visszaElem.on('click', ()=>{
                $("#megnev").val(this.nevElem) 
                $("#hany_fel").val(this.hanyFelElem)
                $("#megnev, #hany_fel").prop("disabled", true)
                this.ment = $("#mentes")
                this.vissza = $("#vissza")
                this.ment.remove()
                this.vissza.remove()
                this.inditElem.css('visibility', 'visible')
                this.modElem.css('visibility', 'visible')
                this.torlesElem.css('visibility', 'visible')
            })

            
        })
        
        this.torlesElem.on("click", () => {
            console.log("Törlés gomb")
            this.kattintasTrigger("torolSzak")
        })

    }

    adatBe(megnevezes, hany_felev){
        this.#elem.megnevezes = megnevezes
        this.#elem.hany_felev = hany_felev
    }

    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}

export default SzakView

// ${elem.szak_id}