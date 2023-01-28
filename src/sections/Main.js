import {Todos, Input} from '../components/Index'
import '../App.css';
import {useEffect, useState} from 'react'
import './Main.css'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from "firebase/firestore";
import {  db } from '../firebase'

const Main = () => {
  let [list, setList] = useState([])
  const { currentUser, logout } = useAuth()
  let navigate = useNavigate()

  async function handleLogout(){
    try {
      await logout()
      navigate('/sign-in')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    function fetchData(){
      let docsRef = collection(db, "users", currentUser.uid, "todos")
      let docs = onSnapshot(docsRef, (doc)=>{
        setList(doc.docs)
      })
      return docs
    }
    return fetchData()
  },[])
  
  return (
    <div className="App">
        <div className="title">
          <h1>to do list - react & firebase</h1>
          <h3>stored in your account</h3>
          <h3 className='user-email'>{currentUser.email}</h3>
          <button onClick={handleLogout} className='signout'>sign out</button>
        </div>
        <Input list={list} setList={setList}/>
        <Todos list={list} setList={setList}/>
    </div>
  );
}

export default Main;