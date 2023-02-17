import React from 'react'
import './input.css'
import {  db } from '../../firebase'
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext'

const Input = () => {
    const {currentUser} = useAuth()
    
    

    const submitHandler = async (e) => {
        e.preventDefault();
        const task = {task: e.target.task.value, isDone: false}
        const docRef = await addDoc(collection(db, 'users', currentUser.uid, 'todos'), task)
        console.log(docRef)
        // setList(prev => [...prev, task])
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