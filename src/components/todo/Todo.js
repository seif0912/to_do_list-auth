import React from 'react'
import './todo.css'
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import { useAuth } from '../../contexts/AuthContext';
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import {  db } from '../../firebase'

const Todo = (props) => {
    let {currentUser} = useAuth()

    const checkHandler = async() => {
        await updateDoc(doc(db, "users", currentUser.uid, "todos",props.id), {isDone: !props.isDone})
    }

    const trashHandler = async() => {
        // console.log(props.id)
        await deleteDoc(doc(db, "users", currentUser.uid, "todos",props.id));
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