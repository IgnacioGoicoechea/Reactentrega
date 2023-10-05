import React from "react"
import Item  from "./Item"
import Loading from "./Loading"

const ItemList = ({productos}) => {
    return (
        <div className="contenedor" >
              {
        Loading ? <Item productos={productos}/> : <Loading/>
      }
        </div>
    )

}
export default ItemList