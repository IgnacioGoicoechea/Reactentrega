import React from 'react'
import { CartContext } from '../context/cartContext' 
import { Button, Image} from '@chakra-ui/react'
import { useContext } from 'react'

const ItemCart = ({item}) => {
    const {quitarDelCart, quitarUnidad} = useContext(CartContext)
  return (
    <div className='itemcart'>
      <Image className='imagen-carrito' src={item.imagen1} alt={item.nombre} s/>
        <div className='recuadro-carrito'> 
            <h2>{item.nombre}</h2>
            <h2>Cantidad:{item.quantity}</h2>
            <h2>${item.precio} c/u</h2>
            <h2>Subtotal: ${item.quantity * item.precio}</h2>
            <Button onClick={() => quitarDelCart(item.id)} className='eliminarBtn'>Eliminar</Button>

        </div>
    </div>
  )
}

export default ItemCart