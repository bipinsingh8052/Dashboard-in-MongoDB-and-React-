const express=require("express");
const route =express.Router();
const controllerEmp =require("../Controller/controller")
route.get("/home",controllerEmp.HomePage)

route.post("/insert" ,controllerEmp.InsertPage)
route.post("/delete" ,controllerEmp.DeletePage)
route.post("/editSearch",controllerEmp.EditSearch)
route.post("/editupdate",controllerEmp.EditUpdate)
route.post("/Search" ,controllerEmp.SearchPage)
module.exports=route;

