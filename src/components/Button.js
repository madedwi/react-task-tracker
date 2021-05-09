import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
    return (<button style={{backgroundColor: color}} className="btn" onClick={onClick}>{text}</button>)
}


Button.defaultProps = {
    color: 'gray',
    text: 'Button'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button 
