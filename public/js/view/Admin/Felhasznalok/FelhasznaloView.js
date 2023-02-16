class FelhasznaloView{
    #elem
    constructor(elem, szuloElem){
        console.log("felhasznaloView")
        this.#elem = elem
        szuloElem.append(`<tr>
            <td data-label="Név">${elem.name}</td>
            <td data-label="E-mail">${elem.email}</td>
            <td data-label="Szak">${elem.megnevezes}</td>
            <td data-label="Jogosultság">${elem.master}</td>
        </tr>`)

        
    }
    
}

export default FelhasznaloView