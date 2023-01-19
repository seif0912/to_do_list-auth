import React from 'react'
import './input.css'

const Input = ({list, setList}) => {
    const idGenerator = (list) =>{
        if (list.length === 0)
            return 0
        let max = list[0].id;
        for(let i=1; i<list.length; i++)
            max = max < list[i].id && list[i].id
        return (max + 1)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let id = idGenerator(list);
        const task = {task: e.target.task.value, isDone: false, id}
        setList(prev => [...prev, task])
        e.target.task.value = ''
    }
    return (
        <form onSubmit={submitHandler} className="webflow-style-input">
            <input required name='task' type='text' placeholder="What will you do?"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Input