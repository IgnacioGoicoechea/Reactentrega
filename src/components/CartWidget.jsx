import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext"; 
const CartWidget = () => {

    const {productosTotales} = useContext(CartContext);




  return (
    <>
      <div className="cartShop">
        <span >carrito</span>
        <span className="cartItems">{productosTotales()|| ''}</span>
      </div>
    </>
  );
  console.log(productosTotales)
};
export default CartWidget;