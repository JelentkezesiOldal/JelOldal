class PublicAdatModel {
    #tomb = [];
    #token;
    constructor(token) {
        this.#token = token;
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Siker:', data);
                this.#tomb = data;
                myCallBack(this.#tomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatUj(vegpont, adat) {
        console.log("elküld a modelben")
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':this.token
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then(() => {
                console.log(data);
                
            })
            .catch((error) => {
                console.error('Error: nem jóó nem jóóó!!!!!!!!!', error);
            });
    }

    adatModosit(vegpont, adat) {
        console.log("ADATModosit ::",adat);
        vegpont += "/" + adat.jelentkezo_id;
        console.log("Modosit + id ::",vegpont);
        fetch(vegpont, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((adat) => {
                console.log("Modositas:  ",adat);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatTorol(vegpont, adat) {
        console.log(adat);
        console.log("Töröl: " + adat);
        vegpont += "/" + adat.jelentkezo_id;
        fetch(vegpont, {
            method: 'DELETE',
            headers: {

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

export default PublicAdatModel;