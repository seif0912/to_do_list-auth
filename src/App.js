import React, {useState} from 'react'
import Main from './sections/Main'
import LogIn from './sections/LogIn'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState({});
  console.log(user)
  return (
    <AuthProvider>
      {
        isLoggedIn?
          <Main/>
        :
          <LogIn setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
      }
      {/* <h1 onClick={() => setIsLoggedIn(prev => !prev)}>flip</h1> */}

    </AuthProvider>
  )
}

export default App
