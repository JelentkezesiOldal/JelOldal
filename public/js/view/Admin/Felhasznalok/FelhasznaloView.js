class FelhasznaloView{
    #elem
    constructor(elem, szuloElem){
        console.log("felhasznaloView")
        this.#elem = elem
        szuloElem.append(`<tr>
            <td data-label="Név">${elem.name}</td>
            <td data-label="E-mail">${elem.email}</td>
            <td data-label="Jogosultság">${this.getMaster(elem.master)}</td>
        </tr>`)

        
    }
    
    getMaster(adat){
        if(adat == 1){
            return "Master"
        }
        return "Ügyintéző"
    }
}
export default FelhasznaloView