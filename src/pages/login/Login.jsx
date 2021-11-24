import './login.scss'
import React, { useContext, useState } from 'react';
import { login } from '../../authContext/apiCalls';
import {AuthContext} from '../../authContext/AuthContext'
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch, user, error} = useContext(AuthContext)
    const history = useHistory()
    const handleLogin =  (e) => {
        e.preventDefault()
         login(email, password, dispatch)
        if (user) {
            history.push("/")
        }
        history.push("/login")
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
                    {!user && <div>{error} try again, please</div>}
                    <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" value={password}  placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleLogin}>Sign In</button>
                    <span>
                        New to Netflix? <Link to="/register">Sign up now.</Link>
                    </span>
                    <small>
                        <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;