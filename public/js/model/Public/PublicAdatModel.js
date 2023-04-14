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
        //console.log("elküld a modelben")
        console.log("ezt kéne megkapnia", adat)
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.#token
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error: nem jo', error);
            });
    }

    adatModosit(vegpont, adat, urltoken) {
        console.log("ADATModosit ::", adat);
        vegpont += "/" + urltoken;
        console.log("Modosit + id ::", vegpont);
        fetch(vegpont, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.#token
            },
            body: JSON.stringify(adat),
        })
            /* .then((response) => response.json()) */
            .then(() => {
                console.log("sikeres mod");
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

    BeiratkozasAdat(vegpont, myCallBack, urltoken) {
        vegpont += "/" + urltoken;
        console.log("Vegpont: ", vegpont)
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

    FileTorol(vegpont, adat, urltoken) {
        vegpont += "/" + adat.get("jelentkezo_id") + "/" + urltoken;
        fetch(vegpont, {
            method: 'DELETE',
            headers: {

                'X-CSRF-TOKEN': this.token
            },
            body: JSON.stringify(adat),
        })
            .then()
            .then(() => {
                console.log("sikeres Törlés", vegpont);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    FileUpload(vegpont, adat) {
        /* console.log(adat.get('lakcimkartya'))*/
        console.log("Fetch elott")
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': this.#token
            },
            body: adat
        })
            .then(() => {
                console.log(vegpont);
            })
            .catch((error) => {
                console.error('Error: nem jo', error);
            });
    }


}

export default PublicAdatModel;