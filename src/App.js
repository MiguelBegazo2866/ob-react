import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import { ClockHook } from './EjerciciosExamen/EjerciciosSesiones456';
import { Clock } from './EjerciciosExamen/EjerciciosSesiones456';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Usando Hooks
        </p>
        <Ejemplo1 />
        <Ejemplo2 />
        <MiComponenteConContexto />
        <Ejemplo4 nombre="Giancarlo">
            {/**Todo lo que esta aqui, estratado como props.children */}
            <h3>Mostrando el contenido del props.children</h3>
        </Ejemplo4>
        <TaskListComponent />
        <GreetingStyled name="Miguel Begazo"/>
        <ClockHook />
      </header>
    </div>
  );
}

export default App;