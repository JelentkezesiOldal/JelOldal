class BeiratkozasFileUploadView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem
        szuloElem.append(`
        <form id="beiratkozasFileUpload">
            <div class="first">
                <div class="mb-3">
                    <label for="lakcimkartya" class="form-label">Lakcímkártya: </label>
                    <input class="form-control" type="file" id="lakcimkartya" name="lakcimkartya" ></input><br><br>
                
                    <label for="diakigazolvany" class="form-label">Diákigazolvény: </label>
                    <input class="form-control" type="file" id="diakigazolvany" name="diakigazolvany" ></input><br><br>
         
                    <label for="szemelyi_igazolvany" class="form-label">Személyi igazolvány: </label>
                    <input class="form-control" type="file" id="szemelyi_igazolvany" name="szemelyi_igazolvany" ></input><br><br>
                </div>

                <div class="mb-3">
                    <label for="taj_kartya" class="form-label">Taj kártya képe</label>
                    <input class="form-control" type="file" id="taj_kartya" name="taj_kartya" ></input><br><br>
                    
                    <label for="adoigazolvany" class="form-label">Adóigazolvány: </label>
                    <input class="form-control" type="file" id="adoigazolvany" name="adoigazolvany" ></input><br><br>
                     
                    <label for="erettsegi_bizonyitvany" class="form-label">Érettségi Bizonyítvány: </label>
                    <input class="form-control" type="file" id="erettsegi_bizonyitvany" name="erettsegi_bizonyitvany" ></input><br><br>
                    
                    <label for="szakmai_bizonyitvany" class="form-label">Szakmai bizonyítvány</label>
                    <input class="form-control" type="file" id="szakmai_bizonyitvany" name="szakmai_bizonyitvany" ></input><br><br>
                    
                    <label for="orvosi_alkalmassági" class="form-label">Orvosi Alkalmassági: </label>
                    <input class="form-control" type="file" id="orvosi_alkalmassági" name="orvosi_alkalmassági" ></input><br><br>
                    
                    <input id="button" type="button" value="Mentés" >
                </div>
            </div>
        </form>
        
        `)
        
        
        this.elkuldElem = $(`#button`);
        this.elkuldElem.on("click", () => {
            //console.log("Elküld a View-ban")
            this.adatGyujtes();
            this.kattintastrigger("kuldes")
        });
    }
    UralapAdatok() {
        this.#elem.lakcimkartya = $("#lakcimkartya").val();
       
        this.#elem.diakigazolvany = $("#diakigazolvany").val();
      
        this.#elem.szemelyi_igazolvany = $("#szemelyi_igazolvany").val();
      
        this.#elem.taj_kartya = $("#taj_kartya").val();

        this.#elem.adoigazolvany = $("#adoigazolvany").val();

        this.#elem.erettsegi_bizonyitvany = $("#erettsegi_bizonyitvany").val();

        this.#elem.szakmai_bizonyitvany = $("#szakmai_bizonyitvany").val();
       
        this.#elem.orvosi_alkalmassági = $("#orvosi_alkalmassági").val();

    }

}
export default BeiratkozasFileUploadView;