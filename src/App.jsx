import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/itemListContainer"
import NadBar from "./components/NavBar/"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"

import CartContext from "./context/cartContext"

const App = () => {




  return (
    
    <CartContext>
     <BrowserRouter>
  
         <NadBar />
         <Routes>
         <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
           <Route exact path='/cart' element={<Cart />} />
           <Route exact path='/inicio' element={<ItemListContainer />} />
           <Route path='/categoria/:categoria' element={<ItemListContainer />} />
           <Route exact path='/item/:id' element={<ItemDetailContainer />} />
         </Routes>
       {/* <Cart/> */}
     </BrowserRouter>
       </CartContext>
  )

}
export default App
