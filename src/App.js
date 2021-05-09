import {useState, useEffect} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

    const [tasks, setTasks] = useState([])

    const [showAddTask, setShowAddTask] = useState(false)

    useEffect(() => {
        const getTasks = async () => {
            const tasks = await fetchTasks()

            setTasks(tasks)
        }

        getTasks()


    }, [])

    /**
     * fetchTasks
     * 
     * Get tasks data from mock server
     * 
     * @returns array tasks
     */
    const fetchTasks = async () => {
        const req = await fetch('http://localhost:3001/tasks')

        const tasks = await req.json()

        return tasks
    }

    /**
     * fetchTask
     * 
     * Get specific task data from mock server
     * 
     * @param integer id 
     * @returns object task
     */
    const fetchTask = async (id) => {
        const req = await fetch(`http://localhost:3001/tasks/${id}`)

        const task = await req.json()

        return task
    }

    /**
     * deleteTask
     * 
     * Delete specific task 
     *
     * @param integer id 
     */
    const deleteTask = async (id) => {

        await fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'DELETE'
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    /**
     * toggleTask
     * 
     * Toggle reminder value of specific task
     * 
     * @param integer id 
     */
    const toggleTask = async (id) => {

        const task = await fetchTask(id)

        const updTask = {...task, reminder: !task.reminder}

        const req = await fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        setTasks(tasks.map((task) => task.id === id 
            ? updTask
            : task ))
    }



    /**
     * onAddTask
     * 
     * Add new task
     * 
     * @param object task 
     */
    const onAddTask = async (task) => {
        // console.log(tasks.map((task) => task.id));
        // const id = Math.max(...(tasks.map((task) => task.id))) + 1;

        // task = {...task, id}

        const req = await fetch(`http://localhost:3001/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const newTask = await req.json()

        setTasks([...tasks, newTask])
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