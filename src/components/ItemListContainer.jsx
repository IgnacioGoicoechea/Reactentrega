import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Loading from './Loading';




const ItemListContainer = () => {
 const { categoria } = useParams()
  const [productos, setProductos] = useState([])
  console.log(productos)

  useEffect(() => {
      const db = getFirestore()

      const itemsCollection = collection(db,`productos`)
      getDocs(itemsCollection).then((snapshot)=>{
          const docs = snapshot.docs.map((doc) => 
           ({
            ...doc.data(), id: doc.id
        }))
          setProductos(docs)
      })
  },[])
    
  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
  return (
    <>
     {filteredProducts.length > 0 
     ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} /> 
     }
      

    </>
  )
}

export default ItemListContainer