import AdminController from "./controller/Admin/AdminController.js";
import PublicController from "./controller/Public/PublicController.js";

$(function(){
    console.log("main.js")
    new AdminController();
    new PublicController();
})