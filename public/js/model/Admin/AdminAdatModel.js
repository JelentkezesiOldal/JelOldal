class AdminAdatModel{
    #adatok
    #token
    #saveElem
    #adat
    #inputElem   
    #editElem
    #doneElem
    #undoElem
    constructor(token){
        this.#token = token;
        console.log("AdminAdatModel")
    }

    adatBe(vegpont, myCallback){
        console.log(vegpont);
        fetch(vegpont, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.#token,
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
                'X-CSRF-TOKEN': this.#token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(vegpont)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatModosit(vegpont, adat) {
        console.log(adat);
        console.log("Módosít: " + adat);
        vegpont += "/" + adat.jelentkezo_id
        fetch(vegpont, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.#token
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then(() => {
                console.log("Módosítottam:  " + adat.updateAt);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatTorol(vegpont, adat) {
        console.log(adat);
        //console.log("Töröl: " + adat.inditott_id);
        vegpont += adat.jelentkezo_id + "/" + adat.inditott_id
        console.log(vegpont)
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': this.#token
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

    adatTorolSzak(vegpont, adat) {
        console.log(adat);
        console.log("Töröl: " + adat.szak_id);
        vegpont +=  adat.szak_id
        console.log(vegpont)
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': this.#token
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

    adatTorolFelh(vegpont, adat) {
        console.log(adat);
        console.log("Töröl: " + adat.ugyintezo_id);
        vegpont +=  adat.ugyintezo_id
        console.log(vegpont)
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': this.#token
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
    adatTorolIndSzak(vegpont, adat) {
        console.log(adat);
        console.log("Töröl: " + adat.inditott_id);
        vegpont +=  adat.inditott_id
        console.log(vegpont)
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': this.#token
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

    getSaveElem(){
        return this.#saveElem;
    }
    setSaveElem(saveElem){
        this.#saveElem = saveElem
    }
    getAdat(){
        return this.#adat;
    }
    setAdat(adat){
        this.#adat = adat
    }
    getInputElem(){
        return this.#inputElem
    }
    setInputElem(inputElem){
        this.#inputElem = inputElem
    }
    getEditElem(){
        return this.#editElem
    }
    setEditElem(editElem){
        this.#editElem = editElem
    }
    getDoneElem(){
        return this.#doneElem
    }
    setDoneElem(doneElem){
       this.#doneElem = doneElem
    }
    getUndoElem(){
        return this.#undoElem
    }
    setUndoElem(undoElem){
        this.#undoElem = undoElem
    }
}

export default AdminAdatModel