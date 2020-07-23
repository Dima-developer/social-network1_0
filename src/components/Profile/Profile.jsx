import React from 'react';
import classes from './Profile.module.css'
import MyPostsContainer from './My posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>

            <ProfileInfo />

            <MyPostsContainer store={props.store} />
        </div>
    );
}
export default Profile;