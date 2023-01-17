class JelentkezesView{
    #elem;
    constructor(elem){
        this.#elem = elem;
        console.log("view")

        //gomb eseménykezelő
        this.elkuldElem= $(`#elkuld`);

        this.elkuldElem.on("click", ()=>{
            console.log("Elküld a View-ban")
            this.kattintastrigger("elkuld");
        })
        
    }
    
    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}

export default JelentkezesView;