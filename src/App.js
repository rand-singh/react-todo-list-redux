import React from 'react'
import './App.css';
import Input from './components/Input'
import TodoItem from './components/TodoItem'

const todoList = [
  {
    item: 'clean up',
    done: false,
    id: 32534457546
  },
  {
    item: 'get beans',
    done: true,
    id: 5656643654
  }
]

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(item => (
              <TodoItem
                key={item.id}
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }

        </div>
        <Input />
      </div>
    </div>
  )
}

export default App
