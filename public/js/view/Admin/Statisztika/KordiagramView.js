class KordiagramView {
    constructor(tomb, cim) {
        this.diagramKeszit(tomb, cim);
    }

    diagramKeszit(tomb, cim) {
        var chart = anychart.pie();

        chart.maxWidth("100%");

        chart.title(cim);

        chart.data(tomb);
        chart.radius("25%")
        chart.container("statTarolo");
        chart.draw();
        
    }
}
export default KordiagramView;
