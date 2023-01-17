class AdminAdatModel{
    #adatok
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
}

export default AdminAdatModel