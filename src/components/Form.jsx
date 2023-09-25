import { Alert } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idPurchase, setIdPurchase] = useState("")




    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === ""? alert ("campo nombre vacio"): alert(`Bienvenido  ${nombre}`)
        email === ""? alert ("campo email vacio"): alert(`registrado con el email, ${email}`)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre'onChange={(e) => setNombre(e.target.value)}/>
        <input type="email" placeholder='Email'onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit'> enviar</button>

    </form>

    <h3>Id de tu compra: {idPurchase}</h3>
    </>
  )
}

export default Form