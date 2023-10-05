import React from 'react'
import { useState } from 'react'
import { Button, Spacer } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext' 
const ItemCount = ({initial, stock, onAdd}) => {

const [contador, setContador] = useState (initial)


const sumarContador = () =>{
    if(contador <10){
        setContador(contador + 1)
    }
}

const restarContador = () => {
    if(contador > 1){
        setContador (contador - 1)
    }
}


return (
<>
    <div className = 'contador'>
    <Button id='botonsuma' colorScheme='blue' disabled={contador >= stock} onClick={sumarContador}>+</Button>
    <h4 className='numeroContador' >{contador}</h4> 
    <Button id='botonresta' colorScheme='red' disabled={contador < 1} onClick={restarContador}>-</Button>
    <Spacer/>
    <Button id='botonAlert' colorScheme='green' onClick={()=> onAdd(contador)}>Agregar a Carrito</Button>
    </div>
</>
)
}

export default ItemCount