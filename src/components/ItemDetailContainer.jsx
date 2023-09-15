import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    const productos = [
        { id: 1, nombre: "EliteBook", descripcio: "Notebook Lenovo 16Gb ram 512gb SSD", precio: 250165, stock: 7, categoria: "Notebook" },
        { id: 2, nombre: "ProBook", descripcio: "Notebook Lenovo 8Gb ram 248Gb SSD", precio: 542315, stock: 6, categoria: "Notebook" },
        { id: 3, nombre: "ChromeBook", descripcio: "Notebook Hp co sistema operativo google", precio: 420156, stock: 8, categoria: "Notebook" },
        { id: 4, nombre: "VivoBook", descripcio: "Notebook Asus ideal para Diseño con placa integrada y 1Tb de almacenamiento", precio: 1231548, stock: 11, categoria: "Notebook" },
        { id: 5, nombre: "Kumara", descripcio: "Teclado mecanico 60%", precio: 45623, stock: 5, categoria: "Teclado" },
        { id: 6, nombre: "Tama", descripcio: "Teclado mecanico 80%", precio: 85348, stock: 6, categoria: "Teclado" },
        { id: 7, nombre: "G203", descripcio: "Mouse Logitech", precio: 28700, stock: 23, categoria: "Mouse" },
        { id: 8, nombre: "XD-110", descripcio: "Mouse Genius", precio: 5800, stock: 22, categoria: "Mouse" },
        { id: 9, nombre: "24 curvo", descripcio: "Monitor Curvo Gaming Samsung de 24 pulgadas", precio: 156000, stock: 3, categoria: "Monitor" },
        { id: 10, nombre: "24 plano", descripcio: "monitor philip de 24 pulgadas comun ", precio: 90000, stock: 7, categoria: "Monitor" }
      ]
  
      const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
          setTimeout(() => {
            resolve(productos)
          }, 2000)
        } else {
          reject(new Error("no hay datos"))
        }
      })
      getProductos
        .then((res) => {
        })
        .catch((error) => {
          console.log(error)
        })
    

  return (
    <>
    
    {
     <ItemDetail productos={productos}/>
    }
    </>
  )
}
export default ItemDetailContainer
