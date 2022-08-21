/**
 * Ejemplo de hooks
 * useState()
 * useContext()
 */
import React, { useContext, useState } from 'react';
/**
 * 
 * @returns Componente 1 
 * dispone de un contexto que va a tener un valor que recibe desde el padre
 */

//Inicializamos un estado vacio que va a rellenarse con los datos del contexto del padre
 const miContexto = React.createContext(null);

const Componente1 = () => {
    
    const state = useContext(miContexto);
    return (
        <div>
            <h1>
                El token es : {state.token}
            </h1>
            {/**Pintamos el componente 2 */}
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>
               La sesion es : {state.sesion}; 
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token : '1234567',
        sesion : 1
    }
    //creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token: 'JWT12345',
                sesion: sesionData.sesion + 1
            }
        );
    }
  return (
    //Provider esta inyectando, pasando informacion a traves de un Contexto
    //desde un componente de orden superior hacia los componentes de orden inferior
    <miContexto.Provider value={sesionData}>
        {/*Todo lo que este aqui dentro puede leer los datos de sesionData
           Ademas, si se actualiza, los componentes de aqui, tambien lo actualizan*/}
        <h1>*** Ejemplo de useState() y useContext() ***</h1>
        <Componente1 />
        <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}