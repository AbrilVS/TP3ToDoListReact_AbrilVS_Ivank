//listado es un array de objetos (cada obj es una tarea)
//va a retornar la lista
import React from 'react'
import { Tarea } from './Tarea'

export default function Listado({listado}) {
    const marcarTarea = (id) =>{
        console.log(id);
        
    }
    console.log(listado)
    

  return (
    <ul>
        {listado.map(item=>(
            <Tarea item={item} marcarTarea={marcarTarea} />
        ))}
    </ul>
  )
}
