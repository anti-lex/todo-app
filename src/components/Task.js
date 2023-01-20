function Task(props) {
    const handleStatusClick = () => {
        const id = props.task.id;
        props.onStatusChange(id)
    }

    const handleRemoveClick = () => {
        const id = props.task.id;
        props.onTaskRemove(id);
    }

    return (
        <div className = "tasks">
            <h3>{props.task.title}</h3>
            <div>Id: {props.task.id}</div>
            <div className = "status">
                Status: {props.task.completed
                ? 'Completed'
                : 'Open'
                }
            </div>
                <button class = "buttons" onClick={handleStatusClick}>Change Status</button>
                <button class = "buttons" onClick={handleRemoveClick}>Remove Task</button>
        </div>
    );
}

export default Task;