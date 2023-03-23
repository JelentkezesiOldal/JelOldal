import CSVAdatModel from "../../model/Admin/CSVAdatModel.js";
import JelentkezokView from "../../view/Admin/Jelentkezok/JelentkezokView.js";

class CSVController{
    #csvadatmodel;
    constructor(){
        const csvadatmodel= new CSVAdatModel(tomb);
        
        $(window).on("csv", (event) => {
            console.log(event.detail)
            //new JelentkezokView(tomb, szuloElem);
            exportCSVFile(csvadatmodel.headers, csvadatmodel.itemsFormatted, csvadatmodel.fileTitle);
        });
    }
    exportCSVFile(headers,fileTitle, ConvertToCSV) {
          
        if (headers) {
            items.unshift(headers);
        }
    
        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
        var csv = ConvertToCSV(jsonObject);
    
        var exportedFilenmae = fileTitle + ".csv" || "export.csv";
        var byteOrderMark = "\ufeff";
        var blob = new Blob([byteOrderMark, csv], 
            { type: "text/csv;charset=UTF-8;" }
            );
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, exportedFilenmae);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) {
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
}

export default CSVController;