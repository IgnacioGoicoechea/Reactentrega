import Form from "./Form";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
const Cart = () => {
  const { cart, clearCart, precioTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div className="msjCarritoVacio">Su carrito esta vacio.</div>
        <div className="btnBackHome">
          <Link to={"/"}>
            <Button colorScheme="orange" className="btnBackHome">
              Regresar a catalogo
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="cart">
    <div className="cartCard">
      {cart.map((producto) => (
        <ItemCart key={producto.id} producto={producto} />
        ))}
        </div>
        <div className="limpiarBtn">
        <Button onClick={clearCart}>Limpiar Carrito</Button>
      </div>
        <div>
        <p className="precioTotal">Su Total es: ${precioTotal()}</p>
        </div>
      

      <Form />
    </div>
  );
};

export default Cart;