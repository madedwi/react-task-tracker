import Button from './Button'

const Header = ({ title, showAddTask, onAddTask }) => {

    return ( <header className="header">
            <h1> { title } </h1> 
            <Button color={showAddTask ? 'red' : 'green'}
            text={showAddTask ? 'Close' : 'Add' }
            onClick = { onAddTask }
        /> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header