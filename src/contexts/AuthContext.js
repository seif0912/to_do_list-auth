import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    let [ currentUser, setCurrentUser ] = useState()
    let [loading, setLoading] = useState(true)


    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubcsribe = onAuthStateChanged( auth, (user) => {
            console.log('user', user)
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubcsribe
    },[])

    const value = {
        currentUser,
        signup,
        login,
    }
    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}
