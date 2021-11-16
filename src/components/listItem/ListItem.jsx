import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import  './listItem.scss';
import { Link } from 'react-router-dom';

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/movies/find/` + item,
                {
                    headers: {
                        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjFkMDM2ZTRmMDJlODUxZWNmNzljMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDIyNTk0MywiZXhwIjoxNjM0ODMwNzQzfQ.NgbZQXZ1gfMn58kovzegcICjJy70sNtTNB_Py3AAu3c"
                    }
                }
                )
                setMovie(response.data)
            } catch (error) {
                console.log(error);
            }   
        };
        getMovie()
    }, [item])
    return (
        <Link to={{pathname: "/watch", movie}}>
            <div 
            className="listItem" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            style={{ left: isHovered && index * 225 - 50 + index * 2.5}}
            >
                <img src={movie.img} alt="listItem" />
                { isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true}  muted></video> 
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon"/>
                                <Add className="icon"/>
                                <ThumbUpAltOutlined className="icon"/>
                                <ThumbDownAltOutlined className="icon"/>
                            </div>
                            <div className="itemInfoTop">
                                <span>1h 15min</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="descr">{movie.desc}</div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
                
            </div>
        </Link>
    );
};

export default ListItem;