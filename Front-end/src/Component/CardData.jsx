import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Css/Card.css'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Store from '../Store';

export default function CardData() {
  let[allData,setAllData]=useState([])



  // let [nowsearch,setnow_search]=useReducer(myReducer,true)

  
  // reducer
  // const myReducer=(state,actions)=>{
  //   switch(actions){
  //     case "not":
  //     return state=false;

  //     case "yes":
  //       return state=true;
  //       default:
  //         return state;

  //   }

  // }
  // reducer
  const loading=()=>{
    let api ="http://localhost:9000/EmployeeData/home"
    axios.get(api).then(res=>{
      console.log(res.data);
      setAllData(res.data)
    })
    .catch(()=>{
      console.log("fetch data error")
    })
  }

  // deleted
  const myDeleted=(id)=>{
    let api="http://localhost:9000/EmployeeData/delete"
    axios.post(api,{id:id})
    .then(res=>{console.log(res.data.msg)})
    .catch(()=>{
      console.log("not delted error")
    })
    console.log(id)
    loading()
  }
  // deleted


  // edit
  let nav=useNavigate()
  const myedit=(id)=>{
    console.log(id)
    nav(`/edit/${id}`)

  } 
  // edit
  useEffect(()=>{
    loading();
  },[])
  return (

    <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
      
      {
        allData.map((e,index)=>{return(
          <Card style={{ width: '18rem',  margin:'10px', padding:"5tpx"}} key={index}>
      <Card.Img variant="top" src={e.Empurl} />
      <Card.Body>
       
        <Card.Text>
          <div className="name">
            <h5>Name </h5>
            <h6>{e.Empname}</h6>
          </div>
          <div className="employeeid">
            <h5>Employee ID </h5>
            <h6>{e.Empid}</h6>
          </div>
          <div className="Role">
            <h5>Employee Work </h5>
            <h6>{e.emprole}</h6>
          </div>

          <div className="Salary">
            <h5>Employee Salary</h5>
            <p>{e.empsalary}</p>
          </div>
          <div className="joing">
            <h5>Joining Date </h5>
            <h6>{e.empjoing}</h6>
          </div>
        </Card.Text>
        <div className="btnAll">
        <button className='btnfirst' onClick={()=>{myedit(e._id)}}><FaUserEdit /></button>
        <button className='btnsecond' onClick={()=>{myDeleted(e._id)}}><RiDeleteBin5Line />
        </button>
        </div>
      </Card.Body>
    </Card>
        )})
      }
    </div>
  )
}
