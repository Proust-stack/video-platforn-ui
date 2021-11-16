import './login.scss'
import React, { useContext, useRef, useState } from 'react';
import { login } from '../../authContext/apiCalls';
import {AuthContext} from '../../authContext/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        login({email, password}, dispatch)
        };
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src="./utils/pictures/logo.png" alt="logo" className="logo"/>
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleLogin}>Sign In</button>
                    <span>
                        New to Netflix? <b>Sign up now.</b>
                    </span>
                    <small>
                        <p>We use CAPTCHA</p> 
                        <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;