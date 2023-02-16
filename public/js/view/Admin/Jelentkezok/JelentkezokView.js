import JelentkezoView from "./JelentkezoView.js";

class JelentkezokView{
    constructor(tomb, szuloElem){
        szuloElem.html(`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <spam class="close">&times;</spam>
            </div>
        </div>
        `)
        this.modalElem = szuloElem.children("div:last-child")
        this.tenylegmodalElem = this.modalElem.children("div:last-child")
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
        <table id="jelTab" class="table table-hover">
            <thead>
                <tr>
                    <th>OM azonosító</th>
                    <th>Név</th>
                    <th>E-mail</th>
                    <th>Telefonszám</th>
                </tr>    
            </thead>
            <tbody>
            
            </tbody>
        </table>`)
        this.keresGomb = $('#kereses')
        this.keresGomb.on('click', ()=>{
            this.input = $('#keres1').val()
            console.log(this.input + " lécci új")
            this.kattintasTrigger("keresJ")
        })
        this.tableElem = szuloElem.children('table:last-child');
        this.tbodyElem = this.tableElem.children('tbody');
        tomb.forEach(adat => {
            const adatom = new JelentkezoView(adat, this.tbodyElem, this.tenylegmodalElem)
        });
    }
    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.input})
        window.dispatchEvent(esemeny);
    }
}

export default JelentkezokView