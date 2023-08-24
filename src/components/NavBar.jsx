import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Box,
    Spacer,
} from '@chakra-ui/react'
import CartWidget from "./CartWidget";



const NadBar = () => {
    return (
        <div>
            <Flex>
                <Box p="4" >
                    <h3>Cif Computacion</h3>
                </Box>
                <Spacer/>
                <Box p="4">
                    <Menu>
                    <MenuButton>
                        Categoria
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Notebook</MenuItem>
                        <MenuItem>Teclado</MenuItem>
                        <MenuItem>Mouse</MenuItem>
                        <MenuItem>Auriculares</MenuItem>
                        <MenuItem>Todo</MenuItem>
                    </MenuList>
                </Menu>

                </Box>
               
                <Box p="4">
                <CartWidget/>
                </Box>
            </Flex>

        </div>
    )
}

export default NadBar