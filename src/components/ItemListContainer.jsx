import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
  const { categoria } = useParams()
  const [productos, setProductos] = useState([])
  console.log(productos)

  useEffect(() => {
      const db = getFirestore()

      const itemsCollection = collection(db,`${categoria}`)
      getDocs(itemsCollection).then((snapshot)=>{
          const docs = snapshot.docs.map((doc) => doc.data())
          setProductos(docs)
      })
  },[])
    
  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
  return (
    <>
     {

    categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
     }
      

    </>
  )
}

export default ItemListContainer