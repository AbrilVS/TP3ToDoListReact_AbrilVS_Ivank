import React from 'react'

export const Tarea = ({item,marcarTarea}) => {
    let estaTachado = "";
    //let checked = "";

    if(item.esTachado)
    {
        //checked = "checked";
        estaTachado = "tachar";
    }
  return (
    //<p class="${estaTachado}"><input type="checkbox" ${checked} onclick="Marcar(${obj.id})">${obj.titulo}</p>
    <p class={estaTachado}><input type="checkbox" onClick={()=>marcarTarea(item.id)}>{item.nombre}</input></p>
  )
}
