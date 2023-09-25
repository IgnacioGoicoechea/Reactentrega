import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'

const cart = [1]

const Cart = () => {
  return (

    <>
      <div>Mi carrito

        {cart.length > 0 ?
          <Form />
          :
          <Link to={"/"}>
            <button>Regresar a la pantalla principal</button>
          </Link>
        }
      </div>
    </>
  )
}
export default Cart