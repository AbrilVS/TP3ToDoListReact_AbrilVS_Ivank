import React, { useState } from 'react';

export const Boton = ({ listado }) => {
  const [maxNom, setMaxNom] = useState("");
//   const [minNum, setMinNum] = useState(999999999);

  const Calc = () => {
    let nuevoMin = 999999999;
    let nuevoMax = "";

    listado.map(item => {
      if (item.esTachado) {
        let resta = item.fin - item.inicio;
        if (resta < nuevoMin) {
          nuevoMin = resta;
          nuevoMax = item.nombre;
        }
      }
    });

    // setMinNum(nuevoMin);
    setMaxNom(nuevoMax);
  };

  return (
    <div>
      <button  onClick={Calc} type="button" class="btn btn-info">Mostrar tarea más rápida</button>
      <p>{maxNom}</p>
    </div>
  );
};
