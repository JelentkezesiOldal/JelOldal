import FelhasznaloView from "./FelhasznaloView.js";

class FelhasznalokView{
    #adatok = []
    constructor(tomb, szuloElem){
        console.log("FelhasznalokView")
        szuloElem.html(`
        <div class="row float-end">
            <div class="col input-group">
                <input type="text" id="keres1" placeholder="Search">
            </div>
            <div class="col">
                <button id="kereses">Keres</button>
            </div>
        </div>
        `)
        szuloElem.append(`<table>
        <tr>
            <th>Felhasználónév</th>
            <th>E-mail</th>
            <th>Ideiglenes jelszó</th>
            <th>Jogosultság</th>
            <th>Szak</th>
            <th></th>
        </tr>
        <tr>
            <td><input type="text" id="name" name="name"></td>
            <td><input type="text" id="email"></td>
            <td><input type="text" id="password"></td>
            <td><input type="number" id="master"></td>
            <td><input type="number" id="szak_id"></td>
            <td><input type="button" value="Felvesz" id="felvesz"></td>
        </tr>
        </table>
        `)

        szuloElem.append(`<table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Név</th>
                    <th>E-mail</th>
                    <th>Szak</th>
                    <th>Jogosultság</th>
                </tr>    
            </thead>
            <tbody>
            
            </tbody>
        </table>`)
        this.tableElem = szuloElem.children('table:last-child');
        this.tbodyElem = this.tableElem.children('tbody');

        // this.input = $('#keres1').val()  
        // console.log(this.input + " lécci")
        this.keresGomb = $('#kereses')
        this.felveszGomb = $(`#felvesz`)

            this.keresGomb.on('click', ()=>{
                this.input = $('#keres1').val()
                console.log(this.input + " lécci")
                this.kattintasTrigger("keres")
            })

            this.felveszGomb.on('click', ()=>{
                this.adatBeker()
                this.kattintasTrigger2("felvesz")
            })

        tomb.forEach(adat => {
            const adatom = new FelhasznaloView(adat, this.tbodyElem)
        });
    }
    adatBeker(){
        this.#adatok.name = $('#name').val()
        this.#adatok.email = $('#email').val()
        this.#adatok.password = $('#password').val()
        this.#adatok.master = $('#master').val()
        this.#adatok.szak_id = $('#szak_id').val()
    }

    kattintasTrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.input})
        window.dispatchEvent(esemeny);
    }
    kattintasTrigger2(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#adatok})
        window.dispatchEvent(esemeny);
    }
}

export default FelhasznalokView