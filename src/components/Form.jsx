import React from "react";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const handelSubmit = (e) => {
    e.preventDefault();
    nombre === ""
      ? alert("Campo de nombre Vacio")
      : alert(`Gracias por su compra ${nombre}`);
    email === ""
      ? alert("Ingrese correo para comprar")
      : alert(`Factura enviada a ${email}`);

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    nombre,
    email,
  };

  const ordersCollection = collection(db, "orden");

  return (
    <>
        <form onSubmit={handelSubmit}>
    <div className="formulario">
      <FormControl onSubmit={handelSubmit}>
        <FormLabel>Nombre</FormLabel>
        <Input
          placeholder="Nombre"
          type="text"
          onChange={(e) => setNombre(e.target.value)}
        />
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          />

        <Button colorScheme="orange" className="btnComprar" type="submit">
          Realizar Compra
        </Button>
      </FormControl>
      <div>Tu Id es: {orderId}</div>
    </div>
    </form>
          </>
  );
};

export default Form;