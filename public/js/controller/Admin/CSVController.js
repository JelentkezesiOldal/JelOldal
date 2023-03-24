import CSVAdatModel from "../../model/Admin/CSVAdatModel.js";

class CSVController{
    csvadatmodel;
    constructor(){
        this.csvadatmodel= new CSVAdatModel();
        $(window).on("csv", (event) => {
            console.log(event.detail)
            this.exportCSVFile(this.csvadatmodel.getHeadersElem(), this.csvadatmodel.getfileTitle(), this.csvadatmodel.ConvertToCSV(event.detail), this.csvadatmodel.sorok(event.detail));
            location.reload();
        });
    }
    exportCSVFile(headers,fileTitle, ConvertToCSV, items) {
        console.log(items)
        if (headers) {
            items.unshift(headers);
        }
    
        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
        var csv = this.csvadatmodel.ConvertToCSV(jsonObject);
    
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