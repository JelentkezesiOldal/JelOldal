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
            console.log("Elküld a controllerben");
            this.vegpont = "/beiratkozo"
            console.log("adatmod elott", event.detail)
            beiratkozasmodel.adatModosit(this.vegpont, event.detail, urltoken);
            console.log(event.detail);
           /*  const mezok = [
                'tanulo_neve',
                'szuleteskori_neve',
                'anyja_neve',
                'szuletesi_datum',
                'szuletesi_hely',
                'email',
                'telefonszam',
                'allando_lakcim',
                'ertesitesi_cim',
                'neme',
                'diak_azonosito',
                'szemelyi_igazolvany_szam',
                'taj_szam',
                'adoszam',
                'erettsegi_bizonyitvany_szama',
                'szakmai_bizonyitvany_szama',
                'bankszamlaszam'
            ]; */
                if (!event.detail.tanulo_neve == "") {
                    location.replace("/beiratkozasfajl/" + urltoken);
                }
        });

    }

    BeiratkozasAdatok(tomb) {
        const szuloElem = $('main')
        console.log("Beiratkozas ADATOK:   ", tomb);
        new BeiratkozasokView(tomb, szuloElem);
    }
}
export default BeiratkozasController;