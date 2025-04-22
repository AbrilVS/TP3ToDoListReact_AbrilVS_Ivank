import React, {useState} from 'react'

export const Ingreso = ({setTareas,tareas}) => {
    const [contador,setContador] = useState(0);
    const mandarTarea=()=>{
        //crea el objeto
        
        setContador(contador+1);
        const nombre = document.getElementById('name').value;
        const objnuevo = {
            id:contador,
            nombre: nombre,
            inicio: Date.now(),
            fin: null,
            esTachado:false
        };

        let aux = [...tareas,objnuevo];
        setTareas(aux)
    }

  return (
    <div>
        <input type="text" id="name"></input>
        <button onClick={mandarTarea}>Agregar</button>
    </div>
  )
}
