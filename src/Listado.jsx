import React from 'react'
import { Tarea } from './Tarea'

export default function Listado({listado,setTareas}) {
    const marcarTarea = (id) =>{
        console.log({id});
        const encontrado = listado.find((element) => element.id == id);
        encontrado.esTachado=true;
        encontrado.fin=Date.now()
        
        let auxListado = [...listado];
        console.log(auxListado[id].esTachado)
        auxListado[id].esTachado = true;
        setTareas(auxListado)
    }
    
    const borrar=(id)=>{
      console.log(id)
      const result = listado.filter((item) => item.id =id);
      // listado.splice(result, 1)
      console.log(listado.splice(result, 1))
      
      let auxListado = [...listado];
      auxListado.splice(result, 1)
      setTareas(auxListado)
    }

    console.log(borrar)

  return (
    <ul>
        {listado.map(item=>(
            <Tarea key={item.id} item={item} marcarTarea={marcarTarea} borrar={borrar} />
        ))}
    </ul>
  )
}
