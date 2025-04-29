import React from 'react'

export const Tarea = ({item,marcarTarea,borrar}) => {
let estaTachado = "";

if(item.esTachado)
{
estaTachado = "tachar";
}

const handleClick = () => {
// console.log(item.id)
borrar(item.id); 
};


return (
<div className='tarea'> 
    <p className={estaTachado}><input type="checkbox" checked={item.esTachado} onChange={()=>marcarTarea(item.id)} />{item.nombre}</p>
    <img src="public\xmark-solid.svg" onClick={handleClick}></img>
</div>

)

}