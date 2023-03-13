import SzakElindView from "./SzakElindView.js";


class SzakokElindVIew{
    #adatok = {};
    constructor(tomb, szuloElem){
        szuloElem.append(`
        <h2 class="cim">Elindított szakok</h2>
        <form>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Megnevezés</th>
                        <th>Félévek száma</th>
                        <th></th>
                        <th></th>
                    </tr>    
                </thead>
                <tbody >
                
                </tbody>
            </table>
        </form>
        `)
        this.formElem = szuloElem.children('form:last-child')
        this.tableElem = this.formElem.children('table:last-child');
        this.tbodyElem = this.tableElem.children('tbody');
        tomb.forEach(adat => {
            const adatom = new SzakElindView(adat, this.tbodyElem)
        });

    }

    adatBeker(){
        this.#adatok.megnevezes = $('#megnevezes').val()
        this.#adatok.hany_felev = $('#hany_felev').val()
    }
}

export default SzakokElindVIew