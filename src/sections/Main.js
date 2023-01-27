import {Todos, Input} from '../components/Index'
import '../App.css';
import {useState} from 'react'
import './Main.css'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  let [list, setList] = useState([])
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