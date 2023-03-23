class CSVAdatModel {
    #headers;
    #fileTitle;
    #itemsFormatted =[];
    constructor(tomb) {
        this.#headers = {
            datum: "Dátum",
            diak_azonosito: "OM azonosító",
            tanulo_neve: "Név",
            email: "E-mail",
            telefonszam: "Telefonszám",
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
        this.#fileTitle = "jelentkezok";

        tomb.forEach((item) => {
            this.#itemsFormatted.push({
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

export default CSVAdatModel;
