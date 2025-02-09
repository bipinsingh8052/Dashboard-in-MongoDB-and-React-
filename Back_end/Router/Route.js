const express=require("express");
const route =express.Router();
const controllerEmp =require("../Controller/controller")
route.get("/home",controllerEmp.HomePage)

route.post("/insert" ,controllerEmp.InsertPage)
route.post("/delete" ,controllerEmp.DeletePage)
module.exports=route;

