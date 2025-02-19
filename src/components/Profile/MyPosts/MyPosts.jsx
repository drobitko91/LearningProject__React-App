import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const  MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD-POST'});

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = {type: 'APDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
                <h3>My posts</h3>
            
                <div> 
                    new post
                    <div>
                        <textarea onChange={onPostChange} 
                            ref={newPostElement} 
                            value={props.newPostText}
                        />
                    </div>

                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
            
            <div className={s.posts}>
                {postsElement}
            </div>
            
        </div>
    )
}

export default MyPosts;