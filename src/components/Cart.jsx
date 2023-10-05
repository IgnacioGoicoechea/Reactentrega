import Form from "./Form";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ItemCart from "./ItemCart";
const Cart = () => {
  const { cart, clearCart, precioTotal, totalQuantity } = useContext(CartContext);



  if (cart.length === 0) {
    return (
      <>
        <div className="espacio-vacio login-box">
          <div className="carritovacio">
            <h2>
              Su carrito esta vacio.
            </h2>
            <div className="btnBackHome">
              <Link to={"/inicio"}>
                <Button colorScheme="blue" className="btnBackHome">
                  Regresar a catalogo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else

    return (
      <>
      
        {cart.map((item) => (
          <ItemCart key={item.id} item={item} />
          ))}

          <Link to={'/form'}>

        <Button className="boton-carrito2" >Finalizar Compra</Button>
          </Link>

        <Button className="boton-carrito2" onClick={() => clearCart}>Vaciar Carrito</Button>
        <p className="preciootal">Su Total es: ${precioTotal()}</p>

          </>



    );
};

export default Cart ;
