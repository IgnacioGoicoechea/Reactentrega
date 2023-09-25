import { Alert } from '@chakra-ui/react'
import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import Cart from './Cart'
import { CartContext } from '../context/cartContext'

export const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const db= getFirestore()



    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === ""? alert ("campo nombre vacio"): alert(`Bienvenido  ${nombre}`)
        email === ""? alert ("campo email vacio"): alert(`registrado con el email, ${email}`)

      addDoc(orderCollection, order).then(({id}) => setOrderId(id))

      // setCart([])
    }


    const order ={
      comprador:{
        nombre, email

      },
    
      
    }
    const orderCollection= collection(db, "order")

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre'onChange={(e) => setNombre(e.target.value)}/>
        <input type="email" placeholder='Email'onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit'> enviar</button>

    </form>

    <h3>Id de tu compra: {orderId}</h3>
    </>
  )
}

export default Form