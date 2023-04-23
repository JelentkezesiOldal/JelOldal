class BeiratkozasFileUploadView {
    #elem = {};
    #jelid;
    #token;
    #formData = new FormData();
    constructor(szuloElem, jelid, token) {
        this.#jelid = jelid;
        this.#token = token;
        szuloElem.append(`
        <h1>Beiratkozáshoz szükséges képek</h1>
        <form id="beiratkozasfajl" enctype="multipart/form-data">
            <div class="first">
                <div class="mb-3">
                    <label for="lakcimkartyaeleje" class="form-label">Lakcímkártya eleje: </label>
                    <input class="form-control" type="file" id="lakcimkartyaeleje" name="lakcimkartyaeleje" ></input><br><br>
                    
                    <label for="lakcimkartyahatulja" class="form-label">Lakcímkártya hátulja: </label>
                    <input class="form-control" type="file" id="lakcimkartyahatulja" name="lakcimkartyahatulja" ></input><br><br>
                
                    <label for="diakigazolvanyeleje" class="form-label">Diákigazolvány eleje: </label>
                    <input class="form-control" type="file" id="diakigazolvanyeleje" name="diakigazolvanyeleje" ></input><br><br>
                    
                    <label for="diakigazolvanyhatulja" class="form-label">Diákigazolvány hátulja: </label>
                    <input class="form-control" type="file" id="diakigazolvanyhatulja" name="diakigazolvanyhatulja" ></input><br><br>
         
                    <label for="szemelyi_igazolvany_eleje" class="form-label">Személyi igazolvány eleje: </label>
                    <input class="form-control" type="file" id="szemelyi_igazolvany_eleje" name="szemelyi_igazolvany_eleje" ></input><br><br>
                    
                    <label for="szemelyi_igazolvany_hatulja" class="form-label">Személyi igazolvány hátulja: </label>
                    <input class="form-control" type="file" id="szemelyi_igazolvany_hatulja" name="szemelyi_igazolvany_hatulja" ></input><br><br>
                </div>

                
            </div>

            <div class="second">
                <div class="mb-3">
                    <label for="taj_kartya" class="form-label">Taj kártya képe</label>
                    <input class="form-control" type="file" id="taj_kartya" name="taj_kartya" ></input><br><br>
                    
                    <label for="adoigazolvany" class="form-label">Adóigazolvány: </label>
                    <input class="form-control" type="file" id="adoigazolvany" name="adoigazolvany" ></input><br><br>
                     
                    <label for="erettsegi_bizonyitvany" class="form-label">Érettségi Bizonyítvány: </label>
                    <input class="form-control" type="file" id="erettsegi_bizonyitvany" name="erettsegi_bizonyitvany" ></input><br><br>
                    
                    <p>Figyelem! A szakmia bizonyítvány nem előfeltétel, ha nincs még szakmai bizonyítványa akkor a következő mezőt nem kötelező kitölteni</p><br><br>
                    <label for="szakmai_bizonyitvany" class="form-label">Szakmai bizonyítvány</label>
                    <input class="form-control" type="file" id="szakmai_bizonyitvany" name="szakmai_bizonyitvany" ></input><br><br>
                    
                    <p>Figyelem! Ha nincsen még orvosi alkalmassági papírja akkor azt később is leadhatja az iskola titkárságán ha a szak amelyre jelentkezett ezt igényli</p><br><br>
                    <label for="orvosi_alkalmassagi" class="form-label">Orvosi Alkalmassági: </label>
                    <input class="form-control" type="file" id="orvosi_alkalmassagi" name="orvosi_alkalmassagi" ></input><br><br>
                    
                    <input id="btnvissza" class="btn btn-primary"  type="button" value="Vissza" >
                    <input id="btn" class="btn btn-primary" type="button" value="Mentés" >
                </div>
            </div>
        </form>
        
        `);

        this.elkuldElem = $(`#btn`);
        this.visszaelem = $(`#btnvissza`)
        this.visszaelem.on("click", ()=>{
            this.FileTrigger("vissza");
        });
        this.elkuldElem.on("click", () => {
            let szoveg ="Ha nem töltötted fel az összes fájlt akkor a hiányok pótlására a jelentkezési idő végéig van lehetóséged.\n"
            +"\n"
            +"Ebben az esetben minden fájlt újra fel kell majd töltened.\n" 
            +"\n"
            +"Biztosan szeretnéd?"
            if(confirm(szoveg) == true){
               this.UralapAdatok();
            this.FileTrigger("kuldes");
            }
            
        });
    
            

    }
    UralapAdatok() {
        const mezok = [
            '#lakcimkartyaeleje',
            '#lakcimkartyahatulja',
            '#diakigazolvanyeleje',
            '#diakigazolvanyhatulja',
            '#szemelyi_igazolvany_eleje',
            '#szemelyi_igazolvany_hatulja',
            '#taj_kartya',
            '#adoigazolvany',
            '#erettsegi_bizonyitvany',
            '#szakmai_bizonyitvany',
            '#orvosi_alkalmassagi',

        ];
        this.#formData.append("token", this.#token);
        this.#formData.append("jelentkezo_id", this.#jelid);
        mezok.forEach(mezo => {
            console.log($(mezo).val());
            if ($(mezo).val() != "" ) {
                this.#formData.append(
                    $(mezo).attr("name"),
                    $(mezo).prop("files")[0]
                );
            }
        });
        
    }
    FileTrigger(esemenyhivo) {
        const esemeny = new CustomEvent(esemenyhivo, { detail: this.#formData });
        console.log("KattintasTrigger");
        window.dispatchEvent(esemeny);
    }
}
export default BeiratkozasFileUploadView;
