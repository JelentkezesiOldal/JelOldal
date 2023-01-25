class BeiratkozasView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log("beiratkozásView");
        szuloElem.append(`
        <form method="POST">
        
        <label for="tanulo_neve">Tanuló Neve</label>
        <input type="text" id="tanulo_neve" name="tanulo_neve" value="${elem.teljes_nev}" disable></input><br><br>
        
        <label for="email">Email</label>
        <input type="text" id="email" name="email" value="${elem.email}" disable ></input><br><br>
        
        <label for="telefonszam">Telefonszám</label>
        <input type="text" id="telefonszam" name="telefonszam" value="${elem.telefonszam}" disable></input><br><br>
        
        <label for="szuleteskori_neve">Születési név</label>
        <input type="text" id="szuleteskori_neve" name="szuleteskori_neve" required></input><br><br>
        
        <label for="anyja_neve">Anyja neve</label>
        <input type="text" id="anyja_neve" name="anyja_neve" required></input><br><br>
       
        <label for="szuletesi_datum">Születési dátum</label>
        <input type="date" id="szuletesi_datum" name="szuletesi_datum" required></input><br><br>
        
        <label for="szuletesi_hely">Születési hely</label>
        <input type="text" id="szuletesi_hely" name="szuletesi_hely" required></input><br><br>
       
        <label for="allando_lakcim">Állandó lakcím</label>
        <input type="" id="" name="" required></input><br><br>
        
        <label for="lakcimkartya">Lakcímkártya képe</label>
        <input type="image" id="lakcimkartya" name="lakcimkartya" required></input><br><br>
        
        
        <label for="ertesitescheckbox">Az értesítési cím megegyezik az állandó lakcímmel</label>
        <input type="checkbox" id="ertesitescheckbox" name="ertesitescheckbox" required></input><br><br>
        <label for="ertesitesi_cim">Értesítési cím</label>
        <input type="ertesitesi_cim" id="ertesitesi_cim" name="ertesitesi_cim" required></input><br><br>
        
        <label for="neme"></label>
        <select id="neme" name="neme">
        <option value="no">Nő</option>
        <option value="ferfi">Férfi</option>
        <option value="nemad">Nem adom meg</option>
        </select>
        
        <label for="diak_azonosito">Diákigazolvány szám</label>
        <input type="text" id="diak_azonosito" name="diak_azonosito" required></input><br><br>
        
        <label for="diakigazolvany">Diákigazolvény képe</label>
        <input type="image" id="diakigazolvany" name="diakigazolvany" required></input><br><br>
        
        <label for="szemelyi_igazolvany_szam">Személyi igazolvány szám</label>
        <input type="text" id="szemelyi_igazolvany_szam" name="szemelyi_igazolvany_szam" required></input><br><br>
        
        <label for="szemelyi_igazolvany">Személyi iagzolvány képe</label>
        <input type=image" id="szemelyi_igazolvany" name="szemelyi_igazolvany" required></input><br><br>
        
        <label for="taj_szam">Taj szám</label>
        <input type="text" id="taj_szam" name="taj_szam" required></input><br><br>
        
        <label for="taj_kartya">Taj kártya képe</label>
        <input type="image" id="taj_kartya" name="taj_kartya" required></input><br><br>
        
        <label for="adoszam">Adószám</label>
        <input type="text" id="adoszam" name="adoszam" required></input><br><br>
        
        <label for="adoigazolvany">Adóigazolvány képe</label>
        <input type="image" id="adoigazolvany" name="adoigazolvany" required></input><br><br>
        
        <label for="erettsegi_bizonyitvany_szama">Érettségi bizonyítvány száma</label>
        <input type="text" id="erettsegi_bizonyitvany_szama" name="erettsegi_bizonyitvany_szama" required></input><br><br>
        
        <label for="erettsegi_bizonyitvany">Érettségi Bizonyítvány képe</label>
        <input type="image" id="erettsegi_bizonyitvany" name="erettsegi_bizonyitvany" required></input><br><br>
        
        <label for="bankszamlaszam">Bankszámlaszám</label>
        <input type="text" id="bankszamlaszam" name="bankszamlaszam" required></input><br><br>
        </form>
        <div>
        <button id="elkuld">Elküld</button>
        <div>
        `)
        this.sajatDiv = szuloElem.children("div:last-child")
        this.gombElem = this.sajatDiv.children("button")
            this.gombElem.on("click", ()=>{
                this.KattintasTrigger("kuldes")
            });

    }

    KattintasTrigger(esemenyhivo){
        const esemeny = new CustomEvent(esemenyhivo,{detail: this.#elem.id});
        window.dispatchEvent(esemeny);
        }


}
export default BeiratkozasView;