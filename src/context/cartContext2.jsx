import {useState, createContext} from 'react'



export const CartContext = createContext(
 { Cart : []}
)

const ShoppingCartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    
    const addItem = (item, quantity) => {
      if(!isInCar(item.id)){
        setCart(prev => [...prev, {...item, quantity}])
      } else {
        console.error('el producto ya fue agregado')
      }
    }

    const removeItem = (itemId) => {
      const cartUpdated = cart.filter(prod => prod.id !== itemId)
      setCart(cartUpdated)
    }

    const clearCart = () => {
      setCart ([])
    }
    const isInCart = (itemId) => {
      return cart.some(prod => prod.id === itemId)
    }
  
  return (
    <CartContext.Provider value={{cart, setCart, addItem, removeItem, clearCart, }}>
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider