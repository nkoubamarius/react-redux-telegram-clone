import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import './Login.css'

function Login() {
    const signIn =()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__telegram">
                {/*<img src={`${process.env.PUBLIC_URL}logo.png`}/>*/}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1000px-Telegram_2019_Logo.svg.png" />
                <h1>Telegram</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
