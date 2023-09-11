import { useState } from "react"
import React from 'react'


export const ItemCount = () => {
  const [producto, setProducto] = useState("Producto 1")
  const [contador, setContador] = useState(0)
  
  const restar = () => {
    setContador(contador - 1) 
  }

  console.log(producto)
    const onAdd = () =>{
      alert(contador)
    }

  return (
    <>
    <button onClick={restar}>-</button>
    <p>{contador}</p>
    <button onClick={() => setContador(contador + 1)}>+</button>
    <button onClick={() => setContador(0)}>Vaciar</button>
    <button onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount