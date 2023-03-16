class BeiratkozasFileUploadView {
    #elem = {};
    #jelid;
    #formData = new FormData();
    constructor(szuloElem, jelid) {
        this.#jelid = jelid;
        szuloElem.append(`
        <h1>Beiratkozáshoz szükséges képek</h1>
        <form id="beiratkozasFileUpload" enctype="multipart/form-data">
            <div class="first">
                <div class="mb-3">
                    <label for="lakcimkartya" class="form-label">Lakcímkártya: </label>
                    <input class="form-control" type="file" id="lakcimkartya" name="lakcimkartya" ></input><br><br>
                
                    <label for="diakigazolvany" class="form-label">Diákigazolvény: </label>
                    <input class="form-control" type="file" id="diakigazolvany" name="diakigazolvany" ></input><br><br>
         
                    <label for="szemelyi_igazolvany" class="form-label">Személyi igazolvány: </label>
                    <input class="form-control" type="file" id="szemelyi_igazolvany" name="szemelyi_igazolvany" ></input><br><br>
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
                    
                    <input id="btn" type="button" value="Mentés" >
                </div>
            </div>
        </form>
        
        `);

        this.elkuldElem = $(`#btn`);
        this.elkuldElem.on("click", () => {
            console.log("Elküld a View-ban");
            this.UralapAdatok();

            this.FileTrigger("kuldes");
        });
    }
    UralapAdatok() {
        /*  this.#formData.append("jelentkezo_id", this.#jelid)
        console.log(this.#formData.get('jelentkezo_id')) */

        this.#formData.append("jelentkezo_id", this.#jelid);

        if ($("#lakcimkartya").val() != "") {
            this.#formData.append(
                $("#lakcimkartya").attr("name"),
                $("#lakcimkartya").prop("files")[0]
            );
        }
        if ($("#diakigazolvany").val() != "") {
            this.#formData.append(
                $("#diakigazolvany").attr("name"),
                $("#diakigazolvany").prop("files")[0]
            );
        }
        if ($("#szemelyi_igazolvany").val() != "") {
            this.#formData.append(
                $("#szemelyi_igazolvany").attr("name"),
                $("#szemelyi_igazolvany").prop("files")[0]
            );
        }
        if ($("#adoigazolvany").val() != "") {
            this.#formData.append(
                $("#adoigazolvany").attr("name"),
                $("#adoigazolvany").prop("files")[0]
            );
        }
        if ($("#erettsegi_bizonyitvany").val() != "") {
            this.#formData.append(
                $("#erettsegi_bizonyitvany").attr("name"),
                $("#erettsegi_bizonyitvany").prop("files")[0]
            );
        }

        if ($("#szakmai_bizonyitvany").val() != "") {
            this.#formData.append(
                $("#szakmai_bizonyitvany").attr("name"),
                $("#szakmai_bizonyitvany").prop("files")[0]
            );
        }
        if ($("#orvosi_alkalmassagi").val() != "") {
            this.#formData.append(
                $("#orvosi_alkalmassagi").attr("name"),
                $("#orvosi_alkalmassagi").prop("files")[0]
            );
        }

        /* console.log(this.#formData.get('jelentkezo_id')) */

        // this.#formData.append(
        //     $("#lakcimkartya").attr("name"),
        //     $("#lakcimkartya").prop("files")[0]
        // );
        // /* console.log(this.#formData.get('lakcimkartya')) */

        // this.#formData.append(
        //     $("#diakigazolvany").attr("name"),
        //     $("#diakigazolvany").prop("files")[0]
        // );
        // /* console.log(this.#formData.get('diakigazolvany')) */

        // this.#formData.append(
        //     $("#szemelyi_igazolvany").attr("name"),
        //     $("#szemelyi_igazolvany").prop("files")[0]
        // );
        // //     /* console.log(this.#formData.get('szemelyi_igazolvany')) */
        // if ($("#taj_kartya").val() != "") {
        //     this.#formData.append(
        //         $("#taj_kartya").attr("name"),
        //         $("#taj_kartya").prop("files")[0]
        //     );
        // }

        //    /*  console.log(this.#formData.get('taj_kartya')) */

        //     this.#formData.append($("#adoigazolvany").attr('name'), $("#adoigazolvany").prop('files')[0]);
        //    /*  console.log(this.#formData.get('adoigazolvany')) */

        //     this.#formData.append($("#erettsegi_bizonyitvany").attr('name'), $("#erettsegi_bizonyitvany").prop('files')[0]);
        /*  console.log(this.#formData.get('erettsegi_bizonyitvany')) */

        /*             this.#formData.append($("#szakmai_bizonyitvany").attr('name'), $("#szakmai_bizonyitvany").prop('files')[0]);
            console.log(this.#formData.get('szakmai_bizonyitvany'))
            
            this.#formData.append($("#orvosi_alkalmassagi").attr('name'), $("#orvosi_alkalmassagi").prop('files')[0]);
            console.log(this.#formData.get('orvosi_alkalmassagi')) */

        /*    console.log(this.#formData.get('lakcimkartya'))

        this.#formData.append($("#diakigazolvany").attr('name'), $("#diakigazolvany").prop('files')[0],)
        console.log(this.#formData.get('diakigazolvany')) */
        // this.#elem.jelentkezo_id = this.#jelid;

        // this.#elem.lakcimkartya = $("#lakcimkartya").prop('files');

        // this.#elem.diakigazolvany = $("#diakigazolvany").prop('files');

        // this.#elem.szemelyi_igazolvany = $("#szemelyi_igazolvany").prop('files');

        // this.#elem.taj_kartya = $("#taj_kartya").prop('files');

        // this.#elem.adoigazolvany = $("#adoigazolvany").prop('files');

        // this.#elem.erettsegi_bizonyitvany = $("#erettsegi_bizonyitvany").prop('files');

        // this.#elem.szakmai_bizonyitvany = $("#szakmai_bizonyitvany").prop('files');

        // this.#elem.orvosi_alkalmassági = $("#orvosi_alkalmassagi").prop('files');
    }
    FileTrigger(esemenyhivo) {
        const esemeny = new CustomEvent(esemenyhivo, {
            detail: this.#formData,
        });
        console.log("KattintasTrigger");
        window.dispatchEvent(esemeny);
    }
}
export default BeiratkozasFileUploadView;
