import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from '../../../redax/state';
import { updateNewPostTextActionCreator } from '../../../redax/state';


const  MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // let action = {type: 'APDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
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