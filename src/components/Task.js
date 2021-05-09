import {FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

    /**
     * onClickDelete
     * 
     * Handle click event of delete icon
     */
    const onClickDelete = () => {
        onDelete(task.id)
    }


    /**
     * onDoubleClickTask
     * 
     * Handle double click to toggle task reminder value
     */
    const onDoubleClickTask = () => {
        onToggle(task.id)
    }
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={onDoubleClickTask}>
            <h3 className="task-title" key={task.id}>{task.title} 
                <FaTimes style={{color:'red', cursor:'pointer'}} 
                onClick={onClickDelete} />
            </h3>
            <p>{task.date}</p>
        </div>
    )
}

Task.defaultProps = {
    task: {}
}

export default Task
