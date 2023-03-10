import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const PrivateRoute = () => {
    const {currentUser} = useAuth();
        return (
        currentUser? <Outlet/> : <Navigate to='/sign-in'/>
        ) 
}

export default PrivateRoute 