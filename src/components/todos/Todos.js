import React from 'react'
import './todos.css'
import {Todo} from '../Index'

const Todos = ({list, setList}) => {
  let tasks = list.map(task=> <Todo task={task.task} isDone={task.isDone} key={task.id} id={task.id} list={list} setList={setList}/>)
  return (
    <div className='todos'>
      {tasks}
    </div>
  )
}

export default Todos