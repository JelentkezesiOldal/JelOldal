import ArchivaltView from "./ArchivaltView.js";

class ArchivaltakView {
    constructor(tomb, szuloElem) {
        szuloElem.html(`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <spam class="close">&times;</spam>
            </div>
        </div>`);

        this.modalElem = szuloElem.children("div:last-child");
        this.tenylegmodalElem = this.modalElem.children("div:last-child");
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

        tomb.forEach((adat) => {
            const adatom = new ArchivaltView(
                adat,
                this.tbodyElem,
                this.tenylegmodalElem
            );
        });
    }
}

export default ArchivaltakView;
