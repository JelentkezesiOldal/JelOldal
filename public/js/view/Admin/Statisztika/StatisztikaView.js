class StatisztikaView {
    constructor(tomb) {
        this.diagramKeszit(tomb)
       
    }
    diagramKeszit(tomb){
         // create the chart
        var chart = anychart.pie()
        chart.maxWidth('100%');
        // set the chart title
        chart.title("Összes jelentkező szakokra bontva");
        

        // add the data
        chart.data(tomb);

        // display the chart in the container
        chart.container('statTarolo')
        chart.draw();
    }
    
}
export default StatisztikaView;
