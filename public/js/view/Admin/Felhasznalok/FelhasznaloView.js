class FelhasznaloView{
    #elem
    constructor(elem, szuloElem){
        this.#elem = elem
        szuloElem.append(`<tr>
            <td data-label="Név">${elem.name}</td>
            <td data-label="E-mail">${elem.email}</td>
            <td data-label="Jogosultság">${this.getMaster(elem.master)}</td>
            <td data-label=""><button id="torol${elem.ugyintezo_id}">Törlés</button></td>
        </tr>`)

        this.torolElem = $(`#torol${elem.ugyintezo_id}`)
        this.torolElem.on("click", () => {
            console.log("Törlés gomb")
            this.kattintasTrigger("torolFelh")
        })
    }
    
    getMaster(adat){
        if(adat == 1){
            return "Master"
        }
        return "Ügyintéző"
    }
    
    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}
export default FelhasznaloView