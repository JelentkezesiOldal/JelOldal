class KordiagramView {
    constructor(tomb, cim) {
        this.diagramKeszit(tomb, cim);
    }

    diagramKeszit(tomb, cim) {
        var chart = anychart.pie();

        var nincsAdat = chart.noData();

        nincsAdat.label({text: 'Nincs adat'});

        chart.title(cim);

        chart.data(tomb);
        chart.container("statTarolo");
        chart.draw();
        
    }
}
export default KordiagramView;
