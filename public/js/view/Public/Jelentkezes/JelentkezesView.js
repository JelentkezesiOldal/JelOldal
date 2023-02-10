import OpcioView from "./OpcioView.js";
class JelentkezesView{
    #elem=[];
    constructor(elem, szuloElem){
        this.#elem=elem;
        console.log("elem", elem);
        szuloElem.append(`
        <form id="jelentkezes" name="jelentkezes" >
        <label for="tanulo_neve">Név:</label>
        <input type="text" id="tanulo_neve" name="tanulo_neve"  requried>
        <label for="email">Email cím:</label>
        <input type="email" id="email" name="email"  requried>
        <label for="telefonszam">Telefonszám:</label>
        <input type="tel" id="telefonszam" name="telefonszam" requried>
        <label for="szak">Szak kiválasztása:</label>
        <select name="inditott_id" id="szak">
        </select>
        <button id="elkuld">Elküld</button>
        </form>
        `);
        this.formElem = szuloElem.children("form:last-child");
        this.selectElem = this.formElem.children("select");
         elem.forEach(opcio => {
            const opciom = new OpcioView(opcio, this.selectElem); 
            //console.log("opciom", opcio)
        });
         
        this.elkuldElem= $(`#elkuld`);
        this.elkuldElem.on("click", ()=>{
            //console.log("Elküld a View-ban")
            this.kattintastrigger("elkuld");
            this.opcioElem = $('#szak').find(':selected').val();
            //console.log("opcioelem",this.opcioElem)
            
        });

        $(document).ready(function() {
            $("#jelentkezes").validate({
              rules: {
                tanulo_neve : {
                  required: true,
                  minlength: 5
                },
                telefonszam: {
                  required: true,
                  number: true,
                  minlength: 7
                },
                email: {
                  required: true,
                  email: true
                }
              },
              messages : {
                tanulo_neve: {
                    required: "Kötelező kitölteni",
                    minlength: "A név minimum 5 karekteresnek kell lennie"
                },
                telefonszam: {
                    required: "Kötelező kitölteni",
                    number: "Csak szám lehet",
                    minlength: "A telefonszámnak minimum 7 karekteresnek kell lennie",
                    maxlength: "A telefonszámnak maximum 15 karekteresnek kell lennie"
                },
                email: {
                    required: "Kötelező kitölteni",
                    email: "Az emailnek ilyen formátumnak kell lennie: abc@domain.tld"
                }
              }
            });
          });

        
    }
    //pattern="[^\d+%*&@<>;?!]"
    //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#elem});
        window.dispatchEvent(esemeny);
    }
}

export default JelentkezesView;