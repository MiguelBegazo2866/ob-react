/**
 * Ejemplo de uso del componente willUnmount para componente de clase
 * y ejemplo con hooks en componente funcional
 */
import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {
    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        }
    }, [])
    
    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}