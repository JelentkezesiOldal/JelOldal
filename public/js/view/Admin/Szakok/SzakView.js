class SzakView{
    #elem
    constructor(elem, szuloElem, szuloElem2){
        this.#elem = elem
        szuloElem.append(`
            <tr>
                <td>${elem.szak_id}</td>
                <td>${elem.megnevezes}</td>
                <td>${elem.iskola_id}</td>
                <td>${elem.elofeltetel}</td>
                <td>${elem.hany_felev}</td>
                <td><button id="indit${elem.szak_id}">Indítás</button></td>
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