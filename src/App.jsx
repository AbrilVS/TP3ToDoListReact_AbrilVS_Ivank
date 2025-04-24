import { useState } from "react";
import { Ingreso } from "./Ingreso";
import Listado from "./Listado"
import { Boton } from "./Boton";

function App() {
  const [tareas,setTareas] = useState([]);

  return (
    <>
      <div className='container'>
        <Ingreso setTareas={setTareas} tareas={tareas} />
        <Listado listado={tareas} setTareas={setTareas} />
        <Boton listado={tareas} />
      </div>
     
    </>  )
}

export default App
