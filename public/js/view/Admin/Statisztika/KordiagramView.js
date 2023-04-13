class KordiagramView {
    constructor(tomb, cim) {
        this.diagramKeszit(tomb, cim)
       
    }
    diagramKeszit(tomb, cim){
         // create the chart
        var chart = anychart.pie()
        chart.maxWidth('100%');
        // set the chart title
        chart.title(cim);
        

        // add the data
        chart.data(tomb);

        // display the chart in the container
        chart.container('statTarolo')
        chart.draw();
    }
    
}
export default KordiagramView;
