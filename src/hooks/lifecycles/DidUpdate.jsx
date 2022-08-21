/**
 * Ejemplo de uso de DidUpdate en componente de clase 
 * y en componente funcional con hook
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
    
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia de estado');
    }

    render() {
        return (
            <div>
               <h1>DidUpdate</h1> 
            </div>
        );
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia de estado');
    }); //Se ejecutara sin limites, cada vez que haya un cambio

    return (
        <div>
           <h1>DidUpdate</h1> 
        </div>
    );
}