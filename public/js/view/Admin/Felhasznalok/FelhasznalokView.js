import FelhasznaloView from "./FelhasznaloView.js";

class FelhasznalokView{
    #adatok = {}
    constructor(tomb, szuloElem){
        console.log("FelhasznalokView")
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
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Felhasználónév</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Ideiglenes jelszó</th>
                    <th scope="col">Jogosultság</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Felhasználónév"><input type="text" id="name" name="name"></td>
                    <td data-label="E-mail"><input type="text" id="email"></td>
                    <td data-label="Ideiglenes jelszó"><input type="text" id="password"></td>
                    <td data-label="Jogosultság"><input type="number" id="master"></td>
                    <td data-label=""><input type="button" value="Felvesz" id="felvesz"></td>
                </tr>
            </tbody>
        </table>
        `)

        szuloElem.append(`<table class="table table-striped">
            <thead>
                <tr>
                    <th>Név</th>
                    <th>E-mail</th>
                    <th>Jogosultság</th>
                    <th></th>
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