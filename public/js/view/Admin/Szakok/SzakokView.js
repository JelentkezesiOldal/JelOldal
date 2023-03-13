import SzakView from "./SzakView.js";

class SzakokView{
    #adatok = {};
    constructor(tomb, szuloElem){
        szuloElem.html(`
        <h2 class="cim">Új szak felvétele:</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Megnevezés</th>
                    <th scope="col">Félévek száma</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Megnevezés"><input type="text" id="megnevezes" name="megnevezes"></td>
                    <td data-label="Félévek száma"><input type="number" id="hany_felev" name="hany_felev" min="1" max="6"></td>
                    <td data-label=""><input type="button" value="Felvesz" id="ujszak" name="ujszak"></td>
                </tr>
            </tbody>
        </table>
        `)
        szuloElem.append(`
        <h2 class="cim">Elindítható szakok</h2>
        <form>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Megnevezés</th>
                        <th>Félévek száma</th>
                        <th></th>
                        <th></th>
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

        this.ujSzakElem = $(`#ujszak`)
        this.ujSzakElem.on("click", () => {
            this.adatBeker();
            this.kattintasTrigger("ujszak")
        })
    }

    adatBeker(){
        this.#adatok.megnevezes = $('#megnevezes').val()
        this.#adatok.hany_felev = $('#hany_felev').val()
    }

    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#adatok})
        window.dispatchEvent(esemeny);
    }
}

export default SzakokView