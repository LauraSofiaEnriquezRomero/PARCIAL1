import React, { useState } from 'react';

function Segundos() {

    function sec() {
        const x = parseInt(document.getElementById("input").value, 10);
        //1 hora = 3600 sec
        const hrs = Math.floor(x/3600);
        //lo que queda como residuo se usa para los s
        const residuoSec = x % 3600;
        //1 hora son 60 min
        const min = Math.floor(residuoSec / 60);
        //1 minuto son 60 seg
        const seg = residuoSec % 60;

        setResult(`${hrs} horas, ${min} minutos y ${seg} segundos`);
    }
    const [res, setResult] = useState();
    console.log(res);

    return (
        <>
      <h3>Elabore un componente con un campo de texto que reciba una hora expresada en segundos y la convierta en horas, minutos y segundos</h3>
      
      <label htmlFor="name">Ingrese el tiempo en segundos: </label>
      
      <input type="number" id="input" required minLength="1" maxLength="8" size="15" />
      
      <button onClick={sec}>Convertir</button>
      
      <p>{res}</p>
        </>
    )
}

export default Segundos;
