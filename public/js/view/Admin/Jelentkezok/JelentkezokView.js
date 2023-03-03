import JelentkezoView from "./JelentkezoView.js";

class JelentkezokView {
    #tomb;

    constructor(tomb, szuloElem) {
        this.#tomb = tomb;
        szuloElem.html(`
        <div id="myModal" class="modalSajat">
            <div class="modal-contentSajat">
                <spam class="closeSajat">&times;</spam>    
            </div>
        </div>
        `);
        this.modalElem = szuloElem.children("div:last-child");
        this.tenylegmodalElem = this.modalElem.children("div:last-child");
        szuloElem.append(`
        <div>
            <button class="row float-left" id="csv">CSV-be ment</button>
        <div class="row float-end">
            <div class="col input-group">
                <input type="text" id="keres1" placeholder="Search">
            </div>
            <div class="col">
                <button id="kereses">Keres</button>
            </div>
        </div>
        </div>
        `);
        szuloElem.append(`
        <table id="jelTab" class="table table-hover">
            <thead>
                <tr>
                    <th>Dátum</th>
                    <th>OM azonosító</th>
                    <th>Név</th>
                    <th>E-mail</th>
                    <th>Telefonszám</th>
                </tr>    
            </thead>
            <tbody>
            
            </tbody>
        </table>`);
        /** */
        var headers = {
            // jelentkezo_id: "jelentkezo_id".replace(/,/g, ""), // remove commas to avoid errors
            datum: "Dátum",
            diak_azonosito: "OM azonosito",
            tanulo_neve: "Nev",
            email: "E-mail",
            telefonszam: "Telefonszam",
            adoszam: "Adószám",
            allando_lakcim: "Állandó lakcim",
            ertesitesi_cim: "Értesítési cím",
            anyja_neve: "Anyja neve",
            szuletesi_datum: "Születési dátum",
            szuletesi_hely: "Születési hely",
            szuleteskori_neve: "Születéskori neve",
            neme: "Neme",
            banszankszamlaszam: "Bankszámlaszám",
            erettsegi_bizonyitvany_szama: "Érettségi bizonyítvány száma",
            szakmai_bizonyitvany_szama: "Szakmai bizonyítvány száma",
            szemelyi_igazolvany_szam: "Személyi igazolvány száma",
            taj_szam: "Taj száma",
            megnevezes: "Szak megnevezés",
            hany_felev: "Hány félév",
        };
        var fileTitle = "jelentkezok";

        var itemsFormatted = [];
        tomb.forEach((item) => {
            itemsFormatted.push({
                // jelentkezo_id: item.jelentkezo_id.replace(/,/g, ""), // remove commas to avoid errors,
                datum: item.datum,
                diak_azonosito: item.diak_azonosito,
                tanulo_neve: item.tanulo_neve,
                email: item.email,
                telefonszam: item.telefonszam,
                adoszam: item.adoszam,
                allando_lakcim: item.allando_lakcim,
                ertesitesi_cim: item.ertesitesi_cim,
                anyja_neve: item.anyja_neve,
                szuletesi_datum: item.szuletesi_datum,
                szuletesi_hely: item.szuletesi_hely,
                szuleteskori_neve: item.szuleteskori_neve,
                neme: item.neme,
                banszankszamlaszam: item.banszankszamlaszam,
                erettsegi_bizonyitvany_szama: item.erettsegi_bizonyitvany_szama,
                szakmai_bizonyitvany_szama: item.szakmai_bizonyitvany_szama,
                szemelyi_igazolvany_szam: item.szemelyi_igazolvany_szam,
                taj_szam: item.taj_szam,
                megnevezes: item.megnevezes,
                hany_felev: item.hany_felev,
            });
        });
        /** */
        this.csvGomb = $("#csv");
        this.csvGomb.on("click", () => {
            // this.kattintasTrigger("keres");
            exportCSVFile(headers, itemsFormatted, fileTitle);
        });

        this.keresGomb = $("#kereses");
        this.keresGomb.on("click", () => {
            this.input = $("#keres1").val();
            console.log(this.input + " lécci új");
            this.kattintasTrigger("keresJ");
        });

        this.tableElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tableElem.children("tbody");
        tomb.forEach((adat) => {
            const adatom = new JelentkezoView(
                adat,
                this.tbodyElem,
                this.tenylegmodalElem
            );
        });
    }
    kattintasTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, { detail: this.input });
        window.dispatchEvent(esemeny);
    }
}

function ConvertToCSV(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "";

    for (var i = 0; i < array.length; i++) {
        var line = "";
        for (var index in array[i]) {
            if (line != "") line += ";";

            line += array[i][index];
        }

        str += line + "\r\n";
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);
    var csv = ConvertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + ".csv" || "export.csv";

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
            // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

export default JelentkezokView;
