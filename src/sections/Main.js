import {Todos, Input} from '../components/Index'
import '../App.css';
import {useState} from 'react'
import './Main.css'

const Main = () => {
  let [list, setList] = useState([])

  return (
    <div className="App">
        <div className="title">
          <h1>to do list - react & firebase</h1>
          <h3>stored in your account</h3>
        </div>
        <Input list={list} setList={setList}/>
        <Todos list={list} setList={setList}/>
    </div>
  );
}

export default Main;