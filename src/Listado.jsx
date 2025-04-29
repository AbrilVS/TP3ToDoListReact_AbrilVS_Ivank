import React from 'react'
import { Tarea } from './Tarea'

export default function Listado({listado,setTareas}) {
    const marcarTarea = (id) =>{
        console.log({id});
        const encontrado = listado.find((element) => element.id == id);
        encontrado.esTachado=true;
        encontrado.fin=Date.now()
        
        let auxListado = [...listado];
        
        auxListado[id].esTachado = true;
        setTareas(auxListado)
    }
    
    const borrar = (id) => {
      console.log(id);
      // Encontrar el índice del elemento con el id dado
      const index = listado.findIndex((item) => item.id === id);

      if (index !== -1) {
      // Crear una copia del array listado
      let auxListado = [...listado];
      
      // Eliminar el elemento en el índice encontrado
      auxListado.splice(index, 1);
      
      // Actualizar el estado con el nuevo array
      setTareas(auxListado);
      } else {
      console.log("Elemento no encontrado");
      }
      };

    console.log(borrar)

  return (
    <ul class="list-group">
    {listado.map(item=>(
        <Tarea key={item.id} item={item} marcarTarea={marcarTarea} borrar={borrar} />
    ))}
</ul>
  
  )
}
