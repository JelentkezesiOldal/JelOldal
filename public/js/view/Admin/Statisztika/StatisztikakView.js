import AdminAdatModel from "../../../model/Admin/AdminAdatModel.js";
import KordiagramView from "./KordiagramView.js";

class StatisztikakView {
    #tomb;
    constructor(tomb, szuloElem) {
        this.#tomb = tomb;
        console.log(tomb)
        szuloElem.html(`
        <aside>
        <div class="nav flex-column nav-pills" id="stat-nav" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="tab1" data-toggle="pill"  role="tab" aria-controls="tab1" aria-selected="true">Összes jelentkező</a>
            <a class="nav-link" id="tab2" data-toggle="pill" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Archivált jelentkezők</a>
            <a class="nav-link" id="tab3" data-toggle="pill" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Messages</a>
            <a class="nav-link" id="tab4" data-toggle="pill" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Settings</a>
        </div>
        <div id="statTarolo"></div>
        </aside>
        `);
        this.divElem = szuloElem.children('div:last-child');
        this.asideElem = this.divElem.children('aside:last-child')
        this.tab1Elem = $(`#tab1`);
        this.tab2Elem = $(`#tab2`);
        this.tab3Elem = $(`#tab3`);

        this.tab1Elem.on("click",()=>{
            //this.tabTiltas();
            this.kattintastrigger("tab1");
            $("#statTarolo").empty()
            //new KordiagramView(tomb, "Összes jelentkező szakokra bontva");
            
        })
        this.tab2Elem.on("click",()=>{
            //this.tabTiltas();
            this.kattintastrigger("tab2");
            $("#statTarolo").empty()
            //new KordiagramView(tomb, "Összes jelentkező szakokra bontva");
            
        })



 
        
    }

    // tabTiltas(){
    //     const tabTomb= ["#tab1", "#tab2","#tab3","#tab4"]

    //     tabTomb.forEach(elem => {
    //         if ($(elem).selected) {
    //             $(elem).removeAttribute("href")
    //         }
    //     });
    // }
    kattintastrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.tomb });
        window.dispatchEvent(esemeny);
    }
    
}
export default StatisztikakView;
