import React, { Component, useEffect, useState } from 'react';
import '../styles/clock.scss';

 export class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
            <h2>
            Hora Actual:
            {this.state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{this.state.nombre} {this.state.apellidos}</h3>
            <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}

export const ClockHook = () => {

    const datosPersonalesIni = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }
    const [persona, setPersona] = useState(datosPersonalesIni);
    
    function actualizarPersona(){
        let eddad = persona.edad + 1;
        setPersona(
            {
                ...persona,
                fecha: new Date(),
                edad: eddad
            }
        );
    }

    useEffect(() => {
        setInterval(() => { actualizarPersona() 
        }, 1000);
    });

    useEffect(() => {
        return () => {
            clearInterval();
        };
    }, []);

    return (
        <div>
            <h1>***** Ejercicios Sesiones 4, 5 y 6 *****</h1>
            <h2>
                Hora Actual 
                <strong className="sangria"> 
                    {persona.fecha.getHours()}: 
                    {persona.fecha.getMinutes() >= 10 ? persona.fecha.getMinutes() : "0"+persona.fecha.getMinutes()}: 
                    {persona.fecha.getSeconds() >= 10 ? persona.fecha.getSeconds() : "0"+ persona.fecha.getSeconds()}
                </strong>
            </h2>
            <h3>{persona.nombre} {persona.apellidos}</h3>
            <h1>
                Edad : 
                <strong className="sangria">
                    { persona.edad < 10 ?  "0" + persona.edad : persona.edad }
                </strong>
            </h1>
        </div>
    );
}