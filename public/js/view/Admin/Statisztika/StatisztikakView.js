import AdminAdatModel from "../../../model/Admin/AdminAdatModel.js";
import StatisztikaView from "./StatisztikaView.js";

class StatisztikakView {
    #tomb;
    constructor(tomb, szuloElem) {
        this.#tomb = tomb;
        console.log(tomb)
        szuloElem.html(`
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="tab1" data-toggle="pill" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Összes jelentkező</a>
            <a class="nav-link" id="tab2" data-toggle="pill" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Profile</a>
            <a class="nav-link" id="tab3" data-toggle="pill" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Messages</a>
            <a class="nav-link" id="tab4" data-toggle="pill" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Settings</a>
        </div>
        <div id="container"></div>
        `);
        this.divElem = szuloElem.children('div:last-child');
        this.tab1Elem = $(`#tab1`);
        
        //ez működött, hibával
        this.tab1Elem.on("click",()=>{
            this.kattintastrigger("tab1");
            // const token = $(`meta[name="csrf-token"]`).attr("content");
            // const adminadatmodel = new AdminAdatModel(token);
            // adminadatmodel.adatBe("/admin/statOsszesJelentkezo", event.detail);
            new StatisztikaView(tomb,this.divElem);
        })
    }
    kattintastrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.tomb });
        window.dispatchEvent(esemeny);
    }
    
}
export default StatisztikakView;
