//Ejemplo de uso del Hook useState
//crear un componente de tipo funcion y acceder a su estado privado
//a traves de un hook, ademas poder modificarlo

//rfc
import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;
    //valor inicial para una persona
    const personaInicial = {
        nombre : 'Cecilia Begazo',
        email : 'cgbegazo@hotmail.com'
    }
    //Queremos que valorInicial y personaInicial sean parte del estado del componente
    //, para gestionar su cambio y que se vea reflejado en la vista del componente

    //const [nombreVariable, funcionParaCambiar] = useState(valor Inicial)

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //Funcion para actualizar el estado privado que contiene el contador
    function incrementarContador(){
        //funcionParaCambiar(nuevo Valor)
        setContador(contador + 1);
    }
    /**
    *Funcion para actualizar el estado de persona en el componente 
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre : 'Miguel Begazo',
                email : 'mike_begazo@hotmail.com'
            }
        );
    }
    return (
        <div>
            <h1>***** Ejemplo de useState() *****</h1>
            <h2>Contador : {contador}</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>Nombre : {persona.nombre}</h3>
            <h3>Email : {persona.email}</h3>
            <div>
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizarPersona}>Actualizar persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;