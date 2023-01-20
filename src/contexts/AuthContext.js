import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    let [ currentUser, setCurrentUser ] = useState()

    const auth = getAuth();

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubcsribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
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
            { children }
        </AuthContext.Provider>
    )
}
