import AdminController from "./controller/Admin/AdminController.js";
import CSVController from "./controller/Admin/CSVController.js";
import StatisztikaController from "./controller/Admin/StatisztikaController.js";

$(function(){
    new AdminController();
    new CSVController();
    new StatisztikaController();
})