const express =require("express");
const app =express();
const monogoose =require("mongoose");
const bodyParser= require("body-parser");
const cors =require("cors")
const Rout= require("./Router/Route");


app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

monogoose.connect("mongodb://127.0.0.1:27017/EmployeeDetails")
.then(()=>{
    console.log("Connected it mongoose");
})
.catch(()=>{
    console.log("Mongoose is not connected !!!")
})

app.use("/EmployeeData" ,Rout )

app.listen(9000,()=>{
    console.log("Server is runing on 9000 port")
})