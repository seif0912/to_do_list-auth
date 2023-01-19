import React, {useState} from 'react'
import './LogIn.css'

const LogIn = () => {

    let [login, setLogin] = useState(false);
  return (
    <>
        <div className="login">
            {login? 
            <form className="webflow-style-input">
                <input required name='task' type='text' placeholder="Email"/>
                <input required name='task' type='text' placeholder="Password"/>
                <input required name='task' type='text' placeholder="reenter password"/>
                <button type="submit">Sign In</button>
                <h2>Or</h2>
                <button type="submit">Sign in with Google</button>
                <h2>already have an account? <span onClick={() => setLogin(prev => !prev)}>Log In</span></h2>
            </form>
            :
            <form className="webflow-style-input">
                <input required name='task' type='text' placeholder="Email"/>
                <input required name='task' type='text' placeholder="Password"/>
                <button type="submit">Log in</button>
                <h2>Or</h2>
                <button type="submit">Log in with Google</button>
                <h2>don't have an account <span onClick={() => setLogin(prev => !prev)}>Sign In</span></h2>
            </form>
        }
            
        </div>
    </>
  )
}

export default LogIn