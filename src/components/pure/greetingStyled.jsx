import React, { useState } from 'react';
//Definiendo estilos en constantes

// ? Estilo si el usuario esta logueado
const loggedStyle = {
    color: 'forestGreen'
}

// ? Estilo si el usuario NO esta logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
    //Generamos un estado para componente, para controlar si esta o no logueado
    const [logged, setLogged] = useState(false);
    const greetingUser =  ( <p>Hola, { props.name }</p> );
    const pleaseLogin = ( <p>Please, login</p> );
    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? greetingUser : pleaseLogin }
            
            <button onClick={ () => {
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;