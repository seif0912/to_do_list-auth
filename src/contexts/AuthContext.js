import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, setDoc } from "firebase/firestore";


import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    let [ currentUser, setCurrentUser ] = useState()
    let [loading, setLoading] = useState(true)


    function signup(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        .then((user)=>{
            setDoc(doc(db, "users", user.user.uid), {email: user.user.email});
        }).catch(err=> console.error(err))
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return auth.signOut()
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
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}
