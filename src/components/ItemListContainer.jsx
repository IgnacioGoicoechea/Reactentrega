import React from 'react'
import ItemCount from './ItemCount'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';



const ItemListContainer = ({ greeting }) => {

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json()
    console.log(data)

    return data
  };
  const [products, setProduct] = useState([])
  console.log(products)

  useEffect(() => {
    getProducts().then((products) => setProduct(products))
  }, [])


  return (
    <>
      <div className='fondo'>
        <h1>{greeting}</h1>
      </div>
      <ItemCount />
      <ItemList products={products}/>

    </>
  )
}

export default ItemListContainer