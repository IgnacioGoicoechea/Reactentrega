import React, { useContext } from 'react'
import ItemCount from './ItemCount'

import { useParams } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

export const ItemDetail = ({ productos }) => {
  console.log(productos)
  const { addItem } = useContext(CartContext);
  function handleAddItem(quantity) {
    addItem(productos[0], quantity)
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
        <ItemCount handleAdd={handleAddItem} />
        </div>

      </div>
      <div className='añadir'>

      </div>

    </div>

   
    </>)
}
