class FelhasznaloView{
    #elem
    constructor(elem, szuloElem){
        console.log("felhasznaloView")
        this.#elem = elem
        szuloElem.append(`<tr>
            <td>${elem.name}</td>
            <td>${elem.email}</td>
            <td>${elem.szak_id}</td>
            <td>${elem.master}</td>
        </tr>`)
    }
}

export default FelhasznaloView