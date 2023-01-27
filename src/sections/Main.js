import {Todos, Input} from '../components/Index'
import '../App.css';
import {useEffect, useState} from 'react'
import './Main.css'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, onSnapshot } from "firebase/firestore";
// import { useAuth } from '../../contexts/AuthContext'
import {  db } from '../firebase'
import { async } from '@firebase/util';

const Main = () => {
  // let [ todos, setTodos ] = useState([])
  let [list, setList] = useState([])
  let [loading, setLoading] = useState(false)
  const { currentUser, logout } = useAuth()
  let [error, setError] = useState('')
  let navigate = useNavigate()
  async function handleLogout(){
    setError('')
    try {
      await logout()
      navigate('/sign-in')
    } catch (error) {
      setError(error)
      console.error(error)
    }
  }
  console.log('hello world!')
  let v

  async function getData(){
    let docsRef = collection(db, "users", currentUser.uid, "todos")
    console.log('docs ref', docsRef)
    let docs = await getDocs(docsRef)
    console.log('list', docs.docs)
    setList(docs.docs)
    
  }
  useEffect(()=>{
    async function fetchData(){
      let docsRef = collection(db, "users", currentUser.uid, "todos")
      console.log('docs ref', docsRef)
      let docs = onSnapshot(docsRef, (doc)=>{
        console.log(doc)
        setList(doc.docs)
      })
      // console.log('list', docs.docs)
      return docs
    }
    fetchData()
  },[])
  // getData()
  console.log(v)
  // .then(snapshot => {
  //   // console.log('docs', docs.docs)
  //   // setList(docs.docs)
  //   snapshot.docs.forEach(doc=>{
  //     setList(prev=> [...prev, doc.data()])
  //   })

  // })
  // .catch(err=> console.error(err))
  // getTodos()
  // ,[])
  // console.log('tasks', tasks)
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