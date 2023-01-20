class JelentkezoView{
    #elem
    constructor(elem, szuloElem){
        console.log("jelentkezoView")
        this.#elem = elem
        szuloElem.append(`<tr id="J${elem.jelentkezo_id}">
            <td>${elem.OM_azonosito}</td>
            <td>${elem.tanulo_neve}</td>
            <td>${elem.email}</td>
            <td>${elem.telefonszam}</td>
        </tr>`)
    
    $("#J"+elem.jelentkezo_id).on("click", () => {
        console.log("J"+ elem.jelentkezo_id + " katt")

    })
    }
}
export default JelentkezoView