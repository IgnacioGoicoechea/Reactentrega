import {useState, createContext} from 'react'


export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const comision = "hola mundo"

/*   
  agregar elemento al carrito
  eliminar
  etc
  
  
  increment
  decrement
  onadd*/
  
  return (
    <CartContext.Provider value={{cart, setCart, comision}}>
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider