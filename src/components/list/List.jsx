import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import  './list.scss';
import ListItem from '../listItem/ListItem'

export default function List({list}) {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    const [clickLimit] = useState(window.innerWidth / 230)
    const listRef = useRef()
    const handlClick = (direction) => {
            let distance = listRef.current.getBoundingClientRect().x - 50
            if (direction === 'left' && slideNumber > 0 ) {
                setSlideNumber( slideNumber - 1 )
                listRef.current.style.transform = `translateX(${ 230 + distance }px)`
            }
            if (direction === 'right' && slideNumber < 10 - clickLimit) {
                setIsMoved(true)
                setSlideNumber( slideNumber + 1 )
                listRef.current.style.transform = `translateX(${- 230 + distance }px)`
            }
            
        };
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="sliderArrow left" 
                onClick={() => handlClick('left')}
                style={{display: !isMoved && 'none'}}
                />
                <div className="container" ref={listRef}>
                {list.content.map((item, i) => 
                    <ListItem key={item} index={i} item={item}/>
                )}
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handlClick('right')}/>
            </div>
        </div>
    );
};
