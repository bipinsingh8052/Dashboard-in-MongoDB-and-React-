import CardData from "./Component/CardData"
import FromComponent from "./Component/FromComponent"
import Home from "./Component/Home"
import Layout from "./Layout"
import Nvabruoo from "./pages/Nvabruoo"

import EditFrom from './Component/EditFrom'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route  index  element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="new" element={<FromComponent/>}/>
        <Route path="/edit/:id" element={<EditFrom/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
