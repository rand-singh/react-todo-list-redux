import React from 'react'
import './TodoItem.css'
import CheckBox from '@material-ui/core/Checkbox'

import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'

const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        console.log('handle click checkbox')
        dispatch(setCheck(id))
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
