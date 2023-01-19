import FelhasznaloView from "./FelhasznaloView.js";

class FelhasznalokView{
    constructor(tomb, szuloElem){
        console.log("FelhasznalokView")
        szuloElem.html(`
        <div class="row float-end">
            <div class="col dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dm1" data-bs-toggle="dropdown" aria-expanded="false">
                 Dropdown link
                </a>
            
                <ul class="dropdown-menu" aria-labelledby="dm1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div class="col input-group">
                <input type="text" class="form-control" placeholder="Search">
            </div>
            <div class="col">
                <button>Keres</button>
            </div>
        </div>
        `)
        szuloElem.append(`<table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Név</th>
                    <th>E-mail</th>
                    <th>Szak</th>
                    <th>Master<th>
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