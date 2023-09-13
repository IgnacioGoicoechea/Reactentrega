import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NadBar from "./components/NavBar/"
import ItemListContainer from "./components/itemListContainer"

import Cart from "./components/Cart"
import Home from "./components/Home"
import Abaut from "./components/Abaut"

const App = () => {
 
  return (
    <BrowserRouter>
      <NadBar/>

      {/* <ItemListContainer greeting={"Bienvenido a Cif Computacion Mas de 25 años de experiencia"} /> */}
      {/* <ItemDetailContainer/> */}

      <Routes>
      
      <Route exact path='/' element={<ItemListContainer />}/>
      <Route exact path='/cart' element={<Cart />}/>
      <Route path='/category/:categoty' element={<ItemListContainer/>}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
      
      </Routes>
    </BrowserRouter>
  )

  }
export default App
