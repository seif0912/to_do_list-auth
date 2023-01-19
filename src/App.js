import React, {useState} from 'react'
import Main from './sections/Main'
import LogIn from './sections/LogIn'
import './App.css'

const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {
        isLoggedIn?
        <Main/>
        :
        <LogIn/>
      }
      <h1 onClick={() => setIsLoggedIn(prev => !prev)}>flip</h1>
    </>
  )
}

export default App
