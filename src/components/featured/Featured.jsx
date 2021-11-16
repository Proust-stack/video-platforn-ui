import  './featured.scss';
import React, { useEffect, useState } from 'react';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Featured = ({type, setGenre}) => {
    const [movie, setMovie] = useState({})
    const [isHovered, setIsHovered] = useState(false)
    useEffect(() => {
        const getRandomContent  = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/movies/random?type=${type}`,
                {
                    headers: {
                        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjFkMDM2ZTRmMDJlODUxZWNmNzljMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDIyNTk0MywiZXhwIjoxNjM0ODMwNzQzfQ.NgbZQXZ1gfMn58kovzegcICjJy70sNtTNB_Py3AAu3c"
                    }
                }
                )
                setMovie(response.data[0])
            } catch (error) {
                console.log(error);
            }   
        };
        getRandomContent ()
    }, [type])
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movies' ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src={movie.img}
                alt="cinema"
            />
            <div 
            className="info" 
            >
                <Link to={{pathname: "/watch", movie}} style={{ textDecoration: 'none' }}>  
                    <div 
                    className="smallWindow"
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovered ? 
                            <video src={movie.trailer} autoPlay={true}  muted></video> 
                            :
                            <img 
                            src={movie.imgTitle} 
                            alt="featured" 
                            />  
                        }
                    </div>
                </Link>
                <span className="descr">{movie.desc}</span>
                <div className="buttons">
                    <Link to={{pathname: "/watch", movie}} style={{ textDecoration: 'none' }}>  
                        <button className="play">
                            <PlayArrow/>
                            <span>Play</span>   
                        </button>
                    </Link>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;