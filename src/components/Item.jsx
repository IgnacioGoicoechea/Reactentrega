import React from 'react'
import {  Image, CardBody, Stack, Text, Divider, Button, ButtonGroup, CardFooter, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Item = ({ productos }) => {
  console.log()
  return (
    <>
    {productos.map((p) => (
      <div key={p.id}>

    <div className='producto' >
      <div>
        <Image src={p.imagen1}/>
      </div>
      <div className="capa">
        <Image src={p.imagen2}/>
      </div>
      <div className="nombre-producto">
        <p >
          {p.nombre}
        </p>
      </div>
      <div className="precio">
        <h2>$ {p.precio} </h2>
      </div>
          <Link to={`/item/${p.id}`}>
      <div className="espacio-boton">
        <button className="boton boton-agregar " >
            Detalle
        </button>
      </div>
          </Link>


    </div>
    </div>))}
      </>
  )
}

export default Item