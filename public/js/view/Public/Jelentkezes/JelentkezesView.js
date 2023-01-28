class JelentkezesView{
    #elem
    constructor(elem, szuloElem){
        this.#elem=elem;
        console.log("view")
        szuloElem.append(`
        <form method="post" name="jelentkezes" action="/ujJelentkezo">
        <label for="tanulo_neve">Név:</label>
        <input type="text" id="tanulo_neve" name="tanulo_neve"  requried>
        <label for="email">Email cím:</label>
        <input type="email" id="email" name="email"  requried>
        <label for="telefonszam">Telefonszám:</label>
        <input type="tel" id="telefonszam" name="telefonszam" requried>
        <button id="elkuld">Elküld</button>
        </form>
        `)
        this.sorElem = szuloElem.children("tr:last-child");
        //gomb eseménykezelő
        this.elkuldElem= $(`#elkuld`);

        this.elkuldElem.on("click", ()=>{
            console.log("Elküld a View-ban")
            this.kattintastrigger("elkuld");
        })
        
    }
    //pattern="[^\d+%*&@<>;?!]"
    //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

    //ide milyen detail kell
    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve, {detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}

export default JelentkezesView;