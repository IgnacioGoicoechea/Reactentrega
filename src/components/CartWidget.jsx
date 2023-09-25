import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex } from '@chakra-ui/react'
import "../main"

const CartWidget = () => {
  return (
    <div>
      <Flex>

        <Box p="4">
           <AddIcon/>
        </Box>
        <Divider/>
        <Box p="4">
          <p>
            {"contador"}
          </p>
        </Box>
      </Flex>
     
    </div>
  )
}

export default CartWidget