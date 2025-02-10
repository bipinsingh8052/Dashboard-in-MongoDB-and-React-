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


const SearchPage=async(req,res)=>{
    // console.log(req.body)
    const{ name}=req.body;
    const data =await ModulEmp.find({Empname:name})
    // const newd
    console.log(data)
        res.send(data);
  
    // .catch(()=>{
    //     res.send({msg:"Not Found"})
    // })
    
}



const EditSearch=async(req,res)=>{
    // console.log(req.body);
    const { id}=req.body
    const data= await ModulEmp.findById(id);
    res.send(data)
}
const EditUpdate=async(req,res)=>{
    console.log(req.body);
    const { _id}=req.body;
    const data= await ModulEmp.findByIdAndUpdate(_id,req.body)
    res.send({msg:"Employee Detaile is Updated..."})
}
module.exports={
    HomePage,
    InsertPage,
    DeletePage,
    SearchPage,
    EditSearch,
    EditUpdate
}