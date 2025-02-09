
import { IoSearch } from "react-icons/io5";
import '../Css/Navbar.css'
import { Link } from 'react-router-dom';
import {  useState } from "react";
import axios from "axios"



export default function Nvabruoo() {
  let [search,set_Search]=useState("");
  
  let [search_Data,set_search_Data]=useState([]);
  const Search =()=>{
    console.log(search)
    let api ="http://localhost:9000/EmployeeData/Search";
    axios.post(api,{name:search}).then(res=>{
      // console.log(res.data);
      set_search_Data(res.data)
    })
    .catch(()=>{
      console.log("error")
    })
  }


  return (
   <>

   <nav className='navbartodo navbarto'>
      <h1>Em-Ds</h1>
      <div className="line lineto"></div>
      <ul>
        <li className='searchbar searchbarto'> <input type="text" placeholder='Search it for Name..' name="Empname" onChange={(e)=>{set_Search(e.target.value)}} /> <span onClick={Search}> <IoSearch /></span> </li>
        <li className='home hometo'> <Link  to="/home">Home</Link></li>
       <li className='new newto'><Link to="/new">Add New </Link></li>

      </ul>
   </nav>

  
 
   
   </>

  )
}

