
import { IoSearch } from "react-icons/io5";
import '../Css/Navbar.css'
import { Link } from 'react-router-dom';
export default function Nvabruoo() {
  return (
   <>

   <nav className='navbartodo navbarto'>
      <h1>Em-Ds</h1>
      <div className="line lineto"></div>
      <ul>
        <li className='searchbar searchbarto'> <input type="text" placeholder='Search it for Name..' /> <span> <IoSearch /></span> </li>
        <li className='home hometo'> <Link  to="/home">Home</Link></li>
       <li className='new newto'><Link to="/new">Add New </Link></li>

      </ul>
   </nav>
   </>

  )
}
