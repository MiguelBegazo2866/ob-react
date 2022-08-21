/**
 * Agrupa todos los ciclos de vida
 */
import React, { useEffect } from 'react';

export const AllCycles = () => {
    useEffect (() => {
        console.log('Componente creado');

        const intervalID = setInterval( () => {
            document.title = `${new Date()}`;
            console.log('Actualización del componente');
        }, 1000);    
        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        }
    }, []);
    
    return (
        <div>
            
        </div>
    );
}
