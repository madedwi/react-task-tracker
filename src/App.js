import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Task 1',
            date: '2020-04-01', 
            reminder: true
        },
        {
            id: 2,
            title: 'Task 2',
            date: '2020-04-02', 
            reminder: true
        },
        {
            id: 3,
            title: 'Task 3',
            date: '2020-04-03', 
            reminder: true
        }
    ])

    const [showAddTask, setShowAddTask] = useState(false)

    /**
     * deleteTask
     * 
     * Delete specific task 
     *
     * @param integer id 
     */
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    /**
     * toggleTask
     * 
     * Toggle reminder value of specific task
     * 
     * @param integer id 
     */
    const toggleTask = (id) => {
        setTasks(tasks.map((task) => task.id === id 
            ? {...task, reminder: !task.reminder}
            : task ))
    }



    /**
     * onAddTask
     * 
     * Add new task
     * 
     * @param object task 
     */
    const onAddTask = (task) => {
        console.log(tasks.map((task) => task.id));
        const id = Math.max(...(tasks.map((task) => task.id))) + 1;

        task = {...task, id}

        console.log(task);

        setTasks([...tasks, task])
    }

    /**
     * toogleAddTask
     * 
     * Toggle add task form
     */
    const toggleAddTask = () => {
        setShowAddTask(!showAddTask)
    }

    return ( <div className="container" >
            <Header onAddTask={toggleAddTask} showAddTask={showAddTask} />
            {showAddTask && <AddTask onAddTask={onAddTask} />}
            {tasks.length > 0 
                ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
                : <p>No task to show</p>
            }
        </div>
    );
}

export default App;