class BeiratkozasView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log("beiratkozásView");
        console.log("elem", elem)
        szuloElem.append(`
        <form method="PATCH" action="/beiratkozo">
        
        <label for="tanulo_neve">Tanuló Neve</label>
        <input type="text" id="tanulo_neve" name="tanulo_neve" value="${elem.tanulo_neve}" ></input><br><br>
        
        <label for="email">Email</label>
        <input type="text" id="email" name="email" value="${elem.email}"  ></input><br><br>
        
        <label for="telefonszam">Telefonszám</label>
        <input type="text" id="telefonszam" name="telefonszam" value="${elem.telefonszam}" ></input><br><br>
        
        <label for="szuleteskori_neve">Születési név</label>
        <input type="text" id="szuleteskori_neve" name="szuleteskori_neve" ></input><br><br>
        
        <label for="anyja_neve">Anyja neve</label>
        <input type="text" id="anyja_neve" name="anyja_neve" ></input><br><br>
       
        <label for="szuletesi_datum">Születési dátum</label>
        <input type="date" id="szuletesi_datum" name="szuletesi_datum" ></input><br><br>
        
        <label for="szuletesi_hely">Születési hely</label>
        <input type="text" id="szuletesi_hely" name="szuletesi_hely" ></input><br><br>
       
        <label for="allando_lakcim">Állandó lakcím</label>
        <input type="text" id="allando_lakcim" name="allando_lakcim" ></input><br><br>
        
        <label for="lakcimkartya">Lakcímkártya képe</label>
        <input type="file" id="lakcimkartya" name="lakcimkartya" ></input><br><br>
        
        
        <label for="ertesitescheckbox">Az értesítési cím megegyezik az állandó lakcímmel</label>
        <input type="checkbox" id="ertesitescheckbox" name="ertesitescheckbox" ></input><br><br>
        
        <label for="ertesitesi_cim">Értesítési cím</label>
        <input type="ertesitesi_cim" id="ertesitesi_cim" name="ertesitesi_cim" ></input><br><br>
        
        <label for="neme">Neme:</label>
        <select id="neme" name="neme">
        <option value="no">Nő</option>
        <option value="ferfi">Férfi</option>
        <option value="nemad">Nem adom meg</option>
        </select><br><br>
        
        <label for="diak_azonosito">Diákigazolvány szám</label>
        <input type="text" id="diak_azonosito" name="diak_azonosito" ></input><br><br>
        
        <label for="diakigazolvany">Diákigazolvény képe</label>
        <input type="file" id="diakigazolvany" name="diakigazolvany" ></input><br><br>
        
        <label for="szemelyi_igazolvany_szam">Személyi igazolvány szám</label>
        <input type="text" id="szemelyi_igazolvany_szam" name="szemelyi_igazolvany_szam" ></input><br><br>
        
        <label for="szemelyi_igazolvany">Személyi igazolvány képe</label>
        <input type="file" id="szemelyi_igazolvany" name="szemelyi_igazolvany" ></input><br><br>
        
        <label for="taj_szam">Taj szám</label>
        <input type="text" id="taj_szam" name="taj_szam" ></input><br><br>
        
        <label for="taj_kartya">Taj kártya képe</label>
        <input type="file" id="taj_kartya" name="taj_kartya" ></input><br><br>
        
        <label for="adoszam">Adószám</label>
        <input type="text" id="adoszam" name="adoszam" ></input><br><br>
        
        <label for="adoigazolvany">Adóigazolvány képe</label>
        <input type="file" id="adoigazolvany" name="adoigazolvany" ></input><br><br>
        
        <label for="erettsegi_bizonyitvany_szama">Érettségi bizonyítvány száma</label>
        <input type="text" id="erettsegi_bizonyitvany_szama" name="erettsegi_bizonyitvany_szama" ></input><br><br>
        
        <label for="erettsegi_bizonyitvany">Érettségi Bizonyítvány képe</label>
        <input type="file" id="erettsegi_bizonyitvany" name="erettsegi_bizonyitvany" ></input><br><br>
        
        <label for="bankszamlaszam">Bankszámlaszám</label>
        <input type="text" id="bankszamlaszam" name="bankszamlaszam" ></input><br><br>

        <button id="elkuld">Elküld</button>

        </form>
        `)
        this.tanuloElem = szuloElem.children("tanulo_neve");
        this.szuleteskorineveElem = szuloElem.children("szuleteskori_neve");
        this.anyjaElem = szuloElem.children("anyja_neve");
        this.szuletesidatumElem = szuloElem.children("szuletesi_datum");
        this.szuletesihelyElem = szuloElem.children("szuletesi_hely");
        this.emailElem = szuloElem.children("email");
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
        this.bankszamlaszamElem = szuloElem.children("bankszamlaszam");



        this.formElem = szuloElem.children("form:last-child")
        this.gombElem = this.formElem.children("button")
            this.gombElem.on("click", ()=>{
                console.log("Kittintottal");
                this.UralapAdatok();
                this.KattintasTrigger("kuldes")
            });

    }
    UralapAdatok(){
        this.#elem.tanulo_neve = this.tanuloElem.val();
        this.#elem.szuleteskori_neve = this.szuleteskorineveElem.val();
        this.#elem.anyja_neve = this.anyjaElem.val();
        this.#elem.szuletesi_datum = this.szuletesidatumElem.val();
        this.#elem.szuletesi_hely = this.szuletesihelyElem.val();
        this.#elem.email=this.emailElem.val();
        this.#elem.telefonszam = this.telefonElem.val();
        this.#elem.allando_lakcim = this.allandolakcimElem.val();
        this.#elem.lakcimkartya = this.lakcimkartyaElem.val();
        if (ertesitescheckbox.checked) {
            this.#elem.ertesitesi_cim = this.allandolakcimElem.val();
        } else {
            this.#elem.ertesitesi_cim = this.ertesitesicimElem.val();
        };
        this.#elem.neme = this.selectElem.val();
        this.#elem.diak_azonosito = this.diakazonElem.val();
        this.#elem.diakigazolvany = this.diakigazolvanyElem.val();
        this.#elem.szemelyi_igazolvany_szam = this.személyiszamElem.val();
        this.#elem.szemelyi_igazolvany = this.szemelyiszamElem.val();
        this.#elem.taj_szam = this.tajszamElem.val();
        this.#elem.taj_kartya = this.tajkartyaElem.val();
        this.#elem.adoszam =this.adoszamElem.val();
        this.#elem.adoigazolvany = this.adoigazolvanyElem.val();
        this.#elem.erettsegi_bizonyitvany_szama = this.erettsegiszamElem.val();
        this.#elem.erettsegi_bizonyitvany = this.erettsegibiziElem.val();
       // this.#elem.szakmai_bizonyitvany_szama
        //this.#elem.szakmai_bizonyitvany
        //this.#elem.orvosi_alkalmassági
        this.#elem.bankszamlaszam = this.bankszamlaszamElem.val();

        
}

    KattintasTrigger(esemenyhivo){
        const esemeny = new CustomEvent(esemenyhivo,{detail:this.#elem});
        console.log("KattintasTrigger");
        window.dispatchEvent(esemeny);
        }


}
export default BeiratkozasView;