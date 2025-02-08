
import Nvabruoo from './pages/Nvabruoo'
import { Outlet } from 'react-router-dom'
import './index.css'
export default function Layout() {
  return (
    <div   className='layoutnav'>
     <Nvabruoo  className='Nvabruoo' />
     <main  className='layoutOutlet' style={{ height:"100vh", width:"80%", overflow:"scroll"
     }} >
        <Outlet/>
     </main>
    </div>
  )
}
