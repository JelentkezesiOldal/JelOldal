class SzakElindView{
    #elem
    constructor(elem, szuloElem){
        this.#elem = elem
        szuloElem.append(`
        <tr>
            <td data-label="#">${elem.szak_id}</td>
            <td data-label="Megnevezés">${elem.megnevezes}</td>
            <td data-label="Félévek száma">${elem.hany_felev}</td>
            <td data-label=""><input type="button" id="vissz${elem.szak_id}" value="Visszaállítás"></input></td>
        </tr>
    `)
        
        this.modElem = $(`#vissz${elem.szak_id}`)
        this.modElem.on("click", () => {
            console.log("Visszaállítás gomb")
            this.kattintasTrigger("vissz")
        })

    }
    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}

export default SzakElindView
