import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}){
  const[cart, setCart] = useState([])

  const addToCart = productos => {
    setCart([...cart, productos])
  }
  const clearCart = () => {
    setCart([])
  } 
  
  return(
    <CartContext.Provider value={{cart, addToCart, clearCart}}>
    {children}
  </CartContext.Provider>
)
}