class OpcioView{
    #elem;
    constructor(elem, szuloElem){
        this.#elem = elem;
        //console.log("opcio", elem)
        var szak_ertek = elem.inditott_id
        szuloElem.append(`
        <option id="opcio" value="${szak_ertek}">${elem.megnevezes}</option>
        
        `)
        this.opcioElem = szuloElem.children("option");
        
    }


}

export default OpcioView;