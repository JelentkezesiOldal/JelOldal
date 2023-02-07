import FelhasznaloView from "./FelhasznaloView.js";

class FelhasznalokView{
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
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><button>Felvesz</button></td>
    </tr>
    </table>
    `)

    szuloElem.append(`<table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Név</th>
                <th>E-mail</th>
                <th>Szak</th>
                <th>Master</th>
            </tr>    
        </thead>
        <tbody>
        
        </tbody>
    </table>`)
    this.tableElem = szuloElem.children('table:last-child');
    this.tbodyElem = this.tableElem.children('tbody');

    // this.kurvaanyad = $('#keres1').val()  
    // console.log(this.kurvaanyad + " lécci")
    this.keresGomb = $('#kereses')
    
        this.keresGomb.on('click', ()=>{
            this.kurvaanyad = $('#keres1').val()
            console.log(this.kurvaanyad + " lécci")
            this.kattintasTrigger("keres")
        })

    tomb.forEach(adat => {
        const adatom = new FelhasznaloView(adat, this.tbodyElem)
    });
}
kattintasTrigger(esemenyNeve){
    const esemeny = new CustomEvent(esemenyNeve, {detail:this.kurvaanyad})
    window.dispatchEvent(esemeny);
}
}

export default FelhasznalokView