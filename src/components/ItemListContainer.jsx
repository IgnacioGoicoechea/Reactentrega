import React from 'react'
import ItemCount from './ItemCount'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {
  const {category} = useParams()
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

const filteredProducts = products.filter((products)=> products.category === category)
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