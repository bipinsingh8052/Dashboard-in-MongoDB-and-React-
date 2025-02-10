import { useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Css/Card.css'
import axios from 'axios'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
export default function Search() {
    const nav =useNavigate()
    const location = useLocation();
    const searchResults = location.state?.results || [];
    // deleted
    const myDeleted=(id)=>{
        let api="http://localhost:9000/EmployeeData/delete"
        axios.post(api,{id:id})
        .then(res=>{console.log(res.data.msg)})
        .catch(()=>{
          console.log("not delted error")
        })
        console.log(id)
        nav("/home")
      }
      // deleted

      
  // edit
  const myedit=(id)=>{
    console.log(id)
    nav(`/edit/${id}`)

  } 
  // edit
    return (
      <div >
        <h2 style={{textAlign:"center", padding:"20px", backgroundClip:"red", width:"100%"}}>Search Results</h2>
        {searchResults.length > 0 ? (
          <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
            {searchResults.map((e, index) => (
                 <Card style={{ width: '18rem',  margin:'10px', padding:"5px"}} key={index}>
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
            ))}
          </div>
        ) : (
          <p>No Results Found</p>
        )}
      </div>
    );
}
