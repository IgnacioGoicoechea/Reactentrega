import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/itemListContainer"
import NadBar from "./components/NavBar/"
import Cart from "./components/Cart"

import CartContext from "./context/cartContext"

const App = () => {




  return (
    <BrowserRouter>

      <CartContext>
        <NadBar />
        <Routes>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </CartContext>
    </BrowserRouter>

  )

}
export default App
