class ArchivaltView {
    #elem;
    constructor(elem, szuloElem, modal) {
        this.#elem = elem;
        szuloElem.append(
            `<tr id="J${elem.jelentkezo_id}">
            <td data-label="#">${elem.jelentkezo_id}</td>
            <td data-label="Dátum ">${elem.datum}</td>
            <td data-label="OM azonosító">${elem.diak_azonosito}</td>
            <td data-label="Tanuló neve">${elem.tanulo_neve}</td>
            <td data-label="Megnevezés">${elem.megnevezes}</td>
        </tr>`
        );
        $("#J" + elem.jelentkezo_id).on("click", () => {
            console.log("J" + elem.jelentkezo_id + elem.inditott_id + " katt");
            $(".modalSajat").show();
            modal.append(`
            <div>
                <p>Szak: ${elem.megnevezes}</p>
                <p>Tanuló neve: ${elem.tanulo_neve}</p>
                <p>Születéskori neve: ${elem.szuleteskori_neve}</p>
                <p>Anyja neve: ${elem.anyja_neve}</p>
                <p>Születési dátum: ${elem.szuletesi_datum}</p>
                <p>Születési hely: ${elem.szuletesi_hely}</p>
                <p>E-mail címe: ${elem.email}</p>
                <p>Telefonszáma: ${elem.telefonszam}</p>
                <p>Értesítési cím: ${elem.ertesitesi_cim}</p>
                <p>Neme: ${elem.neme}</p>
                <p>OM azonosító: ${elem.diak_azonosito}</p>
                <p>Személyi igazolvány száma: ${elem.szemelyi_igazolvany_szam}</p>
                <p>Taj szám: ${elem.taj_szam}</p>
                <p>Adószám: ${elem.adoszam}</p>
                <p>Érettségi bizonyítvány száma: ${elem.erettsegi_bizonyitvany_szama}</p>
                <p>Szakmai bizonyítvány száma: ${elem.szakmai_bizonyitvany_szama}</p>
                <p>Bankszámlaszám: ${elem.bankszamlaszam}</p>
                <p>Státusz: ${elem.statusz}</p>
            </div>
            `);
        });
        $(".closeSajat").on("click", () => {
            $(".modalSajat").hide();
            $(".modal-contentSajat div").remove();
        });
    }
}

export default ArchivaltView;
