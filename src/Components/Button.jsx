import PropTypes from 'prop-types'

const Button = ({color, text, onClick/*the function passed from header*/}) => {
  return (
    <button 
    style={{backgroundColor: color}} 
    className = 'btn' 
    onClick = {onClick}>
        {text}
    </button>
  )
}

Button.defaultProps ={
    color:'steelblue' //sets default values, in this case only the colour
}
Button.propTypes = {
    text: PropTypes.string,//proptypes makes sure you pass in the right datatype
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
