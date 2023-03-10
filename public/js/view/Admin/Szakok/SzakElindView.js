class SzakElindView{
    #elem
    constructor(elem, szuloElem){
        this.#elem = elem
        szuloElem.append(`
        <tr>
            <td data-label="#">${elem.szak_id}</td>
            <td data-label="Megnevezés">${elem.megnevezes}</td>
            <td data-label="Félévek száma">${elem.hany_felev}</td>
            <td data-label=""><button id="vissz${elem.szak_id}">Visszaállítás</button></td>
            <td data-label=""><button id="torol${elem.szak_id}">Törlés</button></td>
        </tr>
    `)
        
        this.modElem = $(`#vissz${elem.szak_id}`)
        this.modElem.on("click", () => {
            console.log("Visszaállítás gomb")
            this.kattintasTrigger("vissz")
        })
        this.torlesElem = $(`#torol${elem.szak_id}`)
        this.torlesElem.on("click", () => {
            console.log("Törlés gomb")
            this.kattintasTrigger("torolSzak")
        })

    }
    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}

export default SzakElindView
