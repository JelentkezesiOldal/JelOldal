import OpcioView from "./OpcioView.js";
class JelentkezesView{
    #elem
    constructor(elem, szuloElem){
        this.#elem=elem;
        console.log("elem", elem)
        szuloElem.append(`
        <form method="post" name="jelentkezes" action="/ujJelentkezo">
        <label for="tanulo_neve">Név:</label>
        <input type="text" id="tanulo_neve" name="tanulo_neve"  requried>
        <label for="email">Email cím:</label>
        <input type="email" id="email" name="email"  requried>
        <label for="telefonszam">Telefonszám:</label>
        <input type="tel" id="telefonszam" name="telefonszam" requried>
        <label for="szak">Szak kiválasztása:</label>
        <select name="szak" id="szak">
        </select>
        <button id="elkuld">Elküld</button>
        </form>
        `)
        this.formElem = szuloElem.children("form:last-child");
        this.selectElem = this.formElem.children("select")
        elem.forEach(opcio => {
            const opciom = new OpcioView(opcio, this.selectElem);
            //console.log("elemek", opcio)
        });
        

        this.elkuldElem= $(`#elkuld`);
        this.opcioElem = $('#szak').val()
        
        
        this.elkuldElem.on("click", ()=>{
            console.log("Elküld a View-ban")
            console.log("opcioeele",this.opcioElem)
            this.kattintastrigger("elkuld");
            
        });
        
    }
    //pattern="[^\d+%*&@<>;?!]"
    //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}

export default JelentkezesView;