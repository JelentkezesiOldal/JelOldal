class SzakView{
    #elem
    constructor(elem, szuloElem){
        this.#elem = elem
        szuloElem.append(`
            <tr>
                <td data-label="#">${elem.szak_id}</td>
                <td data-label="Megnevezés">${elem.megnevezes}</td>
                <td data-label="Előfeltétel">${elem.elofeltetel}</td>
                <td data-label="Félévek száma">${elem.hany_felev}</td>
                <td data-label=""><button id="indit${elem.szak_id}">Indítás</button></td>
            </tr>
        `)
        this.inditElem = $(`#indit${elem.szak_id}`)
        this.inditElem.on("click", () => {
            console.log("Indit gomb")
            this.kattintasTrigger("indit")
        })
    }
    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}

export default SzakView

// ${elem.szak_id}