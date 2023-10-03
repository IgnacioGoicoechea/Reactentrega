import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { Button } from '@chakra-ui/react'

export const ItemDetail = ({ productos }) => {
  const {agregarAlCart} = useContext(CartContext)

  const [irAlCart, setIrAlCart] = useState(false)

  
  const onAdd = (quantity) => {
    setIrAlCart(true);
    agregarAlCart(productos, quantity);
  } 
  return (
    <>

    <div className='detelle-producto'>
      <div className='posicion-detalle'>
        <div>
          <img className='imagen-detalle' src={productos.imagen1} alt="" />
        </div>
        
        <div className='detalle-detalle'>
          <div className='espacio'>
            <h1>{productos.nombre}</h1>
          </div>
          <div className='espacio'>
            <p>{productos.descripcion}</p>
          </div> 
          <div className='precio espacio'>
            <h2>{productos.precio}</h2>
          </div>
      
        </div>
        {
            irAlCart ? <Link to='/cart'> <Button colorScheme="green">Terminar Compra</Button></Link> : <ItemCount initial={1} onAdd={onAdd} />
            }
      </div>
      

    </div>

   
    </>)
}
