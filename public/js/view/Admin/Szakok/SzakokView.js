import SzakView from "./SzakView.js";

class SzakokView{
    constructor(tomb, szuloElem){
        szuloElem.html(`
        <h2>Elindítható szakok</h2>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Megnevezés</th>
                    <th>Iskola</th>
                    <th>Előfeltétel</th>
                    <th>Félévek száma</th>
                    <th></th>
                </tr>    
            </thead>
            <tbody>
            
            </tbody>
        </table>
        `)
        this.tableElem = szuloElem.children('table:last-child');
        this.tbodyElem = this.tableElem.children('tbody');
        tomb.forEach(adat => {
            const adatom = new SzakView(adat, this.tbodyElem)
        });
    }
}

export default SzakokView