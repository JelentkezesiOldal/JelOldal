import OpcioView from "./OpcioView.js";
class JelentkezesView {
    #tomb = [];
    #jelentkezoAdat = {};
    constructor(tomb, szuloElem) {
        this.#tomb = tomb;
        szuloElem.append(`
        <h1 class="cim">Jelentkezési oldal</h1>
        <form id="jelentkezes" name="jelentkezes" >
        <label for="tanulo_neve" class="form-label">Név:</label>
        <input type="text" id="tanulo_neve" name="tanulo_neve" class="form-control" placeholder="Minta Pista" requried>
        <label for="email" class="form-label">Email cím:</label>
        <input type="email" id="email" name="email"  class="form-control" placeholder="minta@gmail.com" requried>
        <label for="telefonszam" class="form-label">Telefonszám:</label>
        <input type="tel" id="telefonszam" name="telefonszam" class="form-control" placeholder="06012345678" requried>
        <label for="szak" class="form-label">Szak kiválasztása:</label>
        <select name="inditott_id" id="szak" class="form-select" >
        </select>
        <input type="checkbox" id="adatkez" name="adatkez" >
        <label for="adatkez">Elfogadom az <a href="#" target="_blank">adatkezelési szabályzatot</a></label><br>
        <input type="button" id="elkuld" value="Elküld" class="btn btn-outline-secondary" disabled>
        </form>
        `);

        this.formElem = szuloElem.children("form:last-child");
        this.selectElem = this.formElem.children("select");
        tomb.forEach((opcio) => {
            const opciom = new OpcioView(opcio, this.selectElem);
        });

        this.elkuldElem = $(`#elkuld`);
        this.elkuldElem.on("click", () => {
            this.adatGyujtes();
            this.kattintastrigger("elkuld");
            
        });

        $('input').change(function(){
            validalas();
                if ($('#adatkez').prop("checked") && $('#jelentkezes').valid()) {
                    $('#elkuld').prop('disabled', false)
                }else{
                    $('#elkuld').prop('disabled', true)
                } 
            
        })

    }

    adatGyujtes() {
        this.opcioElem = $("#szak").find(":selected").val();
        this.#jelentkezoAdat.inditott_id = $("#szak").val();
        this.#jelentkezoAdat.tanulo_neve = $("#tanulo_neve").val();
        this.#jelentkezoAdat.email = $("#email").val();
        this.#jelentkezoAdat.telefonszam = $("#telefonszam").val();
    }

    kattintastrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {
            detail: this.#jelentkezoAdat,
        });
        window.dispatchEvent(esemeny);
    }

    
}

function validalas() {
        $("#jelentkezes").validate({
            rules: {
                tanulo_neve: {
                    required: true,
                    minlength: 5,
                    maxlength:50,
                    pattern: "[A-Z][^+*:?;=!%$&@#<>()[\\]{}0-9]+|[ÁÉŐÖÜÓŰÚÍ][^+*:?;=!%$&@#<>()[\\]{}0-9]+"
                },
                telefonszam: {
                    required: true,
                    number: true,
                    minlength: 7,
                },
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                tanulo_neve: {
                    required: "Kötelező kitölteni",
                    minlength:
                        "A névnek minimum 5 karakteresnek kell lennie",
                    maxlength: "A név maximum 30 karakteres lehet",
                    pattern:"A név nem tartalmazhat speciális karaktereket, számokat és nagybetűnek kell lennie"
                },
                telefonszam: {
                    required: "Kötelező kitölteni",
                    number: "A telefonszám csak számokat tartalmazhat",
                    minlength:
                        "A telefonszámnak minimum 7 karakteresnek kell lennie",
                    maxlength:
                        "A telefonszám maximum 15 karakteres lehet",
                },
                email: {
                    required: "Kötelező kitölteni",
                    email: "Az emailnek ilyen formátumnak kell lennie: abc@domain.tld",
                },
            },
        });
   
}



export default JelentkezesView;
