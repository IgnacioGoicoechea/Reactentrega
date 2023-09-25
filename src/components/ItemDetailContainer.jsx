import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  //trae el producto seleccionado por id, muestra ese solo producto (sin necesidad de un filter)
 const { id } = useParams()
  const [productos, setProductos] = useState ([])

  useEffect(()=> {
    const db = getFirestore()
    const oneItem= doc(db,"productos",`${id}`)
    getDoc(oneItem).then((snapshot) => {
      if(snapshot.exists()){
        const docs = snapshot.data()
        setProductos(docs)
      }
    })
  }, [])
  console.log(productos)


  return (
    <>
    <div className='recuadro'>

    {
    <ItemDetail productos={productos}/>
   
    }
    </div>
    <div className='recuadro2'>
      <p>{productos.descripcion2}
        </p>
    </div>
    </>
  )
}
export default ItemDetailContainer
