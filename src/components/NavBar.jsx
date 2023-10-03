import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Flex,
    Box,
    Spacer,
} from '@chakra-ui/react'
import CartWidget from "./CartWidget";
import "../main.css"
import { Link } from "react-router-dom";



const NadBar = () => {
    return (
        <div className="nadbar">
            <Flex>
                <Box p="4" >
                    <Link to={"/inicio"}>
                        <Image className="logo" src="https://firebasestorage.googleapis.com/v0/b/cif-computacion.appspot.com/o/Logo%20CIF%2001.png?alt=media&token=f9ed5af1-ed4b-4c22-80f9-ebd5601e44ec&_gl=1*1t2h78b*_ga*MTYzMDMyNjMyNS4xNjk1NTg2MDQy*_ga_CW55HF8NVT*MTY5NjI3NTA5My4xMC4xLjE2OTYyNzUxNDcuNi4wLjA."></Image>
                    </Link>
                </Box>
                <Spacer />
                <Box p="4">
                    <Menu>
                        <MenuButton>
                            Categoria
                        </MenuButton>
                        <MenuList>
                            <Link to={`/categoria/${"Notebook"}`}>
                                <MenuItem>
                                    Notebook
                                </MenuItem>
                            </Link>
                            <Link to={`/categoria/${"Mouse"}`}>
                                <MenuItem>
                                    Mouse
                                </MenuItem>
                            </Link>
                            <Link to={`/categoria/${"Monitor"}`}>
                                <MenuItem>
                                    Monitores
                                </MenuItem>
                            </Link>
                            <Link to={`/categoria/${"Teclado"}`}>
                                <MenuItem>
                                    Teclados
                                </MenuItem>
                            </Link>

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