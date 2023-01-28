class BeiratkozasView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log("beiratkozásView");
        szuloElem.append(`
        <form method="PUT" action="/beiratkozo/">
        
        <label for="tanulo_neve">Tanuló Neve</label>
        <input type="text" id="tanulo_neve" name="tanulo_neve" value="${elem.tanulo_neve}" disable></input><br><br>
        
        <label for="email">Email</label>
        <input type="text" id="email" name="email" value="${elem.email}" disable ></input><br><br>
        
        <label for="telefonszam">Telefonszám</label>
        <input type="text" id="telefonszam" name="telefonszam" value="${elem.telefonszam}" disable></input><br><br>
        
        <label for="szuleteskori_neve">Születési név</label>
        <input type="text" id="szuleteskori_neve" name="szuleteskori_neve" ></input><br><br>
        
        <label for="anyja_neve">Anyja neve</label>
        <input type="text" id="anyja_neve" name="anyja_neve" ></input><br><br>
       
        <label for="szuletesi_datum">Születési dátum</label>
        <input type="date" id="szuletesi_datum" name="szuletesi_datum" ></input><br><br>
        
        <label for="szuletesi_hely">Születési hely</label>
        <input type="text" id="szuletesi_hely" name="szuletesi_hely" ></input><br><br>
       
        <label for="allando_lakcim">Állandó lakcím</label>
        <input type="" id="" name="" ></input><br><br>
        
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
        
        <label for="szemelyi_igazolvany">Személyi iagzolvány képe</label>
        <input type=file" id="szemelyi_igazolvany" name="szemelyi_igazolvany" ></input><br><br>
        
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
        </form>
        <div>
        <button id="elkuld">Elküld</button>
        <div>
        `)
        this.sajatDiv = szuloElem.children("div:last-child")
        this.gombElem = this.sajatDiv.children("button")
            this.gombElem.on("click", ()=>{
                console.log("Kittintottal");
                this.KattintasTrigger("kuldes")
            });

    }

    KattintasTrigger(esemenyhivo){
        const esemeny = new CustomEvent(esemenyhivo,{detail:this.#elem});
        console.log("KattintasTrigger");
        window.dispatchEvent(esemeny);
        }


}
export default BeiratkozasView;