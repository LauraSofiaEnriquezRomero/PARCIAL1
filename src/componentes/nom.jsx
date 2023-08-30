import React, { useState } from 'react';

function Nom() {
  const [hi, setHi] = useState("");

  function dia(nombre, hora) {
    let hi = "";

    //hora a entero
    const horaNum = parseInt(hora, 10);

    if (horaNum >= 0 && horaNum < 12) {
        //de las 12 hasta las 11am son dias
        hi = `Buenos días, ${nombre}`;
    } else if (horaNum >= 12 && horaNum < 20) {
        //de las 12 hasta las son tardes
        hi = `Buenas tardes, ${nombre}`;
    } else {
        //el resto son noches
        hi = `Buenas noches, ${nombre}`;
    }
    return hi;
  }

  function pasar() {
    const nombre = document.getElementById("nombre").value;
    const hora = document.getElementById("hora").value;

    const hi = dia(nombre, hora);
    setHi(hi);
  }

  return (
    <>
      <br></br>
      <br></br>
      <h3>Elabore un componente que contenga dos campos de texto en los cuales pida su nombre y la hora.</h3>
      <h3>Una vez usted los escriba, responda en pantalla un mensaje ‘Buenos días, NOMBRE’, ‘Buenos tardes, NOMBRE’, ‘Buenas noches, NOMBRE’ según la hora que usted ingresó. </h3>

      <label htmlFor="nombre">Ingrese su nombre: </label>
      <input type="text" id="nombre" required minLength="1" maxLength="8" size="15" />
      <br></br>
      <label htmlFor="hora">Ingrese la hora en formato militar (solo enteros): </label>
      <input type="text" id="hora" required minLength="1" maxLength="8" size="15" />
      <button onClick={pasar}>Ingresar</button>

      <p>{hi}</p>
    </>
  )
}

export default Nom;
