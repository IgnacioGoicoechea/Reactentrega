import React from 'react'
import ItemCount from './ItemCount'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
  const { categoria } = useParams()
  console.log(categoria)
  const productos = [
    { id: 1,imagen:"hola", nombre: "EliteBook", descripcio: "Notebook Lenovo 16Gb ram 512gb SSD", precio: 250165, stock: 7, categoria:"notebook" },
    { id: 2,imagen:"chau", nombre: "ProBook", descripcio: "Notebook Lenovo 8Gb ram 248Gb SSD", precio: 542315, stock: 6, categoria:"notebook" },
    { id: 3,imagen:"juan", nombre: "ChromeBook", descripcio: "Notebook Hp co sistema operativo google", precio: 420156, stock: 8, categoria:"notebook" },
    { id: 4,imagen:"pedro", nombre: "VivoBook", descripcio: "Notebook Asus ideal para Diseño con placa integrada y 1Tb de almacenamiento", precio: 1231548, stock: 11, categoria:"notebook" },
    { id: 5,imagen:"pablo", nombre: "Kumara", descripcio: "Teclado mecanico 60%", precio: 45623, stock: 5, categoria:"teclado" },
    { id: 6,imagen:"juanito", nombre: "Tama", descripcio: "Teclado mecanico 80%", precio: 85348, stock: 6, categoria:"teclado" },
    { id: 7,imagen:"pedrito", nombre: "G203", descripcio: "Mouse Logitech", precio: 28700, stock: 23, categoria:"mouse" },
    { id: 8,imagen:"kaka" ,nombre: "XD-110", descripcio: "Mouse Genius", precio: 5800, stock: 22, categoria:"mouse" },
    { id: 9,imagen:"estela" ,nombre: "24 curvo", descripcio: "Monitor Curvo Gaming Samsung de 24 pulgadas", precio: 156000, stock: 3, categoria:"monitor" },
    { id: 10,imagen:"hola" ,nombre: "24 plano", descripcio: "monitor philip de 24 pulgadas comun ", precio: 90000, stock: 7, categoria:"monitor" }
  ]

    ;
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
  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
  return (
    <>
     {

    categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
     }
      

    </>
  )
}

export default ItemListContainer