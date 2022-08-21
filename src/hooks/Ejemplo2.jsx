/**
 * Ejemplo de uso de Hooks
 * useState()
 * useRef()
 * useEffect()
 */
import React, { useEffect, useRef, useState } from 'react';

const Ejemplo2 = () => {
    //creacion de 2 contadores distintos, c/u con estado diferente
    const [contador1, setContador1] = useState (0);
    const [contador2, setContador2] = useState (0);

    //creacion de una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }
    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar siempre un snippet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    useEffect (() => {
      console.log('Cambio en el estado del componente');
      console.log('Mostrando referencia a elemento del DOM');
      console.log(miRef);
    });
    
    /**
     * ? Caso 2: Ejecutar solo cuando cambia contador 1
     * cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect()
     * en caso cambie contador 2, no habra ejecucion del useEffect()
     */
    useEffect(() => {
        console.log('Cambio en el estado del contador 1');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
      
    }, [contador1]);

    /**
     * ? Caso 3: Ejecutar solo cuando cambia contador1 o contador2
     * cada vez que haya un cambio en el contador1, se ejecuta el useEffect()
     * cada vez que haya un cambio en el contador2, se ejecuta el useEffect()
     */
     useEffect(() => {
        console.log('Cambio en el estado del contador 1 o contador 2');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
      
    }, [contador1, contador2]);
    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1 : { contador1 }</h2>
            <h2>Contador 2 : { contador2 }</h2>
            {/**Elemento h4 Referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/**Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar Contador 1</button>
                <button onClick={incrementar2}>Incrementar Contador 2</button>
            </div>

        </div>
    );
}

export default Ejemplo2;