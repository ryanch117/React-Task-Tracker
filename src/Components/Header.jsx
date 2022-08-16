import React from 'react' //this is not needed anymore :)
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button color ={showAdd ? 'red':'green'} text = {showAdd ? 'Close':'Add'} onClick = {onAdd}/*you can pass the function*//>
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
