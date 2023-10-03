import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'


export const ItemDetail = ({ productos }) => {
  



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
        {/* <ItemCount productos={productos} /> */}
        </div>

      </div>
      

    </div>

   
    </>)
}
