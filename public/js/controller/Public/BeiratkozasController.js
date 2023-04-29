import PublicAdatModel from "../../model/Public/PublicAdatModel.js";
import BeiratkozasokView from "../../view/Public/Beiratkozas/BeiratkozasokView.js";

class BeiratkozasController {
    constructor() {
        console.log("BeiratkozasController");
        const token = $('meta[name="csrf-token"]').attr("content");

        const urltoken = $('#token').val();

        console.log('UrlToken: ', urltoken);
        const beiratkozasmodel = new PublicAdatModel(token);
        this.vegpont = "/show";
        beiratkozasmodel.BeiratkozasAdat(this.vegpont, this.BeiratkozasAdatok, urltoken);

        $(window).on("mentes", (event) => {

            beiratkozasmodel.adatModosit("/beiratkozo", event.detail, urltoken);


            const mezoNevek = [
                'tanulo_neve',
                'szuleteskori_neve',
                'anyja_neve',
                'szuletesi_hely',
                'email',
                'telefonszam',
                'allando_lakcim',
                'ertesitesi_cim',
                'neme',
                'szemelyi_igazolvany_szam',
                'taj_szam',
                'adoszam',
                'erettsegi_bizonyitvany_szama',
                'bankszamlaszam'
            ]
            mezoNevek.forEach(elem => {
                if (!event.detail[elem] == "null") {
                    location.replace("/beiratkozasfajl/" + urltoken);
                }

            });
        });



    }

    BeiratkozasAdatok(tomb) {
        const szuloElem = $('main')
        console.log("Beiratkozas ADATOK:   ", tomb);
        new BeiratkozasokView(tomb, szuloElem);
    }
}
export default BeiratkozasController;