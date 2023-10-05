import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Loading } from './Loading';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null); // Cambié el estado a un solo producto

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, 'productos', `${id}`);
    
    getDoc(oneItem)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productoData = snapshot.data();
          setProducto(productoData); // Establecer el producto directamente en el estado
        }
      })
      .catch((error) => {
        console.error('Error obteniendo el producto:', error);
      });
  }, [id]); // Agregué id como dependencia para que se actualice cuando cambia la ruta

  return (
    <>
      <div>
        {producto ? (
          <ItemDetail producto={producto} />
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
