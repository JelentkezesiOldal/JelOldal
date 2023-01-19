class PublicAdatModel{
    #tomb = [];
    #token;
    constructor(token){
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
                console.log(this.#tomb);
                myCallBack(this.#tomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }


        
    adatUj(vegpont, adat) {
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':this.token
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Újadat: ', data);
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default PublicAdatModel;