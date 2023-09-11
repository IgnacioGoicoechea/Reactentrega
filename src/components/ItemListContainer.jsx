import React from 'react'
import ItemCount from './ItemCount'
import { resolveBaseUrl } from 'vite';


const ItemListContainer = ({greeting}) => {

  let producto = [
    {id: 1, nombre: "producto a", descripcion: "descripcion de producto a", precio: 1000},
    {id: 2, nombre: "producto d", descripcion: "descripcion de producto b", precio: 1500},
    {id: 3, nombre: "producto c", descripcion: "descripcion de producto c", precio: 2000}
];

const mostrarProductos = new Promise ((resolve, reject) => {
  if (producto.length > 0) {
    setTimeout(()=> {
      resolve(producto)
    }, 5000)
  } else {
    reject("No hay productos")
  } 
})

mostrarProductos.then((resultado) => {
  console.log(resultado)
}).catch((error) => {
  console.log(error)
})


  
  return (
    <>
    <div className='fondo'>
        <h1>{greeting}</h1> 
    </div>
    <ItemCount/>
    {
      producto.map((p)=> {
        return(
          <div>
            <h1>Nombre{p.nombre}</h1>
            <h3>Descripcion{p.descripcion}</h3>
            <p>${p.precio}</p>
          </div>
        )
      })
    }

    </>
  )
}

export default ItemListContainer