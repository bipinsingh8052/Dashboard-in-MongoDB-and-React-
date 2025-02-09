const ModulEmp = require("../model/model")
const HomePage =async(req,res)=>{
    const data =await ModulEmp.find();
    res.send(data);
}
const InsertPage=async(req,res)=>{
    console.log(req.body);
    const {
        Empname,
        Empid,
        Empurl,
        emprole,
        empsalary,
        empjoing
      }=req.body

      const data =await ModulEmp.create({Empid,Empname,Empurl,empjoing,empsalary,emprole
      })
    res.send({msg:"Inserted the data Succefully"})
}

const DeletePage=async(req,res)=>{
    // console.log(req.body)
    const { id}=req.body;
    await ModulEmp.findByIdAndDelete(id);
    res.send({msg:"Deleted Employee Details.."})
}

const updatepage=async(req,res)=>{
    res.send("update")
}
const searchPage=async(req,res)=>{
    res.send("search");
}
module.exports={
    HomePage,
    InsertPage,
    DeletePage,
    updatepage,
    searchPage
}