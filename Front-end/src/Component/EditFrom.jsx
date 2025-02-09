import React, { useState } from 'react'
import '../Css/From.css'
export default function FromComponent() {
  let[input,setinput]=useState({})
  const Handleupdate=(e)=>{
    let {name,value}=e.target;
    setinput(values=>({...values,[name]:value}))
  }


  const submitdata=(e)=>{
    e.preventDefault();
  }
  return (
    <div style={{backgroundColor:"red", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"
    }}>
      <form onSubmit={submitdata} >

        <h1>Update Employee Details</h1>

     <div className="empname">
     <label htmlFor="name">Enter the name</label>
     <input type="text" name='Empname'  onChange={Handleupdate} />
     </div>
     <div className="empimg">
     <label htmlFor="name">Enter the Img Url</label>
     <input type="text" name='Empurl'  onChange={Handleupdate} />
     </div>
     <div className="empid">
      <label htmlFor="Empid"> Enter the Employee ID</label>
      <input type="text" name='Empid' onChange={Handleupdate} />
     </div>
     <div className="Emprole">
      <label htmlFor="emprole">Enter the Employee Role</label>
      <input type="text" name='emprole' onChange={Handleupdate} />
     </div>
     <div className="empsalary">
      <label htmlFor="salary">Enter the Salary</label>
      <input type="no" name='empsalary' onChange={Handleupdate}  />
     </div>
     <div className="empjoing">
      <label htmlFor="empjoing">Enter the Joing Date</label>
      <input type="date" name='empjoing' onChange={Handleupdate} />
     </div>
     <div className="empbtn">
      <button type='submit'>Submit</button>
     </div>
      </form>
    </div>
  )
}
