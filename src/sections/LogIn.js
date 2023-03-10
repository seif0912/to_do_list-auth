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

    const { signup, currentUser, login, signInWithGoogle } = useAuth()

    async function handleSignup(event){
        event.preventDefault();
        if(signupPasswordRef.current.value !== signupPasswordConfirmationRef.current.value){
            return setError('passwords do not match')
        }
        try{
            setError("")
            setLoading(true)
            await signup(signupEmailRef.current.value, signupPasswordRef.current.value)
            if(currentUser){
                navigate('/')
            }
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
            if(currentUser){
                navigate('/')
            }

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
            <form className="login-input" name="signup-form" >
                {error && 
                    <h1 style={{color: 'red'}}>{error}</h1>
                }
                <input required name='signup-email' type='text' ref={signupEmailRef} placeholder="Email"/>
                <input required name='signup-password' type='password' ref={signupPasswordRef} placeholder="Password"/>
                <input required name='signup-password-confirmation' type='password' ref={signupPasswordConfirmationRef} placeholder="Password Confirmation"/>
                <button disabled={loading} onClick={handleSignup} type="submit">Sign Up</button>
                <h2>Or</h2>
                <button type="button" onClick={signInWithGoogle}>Sign up with Google</button>
                <h2>already have an account? <span onClick={() => setLoginPage(prev => !prev)}>Log In</span></h2>
            </form>
            :
            <form className="login-input" name="login-form" onSubmit={handlelogin}>
                {error && 
                    <h1 style={{color: 'darkred'}}>{error}</h1>
                }
                <input required name='login-email' type='text' ref={loginEmailRef} placeholder="Email"/>
                <input required name='login-password' type='password' ref={loginPasswordRef} placeholder="Password"/>
                <button type="submit">Log in</button>
                <h2>Or</h2>
                <button type="button" onClick={signInWithGoogle}>Log in with Google</button>
                <h2>don't have an account <span onClick={() => setLoginPage(prev => !prev)}>Sign In</span></h2>
            </form>
        }
            
        </div>
    </>
  )
}

export default LogIn