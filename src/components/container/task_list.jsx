//rfcp
import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
//importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

const TaskListComponent = () => {

    
    const defaultTask = new Task('Cecilia Begazo', 'Default Description', false, LEVELS.NORMAL);
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida
    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('Task list component is going unmount');
        }
    }, [tasks])
    
    const changeCompleted = (id) => {
        console.log('TODO : Cambiar el estado de una tarea');
    }

    return (
        <div>
            <div>
                Your task :
            </div>
            {/*TODO : Aplicar un for/map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask} />
        </div>
    );
};

export default TaskListComponent;