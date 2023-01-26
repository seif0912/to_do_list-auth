import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './sections/Main'
import LogIn from './sections/LogIn'
import { PrivateRoute, PrivateRouteLogin } from './components/Index'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <Router>
      <AuthProvider>
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
  )
}

export default App
