class SzakView{
    #elem
    constructor(elem, szuloElem){
        this.#elem = elem
        szuloElem.append(`
            <tr>
                <td data-label="#">${elem.szak_id}</td>
                <td data-label="Megnevezés">${elem.megnevezes}</td>
                <td data-label="Félévek száma">${elem.hany_felev}</td>
                <td data-label=""><button id="indit${elem.szak_id}">Indítás</button></td>
                <td data-label=""><button id="mod${elem.szak_id}">Módosítás</button></td>
                <td data-label=""><button id="torol${elem.szak_id}">Törlés</button></td>
            </tr>
        `)
        szuloElem.append(`
        <tr>
            <td data-label="#">${elem.szak_id}</td>
            <td data-label="Megnevezés">${elem.megnevezes}</td>
            <td data-label="Félévek száma">${elem.hany_felev}</td>
            <td data-label=""><button id="vissz${elem.szak_id}">Visszaállítás</button></td>
            <td data-label=""><button id="torol${elem.szak_id}">Törlés</button></td>
        </tr>
    `)
        
        this.inditElem = $(`#indit${elem.szak_id}`)
        this.inditElem.on("click", () => {
            console.log("Indit gomb")
            this.kattintasTrigger("indit")
        })
        
        this.modElem = $(`#mod${elem.szak_id}`)
        this.modElem.on("click", () => {
            console.log("Módosít gomb")
            this.kattintasTrigger("mod")
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

export default SzakView

// ${elem.szak_id}