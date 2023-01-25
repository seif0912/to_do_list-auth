import {Todos, Input} from '../components/Index'
import '../App.css';
import {useState} from 'react'
import './Main.css'
import { useAuth } from '../contexts/AuthContext';

const Main = () => {
  let [list, setList] = useState([])
  const { currentUser } = useAuth()
  // console.log(currentUser.email)
  return (
    <div className="App">
        <div className="title">
          <h1>to do list - react & firebase</h1>
          <h3>stored in your account</h3>
          <h3 className='user-email'>{currentUser && currentUser.email}</h3>
          <button className='signout'>sign out</button>
        </div>
        <Input list={list} setList={setList}/>
        <Todos list={list} setList={setList}/>
    </div>
  );
}

export default Main;