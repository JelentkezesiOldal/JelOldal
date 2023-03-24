import AdminController from "./controller/Admin/AdminController.js";
import CSVController from "./controller/Admin/CSVController.js";

$(function(){
    new AdminController();
    new CSVController();
})