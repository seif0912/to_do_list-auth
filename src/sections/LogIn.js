import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import './LogIn.css'
import { useAuth } from '../contexts/AuthContext'

const LogIn = () => {
    let [loginPage, setLoginPage] = useState(false);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState('')
    let signupEmailRef = useRef();
    let signupPasswordRef = useRef();
    let signupPasswordConfirmationRef = useRef();
    let loginEmailRef = useRef();
    let loginPasswordRef = useRef();
    let navigate = useNavigate()

    const { signup, currentUser, login } = useAuth()

    async function handleSignup(event){
        event.preventDefault();
        if(signupPasswordRef.current.value !== signupPasswordConfirmationRef.current.value){
            return setError('passwords do not match')
        }
        try{
            setError("")
            setLoading(true)
            await signup(signupEmailRef.current.value, signupPasswordRef.current.value)
            
            navigate('/')
        }catch(err){
            console.log(err.code)
            if(err.code === 'auth/email-already-in-use')
                setError("email already in use")
        }
        setLoading(false)
    }

    async function handlelogin(event){
        event.preventDefault()
        try{
            setError("")
            setLoading(true)
            await login(loginEmailRef.current.value, loginPasswordRef.current.value)
            
            console.log(currentUser)
            navigate('/')

        }catch(err){
            console.log(err.code)
            if(err.code === 'auth/email-already-in-use')
                setError("email already in use")
            if(err.code === 'auth/wrong-password')
                setError("wrong password")
            else
                setError(err)
        }
        setLoading(false)
    }
    
  return (
    <>
        <div className="login">
            {loginPage? 
            <form className="login-input" onSubmit={handleSignup}>
                {error && 
                    <h1>{error}</h1>
                }
                <input required name='task' type='text' ref={signupEmailRef} placeholder="Email"/>
                <input required name='task' type='text' ref={signupPasswordRef} placeholder="Password"/>
                <input required name='task' type='text' ref={signupPasswordConfirmationRef} placeholder="Password Confirmation"/>
                <button disabled={loading} type="submit">Sign Up</button>
                <h2>Or</h2>
                <button type="submit">Sign up with Google</button>
                <h2>already have an account? <span onClick={() => setLoginPage(prev => !prev)}>Log In</span></h2>
            </form>
            :
            <form className="login-input" onSubmit={handlelogin}>
                {error && 
                    <h1>{error}</h1>
                }
                <input required name='task' type='text' ref={loginEmailRef} placeholder="Email"/>
                <input required name='task' type='text' ref={loginPasswordRef} placeholder="Password"/>
                <button type="submit">Log in</button>
                <h2>Or</h2>
                <button type="submit">Log in with Google</button>
                <h2>don't have an account <span onClick={() => setLoginPage(prev => !prev)}>Sign In</span></h2>
            </form>
        }
            
        </div>
    </>
  )
}

export default LogIn