class FelhasznalokView{
    constructor(tomb, szuloElem){
        console.log("FelhasznalokView")
        szuloElem.html(`<table>
            <thead>
                <tr>
                    <th>Felhaszálónév<th>
                    <th>E-mail<th>
                    <th>Telefonszám<th>
                    <th>Szak<th>
                    <th>Master<th>
                </tr>    
            </thead>
        </table>`)
    }
}

export default FelhasznalokView