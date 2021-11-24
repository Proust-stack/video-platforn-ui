import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../../authContext/apiCalls';
import {AuthContext} from '../../authContext/AuthContext'
import './registrate.scss'


const Registrate = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch, user} = useContext(AuthContext)
    const history = useHistory()

    const handleClick = async (email, password) => {
        await signUp(email, password, dispatch)
        if (user) {
            history.push("/login")
        }
        history.push("/register")
        };
    return (
        <div className="registrate">
            <div className="top">
                <div className="wrapper">
                    <img src="./utils/pictures/logo.png" alt="logo" className="logo"/>
                    <Link to="/login" className="link">
                        <button className="loginButton">Sign In</button>
                    </Link>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                    <div className="input">
                        <input type="email" value={email} placeholder="email address" onChange={e => setEmail(e.target.value)}/>
                        <input type="password"  value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>
                        <button className="registerButton"  onClick={() => handleClick(email, password)}>Join</button>
                    </div>
                    
            </div>
        </div>
    );
};

export default Registrate;