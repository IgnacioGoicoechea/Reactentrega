import React from 'react'

export const Document = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState ([])
    console.log(producto)
  
    useEffect(()=> {
      const db = getFirestore()
  
      const oneItem= doc(db,"productos",`${id}`)
      getDoc(oneItem).then((snapshot) => {
        if(snapshot.exists()){
          const docs = snapshot.data()
          setProducto(docs)
        }
      })
    },[])
  return (
    <div>
    <h1>Document</h1>
    {
        <div>
            <h4>Producto: {producto.nombre}</h4>
        </div>
    }

    </div>
  )
}
