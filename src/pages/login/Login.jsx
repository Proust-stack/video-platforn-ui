import './login.scss'
import React, { useContext, useState } from 'react';
import { login } from '../../authContext/apiCalls';
import {AuthContext} from '../../authContext/AuthContext'
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch, user} = useContext(AuthContext)
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
                <Box sx={{color: 'black', marginBottom: '10px'}}>*test version </Box>
                <form>
                    <h1>Sign In</h1>
                    <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" value={password}  placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleLogin}>Sign In</button>
                    {/* <span>
                        New? <Link to="/register">Sign up now.</Link>
                    </span> */}
                    <small>
                        <Typography variant="caption" sx={{fontSize: 6, marginTop: 5}}>
                            Аутентифицируясь, вы соглашаетесь с использованием cookies для авторизации на этом сайте.
                        </Typography>
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;