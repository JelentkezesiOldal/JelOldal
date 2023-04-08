class StatisztikaView {
    #szuloElem;
    constructor(tomb,szuloElem) {
        this.#szuloElem = szuloElem
        szuloElem.html(``);
        this.diagramKeszit(tomb)
       
    }
    diagramKeszit(tomb){
         // create the chart
        var chart = anychart.pie();
        // set the chart title
        chart.title("Összes jelentkező szakokra bontva");
        chart.maxWidth(1300);

        // add the data
        chart.data(tomb);

        // display the chart in the container
        chart.container('container')
        chart.draw();
    }
}
export default StatisztikaView;
