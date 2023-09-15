import React from 'react'
import { Card, Image, CardBody, Stack, Text, Divider, Button, ButtonGroup, CardFooter, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Item = ({ p }) => {
  console.log()
  return (
    <div >
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={p.imagen}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{p.nombre}</Heading>

          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                <Link to={`/item/${p.id}`}>Detalle</Link>
              </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}
export default Item