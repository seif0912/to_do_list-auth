import React from 'react'
import './todo.css'
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

const Todo = (props) => {
    const getTaskIndex = (list, id) => {
        // console.log(list)
        for(let i=0; i<list.length; i++){
            if (list[i].id === id){
                // console.log(i)
                return i
            }
        }
    }
    function removeLocalTask(id) {
        let tasksL;
        if (localStorage.getItem('tasksL') === null) {
            tasksL = [];
        } else {
            tasksL = JSON.parse(localStorage.getItem('tasksL'));
        }
        let taskIndex = getTaskIndex(tasksL, id)
        // console.log(taskIndex)
        tasksL.splice(taskIndex, 1)
        localStorage.setItem("tasksL", JSON.stringify(tasksL))
    }
    const checkHandler = () => {
        const temp = [...props.list]
        let taskIndex = getTaskIndex(temp, props.id)
        temp[taskIndex].isDone = !temp[taskIndex].isDone
        
        let tasksL;
        if (localStorage.getItem('tasksL') === null) {
            tasksL = [];
        } else {
            tasksL = JSON.parse(localStorage.getItem('tasksL'));
        }
        let taskLocalIndex = getTaskIndex(tasksL, props.id)
        // console.log(taskIndex)
        tasksL[taskLocalIndex].isDone = !tasksL[taskLocalIndex].isDone
        localStorage.setItem("tasksL", JSON.stringify(tasksL))

        props.setList( temp );

    }
    const trashHandler = () => {
        const temp = [...props.list]
        let taskIndex = getTaskIndex(temp, props.id)
        temp.splice(taskIndex, 1)
        props.setList( temp );
        removeLocalTask(props.id)
    }
    return (
        <div className={`todo ${props.isDone ? 'done' : ''}`}>
        {/* <div className={`todo done`}> */}
            <p>{props.task}</p>
            <div className="controls">
                <div className="check" onClick={checkHandler}>
                    {props.isDone ? <AiFillCheckCircle/> :<AiOutlineCheckCircle/>}
                </div>
                <div className="trash" onClick={trashHandler}>
                    <FaTrash/>
                </div>
            </div>
        </div>
    )
}

export default Todo