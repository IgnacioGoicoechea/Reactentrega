import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/itemListContainer"
import NadBar from "./components/NavBar/"
import Cart from "./components/Cart"

const App = () => {
 
  return (
    <BrowserRouter>
      <NadBar/>

      <Routes>
      <Route exact path='/cart' element={<Cart />}/>
      <Route exact path='/' element={<ItemListContainer />}/>
      <Route path='/category/:categoty' element={<ItemListContainer/>}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )

  }
export default App
