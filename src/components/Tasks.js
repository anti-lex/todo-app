import uuid from 'react-uuid';
import Task from './Task';
import { useState } from 'react';
function Tasks() {
    const [theTasks, settheTasks] = useState ( [
            {
                title: "Write this lab ",
                id: uuid(),
                completed: true
            },
            {
                title: "Get groceries ",
                id: uuid(),
                completed: false
            },
            {
                title: "Vaccum kitchen ",
                id: uuid(),
                completed: true
            },
        ]
    );
    const handleClearTasks = () => {
        settheTasks([]);
    }

    const handleStatusChange = (id) => {
        const updatedTasks = [...theTasks];
        updatedTasks.forEach((task)=> {
            if (task.id === id) {
                task.completed = !task.completed
            }
        })
        settheTasks(updatedTasks);
    }

    const handleTaskRemove = (id) => {
        const filteredTasks = theTasks.filter(
            (task) => task.id !== id
        );
        settheTasks(filteredTasks);
    }
    return (
        <>
            <h1>These are the tasks:</h1>
            {theTasks.map(
                (task, index) => (
                    <Task 
                        key={index}
                        task={task}
                        onStatusChange={handleStatusChange}
                        onTaskRemove = {handleTaskRemove}
                    />
                )
            )}
            <button className = "buttons2" onClick={handleClearTasks}>Clear Tasks!</button>
        </> 
    )
}

export default Tasks; 