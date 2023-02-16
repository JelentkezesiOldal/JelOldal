import SzakView from "./SzakView.js";

class SzakokView{
    constructor(tomb, szuloElem){
        szuloElem.html(`
        <h2 class="cim">Elindítható szakok</h2>
        <form>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Megnevezés</th>
                        <th>Előfeltétel</th>
                        <th>Félévek száma</th>
                        <th></th>
                    </tr>    
                </thead>
                <tbody>
                
                </tbody>
            </table>
        </form>
        `)
        this.formElem = szuloElem.children('form:last-child')
        this.tableElem = this.formElem.children('table:last-child');
        this.tbodyElem = this.tableElem.children('tbody');
        tomb.forEach(adat => {
            const adatom = new SzakView(adat, this.tbodyElem)
        });
    }
}

export default SzakokView