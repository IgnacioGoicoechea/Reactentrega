import React from "react"
import Item  from "./Item"

const ItemList = ({productos}) => {
    return (
        <div className="contenedor" key={productos.nombre}>
            {
                productos.map((p) => {
                    return(
                        <>
                           <Item p={p} key={p.id}
                          />
                        </>
                    )
                })
            }
        </div>
    )

}
export default ItemList