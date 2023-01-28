import React from 'react'
import './todos.css'
import {Todo} from '../Index'

const Todos = ({list, setList}) => {
    let tasksComponents = list.map(task => <Todo task={task._document.data.value.mapValue.fields.task.stringValue} isDone={task._document.data.value.mapValue.fields.isDone.booleanValue} key={task.id} id={task.id} list={list} setList={setList}/>)
  return (
    <div className='todos'>
      {tasksComponents}
    </div>
  )
}

export default Todos