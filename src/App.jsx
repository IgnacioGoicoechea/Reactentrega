import NadBar from "./components/NavBar/"
import ItemListContainer from "./components/itemListContainer"
import "./main"

const App = () => {
 
  return (
    <>
      <NadBar/>
      <ItemListContainer greeting={"Bienvenido a Cif Computacion Mas de 25 años de experiencia"} />
      
    </>
  )
}

export default App
