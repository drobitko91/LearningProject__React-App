import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.redd.it/9ffjx57xf1p71.png'/>
            { props.message } 
            

            <div>
                <span>Like { props.like }</span>
            </div>
        </div>
    )
}

export default Post;