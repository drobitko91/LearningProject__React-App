import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from './../../redax/state';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} 
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />            
        </div>
    );
}

export default Profile;