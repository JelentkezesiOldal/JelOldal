import JelentkezoView from "./JelentkezoView.js";

class JelentkezokView {
    #tomb;
    constructor(tomb, szuloElem) {
        this.#tomb = tomb;
        szuloElem.html(`
        <div class="row float-end">
            <div class="col input-group">
                <input type="text" class="form-control" id="keres1" placeholder="Search">
            </div>
            <div class="col">
                <button id="kereses">Keres</button>
            </div>
        </div>
        `)
        
        szuloElem.append(`
        <div id="myModal" class="modalSajat">
            <div class="modal-contentSajat">
                <spam class="closeSajat">&times;</spam>    
            </div>
        </div>
        `);
        this.modalElem = szuloElem.children("div:last-child");
        this.tenylegmodalElem = this.modalElem.children("div:last-child");
        szuloElem.append(`
            <button class="row float-left" id="csv">CSV-be mentés</button>
           
        
        `);
        //$("#keres").hide();
        szuloElem.append(`
        <table id="jelTab" class="table table-hover">
            <thead>
                <tr>
                    <th>Dátum</th>
                    <th>OM azonosító</th>
                    <th>Név</th>
                    <th>E-mail</th>
                    <th>Telefonszám</th>
                </tr>    
            </thead>
            <tbody>
            
            </tbody>
        </table>`);
        this.csvGomb = $("#csv");
        $("#csv").on("click", () => {
            // console.log("csv jelentkezok")
            this.kattintasTrigger2("csv");
        });

        this.keresGomb = $("#kereses");
        this.keresGomb.on("click", () => {
            this.input = $("#keres1").val();
            console.log(this.input + " lécci új");
            this.kattintasTrigger("keresJ");
        });

        this.tableElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tableElem.children("tbody");
        tomb.forEach((adat) => {
            const adatom = new JelentkezoView(
                adat,
                this.tbodyElem,
                this.tenylegmodalElem
            );
        });
    }
    kattintasTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.input });
        window.dispatchEvent(esemeny);
    }
    kattintasTrigger2(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.#tomb });
        window.dispatchEvent(esemeny);
    }
}

export default JelentkezokView;
