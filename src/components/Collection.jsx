import React from 'react'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

export const Collection = () => {
    const {categoria} = useParams()
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


  return (
    <div>
        <h1>Collection</h1>
        {
            productos.map((p)=>(
                <div key={p.nombre}>
                    <h4>producto: {p.nombre}</h4>
                </div>
            ))
        }
    </div>
  )
}
