import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './watch.scss'

const Watch = () => {
    const location = useLocation()
    const movieSrc = location.movie.video
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>
            <video 
            src={movieSrc}
            className="video"
            autoPlay
            progress="true"
            controls
            
            ></video>
        </div>
    );
};

export default Watch;