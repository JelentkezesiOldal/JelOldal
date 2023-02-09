class AdminAdatModel{
    #adatok
    #ideig = []
    constructor(token){
        console.log("AdminAdatModel")
        this.token = token
    }

    adatBe(vegpont, myCallback){
        console.log(vegpont);
        fetch(vegpont, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token,
            }
        })
        .then((response) => response.json())
        .then((data) => {
            this.#adatok = data;
            console.log(this.#adatok);
            myCallback(this.#adatok);
        })
        .catch((error) => {
            console.error("Error: ", error);
        })
    }

    adatUj(vegpont, adat) {
        console.log(vegpont)
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(vegpont)
                console.log('Újadat: ', this.#ideig = data);
                console.log(vegpont)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatModosit(vegpont, adat) {
        console.log(adat);
        console.log("Módosít: " + adat);
        vegpont += "/" + adat.id
        fetch(vegpont, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Módosítottam:  " + adat.updateAt);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatTorol(vegpont, adat) {
        console.log(adat);
        console.log("Töröl: " + adat);
        vegpont += adat.jelentkezo_id + "/" + adat.inditott_id
        console.log(vegpont)
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': this.token
            },
            body: JSON.stringify(adat),
        })
            .then()
            .then(() => {
                console.log("sikeres Törlés");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    
}

export default AdminAdatModel