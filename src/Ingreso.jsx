import React, {useState} from 'react'

export const Ingreso = ({setTareas,tareas}) => {
    const [contador,setContador] = useState(0);
    //funcion para agregar la tarea a la lista
    const mandarTarea=()=>{
      setContador(contador+1);
      //1 obtener valor del input
        const nombre = document.getElementById('name').value;
        if(nombre === ""){
          alert("Ingrese una tarea")
        }
        else{
           //2 crea el obj
           const objnuevo = {
            id:contador,
            nombre: nombre,
            inicio: Date.now(),
            fin: null,
            esTachado:false
        };
         
        //3 agregar el obj al listado
        let aux = [...tareas,objnuevo];
        setTareas(aux)  
        
        //4 limpiar el form 
        document.getElementById('name').value="";
        }
       
    }

  return (
    <div>
        <div className="row">
          <div className="col">
            <input type="text"  id="name" className="form-control" placeholder="Tarea" aria-label="Tarea"/>
        </div>
          <div className="col">
          <button type="button" onClick={mandarTarea} class="btn btn-primary">Agregar</button>
          </div>
</div>
    </div>

    
  )
}
