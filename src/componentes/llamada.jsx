import React, { useState } from 'react';

function Llamada() {
    const [res, setResult] = useState("");

    function aPagar() {
        const x = parseInt(document.getElementById("input").value, 10);

        let costoTotal = 0;

        if (x <= 3) {
            for (let i = 4; i <= x; i++) {
                costoTotal += 50;
            }
        } else {
            costoTotal = 100;
        }

        return `Costo: ${costoTotal} pesos`;
    }

    return (
        <>
            <h3>Elabore un componente con un campo de texto que determine la cantidad total a pagar por una llamada telefónica de acuerdo con:</h3>
            <h4>Toda llamada que dure menos de 3 minutos tiene un coste de 100 pesos. </h4>
            <h4>Cada minuto adicional a partir de los 3 primeros cuesta 50 pesos. </h4>

            <label htmlFor="name">Ingrese el tiempo de la llamada: </label>

            <input type="number" id="input" required minLength="1" maxLength="8" size="15" />

            <button onClick={() => setResult(aPagar())}>Ver total</button>

            <p>{res}</p>
        </>
    )
}

export default Llamada;
