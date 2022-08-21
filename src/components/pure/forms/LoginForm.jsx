/**
 * Componente dque va a contener un formulario para autenticacion de ususario
 */
import React, { useState } from 'react';

const LoginForm = () => {
    const initialCredentials = [
        {
            user: '',
            password: '' 
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);
    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;