class BeiratkozasView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log("beiratkozásView");
        console.log("elem", elem);
        szuloElem.append(`
        <h1>Beiratkozáshoz szükséges adatok</h1>
        <form id="beiratkozas">
<div class="first">
        <div class="mb-3">
        <label for="tanulo_neve" class="form-label">Tanuló Neve</label>
        <input class="form-control" type="text" id="tanulo_neve" name="tanulo_neve" value="${elem.tanulo_neve}"  required></input><br><br>
        
        <label for="email" class="form-label">Email</label>
        <input class="form-control" type="text" id="email" name="email" value="${elem.email}"  ></input><br><br>
        
        <label for="telefonszam" class="form-label">Telefonszám</label>
        <input class="form-control" type="text" id="telefonszam" name="telefonszam" value="${elem.telefonszam}" ></input><br><br>
        
        <label for="szuleteskori_neve" class="form-label">Születési név</label>
        <input class="form-control" type="text" id="szuleteskori_neve" name="szuleteskori_neve" ></input><br><br>
        
        <label for="anyja_neve" class="form-label">Anyja neve</label>
        <input class="form-control" type="text" id="anyja_neve" name="anyja_neve" ></input><br><br>
       
        <label for="szuletesi_datum" class="form-label">Születési dátum</label>
        <input class="form-control" type="date" id="szuletesi_datum" name="szuletesi_datum" ></input><br><br>
        
        <label for="szuletesi_hely" class="form-label">Születési hely</label>
        <input class="form-control" type="text" id="szuletesi_hely" name="szuletesi_hely" ></input><br><br>
       
        <label for="allando_lakcim" class="form-label">Állandó lakcím</label>
        <input class="form-control" type="text" id="allando_lakcim" name="allando_lakcim" ></input><br><br>
        
        <label for="ertesitescheckbox"  class="form-label">Az értesítési cím megegyezik az állandó lakcímmel</label>
        <input class="form-check-input mt-0" type="checkbox" id="ertesitescheckbox" name="ertesitescheckbox" ></input><br><br>
        
        <label for="ertesitesi_cim" class="form-label">Értesítési cím</label>
        <input class="form-control" type="ertesitesi_cim" id="ertesitesi_cim" name="ertesitesi_cim" ></input><br><br>
        
        <label for="neme" class="form-label">Neme:</label>
        <select class="form-select" id="neme" name="neme">
        <option value="Nő">Nő</option>
        <option value="Férfi">Férfi</option>
        <option value="X">Nem adom meg</option>
        </select><br><br>
        </div>
</div>

<div class="second">
        <div id="secondmb3" class="mb-3">
          
          <label for="diak_azonosito" class="form-label">Diákigazolvány szám</label>
          <input class="form-control" type="text" id="diak_azonosito" name="diak_azonosito" ></input><br><br>
          
          <label for="szemelyi_igazolvany_szam" class="form-label">Személyi igazolvány szám</label>
          <input class="form-control" type="text" id="szemelyi_igazolvany_szam" name="szemelyi_igazolvany_szam" ></input><br><br>
          
          <label for="taj_szam" class="form-label">Taj szám</label>
          <input class="form-control" type="text" id="taj_szam" name="taj_szam" ></input><br><br>
          
         
          <label for="adoszam" class="form-label">Adószám</label>
          <input class="form-control" type="text" id="adoszam" name="adoszam" ></input><br><br>
          
          
          <label for="erettsegi_bizonyitvany_szama" class="form-label">Érettségi bizonyítvány száma</label>
          <input class="form-control" type="text" id="erettsegi_bizonyitvany_szama" name="erettsegi_bizonyitvany_szama" ></input><br><br>
          
          <p>Figyelem! A szakmia bizonyítvány nem előfeltétel, ha nincs még szakmai bizonyítványa akkor a következő mezőt nem kötelező kitölteni</p><br><br>
          <label for="szakmai_bizonyitvany" class="form-label">Szakmai bizonyítvány száma: </label>
          <input class="form-control" type="text" id="szakmai_bizonyitvany" name="szakmai_bizonyitvany" ></input><br><br>
                      
          <p>Figyelem! Ha nincsen még orvosi alkalmassági papírja akkor azt később is leadhatja az iskola titkárságán ha a szak amelyre jelentkezett ezt igényli</p><br><br>
          <label for="orvosi_alkalmassági" class="form-label">Orvosi Alkalmassági száma: </label>
          <input class="form-control" type="text" id="orvosi_alkalmassági" name="orvosi_alkalmassági" ></input><br><br>
          
          
          <label for="bankszamlaszam" class="form-label">Bankszámlaszám</label>
          <input class="form-control" type="text" id="bankszamlaszam" name="bankszamlaszam" ></input><br><br>
         
         
          <input id="button" type="button" value="Tovább" >
        </div>
</div> 


</form>
        `);
        /* this.tanuloElem = szuloElem.children("tanulo_neve");
        this.szuleteskorineveElem = szuloElem.children("#szuleteskori_neve");
        this.anyjaElem = szuloElem.children("#anyja_neve");
        this.szuletesidatumElem = szuloElem.children("#szuletesi_datum");
        this.szuletesihelyElem = szuloElem.children("#szuletesi_hely");
        this.emailElem = szuloElem.children("#email");
        this.telefonElem = szuloElem.children("telefonszam");
        this.allandolakcimElem = szuloElem.children("allando_lakcim");
        this.lakcimkartyaElem = szuloElem.children("lakcimkartya");
        this.ertesitesicimElem = szuloElem.children("ertesitesi_cim");
        this.selectElem = szuloElem.children("neme");
        this.diakazonElem = szuloElem.children("diak_azonosito");
        this.diakigazolvanyElem = szuloElem.children("diakigazolvany");
        this.szemelyiszamElem = szuloElem.children("szemelyi_igazolvany_szam");
        this.szemelyiigazolvanyElem = szuloElem.children("szemelyi_igazolvany");
        this.tajszamElem = szuloElem.children("taj_szam");
        this.tajkartyaElem = szuloElem.children("taj_kartya");
        this.adoszamElem = szuloElem.children("adoszam");
        this.adoigazolvanyElem = szuloElem.children("adoigazolvany");
        this.erettsegiszamElem = szuloElem.children("erettsegi_bizonyitvany_szama");
        this.erettsegibiziElem = szuloElem.children("erettsegi_bizonyitvany");
        //this.szakamibiziszamElem = szuloElem.children("");
        //this.szakmaibiziElem = szuloElem.children("");
        //this.orvosialkalmasElem = szuloElem.children("");
        this.bankszamlaszamElem = szuloElem.children("bankszamlaszam"); */

        this.SetDisabled();

        this.formElem = szuloElem.children("form:last-child");
        /* this.gombElem = $('#gomb');
        this.gombElem.on("click", () => {
        });
         */
        /* $("#beiratkozas").(() => {
            console.log("Kittintottal");
            this.UralapAdatok();
            this.KattintasTrigger("kuldes");
        }); */

        this.elkuldElem = $(`#button`);
        this.elkuldElem.on("click", () => {
            //console.log("Elküld a View-ban")
            this.UralapAdatok();
            this.KattintasTrigger("mentes")
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
    InputValidate() {
            $("#jelentkezes").validate({
                rules: {
                    tanulo_neve: {
                        required: true,
                        minlength: 5,
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
                    szuleteskori_neve: {
                        required: false,
                        
                    },
                    anyja_neve: {
                        required: true,

                    },
                    szuletesi_datum: {
                        required: true,
                        date: true,
                    
                    },
                    szuletesi_hely: {
                        required: true,
                        
                    },
                    allando_lakcim: {
                        required: true,
                        
                    },
                    lakcimkartya: {
                        required: true,
                        
                    },
                    ertesitesi_cim: {
                        required: true,
                        
                    },
                    diak_azonosito: {
                        required: true,
                        
                    },
                    diakigazolvany: {
                        required: true,
                        
                    },
                    szemelyi_igazolvany_szam: {
                        required: true,
                        
                    },
                    szemelyi_igazolvany: {
                        required: true,
                        
                    },
                    taj_szam: {
                        required: true,
                        
                    },
                    taj_kartya: {
                        required: true,
                        
                    },
                    adoszam: {
                        required: true,
                        
                    },
                    adoigazolvany: {
                        required: true,
                        
                    },
                    erettsegi_bizonyitvany_szama: {
                        required: true,
                        
                    },
                    erettsegi_bizonyitvany: {
                        required: true,
                        
                    },
                    szakmai_bizonyitvany_szama: {
                        required: true,
                        
                    },
                    szakmai_bizonyitvany: {
                        required: true,
                        
                    },
                    orvosi_alkalmassági: {
                        required: true,
        
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
                },
            });
    }

    KattintasTrigger(esemenyhivo) {
        const esemeny = new CustomEvent(esemenyhivo, { detail: this.#elem });
        console.log("KattintasTrigger");
        window.dispatchEvent(esemeny);
    }
}
export default BeiratkozasView;
