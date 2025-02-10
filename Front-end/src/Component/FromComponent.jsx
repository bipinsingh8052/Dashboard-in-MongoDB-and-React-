import React, { useState } from 'react'
import '../Css/From.css'
import axios from 'axios'
import {message} from 'antd'
import { useNavigate } from 'react-router-dom'
export default function FromComponent() {
  let[input,setinput]=useState({})
  const Handleinsert=(e)=>{
    let {name,value}=e.target;
    setinput(values=>({...values,[name]:value}))
  }
  message.success("data")
  const Checkit=()=>{
    console.log(input)
  }

const nav =useNavigate()
  const submitdata=(e)=>{
    e.preventDefault();
    let api ="http://localhost:9000/EmployeeData/insert"
    axios.post(api,input)
    .then(res=>{
      console.log(res.data.msg);
   
    })
    .catch(()=>{
      console.log("not work")
    })
    nav("/home")
  }
  return (
    <div style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center"
    }}>
      <form onSubmit={submitdata} >

        <h1>Insert the New Employee Details</h1>

     <div className="empname">
     <label htmlFor="name">Enter the name</label>
     <input type="text" name='Empname'  onChange={Handleinsert} />
     </div>
     <div className="empimg">
     <label htmlFor="name">Enter the Img Url</label>
     <input type="text" name='Empurl'  onChange={Handleinsert} />
     </div>

     <div className="empid">
      <label htmlFor="Empid"> Enter the Employee ID</label>
      <input type="text" name='Empid' onChange={Handleinsert} />
     </div>
     <div className="Emprole">
      <label htmlFor="emprole">Enter the Employee Role</label>
      <input type="text" name='emprole' onChange={Handleinsert} />
     </div>
     <div className="empsalary">
      <label htmlFor="salary">Enter the Salary</label>
      <input type="no" name='empsalary' onChange={Handleinsert}  />
     </div>
     <div className="empjoing">
      <label htmlFor="empjoing">Enter the Joing Date</label>
      <input type="date" name='empjoing' onChange={Handleinsert} />
     </div>
     <div className="empbtn">
      <button type='submit' onClick={Checkit}>Submit</button>
     </div>
      </form>
    </div>
  )
}
