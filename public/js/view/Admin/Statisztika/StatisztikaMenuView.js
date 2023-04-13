class StatisztikaMenuView{
    constructor(szuloElem){
        szuloElem.html(`
        <aside>
        <div class="nav flex-column nav-pills" id="stat-nav" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="tab1" data-toggle="pill"  role="tab" aria-controls="tab1" aria-selected="true" >Összes jelentkező</a>
            <a class="nav-link" id="tab2" data-toggle="pill" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Profile</a>
            <a class="nav-link" id="tab3" data-toggle="pill" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Messages</a>
            <a class="nav-link" id="tab4" data-toggle="pill" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Settings</a>
        </div>
        
        </aside>
        `);
        
        $("#tab1").on("click", () => {
            this.kattintastrigger("tab1")
        });
        
    }
    kattintastrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.tomb });
        window.dispatchEvent(esemeny);
    }
}

export default StatisztikaMenuView;