import AdminAdatModel from "../../model/Admin/AdminAdatModel.js";

class AdminController{
    constructor(){
        console.log("AdminController")
        const adminadatmodel = new AdminAdatModel();
    }
}

export default AdminController