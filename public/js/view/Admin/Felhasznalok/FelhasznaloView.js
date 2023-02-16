class FelhasznaloView{
    #elem
    constructor(elem, szuloElem){
        console.log("felhasznaloView")
        this.#elem = elem
        szuloElem.append(`<tr>
            <td>${elem.name}</td>
            <td>${elem.email}</td>
            <td>${elem.megnevezes}</td>
            <td>${this.getMaster(elem.master)}</td>
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