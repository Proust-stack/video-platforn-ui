import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './registrate.scss'

const Registrate = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [username, setUsername] = useState('')
    const history = useHistory()
    const emailRef = useRef()
    const passRef = useRef()
    const usernameRef = useRef()


    const handleStart = (e) => {
        setEmail(emailRef.current.value)
        };

    const handleFinish = async (e) => {
        e.preventDefault()
        setPass(passRef.current.value)
        setUsername(usernameRef.current.value)
        try {
            await axios.post(`http://localhost:5000/api/auth/register`, {email, pass, username})
            history.push("/login")
        } catch (error) {
            console.log(error)
        }
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
                {!email ? 
                    (<div className="input">
                        <input type="email" name="email" placeholder="email address" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>Get started</button>
                    </div>
                    )
                    :
                    (<form className="input">
                    <input type="text" name="username" placeholder="username" ref={usernameRef}/>
                    <input type="password" name="password" placeholder="password" ref={passRef}/>
                    <button className="registerButton" onClick={handleFinish}>Join</button>
                    </form>
                    )
                }
            </div>
        </div>
    );
};

export default Registrate;