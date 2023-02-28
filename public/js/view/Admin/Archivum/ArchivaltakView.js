import ArchivaltView from "./ArchivaltView.js";

class ArchivaltakView {
    constructor(tomb, szuloElem) {
        szuloElem.html(`
        <div id="myModal" class="modalSajat">
            <div class="modal-contentSajat">
                <spam class="closeSajat">&times;</spam>
            </div>
        </div>`);

        this.modalElem = szuloElem.children("div:last-child");
        this.tenylegmodalElem = this.modalElem.children("div:last-child");
        szuloElem.append(`
        <div class="row float-end">
            <div class="col input-group">
                <input type="text" id="keres1" placeholder="Search">
            </div>
            <div class="col">
                <button id="kereses">Keres</button>
            </div>
        </div>
        `)
        szuloElem.append(`
        <h2 class="cim">Archivált jelentkezések</h2>
        <table class="table table-hover">
            <thead class="thead-light">
                <tr>
                    <th>#</th>
                    <th>OM azonosító</th>
                    <th>Név</th>
                    <th>Szak</th>
                </tr>    
            </thead>
            <tbody>
            </tbody>
        </table>`);
        this.tableElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tableElem.children("tbody");

        this.keresGomb = $('#kereses')
        this.keresGomb.on('click', ()=>{
            this.input = $('#keres1').val()
            console.log(this.input + " lécci új")
            this.kattintasTrigger("keresJ")
        })

        tomb.forEach((adat) => {
            const adatom = new ArchivaltView(
                adat,
                this.tbodyElem,
                this.tenylegmodalElem
            );
        });
    }
    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.input})
        window.dispatchEvent(esemeny);
    }
}

export default ArchivaltakView;
