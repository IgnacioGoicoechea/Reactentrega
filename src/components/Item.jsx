import React from 'react'
import { Card, Image, CardBody, Stack, Text, Divider, Button, ButtonGroup, CardFooter, Heading } from '@chakra-ui/react'
export const Item = ({ p }) => {
  console.log()
  return (
    <div key={p.id}>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={p.image}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{p.title}</Heading>

          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to={"/iten/${p.id}"}>
              <Button variant='solid' colorScheme='blue'>
                Detalle
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}
export default Item