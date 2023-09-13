import React from 'react'
import { Card, Image, CardBody, Stack, Text, Divider, Button, ButtonGroup, CardFooter, Heading } from '@chakra-ui/react'
export const Item = ({producto}) => {
  console.log(producto)
    return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={producto.image}  
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.title}</Heading>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
      Detalle
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}
export default Item