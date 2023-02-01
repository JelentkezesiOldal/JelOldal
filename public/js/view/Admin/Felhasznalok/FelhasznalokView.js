import FelhasznaloView from "./FelhasznaloView.js";

class FelhasznalokView{
    constructor(tomb, szuloElem){
        console.log("FelhasznalokView")
        szuloElem.html(`
        <div class="row float-end">
            <div class="col input-group">
                <input type="text" class="form-control" placeholder="Search">
            </div>
            <div class="col">
                <button>Keres</button>
            </div>
        </div>
        <div class="dropdown" style="float:right;">
            <button class="dropbtn">Left</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
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


        tomb.forEach(adat => {
            const adatom = new FelhasznaloView(adat, this.tbodyElem)
        });
    }
}

export default FelhasznalokView