import React from 'react'
import ItemCount from './ItemCount'
import { Stack,CardBody,Heading,Text,CardFooter, Button,Card,Image } from '@chakra-ui/react'

export const ItemDetail = ({product}) => {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src= {product.image}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{product.title}</Heading>

      <Text py='2'>
        {product.description}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Comprar
      </Button>
      <ItemCount/>
    </CardFooter>
  </Stack>
</Card>
  )
}
