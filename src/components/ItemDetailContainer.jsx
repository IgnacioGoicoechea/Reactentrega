import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    const getProducts = async() =>{
        const response = await fetch ("https://fakestoreapi.com/products")
        const data = await response.json()

        return data
    }
    //estado inicial del array
    const [product, setProduct] = useState ([]);
    //promesa para setearle a product los que venga de la api
    useEffect(()=> {
        getProducts().then((product)=> setProduct(product))
    },[])


    const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)

//   return (
//     <>
    
//     {
//         product.map((p)=>{
//             return(
//                 <ItemDetail product={p}/>
//             )
//         })
//     }
//     </>
//   )



}
export default ItemDetailContainer
