import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './sections/Main'
import LogIn from './sections/LogIn'
import { PrivateRoute, PrivateRouteLogin } from './components/Index'
import './App.css'
import { AuthProvider, useAuth } from './contexts/AuthContext'

const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState();
  // const {currentUser} = useAuth()
  console.log('hello', user)
  // if(currentUser){
  //   setUser(currentUser)
  //   setIsLoggedIn(true)
  // }
  return (
    <Router>
      <AuthProvider>
      {/* {
        isLoggedIn?
          <Main />
        :
          <LogIn setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
      } */}
      {/* <h1 onClick={() => setIsLoggedIn(prev => !prev)}>flip</h1> */}
        <Routes>
          
          <Route element={< PrivateRoute />} >
            <Route exact path='/' element={<Main/>}/>
          </Route>
          <Route element={< PrivateRouteLogin />} >
            <Route path="/sign-in" element={<LogIn/>} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>

    ////////////////////////////////////////
    // <>
    // <AuthProvider>
    //   {user === null?
    //     <LogIn/>
    //     :
    //     <Main />
    //   }

    // </AuthProvider>
    // </>
  )
}

export default App
