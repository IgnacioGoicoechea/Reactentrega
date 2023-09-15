import React from 'react'
import ItemCount from './ItemCount'
import { Stack, CardBody, Heading, Text, CardFooter, Button, Card, Image } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export const ItemDetail = ({ productos }) => {
  const { id } = useParams()

  const filteredProducts = productos.filter((producto) => producto.id == id)


  return (
    <div>
      {filteredProducts.map((producto) => {
        return (
          <div key={producto.id}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={p.imagen}
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>{producto.nombre}</Heading>
                  <Text>
                    {p.categoria}
                  </Text>
                  <Text py='2'>
                    {producto.descripcion}
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant='solid' colorScheme='blue'>
                    Comprar
                  </Button>
                  <ItemCount />
                </CardFooter>
              </Stack>
            </Card>
          </div>

        )
      })
      }
    </div>)
}
