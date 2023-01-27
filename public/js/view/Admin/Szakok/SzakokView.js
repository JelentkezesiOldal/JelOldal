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
        this.tableElem1 = szuloElem.children('table:last-child');
        this.tbodyElem1 = this.tableElem1.children('tbody');
        szuloElem.append(`
        <h2>Elindított szakok</h2>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Szak</th>
                    <th>Állami hely</th>
                    <th>Önköltséges hely</th>
                    <th></th>
                </tr>    
            </thead>
            <tbody>
            
            </tbody>
        </table>
        `)
        this.tableElem2 = szuloElem.children('table:last-child');
        this.tbodyElem2 = this.tableElem2.children('tbody');
        tomb.forEach(adat => {
            const adatom = new SzakView(adat, this.tbodyElem1, this.tableElem2)
        });
    }
}

export default SzakokView