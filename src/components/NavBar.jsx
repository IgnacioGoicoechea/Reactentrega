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
import "../main"
import { Link } from "react-router-dom";



const NadBar = () => {
    return (
        <div className="nadbar">
            <Flex>
                <Box p="4" >
                    <Link to={"/"}>
                        <h3> Cif Computacion
                        </h3>
                    </Link>
                </Box>
                <Spacer />
                <Box p="4">
                    <Menu>
                        <MenuButton>
                            Categoria
                        </MenuButton>
                        <MenuList>
                            <MenuItem>jewelery</MenuItem>
                            <MenuItem>electronics</MenuItem>
                            <MenuItem>women's clothing</MenuItem>
                            <MenuItem>men's clothing</MenuItem>
                            <MenuItem>Todo</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>

            </Flex>

        </div>
    )
}

export default NadBar