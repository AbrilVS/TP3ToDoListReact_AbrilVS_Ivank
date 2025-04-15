import { useState } from "react";
import { Ingreso } from "./Ingreso";
import Listado from "./Listado"

function App() {
/*const list = [
  {id:1,nombre:"test"},
  {id:2,nombre:"test2"}
];*/

  const [tareas,setTareas] = useState([]);


  return (
    <>
      <div>
        <Ingreso setTareas={setTareas} tareas={tareas} />
        <Listado listado={tareas} />
      </div>
    </>
  )
}

export default App
