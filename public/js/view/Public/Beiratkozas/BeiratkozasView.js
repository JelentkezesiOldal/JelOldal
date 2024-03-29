class BeiratkozasView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log("beiratkozásView");
        console.log("elem", elem);
        szuloElem.append(`
        <h1>Beiratkozáshoz szükséges adatok</h1>
        <form id="beiratkozas" name="beiratkozas">
        <div class="first">
        <div class="mb-3">
        <label for="tanulo_neve" class="form-label">Tanuló Neve</label>
        <input class="form-control" type="text" id="tanulo_neve" name="tanulo_neve" value="${elem.tanulo_neve}"  required></input><br><br>
        
        <label for="email" class="form-label">Email</label>
        <input class="form-control" type="text" id="email" name="email" value="${elem.email}"  ></input><br><br>
        
        <label for="telefonszam" class="form-label">Telefonszám</label>
        <input class="form-control" type="text" id="telefonszam" name="telefonszam" value="${elem.telefonszam}" ></input><br><br>
        
        <label for="szuleteskori_neve" class="form-label">Születési név</label>
        <input class="form-control" type="text" id="szuleteskori_neve" name="szuleteskori_neve" value="${elem.szuleteskori_neve}"></input><br><br>
        
        <label for="anyja_neve" class="form-label">Anyja születéskori neve</label>
        <input class="form-control" type="text" id="anyja_neve" name="anyja_neve" value="${elem.anyja_neve}"></input><br><br>
        
        <label for="szuletesi_datum" class="form-label">Születési dátum</label>
        <input class="form-control" type="date" id="szuletesi_datum" name="szuletesi_datum" value="${elem.szuletesi_datum}" ></input><br><br>
        
        <label for="szuletesi_hely" class="form-label">Születési hely</label>
        <input class="form-control" type="text" id="szuletesi_hely" name="szuletesi_hely"value="${elem.szuletesi_hely}" ></input><br><br>

        <label for="neme" class="form-label">Neme:</label>
        <select class="form-select" id="neme" name="neme">
        <option value="Nő">Nő</option>
        <option value="Férfi">Férfi</option>
        <option value="Nem adom meg">Nem adom meg</option>
        
        </select><br><br>
        </div>
        </div>
        
        <div class="second">
        <div class="mb-3">

        <label for="allando_lakcim" class="form-label">Állandó lakcím</label>
        <input class="form-control" type="text" id="allando_lakcim" name="allando_lakcim" placeholder="1234 Pécs Első utca 11" value="${elem.allando_lakcim}"></input><br><br>
        
        <label for="ertesitescheckbox"  class="form-label">Az értesítési cím megegyezik az állandó lakcímmel</label>
        <input class="form-check-input mt-0" type="checkbox" id="ertesitescheckbox" name="ertesitescheckbox"></input><br><br>
        
        <label for="ertesitesi_cim" class="form-label">Értesítési cím</label>
        <input class="form-control" type="ertesitesi_cim" id="ertesitesi_cim" name="ertesitesi_cim" value="${elem.ertesitesi_cim}"></input><br><br>
        
          <label for="diak_azonosito" class="form-label">Diákigazolvány szám</label>
          <input class="form-control" type="text" id="diak_azonosito" name="diak_azonosito" value="${elem.diak_azonosito}"></input><br><br>
          
          <label for="szemelyi_igazolvany_szam" class="form-label">Személyi igazolvány szám</label>
          <input class="form-control" type="text" id="szemelyi_igazolvany_szam" name="szemelyi_igazolvany_szam" value="${elem.szemelyi_igazolvany_szam}"></input><br><br>
          
          <label for="taj_szam" class="form-label">Taj szám</label>
          <input class="form-control" type="text" id="taj_szam" name="taj_szam" value="${elem.taj_szam}"></input><br><br>
          
          
          <label for="adoszam" class="form-label">Adószám</label>
          <input class="form-control" type="text" id="adoszam" name="adoszam" value="${elem.adoszam}"></input><br><br>
          
          <label for="erettsegi_bizonyitvany_szama" class="form-label">Érettségi bizonyítvány száma</label>
          <input class="form-control" type="text" id="erettsegi_bizonyitvany_szama" name="erettsegi_bizonyitvany_szama" placeholder="P11K 101687" value="${elem.erettsegi_bizonyitvany_szama}"></input><br><br>
          <p>Az érettségi balfelső sarkéban található számsor</p>
          
          <p>Figyelem! A szakmia bizonyítvány nem előfeltétel,<br><br> ha nincs még szakmai bizonyítványa akkor a következő mezőt nem kötelező kitölteni</p><br><br>
          <label for="szakmai_bizonyitvany" class="form-label">Szakmai bizonyítvány száma: </label>
          <input class="form-control" type="text" id="szakmai_bizonyitvany" name="szakmai_bizonyitvany" value="${elem.szakmai_bizonyitvany}"></input><br><br>
          
          <label for="bankszamlaszam" class="form-label">Bankszámlaszám</label>
          <input class="form-control" type="text" id="bankszamlaszam" name="bankszamlaszam" value="${elem.bankszamlaszam}"></input><br><br>
          
          
          <input id="button" class="btn btn-primary" type="button" value="Tovább" >
          </div>
          </div> 
          
          
          </form>
          `);

        $('input').change(function () {
            InputValidate();
        });


        this.NotNull();
        this.SetDisabled();
        this.formElem = szuloElem.children("form:last-child");
        this.elkuldElem = $(`#button`);
        this.elkuldElem.on("click", () => {
            //console.log("Elküld a View-ban")
            this.UralapAdatok();

            this.KattintasTrigger("mentes")
        });
    }
    NotNull() {
        const mezok = [
            '#tanulo_neve',
            '#szuleteskori_neve',
            '#anyja_neve',
            /* '#szuletesi_datum'
            , */
            '#szuletesi_hely',
            '#email',
            '#telefonszam',
            '#allando_lakcim',
            '#ertesitesi_cim',
            '#neme',
            '#diak_azonosito',
            '#szemelyi_igazolvany_szam',
            '#taj_szam',
            '#adoszam',
            '#erettsegi_bizonyitvany_szama',
            '#szakmai_bizonyitvany_szama',
            '#bankszamlaszam'
        ];
        mezok.forEach(mezo => {
            console.log($(mezo));
            console.log($(mezo).val());
            if ($(mezo).val() === "null") {
                $(mezo).val("");
            }
        });
    }

    SetDisabled() {
        $("#ertesitescheckbox").click(function () {
            if ($(this).is(":checked")) {
                $("#ertesitesi_cim").attr("disabled", true);
            } else {
                $("#ertesitesi_cim").attr("disabled", false);
            }
        });
    }

    UralapAdatok() {
        this.#elem.tanulo_neve = $("#tanulo_neve").val();
        this.#elem.szuleteskori_neve = $("#szuleteskori_neve").val();
        this.#elem.anyja_neve = $("#anyja_neve").val();
        this.#elem.szuletesi_datum = $("#szuletesi_datum").val();
        this.#elem.szuletesi_hely = $("#szuletesi_hely").val();
        this.#elem.email = $("#email").val();
        this.#elem.telefonszam = $("#telefonszam").val();
        this.#elem.allando_lakcim = $("#allando_lakcim").val();
        if (ertesitescheckbox.checked) {
            this.#elem.ertesitesi_cim = $("#allando_lakcim").val();
        } else {
            this.#elem.ertesitesi_cim = $("#ertesitesi_cim").val();
        }
        this.#elem.neme = $("#neme").val();
        this.#elem.diak_azonosito = $("#diak_azonosito").val();
        this.#elem.szemelyi_igazolvany_szam = $(
            "#szemelyi_igazolvany_szam"
        ).val();
        this.#elem.szemelyi_igazolvany = $("#szemelyi_igazolvany").val();
        this.#elem.taj_szam = $("#taj_szam").val();
        this.#elem.adoszam = $("#adoszam").val();
        this.#elem.adoigazolvany = $("#adoigazolvany").val();
        this.#elem.erettsegi_bizonyitvany_szama = $(
            "#erettsegi_bizonyitvany_szama"
        ).val();
        this.#elem.szakmai_bizonyitvany_szama = $(
            "#szakmai_bizonyitvany_szama"
        ).val();
        this.#elem.bankszamlaszam = $("#bankszamlaszam").val();
    }
    KattintasTrigger(esemenyhivo) {
        const esemeny = new CustomEvent(esemenyhivo, { detail: this.#elem });
        console.log("KattintasTrigger");
        window.dispatchEvent(esemeny);
    }
}
function InputValidate() {
    $("#beiratkozas").validate({
        rules: {
            tanulo_neve: {
                required: true,
                minlength: 5,
                maxlength: 50,
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
            anyja_neve: {
                required: true,
                minlength: 5,
                maxlength: 50,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}0-9]+"

            },
            szuletesi_datum: {
                required: true,
                date: true,

            },
            szuletesi_hely: {
                required: true,
                minlength: 5,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"


            },
            allando_lakcim: {
                required: true,
                minlength: 5,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"

            },
            ertesitesi_cim: {
                required: true,
                minlength: 5,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"

            },
            diak_azonosito: {
                required: false,
                number: true,
                maxlength: 11,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"
            },
            szemelyi_igazolvany_szam: {
                required: true,
                maxlength: 8,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"
            },
            taj_szam: {
                required: true,
                number: true,
                minlength: 9,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"

            },

            adoszam: {
                required: true,
                number: true,
                maxlength: 10,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"

            },

            erettsegi_bizonyitvany_szama: {
                required: true,
                minlength: 10,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"

            },

            szakmai_bizonyitvany_szama: {
                required: false,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"

            },
            bankszamlaszam: {
                required: true,
                number: true,
                pattern: "[^+*:?;=!%$&@#<>()[\\]{}]+"

            },

        },
        messages: {
            tanulo_neve: {
                required: "Kötelező kitölteni",
                minlength: "A név minimum 5 karekteresnek kell lennie",
            },
            telefonszam: {
                required: "Kötelező kitölteni",
                number: "Csak szám lehet",
                minlength:
                    "A telefonszámnak minimum 7 karekteresnek kell lennie",
                maxlength:
                    "A telefonszámnak maximum 15 karekteresnek kell lennie",
            },
            email: {
                required: "Kötelező kitölteni",
                email: "Az emailnek ilyen formátumnak kell lennie: abc@domain.tld",
            },
            anyja_neve: {
                required: "Kötelező kitölteni",
                minlength: " minimum 5 karekteresnek kell lennie",
                maxlength: " maximum 50 karekteres lehet"
            },
            szuletesi_datum: {
                required: "Kötelező kitölteni",
            },
            szuletesi_hely: {
                required: "Kötelező kitölteni",
                minlength: " minimum 5 karekteresnek kell lennie",
            },
            allando_lakcim: {
                required: "Kötelező kitölteni",
                minlength: " minimum 5 karekteresnek kell lennie",
            },
            ertesitesi_cim: {
                required: "Kötelező kitölteni",
                minlength: " minimum 5 karekteresnek kell lennie",

            },
            diak_azonosito: {
                required: "Kötelező kitölteni",
                number: "Csak szám lehet",
                maxlength: " maximum 11 karekteres lehet"
            },
            szemelyi_igazolvany_szam: {
                required: "Kötelező kitölteni",
                maxlength: " maximum 8 karekteres lehet"
            },
            taj_szam: {
                required: "Kötelező kitölteni",
                number: "Csak szám lehet",
                minlength: " minimum 9 karekteresnek kell lennie",
            },
            adoszam: {
                required: "Kötelező kitölteni",
                number:"Csak szám lehet",
                maxlength: " maximum 10 karekteres lehet"
            },
            erettsegi_bizonyitvany_szama: {
                required: "Kötelező kitölteni",
                minlength: " minimum 10 karekteresnek kell lennie",

            },

            szakmai_bizonyitvany_szama: {

            },
            bankszamlaszam: {
                required: "Kötelező kitölteni",
                number: "Csak szám lehet",

            },
        },
    });
}
export default BeiratkozasView;
