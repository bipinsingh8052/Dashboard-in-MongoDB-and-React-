const mongoose =require("mongoose");
const schema = new mongoose.Schema({
    Empname:String,
    Empid:String,
    Empurl:String,
    emprole:String,
    empsalary:Number,
    empjoing:String
})

module.exports =mongoose.model("Employees",schema)