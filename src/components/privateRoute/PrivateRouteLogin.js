import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const PrivateRoute = () => {
    // const navigate = useNavigate()
    const {currentUser} = useAuth();
    // const currentUser = false
    console.log('private route')
        return (
        !currentUser? <Outlet/> : <Navigate to='/'/>
        ) 
}

export default PrivateRoute 