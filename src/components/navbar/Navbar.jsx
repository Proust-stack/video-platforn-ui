import  './navbar.scss';
import { AccountCircle, ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { SvgIcon } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const Navbar = () => {
    const {dispatch} = useContext(AuthContext)
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }
    return (
        <div className={isScrolled ?  "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <HomeIcon color="secondary"  fontSize="large" className="icon"/>
                    <Link to="/" className="link">
                    <span>homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span className="mainlink">series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span className="mainlink">movies</span>
                    </Link>
                    <span>new and popular</span>
                </div>
                <div className="right">
                    <Link to="/search" className="link">
                        <Search className="icon"/>
                    </Link>
                    <Notifications className="icon"/>
                    <Link to="/personal" className="link">
                        <AccountCircle className="icon"/>
                    </Link>
                    
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                    
                </div>
                </div>
        </div>
    );
};

export default Navbar;