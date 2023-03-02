import OpcioView from "./OpcioView.js";
class JelentkezesView {
    #elem = [];
    #jelentkezoAdat = {};
    constructor(elem, szuloElem) {
        
        this.validalas();
        this.#elem = elem;
        console.log("elem", elem);
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
        <label for="adatkez">Elfogadom az adatkezelési szabályzatot</label><br>
        <input type="button" id="elkuld" value="Elküld" class="btn btn-outline-secondary" >
        </form>
        `);
        this.formElem = szuloElem.children("form:last-child");
        this.selectElem = this.formElem.children("select");
        elem.forEach((opcio) => {
            const opciom = new OpcioView(opcio, this.selectElem);
            //console.log("opciom", opcio)
        });

        this.elkuldElem = $(`#elkuld`);
        this.elkuldElem.on("click", () => {
            //console.log("Elküld a View-ban")
            this.adatGyujtes();
            this.kattintastrigger("elkuld");

            //console.log("opcioelem",this.opcioElem)
        });
    }

    adatGyujtes() {
        this.opcioElem = $("#szak").find(":selected").val();
        this.#jelentkezoAdat.inditott_id = $("#szak").val();
        this.#jelentkezoAdat.tanulo_neve = $("#tanulo_neve").val();
        this.#jelentkezoAdat.email = $("#email").val();
        this.#jelentkezoAdat.telefonszam = $("#telefonszam").val();
        console.log(this.#jelentkezoAdat);
    }

    kattintastrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {
            detail: this.#jelentkezoAdat,
        });
        window.dispatchEvent(esemeny);
    }

    validalas() {
        $(document).ready(function () {
            $("#jelentkezes").validate({
                rules: {
                    tanulo_neve: {
                        required: true,
                        minlength: 5,
                        maxlength:50,
                        pattern: "[^+*:?;=!%$&@#<>()[\\]{}0-9]+"
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
                            "A névnek minimum 5 karekteresnek kell lennie",
                        maxlength: "A név maximum 30 karakteres lehet",
                        pattern:"A név nem tartalmazhat speciális karaktereket és számokat"
                    },
                    telefonszam: {
                        required: "Kötelező kitölteni",
                        number: "A telefonszám csak számokat tartalmazhat",
                        minlength:
                            "A telefonszámnak minimum 7 karekteresnek kell lennie",
                        maxlength:
                            "A telefonszámnak maximum 15 karekteresnek kell lennie",
                    },
                    email: {
                        required: "Kötelező kitölteni",
                        email: "Az emailnek ilyen formátumnak kell lennie: abc@domain.tld",
                    },
                },
            });
        });
    }
}

export default JelentkezesView;
