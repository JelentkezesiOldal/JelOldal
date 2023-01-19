class JelentkezesView{
    #nev;
    #email;
    #telszam;
    constructor( szuloElem){
        console.log("view")
        szuloElem.append(`<tr>
        <td><input type="text" id="tanulo_neve" name="tanulo_neve" requried></td>
        <td><input type="email" id="email" name="email" requried></td>
        <td><input type="tel" id="telefonszam" name="telefonszam" requried></td>
        <td><button id="elkuld">Elküld</button></td>
        </tr>
        `)
        this.sorElem = szuloElem.children("tr:last-child");
        //gomb eseménykezelő
        this.elkuldElem= $(`#elkuld`);

        this.elkuldElem.on("click", ()=>{
            console.log("Elküld a View-ban")
            this.kattintastrigger("elkuld");
        })
        
    }
    
    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve)
        window.dispatchEvent(esemeny);
    }
}

export default JelentkezesView;