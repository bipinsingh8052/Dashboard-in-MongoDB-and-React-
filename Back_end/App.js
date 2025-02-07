const express =require("express");
const app =express();
const monogoose =require("mongoose");
const bodyParser= require("body-parser");
const cors =require("cors")
// const Rout= require("");


app.use(cors())



monogoose.connect("")
.then(()=>{
    console.log("Connected it mongoose");
})
.catch(()=>{
    console.log("Mongoose is not connected !!!")
})


app.listen(9000,()=>{
    console.log("Server is runing on 9000 port")
})