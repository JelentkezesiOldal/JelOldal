class OpcioView{
    #elem;
    constructor(elem,szuloElem){
        this.#elem = elem;
        szuloElem.append(`
        <option value="${elem.inditott_id}">${elem.szak_id}</option>
        
        `)
        this.opcioElem = szuloElem.children("option");
    }
}

export default OpcioView;