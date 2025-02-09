import React, { useEffect, useState } from 'react'
import '../Css/From.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
export default function FromComponent() {
  let[input,setinput]=useState({})
  const Handleupdate=(e)=>{
    let {name,value}=e.target;
    setinput(values=>({...values,[name]:value}))
  }
  let {id}=useParams();
  console.log(id)

  let loading=()=>{
    let api="http://localhost:9000/EmployeeData/editSearch"
    axios.post(api,{id:id})
    .then(res=>{
        setinput(res.data)
    })

    .catch(()=>{
        console.log("error fetch")
    })
  }
const Checkit=()=>{
    
}

  const submitdata=(e)=>{
    e.preventDefault();
  }
  useEffect(()=>{
    loading()
  },[])
  return (
    <div style={{backgroundColor:"red", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"
    }}>
      <form onSubmit={submitdata} >

        <h1>Update Employee Details</h1>

     <div className="empname">
     <label htmlFor="name">Enter the name</label>
     <input type="text" name='Empname' value={input.Empname}  onChange={Handleupdate} />
     </div>
     <div className="empimg">
     <label htmlFor="name">Enter the Img Url</label>
     <input type="text" name='Empurl' value={input.Empurl}  onChange={Handleupdate} />
     </div>
     <div className="empid">
      <label htmlFor="Empid"> Enter the Employee ID</label>
      <input type="text" name='Empid' value={input.Empid} onChange={Handleupdate}  readOnly/>
     </div>
     <div className="Emprole">
      <label htmlFor="emprole">Enter the Employee Role</label>
      <input type="text" name='emprole' value={input.emprole} onChange={Handleupdate} />
     </div>
     <div className="empsalary">
      <label htmlFor="salary">Enter the Salary</label>
      <input type="no" name='empsalary' value={input.empsalary} onChange={Handleupdate}  />
     </div>
     <div className="empjoing">
      <label htmlFor="empjoing">Enter the Joing Date</label>
      <input type="date" name='empjoing' value={input.empjoing} onChange={Handleupdate} />
     </div>
     <div className="empbtn">
      <button type='submit' onClick={Checkit}>Submit</button>
     </div>
      </form>
    </div>
  )
}
