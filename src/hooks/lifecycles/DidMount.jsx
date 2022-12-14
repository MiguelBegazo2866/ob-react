/**
 * Ejemplo de uso del metodo de ciclo de vida en componente de clase y
 * el hook de ciclo de vida en componente funcional
 */
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes del que el componente sea añadido al DOM (renderice)');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes del que el componente sea añadido al DOM (renderice)');
    }, []) //[]  indica que se ejecuta solo una vez
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}