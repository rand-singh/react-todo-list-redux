import React from 'react'
import './TodoItem.css'
import CheckBox from '@material-ui/core/Checkbox'

const TodoItem = ({ name, done, id }) => {
    const handleClick = () => {
        console.log('handle click checkbox')
    }
    return (
        <div className="todoItem">
            <CheckBox
                checked={done}
                color="primary"
                onChange={handleClick}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{name}</p>                       
        </div>
    )
}

export default TodoItem
