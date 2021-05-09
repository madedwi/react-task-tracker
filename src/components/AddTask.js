import {useState} from 'react'

const AddTask = ({onAddTask}) => {

    const [title, setTitle] = useState('')

    const [date, setDate] = useState('')

    const [reminder, setReminder] = useState(false)

    /**
     * onChangeTitle
     * 
     * Handle onchange of title input
     * 
     * @param object e 
     */
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    /**
     * onChangeDate
     * 
     * Handle onchange of date input
     * 
     * @param object e 
     */
    const onChangeDate = (e) => {
        setDate(e.target.value)
    }

    /**
     * onChangeReminder
     * 
     * Handle onchange of reminder checkbox
     * 
     * @param object e 
     */
    const onChangeReminder = (e) => {
        setReminder(e.currentTarget.checked)
    }

    /**
     * onSubmitTask
     * 
     * Handle onsubmit of #task-form form
     * 
     * @param object e 
     */
    const onSubmitTask = (e) => {
        e.preventDefault()

        if(title.length === 0){
            alert("Title is required")
            return false
        }

        const newTask = {title, date, reminder}

        console.log(newTask)

        onAddTask(newTask)

        setTitle('')
        setDate('')
        setReminder(false)
    }

    return (
        <form id="task-form" onSubmit={onSubmitTask}>
            <div className="form-control">
                <label htmlFor="title">Task</label>
                <input type="text" name="title" id="title" value={title} placeholder="Add task" onChange={onChangeTitle} />
            </div>
            <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" value={date} placeholder="Add date" onChange={onChangeDate} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input type="checkbox" name="reminder" id="reminder" checked={reminder} value={reminder} onChange={onChangeReminder} />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
