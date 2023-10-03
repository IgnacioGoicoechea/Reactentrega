import React from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'

const ItemCart = ({producto}) => {
    const {quitarDelCart} = useContext(CartContext)
  return (
    <div className='itemCart'>
        <img src={producto.imagen} alt={producto.nombre} className='imgCart'/>
        <div>
            <h3>{producto.nombre}</h3>
            <h4>Cantidad:{producto.quantity}</h4>
            <h4>${producto.precio} c/u</h4>
            <h4>Subtotal: ${producto.quantity * producto.precio}</h4>
            <Button onClick={() => quitarDelCart(producto.id)} className='eliminarBtn'>Eliminar</Button>

        </div>
    </div>
  )
}

export default ItemCart